import { Report } from "@/types/balanceSheet";

const BalanceSheetTitles = ({ balanceSheet }: { balanceSheet: Report[] }) => {
  return balanceSheet?.map((item: Report) => (
    <div key={item.ReportID}>
      <h2 className="text-4xl font-semibold">{item.ReportTitles[0]}</h2>
      <h3 className="text-2xl font-normal my-3">{item.ReportTitles[1]}</h3>
      <p className="text-base mb-4">{item.ReportTitles[2]}</p>
    </div>
  ));
};

export default BalanceSheetTitles;
