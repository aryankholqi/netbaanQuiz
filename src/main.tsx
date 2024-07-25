import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { tanstackQueryOptions } from './configs/tasntackQuery.ts'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes";


const queryClient = new QueryClient({ defaultOptions: tanstackQueryOptions })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          <App />
        </NextThemesProvider>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
