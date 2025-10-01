import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [info, setInfo] = useState<string>("Your Name");
    const [editable, seteditable] = useState<boolean>(false);
    const [Student, setStudent] = useState<boolean>(true);

    function updateEdits(event: React.ChangeEvent<HTMLInputElement>) {
        seteditable(event.target.checked);
    }

    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }

    function updateInfo(event: React.ChangeEvent<HTMLInputElement>) {
        setInfo(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Switch
                type="switch"
                id="Is_editable"
                label="Editable?"
                checked={editable}
                onChange={updateEdits}
            />
            <Form.Check
                type="checkbox"
                id="Is_Student"
                label="Are you a student?"
                checked={Student}
                onChange={updateStudent}
            />

            <Form.Group controlId="formInformation">
                <Form.Label>Information</Form.Label>
                <Form.Control
                    value={info}
                    onChange={updateInfo}
                    disabled={!editable}
                />
            </Form.Group>

            <div>
                {!Student ? info + " is not a student" : info + " is a student"}
            </div>
        </div>
    );
}
