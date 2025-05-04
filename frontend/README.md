# 🧾 Show Me The Money — Frontend App

This is the frontend application for the **Show Me The Money** project. It is a single-page React 19 + TypeScript app built with [Vite](https://vitejs.dev/) and styled using [Shadcn UI](https://ui.shadcn.com/) and [Tailwind CSS](https://tailwindcss.com/). The app fetches financial data from the backend (which mocks Xero API data) and displays it in a well-formatted table.

## ✨ Features

- 🚀 **Built with Vite** for lightning-fast performance
- ⚛️ **React 19 + TypeScript** stack
- 🎨 **UI** using Shadcn components and Tailwind CSS
- 📊 **Three-column table layout** for comparing financial data for years 2024 and 2025
- 🟢🔴 **Green & red chips** to show financial increases and decreases
- 📈 **Trending icons** from [Lucide Icons](https://lucide.dev/icons/) with hover tooltips showing percentage change
- 🔄 **Collapsible sections** for table rows
- ⏳ **Loading skeleton** and error states for API fetches
- 🔁 Data fetching and caching handled by **React Query (TanStack Query)**

## 📦 Tech Stack

| Tech         | Description               |
| ------------ | ------------------------- |
| Vite         | Build tool                |
| React 19     | UI framework              |
| TypeScript   | Type safety               |
| Shadcn UI    | Headless UI components    |
| Tailwind CSS | Utility-first styling     |
| Lucide Icons | Trend icons (up/down)     |
| React Query  | Data fetching and caching |
| Axios        | HTTP client               |

## 🖼️ Screenshots

Screenshots of the working application UI are available in the root of this repository. You can preview the clean and dynamic financial data presentation, including tooltips, chips, and collapsible table rows.

## 🧪 Testing

> ✅ Coming soon: Unit and integration tests using **Jest**.

## 📜 Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-org/show-me-the-money-frontend.git
cd show-me-the-money-frontend
```

## 2. Install dependencies

```bash
npm install
```

> Or use pnpm install or yarn if you're not using npm.

## 3. Run the app locally

```bash
npm run dev
```

## 📝 Notes

> ✅ Tip: This frontend app is not meant to run independently.
> Always run the entire stack using Docker to ensure all services (frontend, backend, mock API) are properly connected.

## 🧑‍💻 Author

Built with ❤️ by [Syed NomanulHasan](https://nomaanulhasan.com)
