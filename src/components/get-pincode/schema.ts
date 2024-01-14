import type { SubmitHandler } from "react-hook-form/dist/types";

export interface PinCodeForm {
  pincode: number;
}

export const PinCodeFormSchema: any = {
  pincode: {
    required: "Pin code is required",
    pattern: {
      value: /^[0-9]{6}$/,
      message: "Invalid pin code. Please enter a valid 6-digit pin code.",
    },
  },
};

export type PinCodeSubmitHandler = SubmitHandler<PinCodeForm>;
