// nodes.js (main export file)
import { InputNode } from './nodes/inputNode';
import { LLMNode } from './nodes/llmNode';
import { OutputNode } from './nodes/outputNode';
import { TextNode } from './nodes/textNode';
import { NODE_TYPES } from './nodes/nodeTypes';
import { MessageNode } from './nodes/messageNode';
import { WebScraperNode } from './nodes/webScraperNode';
import { ImageProcessingNode } from './nodes/imageProcessingNode';
import { NotificationNode } from './nodes/notificationNode';
import { DataTransformNode } from './nodes/dataTransformNode';

const createNodeTypes = () => ({
    [NODE_TYPES.CUSTOM_INPUT.type]: InputNode,
    [NODE_TYPES.LLM.type]: LLMNode,
    [NODE_TYPES.CUSTOM_OUTPUT.type]: OutputNode,
    [NODE_TYPES.TEXT.type]: TextNode,
    [NODE_TYPES.MESSAGE.type]: MessageNode,
    [NODE_TYPES.WEB_SCRAPER.type]: WebScraperNode,
    [NODE_TYPES.IMAGE_PROCESSING.type]: ImageProcessingNode,
    [NODE_TYPES.NOTIFICATION.type]: NotificationNode,
    [NODE_TYPES.DATA_TRANSFORM.type]: DataTransformNode
});

export const nodeTypes = createNodeTypes();
export { NODE_TYPES };
export {
    InputNode,
    LLMNode,
    OutputNode,
    TextNode,
    MessageNode,
    WebScraperNode,
    ImageProcessingNode,
    NotificationNode,
    DataTransformNode,
};