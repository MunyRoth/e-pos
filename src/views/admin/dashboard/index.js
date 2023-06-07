import LineChart from "../../../components/charts/LineChart";

export default function Dashboard() {

    const data = {
        'today': [18, 19, 13, 16, 12, 12],
        'yesterday': [12, 11, 14, 18, 17, 13]
    };
    return (
        <>
        <h2 className="m-5 text-2xl font-bold text-gray-900 dark:text-white">ផ្ទាំងព័ត៌មាន</h2>
            <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="p-5 flex items-center justify-center rounded bg-gray-50 dark:bg-gray-800">
                    <LineChart data={data} />
                </div>
                <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                    <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
                </div>
            </div>
            <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                <p class="text-2xl text-gray-400 dark:text-gray-500">+</p>
            </div>
        </>
    )
}