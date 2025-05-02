import './App.css';
import BalanceSheet from './components/BalanceSheet';

async function fetchBalanceSheetData() {
  const response = await fetch('http://localhost:8000/api/balance-sheet');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data.Reports;
}

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl mb-4 font-bold text-gray-800">Financial Reports</h1>
      <p className="mb-6 italic text-gray-700">View your organization's financial position</p>
      <BalanceSheet fetchBalanceSheetData={fetchBalanceSheetData} />
    </div>
  );
}

export default App;
