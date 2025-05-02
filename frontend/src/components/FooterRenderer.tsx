import { FooterRendererProps, Row } from "@/types/balanceSheet";
import { useTheme } from "next-themes";
import { FC } from "react";
import { TableCell, TableFooter, TableRow } from "./ui/table";

const FooterRenderer: FC<FooterRendererProps> = ({ getSummaryRows }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <TableFooter>
      {getSummaryRows?.map((row: Row, i: number) => {
        return (
          <TableRow key={i}>
            {row.Cells?.map((cell: any, j: number) => (
              <TableCell
                className={`
                  ${j > 0 ? "w-[25%] text-right" : "w-[50%] text-left"}
                  ${isDarkTheme ? "bg-sky-700" : "bg-sky-100"}
                `}
                key={j}
              >
                <span
                  className={j === 2 ? "font-normal text-muted-foreground" : ""}
                >
                  {isNaN(parseFloat(cell.Value)) ? "" : "$"}
                  {cell.Value}
                </span>
              </TableCell>
            ))}
          </TableRow>
        );
      })}
    </TableFooter>
  );
};

export default FooterRenderer;
