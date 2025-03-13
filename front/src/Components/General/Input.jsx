import Form from "react-bootstrap/Form";

export default function Input(props) {
  const texte = "Ecrivez votre ";
  return (
    <Form.Group>
      <Form.Label>{props.label + ":"}</Form.Label>
      <Form.Control
        className={props.class}
        id={props.id}
        type={props.type}
        placeholder={texte + props.label}
      />
    </Form.Group>
  );
}
