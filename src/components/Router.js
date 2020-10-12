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
                    <div
                        style={{
                            maxWidth: 890,
                            width: "100%",
                            margin: "0 auto",
                            marginTop: 80,
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Route exact path="/">
                            <Home userObj={userObj}></Home>
                        </Route>
                        <Route exact path="/profile">
                            <Profile userObj={userObj} refreshUser={refreshUser}></Profile>
                        </Route>
                    </div>
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
