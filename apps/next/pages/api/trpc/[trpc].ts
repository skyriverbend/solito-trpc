import * as trpcNext from '@trpc/server/adapters/next'
import { appRouter } from '@my/trpc/appRouter'

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
})
