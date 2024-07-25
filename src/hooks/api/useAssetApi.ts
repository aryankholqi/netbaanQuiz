import { useQuery } from "@tanstack/react-query";
import { getAssetsInfoApi } from "../../services/api/assetApi";
import { useLocation } from "@tanstack/react-router";
import { assetProps } from "../../interfaces/asset.interface";

export const useGetAssetsInfoApi = () => {
  const { search } = useLocation();
  //@ts-expect-error type is not a part of search structure as default
  const { type } = search;

  return useQuery({
    queryKey: ["assetsInfo", type],
    queryFn: () =>
      getAssetsInfoApi().then((response) => {
        const result = response.data;

        if (type) {
          const filteredAssets = result.assets.filter((item: assetProps) =>
            type.toLowerCase().includes(item.type.toLowerCase())
          );
          return { ...result, assets: filteredAssets };
        }

        return result;
      }),
  });
};
