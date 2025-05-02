import { UseQueryResult } from "@tanstack/react-query";

export interface Attribute {
  Value: string;
  Id: string;
}

export interface Cell {
  Value: string;
  Attributes?: Attribute[];
}

export interface Row {
  RowType: "Header" | "Section" | "Row" | "SummaryRow";
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface SectionRow {
  RowType: "Row";
  Cells: Cell[];
}

export interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: unknown[];
  Rows: Row[];
}

export interface BalanceSheetData {
  Status: string;
  Reports: Report[];
}

export interface BalanceSheetProps {
  balanceSheetQuery: UseQueryResult<any, Error>;
}

export interface SectionCheckRow {
  Title: string;
  isChecked: boolean;
}

export interface Header {
  RowType: string;
  Cells: Cell[];
}

export interface RowRendererProps {
  header: Cell[];
  rows: Row[];
  hasSectionTitle: boolean;
}

export interface SectionRendererProps {
  title?: string;
  header: Cell[];
  rows?: SectionRow[];
}

export interface BodyRendererProps {
  getBodyRows: Row[];
}

export interface FooterRendererProps {
  getSummaryRows: Row[];
}
