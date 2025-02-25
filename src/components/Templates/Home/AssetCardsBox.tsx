import BugIcon from '../../../assets/icons/Bug'
import CloudIcon from '../../../assets/icons/Cloud'
import ConflictIcon from '../../../assets/icons/Conflict'
import EarthIcon from '../../../assets/icons/Earth'
import GlobeIcon from '../../../assets/icons/Globe'
import { useGetAssetsInfoApi } from '../../../hooks/api/useAssetApi'
import AssetCardSkeleton from '../../Modules/Skeleton/AssetCard/AssetCardSkeleton'
import AssetCard from './AssetCard'

export default function AssetCardsBox() {
    const { data, isLoading } = useGetAssetsInfoApi()

    const assetCardsData = [
        { title: "Domains", mainIconInfo: { Icon: <EarthIcon />, bgColor: "#DF6710" }, info: data?.domain },
        { title: "IP Addresses", mainIconInfo: { Icon: <EarthIcon />, bgColor: "#565392" }, info: data?.ip },
        { title: "Cloud Accounts", mainIconInfo: { Icon: <CloudIcon />, bgColor: "#D1B003" }, info: data?.cloud }
    ]

    const bottomStatsIconInfo = [
        {
            title: "IPs",
            Icon: <GlobeIcon />
        },
        {
            title: "Ports",
            Icon: <ConflictIcon />
        },
        {
            title: "Vulns",
            Icon: <BugIcon />
        },
    ]

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
            {isLoading ? Array.from({ length: 3 }, (_, index) => (
                <AssetCardSkeleton key={index} />
            )) :
                assetCardsData.map((asset, index) => (
                    <AssetCard key={index} {...asset.info} title={asset.title} mainIconInfo={asset.mainIconInfo} bottomStatsIconInfo={bottomStatsIconInfo} />
                ))
            }
        </div>
    )
}
