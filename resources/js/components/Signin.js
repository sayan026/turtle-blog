import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Axios from "axios";
import * as act from "../store/actions/auth";

const Signin = props => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const signinHandler = () => {
        return Axios.post("/api/signin", formData)
        .then(res => {
            dispatch(act.auth(res.data));
            alert("Signin successful");
            location.replace("/home");
        })
        .catch(err => {
            alert(err.response.data.message);
            setFormData({
                email: "",
                password: ""
            });
        });
    }

    return (
        <div className="row justify-content-center">
            <div className="col-4 p-5">
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                id="email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                id="password"
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>

                        <button type="button" className="btn btn-primary" onClick={() => signinHandler()}>Signin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin;
