import { z } from "zod";

const pattern = z.object({
  name: z.string(),
  age: z.number().default(18),
  magics: z.string().array()
});

const result = pattern.parse({
  name: 'Luan',
  age: 24,
  magics: ['Agua', 'Fogo', 'Caldo']
});
console.log(result);
