// ui.js
import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { nodeTypes, NODE_TYPES } from './nodes';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

// Create array of valid types for validation
const validNodeTypes = Object.values(NODE_TYPES).map(({type}) => type);

const selector = (state) => ({
    nodes: state.nodes,
    edges: state.edges,
    getNodeID: state.getNodeID,
    addNode: state.addNode,
    onNodesChange: state.onNodesChange,
    onEdgesChange: state.onEdgesChange,
    onConnect: state.onConnect,
});

export const PipelineUI = () => {
    const reactFlowWrapper = useRef(null);
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const {
        nodes: flowNodes,
        edges,
        getNodeID,
        addNode,
        onNodesChange,
        onEdgesChange,
        onConnect
    } = useStore(selector, shallow);

    const getInitNodeData = (nodeID, type) => {
        // Find the node type configuration
        const nodeTypeConfig = Object.values(NODE_TYPES).find(t => t.type === type);
        
        const baseData = {
            id: nodeID,
            nodeType: type,
            onChange: (key, value) => {
                console.log(`Node ${nodeID} changed ${key} to ${value}`);
            }
        };

        if (!nodeTypeConfig) return baseData;

        // Return merged data with defaults and dynamic values
        return {
            ...baseData,
            ...nodeTypeConfig.defaultData,
            ...(type === NODE_TYPES.CUSTOM_INPUT.type ? { inputName: `input_${nodeID}` } : {}),
            ...(type === NODE_TYPES.CUSTOM_OUTPUT.type ? { outputName: `output_${nodeID}` } : {})
        };
    };

    const onDrop = useCallback(
        (event) => {
            event.preventDefault();
    
            if (!reactFlowInstance) {
                console.warn('Flow instance not initialized');
                return;
            }

            const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
            if (!reactFlowBounds) {
                console.warn('Flow bounds not found');
                return;
            }

            const appData = event?.dataTransfer?.getData('application/reactflow');
            if (!appData) return;

            try {
                const { nodeType } = JSON.parse(appData);
                
                if (!nodeType || !validNodeTypes.includes(nodeType)) {
                    console.warn(`Invalid node type: ${nodeType}`);
                    return;
                }
        
                const position = reactFlowInstance.project({
                    x: event.clientX - reactFlowBounds.left,
                    y: event.clientY - reactFlowBounds.top,
                });

                const nodeID = getNodeID(nodeType);
                const newNode = {
                    id: nodeID,
                    type: nodeType,
                    position,
                    data: getInitNodeData(nodeID, nodeType),
                };
        
                addNode(newNode);
            } catch (error) {
                console.error('Error adding node:', error);
            }
        },
        [reactFlowInstance, getNodeID, addNode]
    );

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }, []);

    return (
        <div 
            ref={reactFlowWrapper} 
            style={{
                width: '100%', 
                height: '70vh',
                backgroundColor: '#f8f9fa'
            }}
        >
            <ReactFlow
                nodes={flowNodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onDrop={onDrop}
                onDragOver={onDragOver}
                onInit={setReactFlowInstance}
                nodeTypes={nodeTypes}
                proOptions={proOptions}
                snapGrid={[gridSize, gridSize]}
                connectionLineType='smoothstep'
                fitView
            >
                <Background color="#aaa" gap={gridSize} />
                <Controls />
                <MiniMap />
            </ReactFlow>
        </div>
    );
};