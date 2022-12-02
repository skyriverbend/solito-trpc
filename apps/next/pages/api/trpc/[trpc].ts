import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@my/trpc'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
