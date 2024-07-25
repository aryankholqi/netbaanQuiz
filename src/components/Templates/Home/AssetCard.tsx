import { Divider } from "@nextui-org/react";
import ArrowUpRightIcon from "../../../assets/icons/Arrow-Up-Right";
import { assetCardProps } from "../../../interfaces/assetCard.interface";
import MainBarChart from "../../Modules/Charts/MainBarChart";
import convertToValidBarChartData from "../../../utility/convertToValidBarChartData";

export default function AssetCard({ title, ips, live, monitored, ports, total, total_live, total_monitored, mainIconInfo, bottomStatsIconInfo, vulns }: assetCardProps) {
    const live_monitored_data = [
        { tilte: "Live", total: total_live, chartData: live },
        { tilte: "Monitored", total: total_monitored, chartData: monitored },
    ]

    const bottomStatsDigits = [ips, ports, vulns]
    return (
        <div className="bg-[#1D2229] p-3 rounded-xl space-y-4">
            <div className="flex justify-between items-start text-center">
                <div className="flex flex-col">
                    <span className={`py-2 px-4 rounded-tl-lg rounded-tr-lg`} style={{ backgroundColor: mainIconInfo.bgColor }}>
                        {mainIconInfo.Icon}
                    </span>
                    <span className="bg-[#EEE9E9] text-black rounded-bl-lg rounded-br-lg">{total}</span>
                </div>
                <span>
                    <ArrowUpRightIcon />
                </span>
            </div>
            <div className="space-y-2">
                <h1>{title}</h1>
                <Divider className="bg-white h-[.5px]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
                {live_monitored_data.map((item, index) => (
                    <div key={index} className="flex items-end gap-4">
                        <div className="flex flex-col">
                            <span>{item.tilte}</span>
                            <span>{item.total}</span>
                        </div>
                        <MainBarChart data={convertToValidBarChartData(item.chartData)} />
                    </div>
                ))}
                <Divider className="col-span-2 bg-white h-[.5px] mt-4" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                {bottomStatsIconInfo.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center">
                        <span className="bg-[#327794] p-2 rounded-md">
                            {item.Icon}
                        </span>
                        <div className="flex flex-col">
                            <span>{item.title}</span>
                            <span>{bottomStatsDigits[index]}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}