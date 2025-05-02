'use client';

import { BalanceSheetProps, Report } from '@/types/balanceSheet';
import { FC, useEffect, useState } from 'react';
import RowRenderer from './RowRenderer';
import { Table } from './ui/table';

const BalanceSheet: FC<BalanceSheetProps> = ({ fetchBalanceSheetData }) => {
  const [balanceSheet, setBalanceSheet] = useState<Report[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBalanceSheetData();
      setBalanceSheet(data);
    };
    fetchData();
  }, []);

  return (
    <div className="border rounded-xl p-4 sm:p-6 pb-8 bg-white dark:bg-gray-900 shadow-md">
      {balanceSheet?.map((item: Report) => (
        <div key={item.ReportID}>
          <h2 className="text-4xl font-semibold">{item.ReportTitles[0]}</h2>
          <h3 className="text-2xl font-normal my-3">{item.ReportTitles[1]}</h3>
          <p className="text-base mb-4">{item.ReportTitles[2]}</p>
          <Table>
            <RowRenderer rows={item.Rows} />
          </Table>
        </div>
      ))}
    </div>
  );
};

export default BalanceSheet;
