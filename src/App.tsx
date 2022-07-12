import { ApolloProvider, gql,useQuery } from "@apollo/client"
import { BrowserRouter} from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./components/Router"

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>

    </div>
  )
}
export default App
