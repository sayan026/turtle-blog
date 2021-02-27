import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { axios } from "../store/service";
import * as act from "../store/actions/auth";

const Home = props => {
    const user = useSelector(state => state.auth.user);
    const dispatch = useDispatch();

    if (user === null) {
        return <Redirect to="/" />
    }

    const signOut = () => {
        return axios.get("/api/signout")
        .then(res => {
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("user");
            alert("Signout successful");
            location.replace("/");
        })
        .catch(err => {
            alert(err.response.data.message);
        });
    }

    return (
        <div className="p-5">
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Welcome, { user.name }</a>
                    <button className="btn btn-outline-primary" onClick={() => signOut()}>Logout</button>
                </div>
            </nav>
        </div>
    );
}

export default Home;
