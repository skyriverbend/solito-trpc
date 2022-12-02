import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { TRPCProvider } from './utils/trpc'

export default function App() {
  return (
    <TRPCProvider>
      <Provider>
        <NativeNavigation />
      </Provider>
    </TRPCProvider>
  )
}
