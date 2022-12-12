import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CurrencyDynamic from "./pages/CurrencyDynamic"
import CurrenciesToDate from "./pages/CurrenciesToDate"
import Converter from "./pages/Converter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: (
      <div id='error-page'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <CurrenciesToDate />,
      },
      {
        path: "currencies-dynamic",
        element: <CurrencyDynamic />,
      },
      {
        path: "converter",
        element: <Converter />,
      },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
