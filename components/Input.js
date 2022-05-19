import {useState} from "react"
import styled from "styled-components"

export default function Input({ addGratitude }) {
    const [value, setValue] = useState("");
    const [ath, setAth] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        addGratitude(value);
        setValue("");
        setAth("");
    }

    return (
        <Form onSubmit={handleSubmit}>
            <label htmlFor="new-gratitude">Sign the Wall</label>
            <input maxLength={40} id="new-gratitude" value={value} onChange={(e) => setValue(e.target.value)}/>
        </Form>
    )
}

const Form = styled.form`
    font-size: 1.4rem;
    text-align: left;
    display: flex;
    flex-direction: column;

    label {
        font-size: 1rem;
        padding: 5px;
    }

    input {
        background: transparent;
        color: white;
        font-size: inherit;
        padding: 10px;
        border: 3px solid var(--burnt);
        border-radius: 5px;
    }
`