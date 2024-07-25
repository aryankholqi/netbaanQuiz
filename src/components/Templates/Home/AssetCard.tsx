import { Divider } from "@nextui-org/react";
import ArrowUpRightIcon from "../../../assets/icons/Arrow-Up-Right";
import { assetCardProps } from "../../../interfaces/assetCard.interface";
import MainBarChart from "../../Modules/Charts/MainBarChart";
import convertToValidBarChartData from "../../../utility/convertToValidBarChartData";
import { useLocation, useNavigate } from "@tanstack/react-router";

export default function AssetCard({ title, ips, live, monitored, ports, total, total_live, total_monitored, mainIconInfo, bottomStatsIconInfo, vulns }: assetCardProps) {
    const navigate = useNavigate()
    const { pathname, search } = useLocation()
    /* @ts-expect-error type is not a part of search structure as default */
    const { type } = search

    const live_monitored_data = [
        { tilte: "Live", total: total_live, chartData: live },
        { tilte: "Monitored", total: total_monitored, chartData: monitored },
    ]

    const bottomStatsDigits = [ips, ports, vulns]

    const selectAssetTypeToFilterData = (title: string) => {
        if (title.toLowerCase().includes(type?.toLowerCase())) {
            navigate({
                to: pathname
            })
        } else {
            navigate({
                to: pathname,
                search: ((prev) => ({ ...prev, type: title }))
            })
        }
    }
    return (
        < div className={`bg-[#1D2229] p-3 rounded-xl space-y-4 transition-all duration-[120ms] cursor-pointer ${type?.includes(title) ? "border-2 border-white" : null}`}
            onClick={() => selectAssetTypeToFilterData(title)}>
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
            <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                {live_monitored_data.map((item, index) => (
                    <div key={index} className="flex items-end gap-4">
                        <div className="flex flex-col">
                            <span>{item.tilte}</span>
                            <span>{item.total}</span>
                        </div>
                        <MainBarChart data={convertToValidBarChartData(item.chartData)} />
                    </div>
                ))}
                <Divider className="col-span-1 2xs:col-span-2 sm:col-span-1 lg:col-span-2 bg-white h-[.5px] mt-4" />
            </div>
            <div className="flex items-center flex-wrap gap-4">
                {bottomStatsIconInfo.map((item, index) => (
                    <div key={index} className="flex gap-2 items-center flex-grow">
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
        </div >
    )
}