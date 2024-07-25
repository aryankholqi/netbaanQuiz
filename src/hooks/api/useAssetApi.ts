import { useQuery } from "@tanstack/react-query";
import { getAssetsInfoApi } from "../../services/api/assetApi";

export const useGetAssetsInfoApi = () =>
  useQuery({
    queryKey: ["assetsInfo"],
    queryFn: () => getAssetsInfoApi().then((data) => data.data),
  });
