import Tag from "@src/components/tag";
import { useMobile } from "@src/hooks/use_responsive";
import { salesStatusSelect } from "@src/pages/dashboard/views/income_earning/data";
import { usNf } from "@src/utils/local_number_format";
import { Table, TableColumnsType } from "antd";
import dayjs from "dayjs";
import React, { memo, useMemo } from "react";
import { SalesStatus } from "../../types";
import "./index.scss";

interface DataItemType {
  id: string;
  date: string;
  status: SalesStatus;
  count: number;
  earnings: number;
}

const data: DataItemType[] = [
  {
    id: "1",
    date: "20200214",
    status: SalesStatus.Paid,
    count: 1000,
    earnings: 1000,
  },
  {
    id: "2",
    date: "20200215",
    status: SalesStatus.Pending,
    count: 1200,
    earnings: 1200,
  },
];
const ProductSalesTable = memo(() => {
  const isMobile = useMobile();

  const columns = useMemo<TableColumnsType<DataItemType>>(() => {
    return isMobile
      ? [
          {
            title: "Date",
            dataIndex: "date",
            key: "date",
            render: (date: string) => {
              return dayjs(date).format("MMM D, YYYY");
            },
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: SalesStatus) => {
              const item = salesStatusSelect.item("status", status);
              return <Tag color={item?.tagBg}>{status}</Tag>;
            },
          },
          {
            title: "Earnings",
            dataIndex: "earnings",
            key: "earnings",
          },
        ]
      : [
          {
            title: "Date",
            dataIndex: "date",
            key: "date",
            render: (date: string) => {
              return dayjs(date).format("MMM D, YYYY");
            },
          },
          {
            title: "Status",
            dataIndex: "status",
            key: "status",
            render: (status: SalesStatus) => {
              const item = salesStatusSelect.item("status", status);
              return <Tag color={item?.tagBg}>{status}</Tag>;
            },
          },
          {
            title: "Product sales count",
            dataIndex: "count",
            key: "count",
          },
          {
            title: "Earnings",
            dataIndex: "earnings",
            key: "earnings",
            render: (earnings: number) => {
              return usNf.format(earnings);
            },
          },
        ];
  }, [isMobile]);

  return (
    <div className="product-sales-table">
      <Table
        rowKey="id"
        dataSource={data}
        columns={columns}
        pagination={false}
      />
    </div>
  );
});

export default ProductSalesTable;
