export default function Table(){
    return(
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className=" w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-[#2F405D]">
                            Product name
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-[#2F405D]">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-[#2F405D]">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            OpenAI
                        </th>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                            GPT-3.5
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            $0.002
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            OpenAI
                        </th>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                            GPT-4
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            $0.03
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Together AI
                        </th>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                            Llama-2-70b
                        </td>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                            $0.0008
                        </td>
                    </tr>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Together AI
                        </th>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                            Llama-2-13b
                        </td>
                        <td className="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                            $0.0006
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                            Indicus AI
                        </th>
                        <td className="px-6 py-4 bg-gray-50 dark:bg-gray-700">
                            Indicus LLM
                        </td>
                        <td className="px-6 py-4  bg-gray-50 dark:bg-gray-800">
                            $0.002
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}