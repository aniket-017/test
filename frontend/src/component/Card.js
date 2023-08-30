import React, { Fragment, useState, useEffect, useRef } from "react";
import "./HorizontalCard.css"; // Import your CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { getAllVenues, deleteVenue } from "../actions/venueActions";
import { useSelector, useDispatch } from "react-redux";
import Nav from "./body/Nav";
import UpdateVenueForm from "./UpdateVenueForm.js";
import { useNavigate } from "react-router-dom";


const HorizontalCard = () => {
  // Dummy data
  const navigate = useNavigate();


  const venues = useSelector((state) => state.venue.venues);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVenues());
  }, [dispatch]);

  // State variables for delete functionality
  const [showDeleteSuccessMessage, setShowDeleteSuccessMessage] =
    useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  const deleteVenueHandler = async (id) => {
    // await setDisplayUpdateForm(false);
    setSelectedVenue({ _id: id }); // Set the selected venue for deletion
    setShowDeleteSuccessMessage(true); // Show the delete confirmation message
  };

  const confirmVenueDeletion = () => {
    console.log("called");
    dispatch(deleteVenue(selectedVenue._id))
      .then(() => {
        setShowDeleteSuccessMessage(false);
        setSelectedVenue(null);
      })
      .catch((error) => {
        console.error("Venue deletion error:", error);
      });
  };

  const cancelVenueDeletion = () => {
    setShowDeleteSuccessMessage(false);
    setSelectedVenue(null);
  };

  const [displayPage1, setDisplayPage1] = useState(false);
  const [displayUpdateForm, setDisplayUpdateForm] = useState(false);
  
  const handleUpdateClick = (venue) => {
    // setDisplayPage1(false);
    navigate(`/update/${venue._id}`, { state: { selectedVenue: venue } });
    // setSelectedVenue(venue);
    // setDisplayUpdateForm(true);
    // Scroll to the UpdateVenueForm component
    // updateVenueFormRef.current.scrollIntoView({ behavior: 'smooth' });
    // updateVenueFormRef.current.scrollIntoView({ top: 0, behavior: "smooth" });
  };

  const [keyword, setKeyword] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
 const currentPage = 1;
  const handleChange = (event) => {
   
    setKeyword(event.target.value);
    // console.log(keyword)
  }
  useEffect(() => {
    dispatch(getAllVenues(keyword, currentPage));
  }, [dispatch, keyword, currentPage]);

  return (
    <div>
      <Nav handleChange={handleChange}/>
      <div className="horizontal-card-container">
        {venues.map((venue) => (
          <div className="horizontal-card">
            <div>
              <div className="info">
                <div className="left">
                  <div className="top">{venue.basicInfo.venueName}</div>
                  <div className="bottom">{venue.basicInfo.venueAddress}</div>
                </div>

                <div className="right">
                  <div className="top">{venue.basicInfo.phoneNumber}</div>
                  <div className="bottom">{venue.basicInfo.email}</div>
                </div>

                <div className="actions">
                  <div className="top icon"
                    onClick={() => handleUpdateClick(venue)}>
                    <FontAwesomeIcon icon={faPencil} />
                  
                  </div>
                  <div
                    className="bottom icon"
                    onClick={() => deleteVenueHandler(venue._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </div>
                </div>
              </div>
            </div>

            <div className="creator">
              <div>{venue.user}</div>
              <div>Created By : </div>
            </div>
          </div>
        ))}
      </div>

      {showDeleteSuccessMessage && (
        <div className="delete-success-message">
          <p>Are you sure you want to delete this venue?</p>
          <button className="yes-button" onClick={confirmVenueDeletion}>
            Yes
          </button>
          <button className="no-button" onClick={cancelVenueDeletion}>
            No
          </button>
        </div>
      )}

      <div>
            {displayUpdateForm && selectedVenue && (
              <UpdateVenueForm
                selectedVenue={selectedVenue}
                // onCancel={handleCancelUpdate}
                // onUpdate={updateVenue}
                // onSuccess={setShowSuccessMessage}
                // close={setDisplayUpdateForm}
              />
            )}
          </div>
    </div>
  );
};

export default HorizontalCard;
