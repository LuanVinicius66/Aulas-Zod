import { z } from "zod";

const pattern = z.object({
  age: z.union([z.string(), z.number()]),
});

const result = pattern.parse({
  age: 24,
});
console.log(result);
