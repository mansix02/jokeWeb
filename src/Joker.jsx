import { useState, useEffect } from "react";

export default function Joker() {
    let [joke, setJoke] = useState({});

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});
    };

    useEffect(()=>(
        async function getFirstJoke() {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup: jsonResponse.setup, punchline: jsonResponse.punchline});   
        }
    ),[]);

    return(
        <>
        <h2>Click the Button to get joke</h2>
        <h4>{joke.setup}</h4>
        <h4>{joke.punchline}</h4>
        <button onClick={getNewJoke}>New Joke</button>
        </>
    );
};