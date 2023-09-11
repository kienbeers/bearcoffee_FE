import React, { useEffect } from "react";
import { Table } from "antd";
import { getList } from "../../services/TypeCoffeeService";
import { useState } from "react";
const TypeCoffe = () => {
    const [data, setData] = useState();

    const columns = [
        {
            title: 'Tên',
            dataIndex: 'TypeName',
            key: 'id',
        },
    ];
    useEffect(() => {
        getList(10, 1);
    }, []);

    return (
        <>
            <Table dataSource={data} columns={columns} />;
        </>
    );
}
export default TypeCoffe;