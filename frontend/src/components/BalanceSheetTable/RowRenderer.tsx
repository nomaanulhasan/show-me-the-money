import { Row, RowRendererProps } from "@/types/balanceSheet";
import { FC } from "react";
import BodyRenderer from "./BodyRenderer";
import FooterRenderer from "./FooterRenderer";
import HeaderRenderer from "./HeaderRenderer";

const RowRenderer: FC<RowRendererProps> = ({
  header,
  rows,
  hasSectionTitle,
}) => {
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
          <BodyRenderer getBodyRows={getBodyRows} />
          <FooterRenderer getSummaryRows={getSummaryRows} />
        </>
      ) : null}
    </>
  );
};

export default RowRenderer;
