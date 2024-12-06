// theme.js
export const nodeTheme = {
    base: {
      node: "relative rounded-lg border shadow-md transition-all duration-200",
      header: "flex items-center gap-2 p-3 border-b",
      content: "p-4",
      label: "font-semibold",
      input: "w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 transition-all duration-200",
      select: "w-full px-3 py-2 rounded border focus:outline-none focus:ring-2 transition-all duration-200",
      handle: "w-3 h-3 rounded-full border-2"
    },
    variants: {
      default: {
        node: "bg-white hover:shadow-lg border-gray-200",
        header: "bg-gray-50 border-gray-200",
        label: "text-gray-700",
        input: "border-gray-200 focus:border-blue-500 focus:ring-blue-200",
        select: "border-gray-200 focus:border-blue-500 focus:ring-blue-200",
        handle: "bg-white border-gray-300"
      },
      primary: {
        node: "bg-blue-50 hover:shadow-lg border-blue-200",
        header: "bg-blue-100 border-blue-200",
        label: "text-blue-700",
        input: "border-blue-200 focus:border-blue-500 focus:ring-blue-200",
        select: "border-blue-200 focus:border-blue-500 focus:ring-blue-200",
        handle: "bg-white border-blue-400"
      },
      success: {
        node: "bg-green-50 hover:shadow-lg border-green-200",
        header: "bg-green-100 border-green-200",
        label: "text-green-700",
        input: "border-green-200 focus:border-green-500 focus:ring-green-200",
        select: "border-green-200 focus:border-green-500 focus:ring-green-200",
        handle: "bg-white border-green-400"
      },
      warning: {
        node: "bg-yellow-50 hover:shadow-lg border-yellow-200",
        header: "bg-yellow-100 border-yellow-200",
        label: "text-yellow-700",
        input: "border-yellow-200 focus:border-yellow-500 focus:ring-yellow-200",
        select: "border-yellow-200 focus:border-yellow-500 focus:ring-yellow-200",
        handle: "bg-white border-yellow-400"
      }
    }
  };