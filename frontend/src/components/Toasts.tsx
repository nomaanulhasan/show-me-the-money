"use client";

import type { ReactNode } from "react";
import { toast, type ExternalToast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info" | "default";

interface ToastOptions extends Partial<ExternalToast> {
  message: string;
  description?: string;
}

const toastStyles: Record<
  ToastType,
  {
    bgColor: string;
    textColor: string;
    descriptionColor: string;
    icon: ReactNode;
  }
> = {
  success: {
    bgColor: "!bg-green-200",
    textColor: "!text-green-950",
    descriptionColor: "!text-gray-600",
    icon: <span>✅</span>,
  },
  error: {
    bgColor: "!bg-red-200",
    textColor: "!text-red-950",
    descriptionColor: "!text-gray-600",
    icon: <span>❌</span>,
  },
  warning: {
    bgColor: "!bg-yellow-200",
    textColor: "!text-yellow-950",
    descriptionColor: "!text-gray-600",
    icon: <span>⚠️</span>,
  },
  info: {
    bgColor: "!bg-blue-200",
    textColor: "!text-blue-950",
    descriptionColor: "!text-gray-600",
    icon: <span>ℹ️</span>,
  },
  default: {
    bgColor: "!bg-gray-200",
    textColor: "!text-gray-950",
    descriptionColor: "!text-gray-600",
    icon: <span>📢</span>,
  },
};

export const showToast = (
  type: ToastType,
  { message, description, ...customOptions }: ToastOptions
) => {
  const styles = toastStyles[type];

  const options: ExternalToast = {
    description,
    className: `${styles.bgColor} ${styles.textColor} text-left`,
    descriptionClassName: `${styles.descriptionColor} text-left`,
    icon: customOptions.icon || styles.icon,
    duration: 5000,
    ...customOptions,
  };

  switch (type) {
    case "success":
      return toast.success(message, options);
    case "error":
      return toast.error(message, options);
    case "warning":
      return toast.warning(message, options);
    case "info":
      return toast.info(message, options);
    default:
      return toast(message, options);
  }
};

export const toastSuccess = (options: Omit<ToastOptions, "type">) =>
  showToast("success", options);

export const toastError = (options: Omit<ToastOptions, "type">) =>
  showToast("error", options);

export const toastWarning = (options: Omit<ToastOptions, "type">) =>
  showToast("warning", options);

export const toastInfo = (options: Omit<ToastOptions, "type">) =>
  showToast("info", options);
