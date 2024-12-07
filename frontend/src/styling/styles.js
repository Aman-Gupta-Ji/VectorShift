// src/styling/styles.js
export const styles = {
    // App Container
    app: {
        container: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        wrapper: "container mx-auto py-6 px-4",
    },

    // Toolbar
    toolbar: {
        container: "backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-2xl mb-6",
        wrapper: "p-6",
        title: "text-2xl font-bold text-white mb-6 tracking-tight",
        nodesContainer: "flex flex-wrap gap-4",
    },

    // Draggable Node
    draggableNode: {
        base: "cursor-grab active:cursor-grabbing min-w-[140px] rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105 hover:-translate-y-1",
        variants: {
            input: "bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-500/30 hover:border-blue-400",
            output: "bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/30 hover:border-green-400",
            llm: "bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30 hover:border-purple-400",
            text: "bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 hover:border-yellow-400",
            message: "bg-gradient-to-r from-pink-500/20 to-pink-600/20 border border-pink-500/30 hover:border-pink-400",
            webScraper: "bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border border-cyan-500/30 hover:border-cyan-400",
            imageProcessing: "bg-gradient-to-r from-orange-500/20 to-orange-600/20 border border-orange-500/30 hover:border-orange-400",
            notification: "bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 hover:border-red-400",
            dataTransform: "bg-gradient-to-r from-teal-500/20 to-teal-600/20 border border-teal-500/30 hover:border-teal-400",
            default: "bg-gradient-to-r from-gray-500/20 to-gray-600/20 border border-gray-500/30 hover:border-gray-400"
        },
        label: {
            base: "px-4 py-3 text-sm font-medium flex items-center justify-center",
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
            base: "rounded-xl shadow-2xl transition-all duration-300 min-w-[280px] backdrop-blur-md hover:shadow-2xl hover:scale-[1.02]",
            variants: {
                input: "bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30",
                output: "bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30",
                llm: "bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30",
                text: "bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/30",
                message: "bg-gradient-to-br from-pink-500/10 to-pink-600/10 border border-pink-500/30",
                webScraper: "bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 border border-cyan-500/30",
                imageProcessing: "bg-gradient-to-br from-orange-500/10 to-orange-600/10 border border-orange-500/30",
                notification: "bg-gradient-to-br from-red-500/10 to-red-600/10 border border-red-500/30",
                dataTransform: "bg-gradient-to-br from-teal-500/10 to-teal-600/10 border border-teal-500/30",
                default: "bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/30"
            }
        },
        header: {
            base: "flex items-center gap-2 p-4 border-b rounded-t-xl backdrop-blur-sm",
            variants: {
                input: "bg-blue-900/20 border-blue-500/30",
                output: "bg-green-900/20 border-green-500/30",
                llm: "bg-purple-900/20 border-purple-500/30",
                text: "bg-yellow-900/20 border-yellow-500/30",
                message: "bg-pink-900/20 border-pink-500/30",
                webScraper: "bg-cyan-900/20 border-cyan-500/30",
                imageProcessing: "bg-orange-900/20 border-orange-500/30",
                notification: "bg-red-900/20 border-red-500/30",
                dataTransform: "bg-teal-900/20 border-teal-500/30",
                default: "bg-gray-900/20 border-gray-500/30"
            }
        },
        label: {
            base: "font-bold text-lg tracking-tight",
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
        },
        content: "p-4",
        handle: {
            base: "w-3 h-3 rounded-full border-2 transition-all duration-300 hover:scale-125",
            variants: {
                input: "bg-gradient-to-r from-blue-400 to-blue-500 border-blue-400 shadow-lg shadow-blue-500/50",
                output: "bg-gradient-to-r from-green-400 to-green-500 border-green-400 shadow-lg shadow-green-500/50",
                llm: "bg-gradient-to-r from-purple-400 to-purple-500 border-purple-400 shadow-lg shadow-purple-500/50",
                text: "bg-gradient-to-r from-yellow-400 to-yellow-500 border-yellow-400 shadow-lg shadow-yellow-500/50",
                message: "bg-gradient-to-r from-pink-400 to-pink-500 border-pink-400 shadow-lg shadow-pink-500/50",
                webScraper: "bg-gradient-to-r from-cyan-400 to-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/50",
                imageProcessing: "bg-gradient-to-r from-orange-400 to-orange-500 border-orange-400 shadow-lg shadow-orange-500/50",
                notification: "bg-gradient-to-r from-red-400 to-red-500 border-red-400 shadow-lg shadow-red-500/50",
                dataTransform: "bg-gradient-to-r from-teal-400 to-teal-500 border-teal-400 shadow-lg shadow-teal-500/50",
                default: "bg-gradient-to-r from-gray-400 to-gray-500 border-gray-400 shadow-lg shadow-gray-500/50"
            }
        }
    },

    // Form Elements
    form: {
        label: "block text-sm font-medium text-gray-200 mb-1",
        input: "w-full px-4 py-2 rounded-lg border bg-white/5 border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300",
        select: "w-full px-4 py-2 rounded-lg border bg-white/5 border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 backdrop-blur-sm text-white transition-all duration-300",
        textarea: "w-full px-4 py-2 rounded-lg border bg-white/5 border-white/10 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 backdrop-blur-sm text-white placeholder-gray-400 transition-all duration-300 resize-none"
    },

    // Pipeline UI
    pipelineUI: {
        container: "w-full h-[70vh] rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl",
        reactFlow: "rounded-xl",
        controls: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        minimap: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        background: "stroke-white/10"
    },

    // Submit Button
    submit: {
        container: "flex justify-center p-6",
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