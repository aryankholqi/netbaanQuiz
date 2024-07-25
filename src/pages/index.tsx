import AssetCardsBox from "../components/Templates/Home/AssetCardsBox";
import AssetTable from "../components/Templates/Home/AssetTable";

export default function Home() {
    return (
        <div className="space-y-16">
            <AssetCardsBox />
            <AssetTable />
        </div>
    )
}
