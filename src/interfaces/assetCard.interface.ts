export interface assetCardProps {
  title: string;
  ips: number;
  live: number[];
  monitored: number[];
  ports: number;
  total: number;
  total_live: number;
  total_monitored: number;
  vulns: number;
  mainIconInfo: {
    Icon: JSX.Element;
    bgColor: string;
  };
  bottomStatsIconInfo: {
    title: string;
    Icon: JSX.Element;
  }[];
}
