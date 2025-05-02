"use client";

import {
  BalanceSheetProps,
  Header,
  Report,
  Row,
  SectionRow,
} from "@/types/balanceSheet";
import { useTheme } from "next-themes";
import { FC, useEffect } from "react";
import LoadingBalanceSheet from "./LoadingBalanceSheet";
import SectionRenderer from "./SectionRenderer";
import { toastError } from "./Toasts";
import { Table } from "./ui/table";

const BalanceSheet: FC<BalanceSheetProps> = ({ balanceSheetQuery }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const { data: balanceSheet, isLoading, error } = balanceSheetQuery;
  const allRows = balanceSheet?.[0].Rows;
  const balanceSheetHeader = allRows?.filter(
    (row: Row) => row.RowType === "Header"
  )[0] as Header;
  const balanceSheetSections = allRows?.filter(
    (row: Row) => row.RowType === "Section"
  );

  useEffect(() => {
    if (error) {
      console.error("Error fetching balance sheet data:", error);
      toastError({
        message: "Error fetching balance sheet data!",
        description: "Please try again later.",
      });
    }
  }, [error]);

  return (
    <div
      className={`border rounded-xl p-4 sm:p-6 pb-8 ${
        isDarkTheme ? "bg-gray-900" : "bg-white"
      } shadow-md`}
    >
      {isLoading && <LoadingBalanceSheet />}

      {error && <div>Oops! Something went wront, please try again later.</div>}

      {balanceSheet?.map((item: Report) => (
        <div key={item.ReportID}>
          <h2 className="text-4xl font-semibold">{item.ReportTitles[0]}</h2>
          <h3 className="text-2xl font-normal my-3">{item.ReportTitles[1]}</h3>
          <p className="text-base mb-4">{item.ReportTitles[2]}</p>
        </div>
      ))}

      <div className="tables-container flex flex-col gap-2">
        {balanceSheetSections?.map((section: Row, i: number) => {
          return (
            <Table key={`section-${section.Title}-${i} oveflow-y-auto`}>
              <SectionRenderer
                title={section.Title}
                header={balanceSheetHeader.Cells}
                rows={section.Rows as SectionRow[]}
              />
            </Table>
          );
        })}
      </div>
    </div>
  );
};

export default BalanceSheet;
