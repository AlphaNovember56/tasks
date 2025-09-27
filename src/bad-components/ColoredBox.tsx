import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];

function ChangeColor({
    DEFAULT_COLOR_INDEX,
    setDEFAULT_COLOR_INDEX,
}: {
    DEFAULT_COLOR_INDEX: number;
    setDEFAULT_COLOR_INDEX: (newIndex: number) => void;
}): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <Button
            onClick={() => {
                setColorIndex((1 + colorIndex) % COLORS.length);
                setDEFAULT_COLOR_INDEX(
                    (1 + DEFAULT_COLOR_INDEX) % COLORS.length,
                );
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({
    DEFAULT_COLOR_INDEX,
}: {
    DEFAULT_COLOR_INDEX: number;
}): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[DEFAULT_COLOR_INDEX],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [DEFAULT_COLOR_INDEX, setDEFAULT_COLOR_INDEX] = useState<number>(0);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[DEFAULT_COLOR_INDEX]}</span>
            <div>
                <ChangeColor
                    DEFAULT_COLOR_INDEX={DEFAULT_COLOR_INDEX}
                    setDEFAULT_COLOR_INDEX={setDEFAULT_COLOR_INDEX}
                ></ChangeColor>
                <ColorPreview
                    DEFAULT_COLOR_INDEX={DEFAULT_COLOR_INDEX}
                ></ColorPreview>
            </div>
        </div>
    );
}
