import { isNegative } from "@/lib/utils";
import { BodyRendererProps, Cell, Row } from "@/types/balanceSheet";
import { TrendingDown, TrendingUp } from "lucide-react";
import { FC } from "react";
import { TableBody, TableCell, TableRow } from "./ui/table";

const BodyRenderer: FC<BodyRendererProps> = ({ getBodyRows }) => {
  return (
    <TableBody>
      {getBodyRows.map((row: Row, i: number) => {
        return (
          <TableRow key={i}>
            {row.Cells?.map((cell: Cell, j: number) => {
              const getValue = (cells?: Cell[]) => {
                return Math.floor(
                  Number(cells?.[1].Value) - Number(cells?.[2].Value)
                );
              };
              const diff = getValue(row.Cells);

              return (
                <TableCell
                  className={`
                    ${isNegative(cell.Value) ? "text-red-400" : ""} 
                    ${j > 0 ? "w-[25%] text-right" : "w-[50%] text-left"}
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
                      <span className="inline-flex items-center gap-2 w-max bg-red-100 px-1 rounded-sm">
                        {diff !== 0 &&
                          (isNegative(`${diff}`) ? (
                            <TrendingDown size={16} />
                          ) : (
                            <TrendingUp size={16} />
                          ))}
                        {isNaN(parseFloat(cell.Value)) ? "" : "$"}
                        {cell.Value}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-2 w-max bg-green-100 px-1 rounded-sm">
                        {diff !== 0 &&
                          (isNegative(`${diff}`) ? (
                            <TrendingDown size={16} />
                          ) : (
                            <TrendingUp size={16} />
                          ))}
                        {isNaN(parseFloat(cell.Value)) ? "" : "$"}
                        {cell.Value}
                      </span>
                    )
                  ) : (
                    <span
                      className={`${
                        j === 2 ? "font-normal text-muted-foreground" : ""
                      }`}
                    >
                      {isNaN(parseFloat(cell.Value)) ? "" : "$"}
                      {cell.Value}
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
