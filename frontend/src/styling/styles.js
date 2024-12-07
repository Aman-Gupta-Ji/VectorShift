// src/styling/styles.js
export const styles = {
    app: {
        container: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    },

    toolbar: {
        container: "backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl mb-4 mx-4",
        wrapper: "p-4",
        title: "text-xl font-bold text-white mb-4 tracking-tight",
        nodesContainer: "flex flex-wrap gap-3",
    },

    draggableNode: {
        base: "cursor-grab active:cursor-grabbing min-w-[160px] h-[50px] rounded-lg transition-all duration-300 backdrop-blur-sm shadow-lg hover:scale-105 hover:-translate-y-1 border-2",
        variants: {
            input: "bg-gradient-to-r from-blue-500/30 to-blue-600/30 border-blue-400/50 hover:border-blue-400",
            output: "bg-green-500/30 border-green-400/50 hover:border-green-400",
            llm: "bg-purple-500/30 border-purple-400/50 hover:border-purple-400",
            text: "bg-yellow-500/30 border-yellow-400/50 hover:border-yellow-400",
            message: "bg-pink-500/30 border-pink-400/50 hover:border-pink-400",
            webScraper: "bg-cyan-500/30 border-cyan-400/50 hover:border-cyan-400",
            imageProcessing: "bg-orange-500/30 border-orange-400/50 hover:border-orange-400",
            notification: "bg-red-500/30 border-red-400/50 hover:border-red-400",
            dataTransform: "bg-teal-500/30 border-teal-400/50 hover:border-teal-400",
            default: "bg-gray-500/30 border-gray-400/50 hover:border-gray-400"
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

    baseNode: {
        container: {
            base: "rounded-xl min-w-[300px] relative",
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
            base: "px-4 py-2 border-b border-white/10",
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

    form: {
        label: "text-sm text-gray-300",
        input: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-gray-500",
        select: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white focus:outline-none focus:border-gray-500",
        textarea: "w-full px-3 py-2 bg-black/20 border border-gray-600/40 rounded-md text-white font-mono text-sm resize-none focus:outline-none focus:border-gray-500 min-h-[80px]"
    },

    pipelineUI: {
        container: "w-full h-[85vh] backdrop-blur-md bg-white/5 border border-white/10 shadow-2xl mx-0",
        reactFlow: "rounded-xl",
        controls: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        minimap: "bg-white/10 border border-white/20 backdrop-blur-md rounded-lg shadow-lg",
        background: "stroke-white/10"
    },

    submit: {
        container: "flex justify-center p-4 mx-4",
        button: "px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 shadow-lg hover:shadow-xl"
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