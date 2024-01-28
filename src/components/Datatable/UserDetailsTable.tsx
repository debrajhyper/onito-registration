import "datatables.net-dt/css/jquery.dataTables.min.css";
import { DataTable } from "./DataTable";
import { useSelector } from "react-redux";

const data = [
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },
    {
        id: "1",
        name: "Tiger Nixon",
        position: "System Architect",
        salary: "$320,800",
        start_date: "2011/04/25",
        office: "Edinburgh",
        extn: "5421",
    },
    {
        id: "2",
        name: "Garrett Winters",
        position: "Accountant",
        salary: "$170,750",
        start_date: "2011/07/25",
        office: "Tokyo",
        extn: "8422",
    },

];

//semanticui

const columns = [
    { data: "name", title: "Name" },
    { data: "age", title: "Age" },
    { data: "sex", title: "Sex" },
    { data: "mobile", title: "Mobile" },
    { data: "govtIssuedIDType", title: "Govt Id Type" },
    { data: "govtIssuedId", title: "Govt Id" },
    { data: "address", title: "Address" },
    { data: "state", title: "State" },
    { data: "city", title: "City" },
    { data: "country", title: "Country" },
    { data: "pinCode", title: "Pincode" },
];

// useEffect(()=>{

// }, [])

export function UserDetailsTable() {
    const userDetails = useSelector((state: any) => state.userDetails)

    console.log('DATA_TABLE -> ',userDetails)
    return <DataTable data={userDetails} columns={columns} />;
};
