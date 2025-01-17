"use client";

import PieChart from "@/components/Charts/pieChart";
import Navbar from "@/components/Navbar/Navbar";
import { setDataAndColumns } from "@/logic/common/getRawData";
import { TableColumns } from "@/type/common/DataTableTypes";
import d3 from "d3";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState<d3.DSVRowArray<string> | null>(null);
  const [columns, setColumns] = useState<TableColumns[]>([]);

  useEffect(() => {
    setDataAndColumns(setData, setColumns);
    console.log(columns);
  }, []);
  return (
    <div className="min-h-screen ">
      <Navbar />
      {data && (
        <PieChart
          data={data}
          groupByColumnName="Fund Type"
          columnToSum="Amount"
          title="Spendings by Core and Trust"
        />
      )}
    </div>
  );
}
