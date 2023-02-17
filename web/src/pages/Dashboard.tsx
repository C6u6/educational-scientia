import { AverageTimeToAnswer } from "../components/AverageTimeToAnswer";
import { DaysVisited } from "../components/DaysVisited";
import { DocumentTitle } from "../components/DocumentTitle";
import { HoursInLast7Days } from "../components/HoursInLast7Days";
import { OverallPerformance } from "../components/OverallPerformance";
import { Sidebar } from "../components/Sidebar";

import { Icons } from "../components/Icons";

export function Dashboard() {
    return (
        <div className="flex gap-5 bg-Gray min-h-screen">
            <DocumentTitle title="Dashboard" />

            <Sidebar  />

            <div className="bg-Gray w-full m-2 shadow-xl shadow-black rounded-lg flex flex-col">
                <div className="flex justify-between m-5 ">
                    <h1 className="text-3xl">Hello, User</h1>
                    <Icons imageName="bell" directory="dashboard" label="" width={20} height={20} withoutLabel={true} ClassNameForDiv="hover:cursor-pointer" />
                </div>

                <div className="flex flex-wrap gap-10 m-5">
                    <HoursInLast7Days />
                    <AverageTimeToAnswer />
                </div>
                <OverallPerformance />
                <DaysVisited />
            </div>
        </div>
    )
};