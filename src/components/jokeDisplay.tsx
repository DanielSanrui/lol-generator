import { useState } from "react";
import Button from "./button";
import RandomGif from "./randomGif";

interface Joke {
    setup: string;
    punchline: string;
}

function JokeDisplay() {
    const [joke, setJoke] = useState<Joke | null>(null);
    const [showPunchline, setShowPunchline] = useState(false);
    const [error, setError] = useState(false);

    const fetchJoke = async () => {
        setError(false); // Resetear error antes de la nueva petición
        setShowPunchline(false); // Resetear punchline también

        try {
            const response = await fetch("https://official-joke-api.appspot.com/random_joke");
            if (!response.ok) throw new Error("Failed to fetch joke");

            const data = await response.json();
            setJoke(data);
        } catch {
            setError(true);
            setJoke(null); // Eliminar el chiste anterior en caso de error
        }
    };

    return (
        <div>
            <Button onClick={fetchJoke} text="Get Joke" />

            {error && (
                <div className="error-container">
                    <p>Something went wrong, it's no joke :(</p>
                    <img src="./img/sad-pikachu.gif" alt="Error GIF" />
                </div>
            )}

            {!error && joke && (
                <div className="joke-container">
                    <p>{joke.setup}</p>
                    <Button onClick={() => setShowPunchline(true)} text="Reveal Punchline" />
                    {showPunchline && (
                        <div className="punchline-container">
                            <p>{joke.punchline}</p>
                            <RandomGif show={showPunchline} />
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default JokeDisplay;
