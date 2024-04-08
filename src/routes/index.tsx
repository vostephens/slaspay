import React, { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import UseScrollToTop from "@hooks/useScrollToTop"
import Home from "@views/Home"
import SignIn from "@views/Auth/SignIn"
import SignUp from "@views/Auth/SignUp"
import { URL } from "@configs/index"
import { ROUTE_LIST } from "@configs/routesList"
import PublicRoute from "@routes/Public/index"
import PrivateRoute from "@routes/Private/index"
import MainLayout from "@layouts/index"
import Header from "@components/Header"
import Footer from "@components/Footer"

const MainRouter = () => {
  return (
    <Fragment>
      <UseScrollToTop />
      <Routes>
        {ROUTE_LIST.map(({ link, element: Component, isLayout }, i) => (
          <Route
            key={"routes---" + i}
            path={link}
            element={
              isLayout ? (
                <>
                  <MainLayout>
                    <Component />
                  </MainLayout>
                  <Footer />
                </>
              ) : (
                <>
                  <Header />
                  <Component />
                  <Footer />
                </>
              )
            }
          />
        ))}
      </Routes>
    </Fragment>
  )
}

export default MainRouter
