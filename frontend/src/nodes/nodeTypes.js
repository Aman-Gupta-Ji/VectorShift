// nodeTypes.js
export const NODE_TYPES = {
    CUSTOM_INPUT: { 
        type: 'customInput', 
        label: 'Input',
        defaultData: {
            inputType: 'Text',
            inputName: ''
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
            outputName: ''
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