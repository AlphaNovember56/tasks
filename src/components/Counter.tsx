import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function Counter(): React.JSX.Element {
    const [value, setValue] = useState<number>(0);

    function newVal(): void {
        setValue(value + 1);
    }

    return (
        <span>
            <Button onClick={newVal}>Add One</Button>
            to {value}.
        </span>
    );
}
