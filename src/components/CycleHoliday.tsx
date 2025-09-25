import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday_type =
    | "🎄" //christmas
    | "🎃" //halloween
    | "🐰" // easter
    | "🎆" // new year
    | "🦃"; // thanksgiving

const Date_transition: Record<Holiday_type, Holiday_type> = {
    "🎆": "🐰",
    "🐰": "🎃",
    "🎃": "🦃",
    "🦃": "🎄",
    "🎄": "🎆",
};

const Alphabet_transition: Record<Holiday_type, Holiday_type> = {
    "🎄": "🐰",
    "🐰": "🎃",
    "🎃": "🎆",
    "🎆": "🦃",
    "🦃": "🎄",
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday_type>("🎄");

    function changeHoliday_A(): void {
        const newHoliday = Alphabet_transition[holiday];
        setHoliday(newHoliday);
    }
    function changeHoliday_D(): void {
        const newHoliday = Date_transition[holiday];
        setHoliday(newHoliday);
    }

    return (
        <div>
            <Button onClick={changeHoliday_A}>Advance by Alphabet</Button>
            <Button onClick={changeHoliday_D}> Advance by Year </Button>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
