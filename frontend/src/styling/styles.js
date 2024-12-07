// src/styling/styles.js
export const styles = {
    // App Container
    app: {
        container: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    },

    // Toolbar
    toolbar: {
        container: "backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl mb-4 mx-4",
        wrapper: "p-4",
        title: "text-xl font-bold text-white mb-4 tracking-tight",
        nodesContainer: "flex flex-wrap gap-3",
    },

    // Draggable Node
    draggableNode: {
        base: "cursor-grab active:cursor-grabbing min-w-[160px] h-[50px] rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105 hover:-translate-y-1 border-2",
        variants: {
            input: "bg-gradient-to-r from-blue-500/30 to-blue-600/30 border-blue-400/50 hover:border-blue-400",
            output: "bg-gradient-to-r from-green-500/30 to-green-600/30 border-green-400/50 hover:border-green-400",
            llm: "bg-gradient-to-r from-purple-500/30 to-purple-600/30 border-purple-400/50 hover:border-purple-400",
            text: "bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 border-yellow-400/50 hover:border-yellow-400",
            message: "bg-gradient-to-r from-pink-500/30 to-pink-600/30 border-pink-400/50 hover:border-pink-400",
            webScraper: "bg-gradient-to-r from-cyan-500/30 to-cyan-600/30 border-cyan-400/50 hover:border-cyan-400",
            imageProcessing: "bg-gradient-to-r from-orange-500/30 to-orange-600/30 border-orange-400/50 hover:border-orange-400",
            notification: "bg-gradient-to-r from-red-500/30 to-red-600/30 border-red-400/50 hover:border-red-400",
            dataTransform: "bg-gradient-to-r from-teal-500/30 to-teal-600/30 border-teal-400/50 hover:border-teal-400",
            default: "bg-gradient-to-r from-gray-500/30 to-gray-600/30 border-gray-400/50 hover:border-gray-400"
        },
        label: {
            base: "px-4 py-3 text-base font-medium flex items-center justify-center",
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
            base: "rounded-xl min-w-[300px]",
            variants: {
                input: "bg-purple-900/40 border border-purple-500/30",
                output: "bg-purple-900/40 border border-purple-500/30",
                llm: "bg-purple-900/40 border border-purple-500/30",
                text: "bg-purple-900/40 border border-purple-500/30",
                message: "bg-purple-900/40 border border-purple-500/30",
                webScraper: "bg-purple-900/40 border border-purple-500/30",
                imageProcessing: "bg-purple-900/40 border border-purple-500/30",
                notification: "bg-purple-900/40 border border-purple-500/30",
                dataTransform: "bg-purple-900/40 border border-purple-500/30",
                default: "bg-purple-900/40 border border-purple-500/30"
            }
        },
        header: {
            base: "px-4 py-2 border-b",
            variants: {
                input: "border-purple-500/30",
                output: "border-purple-500/30",
                llm: "border-purple-500/30",
                text: "border-purple-500/30",
                message: "border-purple-500/30",
                webScraper: "border-purple-500/30",
                imageProcessing: "border-purple-500/30",
                notification: "border-purple-500/30",
                dataTransform: "border-purple-500/30",
                default: "border-purple-500/30"
            }
        },
        label: {
            base: "font-medium",
            variants: {
                input: "text-yellow-500",
                output: "text-yellow-500",
                llm: "text-yellow-500",
                text: "text-yellow-500",
                message: "text-yellow-500",
                webScraper: "text-yellow-500",
                imageProcessing: "text-yellow-500",
                notification: "text-yellow-500",
                dataTransform: "text-yellow-500",
                default: "text-yellow-500"
            }
        },
        content: "p-4",
        handle: {
            base: "w-3 h-3 rounded-full bg-white border-2 border-slate-400",
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
        input: "w-full px-3 py-2 bg-black/20 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500",
        select: "w-full px-3 py-2 bg-black/20 border border-gray-600 rounded-md text-white focus:outline-none focus:border-gray-500",
        textarea: "w-full px-3 py-2 bg-black/20 border border-gray-600 rounded-md text-white font-mono text-sm resize-none focus:outline-none focus:border-gray-500 min-h-[80px]"
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
        button: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/50 hover:-translate-y-0.5"
    }
};

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