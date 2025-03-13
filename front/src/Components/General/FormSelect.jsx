import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";

export default function FormSelect(props) {
  return (
    <div>
      <Form.Select aria-label="Default select example">
        <option>{props.message}</option>
        <option value="1">{props.value1}</option>
        <option value="2">{props.value2}</option>
        <option value="3">{props.value3}</option>
        <option value="4">{props.value4}</option>
        <option value="5">{props.value5}</option>
      </Form.Select>
      <Button type="submit" className="btn btn-primary mt-2">Valider</Button>
    </div>
  );
}
