import { BrowserRouter , Routes , Route } from "react-router-dom"
import { ThemeProvider } from "./context/theme-provider"
import { Layout } from "./components/layout";
import { WeatherDashboard } from "./pages/weather-dashboard";


import { CityPage } from "./pages/city-page";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, 
      gcTime: 10 * 60 * 1000, 
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {


 

  return (
  
  <QueryClientProvider client={queryClient}>


    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>

    <Route path='/'
    element={ <WeatherDashboard/>} />

 <Route path='/city/:cityName' element={ <CityPage/>} />
      </Routes>


     </Layout>

        </ThemeProvider>
      </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={false} />

          </QueryClientProvider>

  )
}

export default App