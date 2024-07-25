import { useMemo, useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Pagination,
    Spinner,
    Select,
    SelectItem,
} from "@nextui-org/react";
import { mainTableProps } from "../../../interfaces/mainTable.interface";

const rowsOfPage = [
    { key: 5, label: "5" },
    { key: 10, label: "10" },
    { key: 15, label: "15" },
];

export default function MainTable({ columns, data, isLoading, renderCell }: mainTableProps) {
    const [page, setPage] = useState(1)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const pages = useMemo(() => {
        return data?.length ? Math.ceil(data.length / rowsPerPage) : 0;
    }, [data.length, rowsPerPage]);

    const items = useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return data?.slice(start, end);
    }, [page, data, rowsPerPage]);

    const bottomContent = useMemo(
        () => (
            pages > 0 ?
                (<div className="py-2 px-5 flex justify-between items-center flex-wrap gap-4">
                    <Pagination
                        isCompact
                        showControls
                        showShadow
                        page={page}
                        total={pages}
                        onChange={(newPage) => setPage(newPage)}
                        size="lg"
                    />
                    <Select
                        items={rowsOfPage}
                        label={"Rows"}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onSelectionChange={(value: any) => {
                            setRowsPerPage(value.currentKey)
                            setPage(1)
                        }
                        }
                        classNames={{
                            base: ["w-[100px]"],
                            trigger: ["min-h-10 h-10"],
                            label: ["text-black dark:text-white"],
                            selectorIcon: ["scale-125"],
                        }}
                    >
                        {(item) => (
                            <SelectItem key={item.key}>{item.label}</SelectItem>
                        )}
                    </Select>
                </div>) : null),
        [page, pages]
    );

    return (
        <Table
            aria-label="Table"
            isHeaderSticky
            bottomContent={bottomContent}
        >
            <TableHeader columns={columns}>
                {(column: { name: string, uid: string }) => (
                    <TableColumn
                        key={column.uid}
                        className="!bg-[#46465e] text-white"
                        align={column.uid === "actions" ? "center" : "start"}
                    >
                        {column.name}
                    </TableColumn>
                )}
            </TableHeader>
            <TableBody
                isLoading={isLoading}
                loadingContent={<Spinner label="Loading..." />}
                emptyContent={"No Records found"}
                items={items}>
                {(item) => (
                    <TableRow key={item.name}>
                        {(columnKey) => (
                            <TableCell>{renderCell(item, columnKey)}</TableCell>
                        )}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}
