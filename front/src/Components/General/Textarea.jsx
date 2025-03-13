import Form from "react-bootstrap/Form";

export default function Input(props) {
  const texte = "Ecrivez votre ";
  return (
    <Form.Group>
      <Form.Label>{props.label + ":"}</Form.Label>
      <Form.Control as="textarea" placeholder={texte + props.label} rows={10} />
    </Form.Group>
  );
}
