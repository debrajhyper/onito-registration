import { useEffect, useRef } from "react";
import DataTables, { Config } from "datatables.net-dt";
import './style.css';

export function DataTable({ ...props }: Config) {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const dt = new DataTables(tableRef.current!, {
            ...props,
            autoWidth: false,
            scrollY: '70vh',
            scrollX: true,
            scrollCollapse: true,
            columnDefs: [
                { "width": "7rem", "targets": 0 },
                { "width": "2rem", "targets": 1 },
                { "width": "5rem", "targets": 2 },
                { "width": "7rem", "targets": 3 },
                { "width": "7rem", "targets": 4 },
                { "width": "7rem", "targets": 5 },
                { "width": "12rem", "targets": 6 },
                { "width": "3rem", "targets": "_all" },
            ]
        });
        return () => {
            dt.destroy();
        };
    }, [props.data]);

    return <table ref={tableRef}></table>;
}