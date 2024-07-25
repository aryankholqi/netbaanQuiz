import { Key } from "react";

export interface mainTableProps {
  columns: { name: string; uid: string }[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderCell: (item: any, columnKey: Key) => React.ReactNode;
}
