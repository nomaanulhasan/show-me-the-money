import { TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Cell } from '@/types/balanceSheet';
import { useTheme } from 'next-themes';

const HeaderRenderer = ({ header }: { header: Cell[] }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <TableHeader>
      <TableRow>
        {header.map((cell: Cell, i: number) => (
          <TableHead className={`
            ${i > 0 ? "w-[25%] text-right" : "w-[50%] text-left"}
            ${isDarkTheme ? "bg-sky-700" : "bg-sky-100"}
          `}
            key={i}
          >
            {cell.Value}
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
  );
};

export default HeaderRenderer;
