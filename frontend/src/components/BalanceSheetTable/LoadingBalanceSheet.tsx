import { Skeleton } from "@/components/ui/skeleton";

const LoadingBalanceSheet = () => {
  return (
    <div className="flex flex-col space-y-3 items-center">
      <Skeleton className="h-10 w-[250px] rounded" />
      <Skeleton className="h-8 w-[120px] rounded" />
      <Skeleton className="h-6 w-[150px] rounded" />
      <div className="flex flex-col w-full space-y-2 mt-2">
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
      </div>
    </div>
  );
};

export default LoadingBalanceSheet;
