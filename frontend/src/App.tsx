import "@/App.css";
import BalanceSheet from "@/components/BalanceSheetTable/BalanceSheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useQuery } from "@tanstack/react-query";
import { useTheme } from "next-themes";

async function fetchBalanceSheetData() {
  const API_URL = import.meta.env.VITE_BALANCE_SHEET_API_URL;
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  // Fetch the balance sheet data from the API
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.Reports;
}

function App() {
  const balanceSheetQuery = useQuery({
    queryKey: ["balanceSheet"],
    queryFn: fetchBalanceSheetData,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchOnMount: false,
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
  const { theme } = useTheme();
  const isDarkTheme = theme === "dark";

  return (
    <div className="container mx-auto">
      <h1
        className={`text-4xl font-bold ${
          isDarkTheme ? "text-white" : "text-gray-800"
        }`}
      >
        Financial Reports
      </h1>
      <p
        className={`my-3 italic ${
          isDarkTheme ? "text-gray-300" : "text-gray-700"
        }`}
      >
        View your organization's financial position
      </p>
      <div className="flex justify-center items-center mb-6">
        <ThemeToggle />
      </div>
      <BalanceSheet balanceSheetQuery={balanceSheetQuery} />
    </div>
  );
}

export default App;
