import { z } from "zod";

const pattern = z.object({
  name: z.literal('Luan'),
});

const result = pattern.parse({
  name: 'Luan'
})

console.log(result);