import {
  calcPercent,
  getCellValue,
  getDiffValue,
  getTableCellClass,
  isNegative,
} from "@/lib/utils";
import { BodyRendererProps, Cell, Row } from "@/types/balanceSheet";
import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";
import { TableBody, TableCell, TableRow } from "../ui/table";

const BodyRenderer: FC<BodyRendererProps> = ({ getBodyRows }) => {
  return (
    <TableBody>
      {getBodyRows.map((row: Row, i: number) => {
        return (
          <TableRow key={i}>
            {row.Cells?.map((cell: Cell, j: number) => {
              const diff = getDiffValue(row.Cells);

              const commonClasses =
                "inline-flex items-center gap-2 w-max px-1 rounded-sm";

              return (
                <TableCell
                  className={`
                    ${isNegative(cell.Value) ? "text-red-500" : ""} 
                    ${getTableCellClass(j)}
                    ${
                      j === 1 && diff !== 0
                        ? isNegative(`${diff}`)
                          ? "text-red-600 "
                          : "text-green-600"
                        : ""
                    }
                  `}
                  key={j}
                >
                  {j === 1 && diff !== 0 ? (
                    isNegative(`${diff}`) ? (
                      <span
                        className={`${commonClasses} bg-red-100`}
                        title={calcPercent(row.Cells)}
                      >
                        {diff !== 0 && <TrendingDown size={16} />}
                        {getCellValue(cell.Value)}
                      </span>
                    ) : (
                      <span
                        className={`${commonClasses} bg-green-100`}
                        title={calcPercent(row.Cells)}
                      >
                        {diff !== 0 && <TrendingUp size={16} />}
                        {getCellValue(cell.Value)}
                      </span>
                    )
                  ) : (
                    <span
                      className={
                        j === 2
                          ? isNegative(`${cell.Value}`)
                            ? "text-red-400"
                            : "text-muted-foreground"
                          : ""
                      }
                    >
                      {getCellValue(cell.Value)}
                    </span>
                  )}
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default BodyRenderer;
