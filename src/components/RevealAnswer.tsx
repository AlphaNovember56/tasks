import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [Answer, setAnswer] = useState<boolean>(false);

    function flipAnswer(): void {
        setAnswer(!Answer);
    }
    return (
        <div>
            <Button onClick={flipAnswer}>Reveal Answer</Button>
            {Answer && <div>42</div>}
        </div>
    );
}
