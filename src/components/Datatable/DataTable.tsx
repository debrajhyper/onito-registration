import DataTables, { Config } from "datatables.net-dt";
import { useEffect, useRef } from "react";
import './style.css'
export function DataTable({ ...props }: Config) {
    const tableRef = useRef<HTMLTableElement>(null);

    useEffect(() => {
        const dt = new DataTables(tableRef.current!, {
            ...props,
            autoWidth: false,
            scrollY: '60vh',
            scrollX: true,
            scrollCollapse: true,
        });
        return () => {
            dt.destroy();
        };
    }, [props.data]);

    return <table ref={tableRef}></table>;
}