import { useNavigate } from "react-router-dom";
import Button from "./Button";

export default function RedirectButton(props) {
  const navigate = useNavigate();
  function redirect() {
    navigate(props.link);
  }
  return (
    <Button
      type={props.type}
      onClick={redirect}
      description={props.description}
    />
  );
}
