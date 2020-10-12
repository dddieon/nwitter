import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Home from "routes/Home"
import Auth from "routes/Auth"
import Profile from "routes/Profile"
import Navigation from "./Navigation"

const AppRouter = ({ isLoggedIn, userObj, refreshUser }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation userObj={userObj}></Navigation>}
            <Switch>
                {isLoggedIn ? (
                    <>
                        <Route exact path="/">
                            <Home userObj={userObj}></Home>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser}></Profile>
                        </Route>
                    </>
                ) : (
                    <Route exact path="/">
                        <Auth></Auth>
                    </Route>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter
