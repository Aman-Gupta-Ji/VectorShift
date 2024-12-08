// store.js
import { create } from "zustand";
import {
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
    MarkerType,
} from 'reactflow';

export const useStore = create((set, get) => ({
    nodes: [],
    edges: [],
    nodeIDs: {},
    
    getNodeID: (type) => {
        const newIDs = {...get().nodeIDs};
        if (newIDs[type] === undefined) {
            newIDs[type] = 0;
        }
        newIDs[type] += 1;
        set({nodeIDs: newIDs});
        return `${type}-${newIDs[type]}`;
    },

    addNode: (node) => {
        set({
            nodes: [...get().nodes, node]
        });
    },

    onNodesChange: (changes) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },

    onEdgesChange: (changes) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },

    onConnect: (connection) => {
        // Get existing edges
        const edges = get().edges;

        // Check if target handle already has a connection
        const hasTargetConnection = edges.some(edge => 
            edge.target === connection.target && 
            edge.targetHandle === connection.targetHandle
        );

        if (hasTargetConnection) {
            console.warn('This input already has a connection');
            return;
        }

        // Check if it's a self-connection
        if (connection.source === connection.target) {
            console.warn('Cannot connect a node to itself');
            return;
        }

        // Add the edge
        set({
            edges: addEdge({
                ...connection,
                type: 'smoothstep',
                animated: true,
                markerEnd: {
                    type: MarkerType.Arrow,
                    height: 20,
                    width: 20
                }
            }, edges),
        });
    },

    updateNodeField: (nodeId, fieldName, fieldValue) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === nodeId) {
                    node.data = { ...node.data, [fieldName]: fieldValue };
                }
                return node;
            }),
        });
    },
}));