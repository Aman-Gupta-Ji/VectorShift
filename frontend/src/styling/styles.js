// src/styling/styles.js
export const styles = {
    // App Container
    app: {
        container: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    },

    // Toolbar
    toolbar: {
        container: "backdrop-blur-md bg-purple-900/20 border border-purple-500/30 rounded-xl shadow-2xl mb-4 mx-4",
        wrapper: "p-6",
        title: "text-2xl font-bold text-yellow-500 mb-6 tracking-tight",
        nodesContainer: "flex flex-wrap gap-4",
    },

    // Draggable Node
    draggableNode: {
        base: "cursor-grab active:cursor-grabbing min-w-[180px] h-[60px] rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105 hover:-translate-y-1 border border-purple-500/30 bg-purple-900/40",
        variants: {
            input: "hover:border-blue-400 hover:bg-blue-600/20",
            output: "hover:border-green-400 hover:bg-green-600/20",
            llm: "hover:border-purple-400 hover:bg-purple-600/20",
            text: "hover:border-yellow-400 hover:bg-yellow-600/20",
            message: "hover:border-pink-400 hover:bg-pink-600/20",
            webScraper: "hover:border-cyan-400 hover:bg-cyan-600/20",
            imageProcessing: "hover:border-orange-400 hover:bg-orange-600/20",
            notification: "hover:border-red-400 hover:bg-red-600/20",
            dataTransform: "hover:border-teal-400 hover:bg-teal-600/20",
            default: "hover:border-gray-400 hover:bg-gray-600/20"
        },
        label: {
            base: "px-4 py-3 text-lg font-medium flex items-center justify-center",
            variants: {
                input: "text-blue-200",
                output: "text-green-200",
                llm: "text-purple-200",
                text: "text-yellow-200",
                message: "text-pink-200",
                webScraper: "text-cyan-200",
                imageProcessing: "text-orange-200",
                notification: "text-red-200",
                dataTransform: "text-teal-200",
                default: "text-gray-200"
            }
        }
    },

    // Base Node
    baseNode: {
        container: {
            base: "rounded-xl min-w-[300px] relative border border-purple-500/30",
            variants: {
                input: "bg-purple-900/40",
                output: "bg-purple-900/40",
                llm: "bg-purple-900/40",
                text: "bg-purple-900/40",
                message: "bg-purple-900/40",
                webScraper: "bg-purple-900/40",
                imageProcessing: "bg-purple-900/40",
                notification: "bg-purple-900/40",
                dataTransform: "bg-purple-900/40",
                default: "bg-purple-900/40"
            }
        },
        header: {
            base: "px-4 py-2 border-b border-purple-500/30",
            variants: {
                input: "",
                output: "",
                llm: "",
                text: "",
                message: "",
                webScraper: "",
                imageProcessing: "",
                notification: "",
                dataTransform: "",
                default: ""
            }
        },
        label: {
            base: "text-yellow-500 font-medium",
            variants: {
                input: "",
                output: "",
                llm: "",
                text: "",
                message: "",
                webScraper: "",
                imageProcessing: "",
                notification: "",
                dataTransform: "",
                default: ""
            }
        },
        content: "p-4",
        handle: {
            base: "w-2 h-2 rounded-full bg-white/90 border border-white/25",
            variants: {
                input: "",
                output: "",
                llm: "",
                text: "",
                message: "",
                webScraper: "",
                imageProcessing: "",
                notification: "",
                dataTransform: "",
                default: ""
            }
        }
    },

    // Form Elements
    form: {
        label: "text-sm text-gray-300",
        input: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500",
        select: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white focus:outline-none focus:border-gray-500",
        textarea: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white font-mono text-sm resize-none focus:outline-none focus:border-gray-500 min-h-[80px]"
    },

    // Pipeline UI
    pipelineUI: {
        container: "w-full h-[85vh] backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl mx-0",
        reactFlow: "rounded-xl",
        controls: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        minimap: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        background: "stroke-white/10"
    },

    // Submit Button
    submit: {
        container: "flex justify-center p-4 mx-4",
        button: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl"
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