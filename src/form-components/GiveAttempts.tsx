import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
export function GiveAttempts(): React.JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [moreAttempts, setMoreAttempts] = useState<string>("0");

    function giveMore(event: React.ChangeEvent<HTMLInputElement>) {
        setMoreAttempts(event.target.value);
    }

    function updateAttempts() {
        const num = parseInt(attemptsLeft) - 1;
        setAttemptsLeft(num.toString());
    }

    function updateGains() {
        const num =
            parseInt(attemptsLeft) +
            (moreAttempts === "" ? 0 : parseInt(moreAttempts));
        setAttemptsLeft(num.toString());
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>How Many More Attempts?</Form.Label>
                <Form.Control
                    type="number"
                    value={moreAttempts}
                    onChange={giveMore}
                />
            </Form.Group>
            <Button
                onClick={updateAttempts}
                disabled={parseInt(attemptsLeft) <= 0}
            >
                use
            </Button>
            <Button onClick={updateGains}>gain</Button>
            <div>Attempts Left: {attemptsLeft}</div>
        </div>
    );
}
