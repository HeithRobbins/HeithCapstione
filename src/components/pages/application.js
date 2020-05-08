import React, { useContext } from "react";
import { Router } from "react-router-dom";
import SignIn from "./signIn";
import SignUp from "./signUp";
import UserProvider from "./userProvider";
import ProfilePage from "./ProfilePage";
import { UserContext } from "./userProvider";
import PasswordReset from "./resetpw";


function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <ProfilePage />
            :
            <Router>
                <SignUp path="/signUp" />
                <SignIn path="/signIn" />
                <PasswordReset path="/resetpw" />
            </Router>

    );
}

export default Application;