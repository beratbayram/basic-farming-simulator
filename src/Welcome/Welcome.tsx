import "./Welcome.scss";

import Login from "./Login";
import SignUp from "./SignUp";

export default function Welcome() {
    return (
        <>
            <div>
                <h3>Welcome to</h3>
                <h1>Basic Farming Simulator</h1>
            </div>
            <div className="Welcome">
                <Login/>
                <SignUp/>
            </div>
        </>
    );
}