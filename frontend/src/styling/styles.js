export const styles = {
    // App Container
    app: {
        container: "min-h-screen bg-gray-50",
        wrapper: "container mx-auto py-4",
    },

    // Toolbar
    toolbar: {
        container: "bg-white border-b border-gray-200 shadow-sm",
        wrapper: "p-4",
        title: "text-lg font-semibold text-gray-700 mb-4",
        nodesContainer: "flex flex-wrap gap-3",
    },

    // Draggable Node
    draggableNode: {
        base: "cursor-grab active:cursor-grabbing min-w-[120px] rounded-lg transition-all duration-200",
        variants: {
            input: "bg-blue-50 border border-blue-200 hover:border-blue-400 hover:shadow-md",
            output: "bg-green-50 border border-green-200 hover:border-green-400 hover:shadow-md",
            llm: "bg-purple-50 border border-purple-200 hover:border-purple-400 hover:shadow-md",
            text: "bg-yellow-50 border border-yellow-200 hover:border-yellow-400 hover:shadow-md",
            message: "bg-pink-50 border border-pink-200 hover:border-pink-400 hover:shadow-md",
            webScraper: "bg-cyan-50 border border-cyan-200 hover:border-cyan-400 hover:shadow-md",
            imageProcessing: "bg-orange-50 border border-orange-200 hover:border-orange-400 hover:shadow-md",
            notification: "bg-red-50 border border-red-200 hover:border-red-400 hover:shadow-md",
            dataTransform: "bg-teal-50 border border-teal-200 hover:border-teal-400 hover:shadow-md",
            default: "bg-gray-50 border border-gray-200 hover:border-gray-400 hover:shadow-md"
        },
        label: {
            base: "px-4 py-2 text-sm font-medium",
            variants: {
                input: "text-blue-700",
                output: "text-green-700",
                llm: "text-purple-700",
                text: "text-yellow-700",
                message: "text-pink-700",
                webScraper: "text-cyan-700",
                imageProcessing: "text-orange-700",
                notification: "text-red-700",
                dataTransform: "text-teal-700",
                default: "text-gray-700"
            }
        }
    },

    // Base Node
    baseNode: {
        container: {
            base: "rounded-lg shadow-sm transition-all duration-200 min-w-[240px]",
            variants: {
                input: "bg-blue-50 border border-blue-200",
                output: "bg-green-50 border border-green-200",
                llm: "bg-purple-50 border border-purple-200",
                text: "bg-yellow-50 border border-yellow-200",
                message: "bg-pink-50 border border-pink-200",
                webScraper: "bg-cyan-50 border border-cyan-200",
                imageProcessing: "bg-orange-50 border border-orange-200",
                notification: "bg-red-50 border border-red-200",
                dataTransform: "bg-teal-50 border border-teal-200",
                default: "bg-gray-50 border border-gray-200"
            }
        },
        header: {
            base: "flex items-center gap-2 p-3 border-b rounded-t-lg",
            variants: {
                input: "bg-blue-100/50 border-blue-200",
                output: "bg-green-100/50 border-green-200",
                llm: "bg-purple-100/50 border-purple-200",
                text: "bg-yellow-100/50 border-yellow-200",
                message: "bg-pink-100/50 border-pink-200",
                webScraper: "bg-cyan-100/50 border-cyan-200",
                imageProcessing: "bg-orange-100/50 border-orange-200",
                notification: "bg-red-100/50 border-red-200",
                dataTransform: "bg-teal-100/50 border-teal-200",
                default: "bg-gray-100/50 border-gray-200"
            }
        },
        label: {
            base: "font-semibold",
            variants: {
                input: "text-blue-700",
                output: "text-green-700",
                llm: "text-purple-700",
                text: "text-yellow-700",
                message: "text-pink-700",
                webScraper: "text-cyan-700",
                imageProcessing: "text-orange-700",
                notification: "text-red-700",
                dataTransform: "text-teal-700",
                default: "text-gray-700"
            }
        },
        content: "p-4",
        handle: {
            base: "w-3 h-3 rounded-full border-2",
            variants: {
                input: "bg-white border-blue-400",
                output: "bg-white border-green-400",
                llm: "bg-white border-purple-400",
                text: "bg-white border-yellow-400",
                message: "bg-white border-pink-400",
                webScraper: "bg-white border-cyan-400",
                imageProcessing: "bg-white border-orange-400",
                notification: "bg-white border-red-400",
                dataTransform: "bg-white border-teal-400",
                default: "bg-white border-gray-400"
            }
        }
    },

    // Form Elements
    form: {
        label: "block text-sm font-medium text-gray-700 mb-1",
        input: "w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        select: "w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
        textarea: "w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
    },

    // Pipeline UI
    pipelineUI: {
        container: "w-full h-[70vh] bg-gray-50",
        reactFlow: "bg-gray-50",
        controls: "bg-white border border-gray-200 shadow-md rounded",
        minimap: "bg-white border border-gray-200 shadow-md rounded",
        background: "stroke-gray-200"
    },

    // Submit Button
    submit: {
        container: "flex justify-center p-4",
        button: "px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
    }
};

// Helper function to get variant styles
export const getVariantStyles = (styles, component, variant = 'default') => {
    if (!styles || !styles[component]) {
        console.warn(`Missing styles for component: ${component}`);
        return '';
    }

    const baseStyle = styles[component].base || '';
    const variants = styles[component].variants || {};
    const variantStyle = variants[variant] || variants.default || '';

    return `${baseStyle} ${variantStyle}`.trim();
};