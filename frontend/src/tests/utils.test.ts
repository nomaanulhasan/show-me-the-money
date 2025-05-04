import { render } from "@testing-library/react";
import {
  calcPercent,
  cn,
  getCellValue,
  getDiffValue,
  getTableCellClass,
  isNegative,
} from "../lib/utils";

describe("cn", () => {
  it("merges Tailwind classes correctly", () => {
    const result = cn("p-2", "text-sm", "text-black", "text-white");
    expect(result).toContain("p-2");
    expect(result).toContain("text-sm");
    // tailwind-merge keeps last class (text-white overrides text-black)
    expect(result).not.toContain("text-black");
    expect(result).toContain("text-white");
  });
});

describe("getTableCellClass", () => {
  it("returns right-aligned class for index > 0", () => {
    expect(getTableCellClass(1)).toBe("w-[25%] text-right");
  });

  it("returns left-aligned class for index 0", () => {
    expect(getTableCellClass(0)).toBe("w-[50%] text-left");
  });
});

describe("isNegative", () => {
  it("returns true for negative number strings", () => {
    expect(isNegative("-123")).toBe(true);
    expect(isNegative("-1,000.50")).toBe(true);
  });

  it("returns false for positive number strings", () => {
    expect(isNegative("1,000")).toBe(false);
    expect(isNegative("0")).toBe(false);
  });

  it("returns null for empty or undefined values", () => {
    expect(isNegative("")).toBeNull();
    expect(isNegative(undefined as any)).toBeNull();
  });
});

describe("getCellValue", () => {
  it("returns formatted JSX with $ for numeric value", () => {
    const { container } = render(getCellValue("1,000"));
    expect(container.textContent).toBe("$1,000");
  });

  it("returns raw string with no $ for non-numeric", () => {
    const { container } = render(getCellValue("N/A"));
    expect(container.textContent).toBe("N/A");
  });

  it("returns empty string for falsy input", () => {
    const { container } = render(getCellValue(""));
    expect(container.textContent).toBe("");
  });
});

describe("getDiffValue", () => {
  const mockCells = [{ Value: "Header" }, { Value: "1000" }, { Value: "750" }];

  it("returns numeric difference", () => {
    expect(getDiffValue(mockCells)).toBe(250);
  });

  it("returns null for undefined input", () => {
    expect(getDiffValue(undefined)).toBeNull();
  });
});

describe("calcPercent", () => {
  const cells = [{ Value: "Header" }, { Value: "1200" }, { Value: "1000" }];

  it("returns formatted percentage", () => {
    expect(calcPercent(cells)).toBe("20.0%");
  });

  it("returns 0% for undefined input", () => {
    expect(calcPercent(undefined)).toBe("0%");
  });

  it("handles division by 0 gracefully", () => {
    const cellsDivByZero = [
      { Value: "Header" },
      { Value: "1000" },
      { Value: "0" },
    ];
    expect(calcPercent(cellsDivByZero)).toBe("Infinity%");
  });
});
