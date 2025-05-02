import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";
import { FC, useState } from "react";
import { SectionRendererProps, SectionRow } from "../types/balanceSheet";
import RowRenderer from "./RowRenderer";
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const SectionRenderer: FC<SectionRendererProps> = ({ title, header, rows }) => {
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";
  const [isRowsVisible, setIsRowsVisible] = useState<boolean>(false);
  const toggleRowCollapse = () => {
    setIsRowsVisible(visible => !visible);
  };

  return (
    <>
      {title ? (
        <TableHeader
          className={`${
            isDarkTheme
              ? "bg-sky-950 hover:bg-sky-800"
              : "bg-sky-800 hover:bg-sky-700"
          } py-1.5`}
        >
          <TableRow>
            <TableHead
              colSpan={3}
              onClick={toggleRowCollapse}
              className="cursor-pointer"
            >
              <h4
                className={`${
                  isDarkTheme ? "text-gray-300" : "text-white"
                } text-lg flex items-center gap-2`}
              >
                <span
                  className={`${
                    isRowsVisible ? "rotate-90" : "rotate-0"
                  } transition-transform`}
                >
                  <ChevronRight size={22} />
                </span>
                {title}
              </h4>
            </TableHead>
          </TableRow>
        </TableHeader>
      ) : null}

      {rows?.length ? (
        title ? (
          isRowsVisible && (
            <RowRenderer
              header={header}
              rows={rows as SectionRow[]}
              hasSectionTitle={!!title}
            />
          )
        ) : (
          <RowRenderer
            header={header}
            rows={rows as SectionRow[]}
            hasSectionTitle={!!title}
          />
        )
      ) : (
        isRowsVisible && (
          <TableBody>
            <TableRow>
              <TableCell
                colSpan={header.length}
                className="row-parent__no-data pt-2 pb-4 text-left px-2 md:text-center"
              >
                No data available
              </TableCell>
            </TableRow>
          </TableBody>
        )
      )}
    </>
  );
};

export default SectionRenderer;
