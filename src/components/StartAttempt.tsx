import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [quiz, setQuiz] = useState<boolean>(false);

    const [Attempt, setAttempt] = useState<number>(4);

    function flipOn(): void {
        setQuiz(true);
        setAttempt(Attempt - 1);
    }
    function flipOff(): void {
        setQuiz(false);
    }
    function mulligan(): void {
        setAttempt(Attempt + 1);
    }

    const disable = quiz || Attempt === 0;

    return (
        <div>
            <Button onClick={flipOn} disabled={disable}>
                Start Quiz
            </Button>
            <Button onClick={flipOff} disabled={!quiz}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={quiz}>
                Mulligan
            </Button>
            <div>Attempts left: {Attempt}</div>
        </div>
    );
}
