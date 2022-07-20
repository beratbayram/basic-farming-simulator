import {FormEvent} from "react";

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement
    password: HTMLInputElement
    id: HTMLInputElement
}

async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const fields = (event.target as HTMLFormElement).elements as FormElements;
}

export default function SignUp() {
    return (
        <div className="SignUp">
            <h2>Sign Up</h2>
            <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <input type="text" placeholder="Farm Name"/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}
