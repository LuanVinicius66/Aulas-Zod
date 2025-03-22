import { z } from "zod";

export const jsonplaceholderResponse = z.array(
    z.object({
        userId: z.number(),
        id: z.number(),
        title: z.string(),
        body: z.string()
    })
);