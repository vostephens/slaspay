import React, { Suspense } from "react"
import ReactDom from "react-dom/client"
import { Toaster } from "react-hot-toast"
import { Provider } from "react-redux"
import "@assets/styles/index.scss"
import PropsProvider from "@contexts/PropsContext"
import MainRouter from "@routes/index"
import ModalWrapper from "@modals/index"
import { store } from "@store/index"
import { BrowserRouter } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const rootElement: HTMLElement = document.getElementById("root")!

const root = ReactDom.createRoot(rootElement)

root.render(
  <Suspense fallback={null}>
    <BrowserRouter>
      <Provider store={store}>
        <PropsProvider>
          <MainRouter />
          <Toaster position="top-center" reverseOrder={false} />
          <ModalWrapper />
        </PropsProvider>
      </Provider>
    </BrowserRouter>
    <ToastContainer />
  </Suspense>
)
