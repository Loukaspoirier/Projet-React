import Form from "react-bootstrap/Form";

export default function CheckExample() {
  return (
    <Form>
      {["checkbox"].map((type) => (
        <div key={``} className="mb-3">
          <Form.Check type={type} id={`${type}`} />
        </div>
      ))}
    </Form>
  );
}
