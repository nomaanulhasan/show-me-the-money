export interface Attribute {
  Value: string;
  Id: string;
}

export interface Cell {
  Value: string;
  Attributes?: Attribute[];
}

export interface Row {
  RowType: 'Header' | 'Section' | 'Row' | 'SummaryRow';
  Title?: string;
  Cells?: Cell[];
  Rows?: Row[];
}

export interface Report {
  ReportID: string;
  ReportName: string;
  ReportType: string;
  ReportTitles: string[];
  ReportDate: string;
  UpdatedDateUTC: string;
  Fields: any[];
  Rows: Row[];
}

export interface BalanceSheetData {
  Status: string;
  Reports: Report[];
}

export interface BalanceSheetProps {
  fetchBalanceSheetData: () => Promise<Report[]>;
}

export interface SectionCheckRow {
  Title: string;
  isChecked: boolean;
}

export interface Header {
  RowType: string;
  Cells: { Value: string }[];
}
export interface RowRendererProps {
  rows?: Row[];
}
