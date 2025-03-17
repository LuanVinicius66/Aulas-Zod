import z from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  age: z.number().min(18).max(99),
});

type User = z.infer<typeof schema>;

let data = {
  name: "Luan",
  email: "luan.santos@rspneus.com.br",
  age: 18,
};

const result = schema.parse(data);
console.log(result);
