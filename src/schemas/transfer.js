import { z } from "zod";

export const transferSchema = z
  .object({
    _csrf: z
      .string({
        required_error: "Token CSFR is required",
      }),
    numberAccountFrom: z
      .string({
        required_error: "Number Account From is required",
      }),
    numberAccountTo: z
      .string({
        required_error: "Number Account To is required",
      }),
    amount: z
      .number({
        required_error: "Amount is required",
      })
  })
