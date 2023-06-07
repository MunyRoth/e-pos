import LineChart from "../components/charts/LineChart";

export default function Home() {

    
    return (
        <>
            <div className="p-4 sm:ml-64">
                <h2>Dashboard</h2>
                <LineChart name="roth" />
            </div>
        </>
    )
}