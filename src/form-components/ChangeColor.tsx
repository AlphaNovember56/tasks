import React, { useState } from "react";
import { Form } from "react-bootstrap";

const color = [
    "red",
    "blue",
    "green",
    "purple",
    "yellow",
    "orange",
    "pink",
    "gray",
];

export function ChangeColor(): React.JSX.Element {
    const [colors, setColors] = useState<string>(color[0]);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColors(event.target.value);
    }

    return (
        <div>
            <h3>Change Color</h3>
            {color.map((color: string) => (
                <Form.Check
                    inline
                    key={color}
                    type="radio"
                    name="colors"
                    onChange={updateColor}
                    id="ColorChange"
                    label={color}
                    value={color}
                    checked={colors === color}
                    style={{
                        backgroundColor: color,
                    }}
                />
            ))}
            <div data-testid="colored-box" style={{ backgroundColor: colors }}>
                You Have Chosen {colors}
            </div>
        </div>
    );
}
