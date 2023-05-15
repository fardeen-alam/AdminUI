import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

const Datatable = () => {
    const [data, setData] = useState([]);

    const handleDelete = async (id) => {
        try {
            // console.log(id);
            await deleteDoc(doc(db, "users", id));
            setData(data.filter((item) => item.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "users"));
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    console.log(data);

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link
                            to="/users/test"
                            style={{ textDecoration: "none" }}
                        >
                            <div className="viewButton">View</div>
                        </Link>

                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <div className="dataTable">
                <div className="datatableTitle">
                    Add New User
                    <Link
                        to="/users/new"
                        style={{ textDecoration: "none" }}
                        className="link"
                    >
                        Add New
                    </Link>
                </div>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                sx={{ color: "#333" }}
                // checkboxSelection
            />
        </div>
    );
};

export default Datatable;
