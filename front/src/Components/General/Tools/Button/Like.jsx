import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Likes(props) {
    const navigate = useNavigate();
    const [id, setId] = useState(localStorage.getItem('id'));

    const [formData, setFormData] = useState({
        likes: 0,
        id: id
    });

    const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, values } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: values,
    }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        // send data to the back
        sendDataToBackend(formData);
    };

    const sendDataToBackend = (data) => {
        if (props.id) {
            fetch('http://127.0.0.1:8000/activity/update/love/' + props.id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    // ok message
                    console.log('Réponse du serveur :', response);
                    props.reload();
                })
                .catch(error => {
                    // error message
                    console.error('Erreur lors de l\'envoi des données :', error);
                })
            redirect()
        } else {
            fetch('http://127.0.0.1:8000/activity/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    // ok message
                    console.log('Réponse du serveur :', response);
                    props.reload();
                })
                .catch(error => {
                    // error message
                    console.error('Erreur lors de l\'envoi des données :', error);
                })
            redirect()
        }
  };

  function redirect() {
    navigate("/activity");
  }

  function addLike() {
    console.log(formData.likes);
    if (formData.likes == 1) {
        formData.likes = 0;
        sendDataToBackend({likes: formData.likes, id: formData.id});
    } else {
        formData.likes = 1;
        sendDataToBackend({likes: formData.likes, id: formData.id});
    }
}

    return (
        <Form onSubmit={handleSubmit} className="">
            <div>
                <div style={{ backgroundColor: "#FFD200", width: "75px", height: "75px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%" }}>
                <input type="submit" onClick={addLike} value={" "} onChange={handleChange} values={formData.likes} name="likes" className={"like" + props.idFormData} />
                </div>
                <div  className="d-flex justify-content-center" style={{ width: "75px", height: "75px"}}>
                    <span className="text-center">{props.likes}</span>
                </div>
            </div>
        </Form>
    );
    }