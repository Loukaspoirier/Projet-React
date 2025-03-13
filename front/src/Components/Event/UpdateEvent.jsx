import Button from "../General/Tools/Button/Button";
import { useNavigate } from "react-router-dom";

export default function UpdateEvent(props) {
  // React hook for navigation
  const navigate = useNavigate();

  // Redirect to the event update page in the back office corresponding to the id of the event
  function redirect() {
    navigate(`/event/back/update/${props.id}`);
  }

  // Return a button component to trigger the redirection
  return (
    <div>
      <Button onClick={redirect} description="Modifier" type="button" />
    </div>
  );
}
