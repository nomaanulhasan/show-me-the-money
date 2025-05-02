import { FC, useEffect, useState } from 'react';
import { Cell, Row, RowRendererProps, SectionCheckRow } from '../types/balanceSheet';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from './ui/table';

const RowRenderer:FC<RowRendererProps> = ({ rows }) => {
  const [showRows, setShowRows] = useState<SectionCheckRow[]>([]);
  const getTableCellClass = (index: number) => (index > 0 ? 'w-[25%] text-right' : 'w-[50%] text-left');

  useEffect(() => {
    if (!rows) return;
    const mapedRows = rows.map((row, i) => ({ Title: row.Title, isChecked: i === 1 })) as SectionCheckRow[];

    setShowRows(mapedRows);
  }, [rows]);

  const toggleRowCollapse = (Title: string) =>
    setShowRows((rows) => {
      if (!Title) return rows;
      const updatedRows = rows.map((row: SectionCheckRow) => {
        if (row.Title === Title) {
          return { ...row, isChecked: !row.isChecked };
        }
        return row;
      });
      return updatedRows;
    });

  return (
    <>
      {rows?.length ? (
        rows?.map((row: Row, i: number) => {
          if (row.RowType === 'Header') {
            return (
              <TableHeader key={i}>
                <TableRow>
                  {row.Cells?.map((cell: Cell, j: number) => (
                    <TableHead className={getTableCellClass(j)} key={j}>
                      {cell.Value}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
            );
          }
          if (row.RowType === 'Section') {
            return (
              <TableBody key={i}>
                <TableRow key={i}>
                  <TableCell colSpan={3}>
                    <Table key={row.Title}>
                      {row.Title && (
                        <TableHeader className="bg-sky-900 py-1.5">
                          <TableRow>
                            <TableHead
                              colSpan={3}
                              onClick={() => row.Title && toggleRowCollapse(row.Title)}
                              className="cursor-pointer"
                            >
                              <h4 className="text-xl text-white flex items-center gap-2">
                                <span
                                  className={`${showRows[i]?.isChecked ? 'rotate-90' : 'rotate-0'} transition-transform`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </span>
                                {row.Title}
                              </h4>
                            </TableHead>
                          </TableRow>
                        </TableHeader>
                      )}
                      {row.Title && row.Rows?.length ? (
                        showRows[i]?.isChecked ? (
                          <RowRenderer rows={row.Rows} />
                        ) : null
                      ) : !row.Title ? (
                        <RowRenderer rows={row.Rows} />
                      ) : (
                        showRows[i]?.isChecked && (
                          <TableCaption className="row-parent__no-data pt-2 pb-4 text-left px-2 md:text-center">
                            No data available
                          </TableCaption>
                        )
                      )}
                      {/* {row.Rows?.length ? (
                      <RowRenderer rows={row.Rows} />
                      // (showRows[i]?.isChecked && row.Title) && <RowRenderer rows={row.Rows} />
                    ) : (
                      <TableCaption className="row-parent__no-data pt-2 pb-4 text-left px-2 md:text-center">No data available</TableCaption>
                    )} */}
                    </Table>
                  </TableCell>
                </TableRow>
              </TableBody>
            );
          }
          if (row.RowType === 'Row') {
            return (
              <TableBody key={i}>
                <TableRow>
                  {row.Cells?.map((cell: any, j: number) => (
                    <TableCell className={getTableCellClass(j)} key={j}>
                      {cell.Value}
                    </TableCell>
                  ))}
                </TableRow>
              </TableBody>
            );
          }

          return (
            <TableFooter key={i} className="bg-gray-100 border-b">
              <TableRow>
                {row.Cells?.map((cell: any, j: number) => (
                  <TableCell className={getTableCellClass(j)} key={j}>
                    {cell.Value}
                  </TableCell>
                ))}
              </TableRow>
            </TableFooter>
          );
        })
      ) : (
        <div className="row-parent__no-data">No data available</div>
      )}
    </>
  );
};

export default RowRenderer;
