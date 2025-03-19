import { z } from "zod";

const pattern = z.object({
  age: z
    .number({
      required_error: "Idade é obrigatória!!",
      invalid_type_error: "Formatos de dados incorretos",
    })
    .gte(18, "Apenas para maiores de idade!!"),
});

const result = pattern.parse({
  age: 19,
});
console.log(result);
