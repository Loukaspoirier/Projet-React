import React, { useState, useEffect } from "react";
import PhotoCard from "../../Components/Photo/PhotoCard";
import Modal from "react-modal";
import NavBar from "../../Components/General/Navbar/NavBar";

export default function PhotoPage() {
  // State variables for managing modal state and photo data
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Fetching photos from the backend server when the component mounts
  useEffect(() => {
    fetchPhotos();
  }, []);

  // Function to fetch photos from the backend server
  const fetchPhotos = async () => {
    try {
      const response = await fetch("/photo");
      if (!response.ok) {
        throw new Error("Error fetching photos");
      }
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  // Function to open the modal and set the selected photo
  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
  };

  // Rendering the photo page with navbar, photo cards, and modal for displaying selected photo details
  return (
    <div className="bg-line-7">
      <NavBar />
      <div className="d-flex flex-wrap justify-content-center">
        {photos.map((photo) => (
          <PhotoCard
            key={photo.id} // Key prop is necessary for list rendering
            image={photo.image}
            onClick={() => openModal(photo)}
          />
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Photo Modal"
        style={{
          content: {
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          },
        }}
      >
        {selectedPhoto && (
          <>
            <div className="row">
              <div className="col-lg-10">
                <img
                  className="Photo-max-Width-50 img-fluid rounded-3"
                  src={selectedPhoto.image}
                  alt="Selected"
                />
              </div>
              <div className="col-lg-2">
                <h2 className="d-flex justify-content-center">
                  {selectedPhoto.title}
                </h2>
                <br />
                <div className="ms-3">
                  <p className="text-justify">{selectedPhoto.description}</p>
                </div>
                <br />
                <div className="text-end">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={closeModal}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
}
