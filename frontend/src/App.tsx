import "@/App.css";
import BalanceSheet from "@/components/BalanceSheetTable/BalanceSheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useTheme } from "next-themes";

async function fetchBalanceSheetData() {
  const API_URL = import.meta.env.VITE_BALANCE_SHEET_API_URL;
  if (!API_URL) {
    throw new Error("API URL is not defined");
  }

  try {
    const response = await axios.get(API_URL);
    return response.data.Reports;
  } catch (error) {
    console.error("Error fetching balance sheet data:", error);
    throw new Error("Failed to fetch balance sheet data");
  }
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
