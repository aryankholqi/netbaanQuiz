import { Key, useCallback } from "react";
import { assetProps } from "../../../interfaces/asset.interface";
import convertTimestampsToDate from "../../../utility/convertTimestampsToDate";
import MainTable from "../../Modules/Table/MainTable";
import { useGetAssetsInfoApi } from "../../../hooks/api/useAssetApi";
import "./AssetTable.css"
import { getGradeColor } from "../../../utility/getGradeColor";

const columns = [
    { name: "Grade", uid: "grade" },
    { name: "Name", uid: "name" },
    { name: "Total Vulnerabilities", uid: "total_vuls" },
    { name: "Last Seen", uid: "lastSeen" },
]

export default function AssetTable() {
    const { data, isLoading } = useGetAssetsInfoApi()

    const renderCell = useCallback(
        (item: assetProps, columnKey: Key) => {
            const cellValue = item[columnKey as keyof assetProps];

            switch (columnKey) {
                case "grade":
                    return (
                        <div className={`polygon w-14 h-12 flex items-center justify-center text-black`} style={{
                            backgroundColor: getGradeColor(item.grade)
                        }}>
                            <p>{item.grade}</p>
                        </div>
                    );
                case "name":
                    return <p>{item.name}</p>;
                case "total_vuls":
                    return <p>{item.total_vuls}</p>;
                case "lastSeen":
                    return <p>{convertTimestampsToDate(item.lastSeen)}</p>;
                default:
                    return cellValue;
            }
        },
        []
    );
    return (
        <div className="bg-[#1d1e2b] p-3 rounded-xl space-y-10">
            <h1 className="text-2xl">Assets</h1>
            <MainTable columns={columns} renderCell={renderCell} data={data?.assets || []} isLoading={isLoading} />
        </div>
    )
}
