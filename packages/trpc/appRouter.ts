import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { z } from 'zod'

const t = initTRPC.create({
  transformer: superjson,
})

export const appRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `hello ${input?.text ?? 'world'}`,
      }
    }),
})

// export type definition of API
export type AppRouter = typeof appRouter
