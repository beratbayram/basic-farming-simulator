import {FormEvent, useCallback} from "react";
import {NavigateFunction, useNavigate} from "react-router";

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement
    password: HTMLInputElement
}

async function handleSubmit(event: FormEvent, navigate: NavigateFunction) {
    event.preventDefault();
    const fields = (event.target as HTMLFormElement).elements as FormElements;
    navigate("home");
}

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="Login">
            <h2>Login</h2>
            <form onSubmit={e => handleSubmit(e,navigate)}>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
