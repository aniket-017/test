import React, { useState, useEffect } from "react";
import "../component/body/Main.css";
import { useDispatch, useSelector } from "react-redux";
import { updateVenue } from "../actions/venueActions"; // Import your updateVenue action
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  faBackward,
  faHouse,
  faCircleInfo,
  faLocationDot,
  faScrewdriverWrench,
  faCashRegister,
  faClockRotateLeft,
  faGavel,
  faTree,
  faTruckField,
  faUsers,
  faFileContract,
} from "@fortawesome/free-solid-svg-icons";

// Import your other icons here...

// Import the StepComponents for updating the form
import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10 } from "./UpdateStepComponents.js";

const UpdateMain = () => {
const location = useLocation();
console.log("state:- ",location.state.selectedVenue);
const selectedVenue = location.state.selectedVenue;
  // const venues = useSelector((state) => state.venue.venues);
  
  // const { id } = useParams(); // Extract the venue ID from the URL parameters
  // const selectedVenue = venues.find((venue) => venue._id === id);
  // console.log("venues:- ",selectedVenue);
  // // console.log( );
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.venue);
  const { user } = useSelector((state) => state.user);

  const [step, setStep] = useState(1);
  // Define the rest of your state variables for updating the form...
  const [indata, setIndata] = useState(selectedVenue); // Initialize with selectedVenue data

  const [formData, setFormData] = useState(selectedVenue); // Initialize with selectedVenue data



  const handleDateRangeChange = (newDateRange) => {
    console.log(newDateRange);
    // setAvailabilityDateRange(newDateRange);
  };

  // Define your handleChange, handleSubmit, and other functions...
  const handleChange = (event) => {
    const { name, value, type } = event.target;

    const updatedFormData = { ...formData };

    if (type === "radio") {
      const [section, field] = name.split(".");
      updatedFormData[section][field] = value;
    } else if (type === "file") {
      const files = Array.from(event.target.files);
      const [section, field] = name.split(".");
      updatedFormData[section][field] = files;
    } else {
      const [section, field] = name.split(".");
      updatedFormData[section][field] = value;
    }

    setFormData(updatedFormData);
  };

  const handleCancelUpdate = async() => {

    await setFormData(indata);
    navigate(-1); // Navigate back without saving
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Dispatch the updateVenue action with the updated formData
      console.log(formData);
      await dispatch(updateVenue(selectedVenue._id, formData)); // Assuming you've imported and defined updateVenue action

      // Handle success (e.g., show a success message, redirect, etc.)
      console.log("Venue updated successfully!");
      // You can add your success handling logic here, such as showing a success message or redirecting the user
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error("Error updating venue:", error);
      // You can add your error handling logic here, such as showing an error message to the user
    }
  };

  const steps = [
    <FontAwesomeIcon icon={faCircleInfo} size="2xl" />,
    <FontAwesomeIcon icon={faLocationDot} size="2xl" />,
    <FontAwesomeIcon icon={faScrewdriverWrench} size="2xl" />,
    <FontAwesomeIcon icon={faCashRegister} size="2xl" />,
    <FontAwesomeIcon icon={faClockRotateLeft} size="2xl" />,
    <FontAwesomeIcon icon={faGavel} size="2xl" />,
    <FontAwesomeIcon icon={faTree} size="2xl" />,
    <FontAwesomeIcon icon={faTruckField} size="2xl" />,
    <FontAwesomeIcon icon={faUsers} size="2xl" />,
    <FontAwesomeIcon icon={faFileContract} size="2xl" />,
  ];

  // Similar rendering structure as your Main component...
  return (
    <div className="container">
      <div className="refer">
        <button type="button" className="back-button " onClick={handleCancelUpdate}>
          {/* <FontAwesomeIcon icon={faBackward} />&nbsp;&nbsp; */}
          Back &nbsp;&nbsp;
          <FontAwesomeIcon icon={faHouse} />
        </button>
      </div>
      <div>
        <div className="stepper-container">
          <button type="button" className="back-button mv" onClick={() => navigate(-1)}>
            {/* <FontAwesomeIcon icon={faBackward} />&nbsp;&nbsp; */}
            {/* <FontAwesomeIcon icon={faHouse} size="1x"/>  */}
            <FontAwesomeIcon icon={faBackward} />
            &nbsp;&nbsp;<span>Home</span>
          </button>
          <div className="stepper">
            {steps.map((stepLabel, index) => (
              <div
                key={index}
                className={`step ${step === index + 1 ? "active" : ""} ${step > index + 1 ? "previous" : ""}`}
              >
                {/* <h1 className="steplabel"> {stepLabel}</h1> */}
                {stepLabel}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <form
          className="updateForm"
          encType="multipart/form-data"
          //   onSubmit={handleSubmit}
        >
          {step === 1 && <Step1 basicInfo={formData.basicInfo} handleChange={handleChange} />}
          {step === 2 && <Step2 locationInfo={formData.locationInfo} handleChange={handleChange} />}
          {step === 3 && <Step3 ServicesInfo={formData.ServicesInfo} handleChange={handleChange} />}
          {step === 4 && (
            <Step4
              BookingInfo={formData.BookingInfo}
              handleChange={handleChange}
              setDateRange={handleDateRangeChange}
            />
          )}
          {step === 5 && <Step5 PastEventInfo={formData.PastEventInfo} handleChange={handleChange} />}
          {step === 6 && <Step6 LegalInfo={formData.LegalInfo} handleChange={handleChange} />}
          {step === 7 && <Step7 EnvirInfo={formData.EnvirInfo} handleChange={handleChange} />}
          {step === 8 && <Step8 VendorsInfo={formData.VendorsInfo} handleChange={handleChange} />}
          {step === 9 && <Step9 DemographicInfo={formData.DemographicInfo} handleChange={handleChange} />}
          {step === 10 && <Step10 formData={formData} handleSubmit={handleSubmit} />}

          <div className="form-buttons">
            {step > 1 && (
              <button type="button" onClick={() => setStep(step - 1)}>
                Previous
              </button>
            )}
            {step < 10 && (
              <button type="button" onClick={() => setStep(step + 1)}>
                Next
              </button>
            )}
          </div>
        </form>
      </div>

      {loading ? <p>Loading...</p> : <>{error && <p className="error-message">{error}</p>}</>}
    </div>
  );
};

export default UpdateMain;
