import { AverageTimeToAnswer } from "../components/AverageTimeToAnswer";
import { DocumentTitle } from "../components/DocumentTitle";
import { HoursInLast7Days } from "../components/HoursInLast7Days";
import { OverallPerformance } from "../components/OverallPerformance";
import { Sidebar } from "../components/Sidebar";

export function Dashboard() {
    return (
        <div className="flex gap-5 bg-Gray min-h-screen">
            <DocumentTitle title="Dashboard" />

            <Sidebar  />

            <div className="bg-Gray w-full m-2 shadow-xl shadow-black rounded-lg flex flex-col">
                <div className="flex justify-between mx-2 my-3">
                    <h1 className="text-3xl">Hello, User</h1>
                    <span>bell icon here</span>
                </div>

                <div className="flex flex-wrap gap-10">
                    <HoursInLast7Days />
                    <AverageTimeToAnswer />
                    {/* <OverallPerformance /> */}
                </div>
            </div>
        </div>
    )
};