import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "./context/auth"

export default function AdminRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser && currentUser.email === 'marto65481@gmail.com' ? <Component {...props} /> : <Redirect to="/" />
      }}
    ></Route>
  )
}