import { Divider, Skeleton } from '@nextui-org/react'

export default function AssetCardSkeleton() {
    return (
        <div className={`bg-[#1D2229] p-3 rounded-xl space-y-4`}>
            <div className="flex justify-between items-start text-center">
                <div className="flex flex-col">
                    <Skeleton className='rounded-md w-[50px] h-[50px]' />
                </div>
            </div>
            <div className="space-y-4">
                <Skeleton className='rounded-md w-[120px] h-[20px]' />
                <Divider className="bg-white h-[.5px]" />
            </div>
            <div className="grid grid-cols-1 2xs:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-4">
                {
                    Array.from({ length: 2 }, (_, index) => (
                        <div key={index} className="flex items-end gap-4">
                            <div className="flex flex-col space-y-2">
                                <Skeleton className='rounded-md w-[100px] lg:w-[60px] xl:w-[100px] h-[20px]' />
                                <Skeleton className='rounded-md w-[50px] h-[15px]' />
                            </div>
                            <Skeleton className='rounded-md w-[150px] h-[50px]' />
                        </div>
                    ))
                }
                <Divider className="col-span-1 2xs:col-span-2 sm:col-span-1 lg:col-span-2 bg-white h-[.5px] mt-4" />
            </div>
            <div className="flex items-center flex-wrap gap-4">
                {
                    Array.from({ length: 3 }, (_, index) => (
                        <div key={index} className="flex gap-2 items-center flex-grow">
                            <Skeleton className='rounded-md w-[40px] h-[40px]' />
                            <div className="flex flex-col space-y-2">
                                <Skeleton className='rounded-md w-[100px] h-[20px]' />
                                <Skeleton className='rounded-md w-[50px] h-[15px]' />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    )
}
