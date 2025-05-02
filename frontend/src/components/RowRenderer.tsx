import { useTheme } from "next-themes";
import { FC } from "react";
import { Row, RowRendererProps } from "../types/balanceSheet";
import HeaderRenderer from "./HeaderRenderer";
import { TableBody, TableCell, TableFooter, TableRow } from "./ui/table";

const RowRenderer: FC<RowRendererProps> = ({
  header,
  rows,
  hasSectionTitle,
}) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  const getTableCellClass = (index: number) =>
    index > 0 ? "w-[25%] text-right" : "w-[50%] text-left";

  const getBodyRows = (() => {
    return rows.filter((row: Row) => row.RowType === "Row");
  })();

  const getSummaryRows = (() => {
    return rows.filter((row: Row) => row.RowType === "SummaryRow");
  })();

  return (
    <>
      {hasSectionTitle && <HeaderRenderer header={header} />}

      {rows?.length ? (
        <>
          <TableBody>
            {getBodyRows.map((row: Row, i: number) => {
              return (
                <TableRow key={i}>
                  {row.Cells?.map((cell: any, j: number) => (
                    <TableCell className={getTableCellClass(j)} key={j}>
                      {cell.Value}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            {getSummaryRows?.map((row: Row, i: number) => {
              return (
                <TableRow key={i}>
                  {row.Cells?.map((cell: any, j: number) => (
                    <TableCell
                      className={`
                        ${getTableCellClass(j)}
                        ${isDarkTheme ? "bg-sky-700" : "bg-sky-100"}
                      `}
                      key={j}
                    >
                      {cell.Value}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableFooter>
        </>
      ) : null}
    </>
  );
};

export default RowRenderer;
