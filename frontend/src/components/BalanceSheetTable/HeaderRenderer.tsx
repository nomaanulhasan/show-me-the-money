import { TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { getTableCellClass } from "@/lib/utils";
import { Cell } from "@/types/balanceSheet";
import { useTheme } from "next-themes";

const HeaderRenderer = ({ header }: { header: Cell[] }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <TableHeader>
      <TableRow>
        {header.map((cell: Cell, i: number) => (
          <TableHead
            className={`
            ${getTableCellClass(i)}
            ${isDarkTheme ? "bg-sky-700" : "bg-sky-100"}
          `}
            key={i}
            title={cell.Value.slice(-4)}
          >
            {cell.Value}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default HeaderRenderer;
