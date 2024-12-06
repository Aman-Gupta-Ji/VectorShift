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
    },
    MESSAGE: {
        type: 'message',
        label: 'Message',
        defaultData: {
            platform: 'email',
            template: '',
            recipients: []
        }
    },
    WEB_SCRAPER: {
        type: 'webScraper',
        label: 'Web Scraper',
        defaultData: {
            selector: '',
            dataType: 'text',
            pagination: false
        }
    },
    IMAGE_PROCESSING: {
        type: 'imageProcessing',
        label: 'Image Processing',
        defaultData: {
            operation: 'resize',
            quality: 100,
            format: 'jpeg'
        }
    },
    NOTIFICATION: {
        type: 'notification',
        label: 'Notification',
        defaultData: {
            template: 'default',
            priority: 'normal',
            title: ''
        }
    },
    DATA_TRANSFORM: {
        type: 'dataTransform',
        label: 'Data Transform',
        defaultData: {
            inputFormat: 'JSON',
            outputFormat: 'CSV',
            schema: ''
        }
    }
};