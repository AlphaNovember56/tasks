import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [leftDie, setleftDie] = useState<number>(1);
    const [rightDie, setrightDie] = useState<number>(2);

    function roll_left(): void {
        setleftDie(d6);
    }
    function roll_right(): void {
        setrightDie(d6);
    }
    return (
        <div>
            <Button onClick={roll_left}>Roll Left</Button>

            <Button onClick={roll_right}>Roll Right</Button>
            <div>
                <span data-testid="left-die">Left Die: {leftDie}</span>

                <span data-testid="right-die">Right Die: {rightDie}</span>
            </div>
            {leftDie === 1 && leftDie === rightDie && <div>You Lose</div>}

            {leftDie !== 1 && leftDie === rightDie && <div>You Win</div>}
        </div>
    );
}
