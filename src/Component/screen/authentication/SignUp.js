import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

import "/Users/kerinshah/FullStack/MERN/INSTA/React/client/src/App.css";

export default function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className="myCard">
            <div className="card auth-card input-field">
                <h2 className="logo purple-text text-lighten-1">Instagram </h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button
                    className="btn waves-effect waves-light purple lighten-2"
                    onClick={() => postdata()}
                >
                    Signup
                </button>
                <p>
                    {" "}
                    <Link to="/signin">
                        <u>Already Have An Account ?</u>
                    </Link>
                </p>
            </div>
        </div>
    );
}