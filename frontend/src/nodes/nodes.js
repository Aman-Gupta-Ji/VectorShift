// nodes.js
import { BaseNode } from './baseNode';
import PropTypes from 'prop-types';

export const NODE_TYPES = {
    CUSTOM_INPUT: { 
        type: 'customInput', 
        label: 'Input',
        defaultData: {
            inputType: 'Text',
            inputName: ''  // Will be set dynamically
        }
    },
    LLM: { 
        type: 'llm', 
        label: 'LLM',
        defaultData: {}
    },
    CUSTOM_OUTPUT: { 
        type: 'customOutput', 
        label: 'Output',
        defaultData: {
            outputType: 'Text',
            outputName: ''  // Will be set dynamically
        }
    },
    TEXT: { 
        type: 'text', 
        label: 'Text',
        defaultData: {
            text: '{{input}}'
        }
    }
};

// Input Node
export const InputNode = ({ id, data = {} }) => {
    const initialState = {
        name: data?.inputName || id.replace('customInput-', 'input_'),
        type: data?.inputType || 'Text'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Input"
            initialState={initialState}
            outputs={[{ id: 'value' }]}
        >
            {({ state, handleChange }) => (
                <>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={state.name ?? ''} 
                            onChange={handleChange('name')} 
                        />
                    </label>
                    <label>
                        Type:
                        <select 
                            value={state.type ?? 'Text'} 
                            onChange={handleChange('type')}
                        >
                            <option value="Text">Text</option>
                            <option value="File">File</option>
                        </select>
                    </label>
                </>
            )}
        </BaseNode>
    );
};

InputNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        inputName: PropTypes.string,
        inputType: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};

// LLM Node
export const LLMNode = ({ id, data = {} }) => {
    return (
        <BaseNode
            id={id}
            data={data}
            label="LLM"
            inputs={[
                { id: 'system', style: { top: '33.33%' } },
                { id: 'prompt', style: { top: '66.66%' } }
            ]}
            outputs={[{ id: 'response' }]}
        >
            {() => (
                <span>This is a LLM.</span>
            )}
        </BaseNode>
    );
};

LLMNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};

// Output Node
export const OutputNode = ({ id, data = {} }) => {
    const initialState = {
        name: data?.outputName || id.replace('customOutput-', 'output_'),
        type: data?.outputType || 'Text'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Output"
            initialState={initialState}
            inputs={[{ id: 'value' }]}
        >
            {({ state, handleChange }) => (
                <>
                    <label>
                        Name:
                        <input 
                            type="text" 
                            value={state.name ?? ''} 
                            onChange={handleChange('name')} 
                        />
                    </label>
                    <label>
                        Type:
                        <select 
                            value={state.type ?? 'Text'} 
                            onChange={handleChange('type')}
                        >
                            <option value="Text">Text</option>
                            <option value="File">Image</option>
                        </select>
                    </label>
                </>
            )}
        </BaseNode>
    );
};

OutputNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        outputName: PropTypes.string,
        outputType: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};

// Text Node
export const TextNode = ({ id, data = {} }) => {
    const initialState = {
        text: data?.text || '{{input}}'
    };

    return (
        <BaseNode
            id={id}
            data={data}
            label="Text"
            initialState={initialState}
            outputs={[{ id: 'output' }]}
        >
            {({ state, handleChange }) => (
                <label>
                    Text:
                    <input 
                        type="text" 
                        value={state.text ?? ''} 
                        onChange={handleChange('text')} 
                    />
                </label>
            )}
        </BaseNode>
    );
};

TextNode.propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.shape({
        text: PropTypes.string,
        nodeType: PropTypes.string,
        onChange: PropTypes.func
    })
};

// Create and export nodeTypes mapping
const createNodeTypes = () => {
    const nodeMapping = {
        [NODE_TYPES.CUSTOM_INPUT.type]: InputNode,
        [NODE_TYPES.LLM.type]: LLMNode,
        [NODE_TYPES.CUSTOM_OUTPUT.type]: OutputNode,
        [NODE_TYPES.TEXT.type]: TextNode
    };
    return nodeMapping;
};

export const nodeTypes = createNodeTypes();