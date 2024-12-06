// nodes.js (main export file)
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { NODE_TYPES } from './nodes/nodeTypes';

const createNodeTypes = () => ({
    [NODE_TYPES.CUSTOM_INPUT.type]: InputNode,
    [NODE_TYPES.LLM.type]: LLMNode,
    [NODE_TYPES.CUSTOM_OUTPUT.type]: OutputNode,
    [NODE_TYPES.TEXT.type]: TextNode
});

export const nodeTypes = createNodeTypes();
export { NODE_TYPES };
export { InputNode, LLMNode, OutputNode, TextNode };