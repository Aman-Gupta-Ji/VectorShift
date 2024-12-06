// ui.js
import { useState, useRef, useCallback } from 'react';
import ReactFlow, { Controls, Background, MiniMap } from 'reactflow';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';
import { nodeTypes, validNodeTypes } from './nodes/nodes';

import 'reactflow/dist/style.css';

const gridSize = 20;
const proOptions = { hideAttribution: true };

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
      const baseData = {
        id: nodeID,
        nodeType: type,
        onChange: (key, value) => {
          console.log(`Node ${nodeID} changed ${key} to ${value}`);
        }
      };

      switch(type) {
        case 'customInput':
          return {
            ...baseData,
            inputName: `input_${nodeID}`,
            inputType: 'Text'
          };
        case 'customOutput':
          return {
            ...baseData,
            outputName: `output_${nodeID}`,
            outputType: 'Text'
          };
        case 'text':
          return {
            ...baseData,
            text: '{{input}}'
          };
        default:
          return baseData;
      }
    };

    const onDrop = useCallback(
        (event) => {
          event.preventDefault();
    
          const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
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
        <>
        <div ref={reactFlowWrapper} style={{width: '100wv', height: '70vh'}}>
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
        </>
    );
};