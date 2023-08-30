import React, { useState } from "react";
import "../component/body/Step3.css";
import { DateRangePicker } from "react-date-range";
// import "react-date-range/dist/styles.css"; // Make sure to import the styles
// import "react-date-range/dist/theme/default.css"; // Optional theme styles
// ... Other imports ...

const Step1 = ({ basicInfo, handleChange }) => {
  // const [value, onChange] = useState('10:00');
  const photoo = basicInfo.photosVideos;
  console.log(photoo);
  return (
    <div>
      <h2>Step 1: Basic Information</h2>

      {/* Venue Name */}
      <div className="form-group">
        <h3>Venue Name</h3>
        <input
          type="text"
          name="basicInfo.venueName"
          placeholder="Venue Name"
          value={basicInfo.venueName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Venue Address */}
      <div className="form-group">
        <h3>Venue Address</h3>
        <textarea
          name="basicInfo.venueAddress"
          placeholder="Venue Address"
          value={basicInfo.venueAddress}
          onChange={handleChange}
          required
        />
      </div>

      {/* Contact Information */}
      <div className="form-group">
        <h3>Contact Information</h3>
        <input
          type="text"
          name="basicInfo.contactInformation"
          placeholder="Contact Information"
          value={basicInfo.contactInformation}
          onChange={handleChange}
        />
      </div>

      {/* Venue Type */}
      <div className="form-group">
        <h3>Venue Type</h3>
        <select
          name="basicInfo.venueType"
          value={basicInfo.venueType}
          onChange={handleChange}
        >
          <option value="">Select Venue Type</option>
          <option value="Conference Centre">Conference Centre</option>
          <option value="Hotel">Hotel</option>
          <option value="Outdoor Space">Outdoor Space</option>
          <option value="Banquet Hall">Banquet Hall</option>
          <option value="Stadium">Stadium</option>
          <option value="Auditorium">Auditorium</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Museum">Museum</option>
          {/* Add other options here */}
        </select>
      </div>

      {/* Venue Owner/Manager Information */}
      <div className="form-group">
        <h3>Venue Owner/Manager Information</h3>
        <input
          type="text"
          name="basicInfo.venueOwner"
          placeholder="Venue Owner/Manager Information"
          value={basicInfo.venueOwner}
          onChange={handleChange}
        />
      </div>

      {/* Venue Description */}
      <div className="form-group">
        <h3>Venue Description</h3>
        <textarea
          name="basicInfo.venueDescription"
          placeholder="Venue Description"
          value={basicInfo.venueDescription}
          onChange={handleChange}
        />
      </div>

      {/* Venue Category */}
      <div className="form-group">
        <h3>Venue Category</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Weddings"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Weddings")
            }
            onChange={handleChange}
          />
          Weddings
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Corporate"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Corporate")
            }
            onChange={handleChange}
          />
          Corporate Events
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Concerts"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Concerts")
            }
            onChange={handleChange}
          />
          Concerts
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Exhibitions"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Exhibitions")
            }
            onChange={handleChange}
          />
          Exhibitions
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="PrivateParties"
            checked={
              basicInfo.venueCategory &&
              basicInfo.venueCategory.includes("PrivateParties")
            }
            onChange={handleChange}
          />
          Private Parties
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Festivals"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Festivals")
            }
            onChange={handleChange}
          />
          Festivals
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Workshops"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Workshops")
            }
            onChange={handleChange}
          />
          Workshops
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.venueCategory"
            value="Seminars"
            checked={
              basicInfo.venueCategory && basicInfo.venueCategory.includes("Seminars")
            }
            onChange={handleChange}
          />
          Seminars
        </label>
        {/* Add other checkboxes here */}
      </div>

      {/* Social Media Handles */}
      <div className="form-group">
        <h3>Social Media Handles</h3>
        <input
          type="text"
          name="basicInfo.socialMediaHandles"
          placeholder="Social Media Handles"
          value={basicInfo.socialMediaHandles}
          onChange={handleChange}
        />
      </div>

      {/* Operating Hours */}
      <div className="form-group">
        <h3>Operating Hours</h3>
        <input
          type="time"
          name="basicInfo.operatingHours"
          // step="3"
          value={basicInfo.operatingHours}
          className="form-control"
          placeholder="Time"
          onChange={handleChange}
        />
      </div>

      {/* Languages Spoken */}
      <div className="form-group">
        <h3>Languages Spoken</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="English"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("English")
            }
            onChange={handleChange}
          />
          English
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Hindi"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Hindi")
            }
            onChange={handleChange}
          />
          Hindi
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Marathi"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Marathi")
            }
            onChange={handleChange}
          />
          Marathi
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Gujarati"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Gujarati")
            }
            onChange={handleChange}
          />
          Gujarati
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Bengali"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Bengali")
            }
            onChange={handleChange}
          />
          Bengali
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Tamil"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Tamil")
            }
            onChange={handleChange}
          />
          Tamil
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Telugu"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Telugu")
            }
            onChange={handleChange}
          />
          Telugu
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Kannada"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Kannada")
            }
            onChange={handleChange}
          />
          Kannada
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Malayalam"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Malayalam")
            }
            onChange={handleChange}
          />
          Malayalam
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="basicInfo.languagesSpoken"
            value="Punjabi"
            checked={
              basicInfo.languagesSpoken && basicInfo.languagesSpoken.includes("Punjabi")
            }
            onChange={handleChange}
          />
          Punjabi
        </label>
        {/* Add other checkboxes here */}
      </div>

      {/* Affiliations or Partnerships */}
      <div className="form-group">
        <h3>Affiliations or Partnerships</h3>
        <textarea
          name="basicInfo.affiliationsOrPartnerships"
          placeholder="Affiliations or Partnerships"
          value={basicInfo.affiliationsOrPartnerships}
          onChange={handleChange}
        />
      </div>

      {/* Awards and Recognitions */}
      <div className="form-group">
        <h3>Awards and Recognitions</h3>
        <textarea
          name="basicInfo.awardsAndRecognitions"
          placeholder="Awards and Recognitions"
          value={basicInfo.awardsAndRecognitions}
          onChange={handleChange}
        />
      </div>

      {/* Nearest Landmarks */}
      <div className="form-group">
        <h3>Nearest Landmarks</h3>
        <textarea
          name="basicInfo.nearestLandmarks"
          placeholder="Nearest Landmarks"
          value={basicInfo.nearestLandmarks}
          onChange={handleChange}
        />
      </div>

      {/* Public Transport Accessibility */}
      <div className="form-group">
        <h3>Public Transport Accessibility</h3>
        <textarea
          name="basicInfo.publicTransportAccessibility"
          placeholder="Public Transport Accessibility"
          value={basicInfo.publicTransportAccessibility}
          onChange={handleChange}
        />
      </div>

      {/* Emergency Services */}
      <div className="form-group">
        <h3>Emergency Services</h3>
        <textarea
          name="basicInfo.emergencyServices"
          placeholder="Emergency Services"
          value={basicInfo.emergencyServices}
          onChange={handleChange}
        />
      </div>

      {/* Photos and Videos */}
      <div className="form-group">
        <h3>Photos and Videos</h3>
        <input
          type="file"
          name="basicInfo.photosVideos"
          onChange={handleChange}
          accept="image/*, video/*"
          multiple
        />
        {/* <div className="uploaded-files">
        {photoo.map((file, index) => (
          <div key={index} className="file-preview">
            {file.type.startsWith('image/') ? (
              <img src={URL.createObjectURL(file)} alt={`Image ${index}`} />
            ) : (
              <video controls>
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div> */}
      </div>

      {/* Logo */}
      <div className="form-group">
        <h3>Logo</h3>
        <input
          type="file"
          name="basicInfo.logo"
          onChange={handleChange}
          accept="image/*"
        />
         <div className="logo-preview">
        {basicInfo.logo instanceof Blob && (
          <img src={URL.createObjectURL(basicInfo.logo)} alt="Logo" />
        )}
      </div>
      </div>

      {/* Year of Establishment */}
      <div className="form-group">
        <h3>Year of Establishment</h3>
      
         <input
         className="year-input"
        type="number"
        name="basicInfo.yearOfEstablishment"
        id="establishmentYear"
        value={basicInfo.establishmentYear}
        // value={year}
        onChange={handleChange}
        min="1900" // Adjust the minimum and maximum values as needed
        max="2099"
      />
     
        {/* Implement date input here */}
      </div>

      {/* Ownership Type */}
      <div className="form-group">
        <h3>Ownership Type</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="basicInfo.ownershipType"
            value="Privately Owned"
            checked={basicInfo.ownershipType === "Privately Owned"}
            onChange={handleChange}
          />
          Privately Owned
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="basicInfo.ownershipType"
            value="Chain"
            checked={basicInfo.ownershipType === "Chain"}
            onChange={handleChange}
          />
          Chain
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="basicInfo.ownershipType"
            value="Government-Owned"
            checked={basicInfo.ownershipType === "Government-Owned"}
            onChange={handleChange}
          />
          Government-Owned
        </label>
        {/* Add other radio buttons here */}
      </div>

      {/* Unique Identifier */}
      <div className="form-group">
        <h3>Unique Identifier</h3>
        <input
          type="text"
          name="basicInfo.uniqueIdentifier"
          placeholder="Unique Identifier"
          value={basicInfo.uniqueIdentifier}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Step2 = ({ locationInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Location Information</h2>

      <div className="form-group">
        <h3>Total Area</h3>
        <input
          type="text"
          name="locationInfo.totalArea"
          placeholder="Total Area"
          value={locationInfo.totalArea} // Update the path to access the correct nested property
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Indoor Area</h3>
        <input
          type="text"
          name="locationInfo.indoorArea"
          placeholder="Indoor Area"
          value={locationInfo.indoorArea}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Outdoor Area</h3>
        <input
          type="text"
          name="locationInfo.outdoorArea"
          placeholder="Outdoor Area"
          value={locationInfo.outdoorArea}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Seating Capacity</h3>
        <input
          type="text"
          name="locationInfo.seatingCapacity"
          placeholder="Seating Capacity"
          value={locationInfo.seatingCapacity}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Standing Capacity</h3>
        <input
          type="text"
          name="locationInfo.standingCapacity"
          placeholder="Standing Capacity"
          value={locationInfo.standingCapacity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Number of Rooms/Spaces</h3>
        <input
          type="text"
          name="locationInfo.numberOfRoomsSpaces"
          placeholder="Number of Rooms/Spaces"
          value={locationInfo.numberOfRoomsSpaces}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Layout/Floor Plan</h3>
        <input
          type="file"
          name="locationInfo.layoutFloorPlan"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Accessibility Features</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Wheelchair Access"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Wheelchair Access")
            }
            onChange={handleChange}
          />
          Wheelchair Access
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Elevator Access"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Elevator Access")
            }
            onChange={handleChange}
          />
          Elevator Access
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Ramps"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Ramps")
            }
            onChange={handleChange}
          />
          Ramps
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Accessible Restrooms"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Accessible Restrooms")
            }
            onChange={handleChange}
          />
          Accessible Restrooms
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Braille Signage"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Braille Signage")
            }
            onChange={handleChange}
          />
          Braille Signage
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.accessibilityFeatures"
            value="Parking Facilities"
            checked={
              locationInfo.accessibilityFeatures &&
              locationInfo.accessibilityFeatures.includes("Parking Facilities")
            }
            onChange={handleChange}
          />
          Parking Facilities
        </label>
      </div>

      <div className="form-group">
        <h3>Stage Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.stageAvailability"
            value="Yes"
            checked={locationInfo.stageAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.stageAvailability"
            value="No"
            checked={locationInfo.stageAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Podium Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.podiumAvailability"
            value="Yes"
            checked={locationInfo.podiumAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.podiumAvailability"
            value="No"
            checked={locationInfo.podiumAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Technical Equipment</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Sound System"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Sound System")
            }
            onChange={handleChange}
          />
          Sound System
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Lighting"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Lighting")
            }
            onChange={handleChange}
          />
          Lighting
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Projectors"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Projectors")
            }
            onChange={handleChange}
          />
          Projectors
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Screens"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Screens")
            }
            onChange={handleChange}
          />
          Screens
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Microphones"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Microphones")
            }
            onChange={handleChange}
          />
          Microphones
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="DJ Equipment"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("DJ Equipment")
            }
            onChange={handleChange}
          />
          DJ Equipment
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.technicalEquipment"
            value="Video Recording Equipment"
            checked={
              locationInfo.technicalEquipment &&
              locationInfo.technicalEquipment.includes("Video Recording Equipment")
            }
            onChange={handleChange}
          />
          Video Recording Equipment
        </label>
      </div>

      <div className="form-group">
        <h3>Parking Facilities</h3>
        <input
          type="text"
          name="locationInfo.parkingFacilities"
          placeholder="Parking Facilities"
          value={locationInfo.parkingFacilities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Parking Capacity</h3>
        <input
          type="text"
          name="locationInfo.parkingCapacity"
          placeholder="Parking Capacity"
          value={locationInfo.parkingCapacity}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Valet Parking Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.valetParkingAvailability"
            value="Yes"
            checked={locationInfo.valetParkingAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.valetParkingAvailability"
            value="No"
            checked={locationInfo.valetParkingAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Proximity to Public Transport</h3>
        <input
          type="text"
          name="locationInfo.proximityToPublicTransport"
          placeholder="Proximity to Public Transport"
          value={locationInfo.proximityToPublicTransport}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Proximity to Major Roads</h3>
        <input
          type="text"
          name="locationInfo.proximityToMajorRoads"
          placeholder="Proximity to Major Roads"
          value={locationInfo.proximityToMajorRoads}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Proximity to Airport</h3>
        <input
          type="text"
          name="locationInfo.proximityToAirport"
          placeholder="Proximity to Airport"
          value={locationInfo.proximityToAirport}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Surrounding Environment</h3>
        <textarea
          name="locationInfo.surroundingEnvironment"
          placeholder="Surrounding Environment"
          value={locationInfo.surroundingEnvironment}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Noise Restrictions</h3>
        <textarea
          name="locationInfo.noiseRestrictions"
          placeholder="Noise Restrictions"
          value={locationInfo.noiseRestrictions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Ceiling Height</h3>
        <input
          type="text"
          name="locationInfo.ceilingHeight"
          placeholder="Ceiling Height"
          value={locationInfo.ceilingHeight}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Load-in/Load-out Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.loadInOutFacilities"
            value="Yes"
            checked={locationInfo.loadInOutFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.loadInOutFacilities"
            value="No"
            checked={locationInfo.loadInOutFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Green Room Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.greenRoomAvailability"
            value="Yes"
            checked={locationInfo.greenRoomAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.greenRoomAvailability"
            value="No"
            checked={locationInfo.greenRoomAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Dressing Room Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.dressingRoomAvailability"
            value="Yes"
            checked={locationInfo.dressingRoomAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.dressingRoomAvailability"
            value="No"
            checked={locationInfo.dressingRoomAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Kitchen Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.kitchenFacilities"
            value="Yes"
            checked={locationInfo.kitchenFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.kitchenFacilities"
            value="No"
            checked={locationInfo.kitchenFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Restroom Facilities</h3>
        <input
          type="text"
          name="locationInfo.restroomFacilities"
          placeholder="Restroom Facilities"
          value={locationInfo.restroomFacilities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Power Supply/Backup</h3>
        <input
          type="text"
          name="locationInfo.powerSupplyBackup"
          placeholder="Power Supply/Backup"
          value={locationInfo.powerSupplyBackup}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Air Conditioning/Heating</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.airConditioningHeating"
            value="Yes"
            checked={locationInfo.airConditioningHeating === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.airConditioningHeating"
            value="No"
            checked={locationInfo.airConditioningHeating === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Natural Light Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.naturalLightAvailability"
            value="Yes"
            checked={locationInfo.naturalLightAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.naturalLightAvailability"
            value="No"
            checked={locationInfo.naturalLightAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Outdoor Space Description</h3>
        <textarea
          name="locationInfo.outdoorSpaceDescription"
          placeholder="Outdoor Space Description"
          value={locationInfo.outdoorSpaceDescription}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Scenic View</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.scenicView"
            value="Yes"
            checked={locationInfo.scenicView === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.scenicView"
            value="No"
            checked={locationInfo.scenicView === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Smoking Area</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.smokingArea"
            value="Yes"
            checked={locationInfo.smokingArea === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.smokingArea"
            value="No"
            checked={locationInfo.smokingArea === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Pet-Friendly</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.petFriendly"
            value="Yes"
            checked={locationInfo.petFriendly === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.petFriendly"
            value="No"
            checked={locationInfo.petFriendly === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Child-Friendly</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.childFriendly"
            value="Yes"
            checked={locationInfo.childFriendly === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.childFriendly"
            value="No"
            checked={locationInfo.childFriendly === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Noise Level</h3>
        <select
          name="locationInfo.noiseLevel"
          value={locationInfo.noiseLevel}
          onChange={handleChange}
        >
        <option value="">Select Noise Level</option>
          <option value="Quiet">Quiet</option>
          <option value="Moderate">Moderate</option>
          <option value="Loud">Loud</option>
        </select>
      </div>

      <div className="form-group">
        <h3>Nearby Parking Facilities</h3>
        <textarea
          name="locationInfo.nearbyParkingFacilities"
          placeholder="Nearby Parking Facilities"
          value={locationInfo.nearbyParkingFacilities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Security Features</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.securityFeatures"
            value="CCTV"
            checked={
              locationInfo.securityFeatures && locationInfo.securityFeatures.includes("CCTV")
            }
            onChange={handleChange}
          />
          CCTV
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.securityFeatures"
            value="Security Personnel"
            checked={
              locationInfo.securityFeatures &&
              locationInfo.securityFeatures.includes("Security Personnel")
            }
            onChange={handleChange}
          />
          Security Personnel
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.securityFeatures"
            value="Alarm System"
            checked={
              locationInfo.securityFeatures &&
              locationInfo.securityFeatures.includes("Alarm System")
            }
            onChange={handleChange}
          />
          Alarm System
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.securityFeatures"
            value="Other"
            checked={
              locationInfo.securityFeatures && locationInfo.securityFeatures.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="form-group">
        <h3>Fire Safety Measures</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.fireSafetyMeasures"
            value="Fire Extinguishers"
            checked={
              locationInfo.fireSafetyMeasures &&
              locationInfo.fireSafetyMeasures.includes("Fire Extinguishers")
            }
            onChange={handleChange}
          />
          Fire Extinguishers
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.fireSafetyMeasures"
            value="Fire Exit Signs"
            checked={
              locationInfo.fireSafetyMeasures &&
              locationInfo.fireSafetyMeasures.includes("Fire Exit Signs")
            }
            onChange={handleChange}
          />
          Fire Exit Signs
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.fireSafetyMeasures"
            value="Sprinkler System"
            checked={
              locationInfo.fireSafetyMeasures &&
              locationInfo.fireSafetyMeasures.includes("Sprinkler System")
            }
            onChange={handleChange}
          />
          Sprinkler System
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="locationInfo.fireSafetyMeasures"
            value="Other"
            checked={
              locationInfo.fireSafetyMeasures &&
              locationInfo.fireSafetyMeasures.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>
    </div>
  );
};

const Step3 = ({ ServicesInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 3: Services and Amenities</h2>

      <div className="form-group">
        <h3>Catering Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="In-House"
            checked={ServicesInfo.cateringServices === "In-House"}
            onChange={handleChange}
          />
          In-House
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="Outsourced"
            checked={ServicesInfo.cateringServices === "Outsourced"}
            onChange={handleChange}
          />
          Outsourced
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="Both"
            checked={ServicesInfo.cateringServices === "Both"}
            onChange={handleChange}
          />
          Both
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="None"
            checked={ServicesInfo.cateringServices === "None"}
            onChange={handleChange}
          />
          None
        </label>
      </div>

      <div className="form-group">
        <h3>Types of Cuisine</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Indian"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Indian")
            }
            onChange={handleChange}
          />
          Indian
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Chinese"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Chinese")
            }
            onChange={handleChange}
          />
          Chinese
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Italian"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Italian")
            }
            onChange={handleChange}
          />
          Italian
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Continental"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Continental")
            }
            onChange={handleChange}
          />
          Continental
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Vegan"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Vegan")
            }
            onChange={handleChange}
          />
          Vegan
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Gluten-Free"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Gluten-Free")
            }
            onChange={handleChange}
          />
          Gluten-Free
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Halal"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Halal")
            }
            onChange={handleChange}
          />
          Halal
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Kosher"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Kosher")
            }
            onChange={handleChange}
          />
          Kosher
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="ServicesInfo.typesOfCuisine"
            value="Other"
            checked={
              ServicesInfo.typesOfCuisine && ServicesInfo.typesOfCuisine.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="form-group">
        <h3>Bar Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.barServices"
            value="Available"
            checked={ServicesInfo.barServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.barServices"
            value="Not Available"
            checked={ServicesInfo.barServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      <div className="form-group">
        <h3>Alcohol Licensing</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.alcoholLicensing"
            value="Licensed"
            checked={ServicesInfo.alcoholLicensing === "Licensed"}
            onChange={handleChange}
          />
          Licensed
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.alcoholLicensing"
            value="Not Licensed"
            checked={ServicesInfo.alcoholLicensing === "Not Licensed"}
            onChange={handleChange}
          />
          Not Licensed
        </label>
      </div>

      <div className="form-group">
        <h3>Decor Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.decorServices"
            value="Available"
            checked={ServicesInfo.decorServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.decorServices"
            value="Not Available"
            checked={ServicesInfo.decorServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      <div className="form-group">
        <h3>Event Planning Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventPlanningServices"
            value="Available"
            checked={ServicesInfo.eventPlanningServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventPlanningServices"
            value="Not Available"
            checked={ServicesInfo.eventPlanningServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>


      <div className="form-group">
        <h3>Audio/Visual Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.audioVisualServices"
            value="Available"
            checked={ServicesInfo.audioVisualServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.audioVisualServices"
            value="Not Available"
            checked={ServicesInfo.audioVisualServices === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      <div className="form-group">
        <h3>Internet/Wi-Fi Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.internetWifiAvailability"
            value="Available"
            checked={ServicesInfo.internetWifiAvailability === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.internetWifiAvailability"
            value="Not Available"
            checked={ServicesInfo.internetWifiAvailability === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      <div className="form-group">
        <h3>Accommodation Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.accommodationAvailability"
            value="Available"
            checked={ServicesInfo.accommodationAvailability === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.accommodationAvailability"
            value="Not Available"
            checked={ServicesInfo.accommodationAvailability === "Not Available"}
            onChange={handleChange}
          />
          Not Available
        </label>
      </div>

      <div className="form-group">
        <h3>Number of Rooms (for Accommodation)</h3>
        <input
          type="text"
          name="ServicesInfo.numberOfRoomsForAccommodation"
          placeholder="Number of Rooms"
          value={ServicesInfo.numberOfRoomsForAccommodation}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
  <h3>Types of Rooms</h3>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Single"
      checked={ServicesInfo.typesOfRooms && ServicesInfo.typesOfRooms.includes("Single")}
      onChange={handleChange}
    />
    Single
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Double"
      checked={ServicesInfo.typesOfRooms && ServicesInfo.typesOfRooms.includes("Double")}
      onChange={handleChange}
    />
    Double
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Suite"
      checked={ServicesInfo.typesOfRooms && ServicesInfo.typesOfRooms.includes("Suite")}
      onChange={handleChange}
    />
    Suite
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Accessible"
      checked={ServicesInfo.typesOfRooms && ServicesInfo.typesOfRooms.includes("Accessible")}
      onChange={handleChange}
    />
    Accessible
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Other"
      checked={ServicesInfo.typesOfRooms && ServicesInfo.typesOfRooms.includes("Other")}
      onChange={handleChange}
    />
    Other
  </label>
</div>


      <div className="form-group">
        <h3>Furniture Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.furnitureAvailability"
            value="Yes"
            checked={ServicesInfo.furnitureAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.furnitureAvailability"
            value="No"
            checked={ServicesInfo.furnitureAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Types of Furniture Available</h3>
        <input
          type="text"
          name="ServicesInfo.typesOfFurnitureAvailable"
          placeholder="Types of Furniture"
          value={ServicesInfo.typesOfFurnitureAvailable}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Decor Restrictions</h3>
        <textarea
          name="ServicesInfo.decorRestrictions"
          placeholder="Decor Restrictions"
          value={ServicesInfo.decorRestrictions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Cleaning Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cleaningServices"
            value="Yes"
            checked={ServicesInfo.cleaningServices === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cleaningServices"
            value="No"
            checked={ServicesInfo.cleaningServices === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>On-Site Staff Availability</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.onSiteStaffAvailability"
            value="Yes"
            checked={ServicesInfo.onSiteStaffAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.onSiteStaffAvailability"
            value="No"
            checked={ServicesInfo.onSiteStaffAvailability === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>



      <div className="form-group">
        <h3>Event Coordination Services</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventCoordinationServices"
            value="Yes"
            checked={ServicesInfo.eventCoordinationServices === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventCoordinationServices"
            value="No"
            checked={ServicesInfo.eventCoordinationServices === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Equipment Rental Options</h3>
        <input
          type="text"
          name="ServicesInfo.equipmentRentalOptions"
          placeholder="Equipment Rental Options"
          value={ServicesInfo.equipmentRentalOptions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Storage Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.storageFacilities"
            value="Yes"
            checked={ServicesInfo.storageFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.storageFacilities"
            value="No"
            checked={ServicesInfo.storageFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Signage/Banner Allowed</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.signageBannerAllowed"
            value="Yes"
            checked={ServicesInfo.signageBannerAllowed === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.signageBannerAllowed"
            value="No"
            checked={ServicesInfo.signageBannerAllowed === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Special Lighting</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.specialLighting"
            value="Yes"
            checked={ServicesInfo.specialLighting === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.specialLighting"
            value="No"
            checked={ServicesInfo.specialLighting === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Dance Floor</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.danceFloor"
            value="Yes"
            checked={ServicesInfo.danceFloor === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.danceFloor"
            value="No"
            checked={ServicesInfo.danceFloor === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Outdoor Heating</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.outdoorHeating"
            value="Yes"
            checked={ServicesInfo.outdoorHeating === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.outdoorHeating"
            value="No"
            checked={ServicesInfo.outdoorHeating === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Tenting Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.tentingFacilities"
            value="Yes"
            checked={ServicesInfo.tentingFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.tentingFacilities"
            value="No"
            checked={ServicesInfo.tentingFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Coat Check</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.coatCheck"
            value="Yes"
            checked={ServicesInfo.coatCheck === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.coatCheck"
            value="No"
            checked={ServicesInfo.coatCheck === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Bridal Suite</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.bridalSuite"
            value="Yes"
            checked={ServicesInfo.bridalSuite === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.bridalSuite"
            value="No"
            checked={ServicesInfo.bridalSuite === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Child Care Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.childCareFacilities"
            value="Yes"
            checked={ServicesInfo.childCareFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.childCareFacilities"
            value="No"
            checked={ServicesInfo.childCareFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Pet Care Facilities</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.petCareFacilities"
            value="Yes"
            checked={ServicesInfo.petCareFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.petCareFacilities"
            value="No"
            checked={ServicesInfo.petCareFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>
    </div>
  );
};


const Step4 = ({ BookingInfo, handleChange, setDateRange }) => {
  const customStyles = {
    background: "#f0f0f0",
    border: "black",
    padding: 0,

    // Add more custom styles here as needed
  };
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  
  const [selectedDateRange, setSelectedDateRange] = useState({
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  });

  const handleDateChange = (ranges) => {
    setSelectedDateRange(ranges.selection);
    // Call the callback to update the date range in Main.js
    setDateRange([ranges.selection]); // Wrap the range object in an array
  };

  return (
    <div>
      <h2>Step 4: Booking Information</h2>



      {/* <div className="form-group">
      <div>
        <label htmlFor="startDateInput">Start Date: </label>
        <input
          type="date"
          id="startDateInput"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDateInput">End Date: </label>
        <input
          type="date"
          id="endDateInput"
          value={endDate}
          onChange={handleEndDateChange}
        />
      </div>
      <p>
        Start Date: {startDate}
        <br />
        End Date: {endDate}
      </p>
    </div> */}
      {/* <div className="form-group">
      <h3> Availability (Date Range Picker):</h3>

      <DateRangePicker
        className="rdrDefinedRangesWrapper"
        // style={customStyles}
        onChange={handleDateChange} // Use the handleChange function from props
        ranges={[selectedDateRange]} // Use the availabilityDateRange state from props // Provide your handleDateChange function here
        staticRanges={[]}
        inputRanges={[]}
        showSelectionPreview={true}
        // moveRangeOnFirstSelection={false}
      />
      </div> */}
      <div className="form-group">
       
         <h3>Minimum Notice Period:</h3> 
          <input
            type="text"
            name="BookingInfo.minimumNoticePeriod"
            value={BookingInfo.minimumNoticePeriod}
            onChange={handleChange}
          />
    
      </div>

      <div className="form-group">
      <h3>Cancellation Policy:</h3> 
     
          
          <textarea
            name="BookingInfo.cancellationPolicy"
            value={BookingInfo.cancellationPolicy}
            onChange={handleChange}
          />
   
      </div>

      <div className="form-group">
      <h3> Pricing:</h3> 
  
         
          <input
            type="text"
            name="BookingInfo.pricing"
            value={BookingInfo.pricing}
            onChange={handleChange}
          />
    
      </div>

      <div className="form-group">
      <h3> Payment Methods Accepted:</h3>
       
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Cash"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Cash")
            }
            onChange={handleChange}
          />
          Cash
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Credit Card"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Credit Card")
            }
            onChange={handleChange}
          />
          Credit Cards
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Debit Card"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Debit Card")
            }
            onChange={handleChange}
          />
          Debit Card
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Bank Transfer"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Bank Transfer")
            }
            onChange={handleChange}
          />
          Bank Transfer
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Mobile Payment"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Mobile Payment")
            }
            onChange={handleChange}
          />
          Mobile Payment
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.paymentMethodsAccepted"
            value="Other"
            checked={
              BookingInfo.paymentMethodsAccepted &&
              BookingInfo.paymentMethodsAccepted.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="form-group">
      <h3>  Insurance Requirements:</h3>
       
        <textarea
          name="BookingInfo.insuranceRequirements"
          value={BookingInfo.insuranceRequirements}
          onChange={handleChange}
        />
      </div>




      <div className="form-group">
        <h3>Booking Channels</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.bookingChannels"
            value="Phone"
            checked={
              BookingInfo.bookingChannels && BookingInfo.bookingChannels.includes("Phone")
            }
            onChange={handleChange}
          />
          Phone
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.bookingChannels"
            value="Email"
            checked={
              BookingInfo.bookingChannels && BookingInfo.bookingChannels.includes("Email")
            }
            onChange={handleChange}
          />
          Email
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.bookingChannels"
            value="Website"
            checked={
              BookingInfo.bookingChannels && BookingInfo.bookingChannels.includes("Website")
            }
            onChange={handleChange}
          />
          Website
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.bookingChannels"
            value="In-Person"
            checked={
              BookingInfo.bookingChannels && BookingInfo.bookingChannels.includes("In-Person")
            }
            onChange={handleChange}
          />
          In-Person
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.bookingChannels"
            value="Third-Party Platforms"
            checked={
              BookingInfo.bookingChannels &&
              BookingInfo.bookingChannels.includes("Third-Party Platforms")
            }
            onChange={handleChange}
          />
          Third-Party Platforms
        </label>
      </div>

      <div className="form-group">
        <h3>Deposit Requirement</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.depositRequirement"
            value="Yes"
            checked={BookingInfo.depositRequirement === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.depositRequirement"
            value="No"
            checked={BookingInfo.depositRequirement === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Deposit Amount</h3>
        <input
          type="text"
          name="BookingInfo.depositAmount"
          value={BookingInfo.depositAmount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Deposit Refund Policy</h3>
        <textarea
          name="BookingInfo.depositRefundPolicy"
          value={BookingInfo.depositRefundPolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Full Payment Due Date</h3>
        <input
          type="text"
          name="BookingInfo.fullPaymentDueDate"
          value={BookingInfo.fullPaymentDueDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Discounts Available</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.discountsAvailable"
            value="Yes"
            checked={BookingInfo.discountsAvailable === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.discountsAvailable"
            value="No"
            checked={BookingInfo.discountsAvailable === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>


      <div className="form-group">
        <h3>Types of Discounts</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.typesOfDiscounts"
            value="Early Bird"
            checked={
              BookingInfo.typesOfDiscounts &&
              BookingInfo.typesOfDiscounts.includes("Early Bird")
            }
            onChange={handleChange}
          />
          Early Bird
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.typesOfDiscounts"
            value="Bulk Booking"
            checked={
              BookingInfo.typesOfDiscounts &&
              BookingInfo.typesOfDiscounts.includes("Bulk Booking")
            }
            onChange={handleChange}
          />
          Bulk Booking
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.typesOfDiscounts"
            value="Off-Season"
            checked={
              BookingInfo.typesOfDiscounts &&
              BookingInfo.typesOfDiscounts.includes("Off-Season")
            }
            onChange={handleChange}
          />
          Off-Season
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="BookingInfo.typesOfDiscounts"
            value="Other"
            checked={
              BookingInfo.typesOfDiscounts && BookingInfo.typesOfDiscounts.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="form-group">
        <h3>Minimum Booking Duration</h3>
        <input
          type="text"
          name="BookingInfo.minimumBookingDuration"
          value={BookingInfo.minimumBookingDuration}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Maximum Booking Duration</h3>
        <input
          type="text"
          name="BookingInfo.maximumBookingDuration"
          value={BookingInfo.maximumBookingDuration}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Overtime Policy</h3>
        <textarea
          name="BookingInfo.overtimePolicy"
          value={BookingInfo.overtimePolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Setup/Takedown Time Included</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.setupTakedownTimeIncluded"
            value="Yes"
            checked={BookingInfo.setupTakedownTimeIncluded === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.setupTakedownTimeIncluded"
            value="No"
            checked={BookingInfo.setupTakedownTimeIncluded === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Additional Costs (if any)</h3>
        <textarea
          name="BookingInfo.additionalCosts"
          value={BookingInfo.additionalCosts}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Contract Requirement</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.contractRequirement"
            value="Yes"
            checked={BookingInfo.contractRequirement === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.contractRequirement"
            value="No"
            checked={BookingInfo.contractRequirement === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Contract Terms</h3>
        <textarea
          name="BookingInfo.contractTerms"
          value={BookingInfo.contractTerms}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Cancellation by Venue Policy</h3>
        <textarea
          name="BookingInfo.cancellationByVenuePolicy"
          value={BookingInfo.cancellationByVenuePolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Force Majeure Policy</h3>
        <textarea
          name="BookingInfo.forceMajeurePolicy"
          value={BookingInfo.forceMajeurePolicy}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};





const Step5 = ({ PastEventInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 5: Past Event Information</h2>

      {/* Types of Events Hosted */}

      <div className="form-group">
        <h3>Types of Events Hosted</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Weddings"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Weddings")
            }
            onChange={handleChange}
          />
          Weddings
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Corporate Events"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Corporate Events")
            }
            onChange={handleChange}
          />
          Corporate Events
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Concerts"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Concerts")
            }
            onChange={handleChange}
          />
          Concerts
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Exhibitions"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Exhibitions")
            }
            onChange={handleChange}
          />
          Exhibitions
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Private Parties"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Private Parties")
            }
            onChange={handleChange}
          />
          Private Parties
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Festivals"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Festivals")
            }
            onChange={handleChange}
          />
          Festivals
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Workshops"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Workshops")
            }
            onChange={handleChange}
          />
          Workshops
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Seminars"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Seminars")
            }
            onChange={handleChange}
          />
          Seminars
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.typesOfEventsHosted"
            value="Other"
            checked={
              PastEventInfo.typesOfEventsHosted &&
              PastEventInfo.typesOfEventsHosted.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>

      <div className="form-group">
        <h3>Client Testimonials and Reviews :</h3>
        <textarea
          name="PastEventInfo.clientTestimonialsAndReviews"
          value={PastEventInfo.clientTestimonialsAndReviews}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Photos and Videos from Past Events :</h3>
        <input
          type="file"
          name="PastEventInfo.photosAndVideosFromPastEvents"
          onChange={handleChange}
          accept="image/*, video/*"
          multiple
          required
        />
      </div>

      <div className="form-group">
        <h3>Number of Events Hosted :</h3>
        <input
          type="text"
          name="PastEventInfo.numberOfEventsHosted"
          placeholder=" "
          value={PastEventInfo.numberOfEventsHosted}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <h3>Notable Events or Clients :</h3>
        <textarea
          name="PastEventInfo.notableEventsOrClients"
          value={PastEventInfo.notableEventsOrClients}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Client References :</h3>
        <textarea
          name="PastEventInfo.clientReferences"
          value={PastEventInfo.clientReferences}
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <h3>Event Success Stories</h3>
        <textarea
          name="PastEventInfo.eventSuccessStories"
          value={PastEventInfo.eventSuccessStories}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Event Failures/Lessons Learned</h3>
        <textarea
          name="PastEventInfo.eventFailuresLessonsLearned"
          value={PastEventInfo.eventFailuresLessonsLearned}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Average Event Rating</h3>
        <input
          type="text"
          name="PastEventInfo.averageEventRating"
          placeholder=" "
          value={PastEventInfo.averageEventRating}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Event Portfolio</h3>
        <input
          type="file"
          name="PastEventInfo.eventPortfolio"
          onChange={handleChange}
          accept="image/*, pdf/*"
          multiple
          required
        />
      </div>

      <div className="form-group">
        <h3>Media Mentions</h3>
        <textarea
          name="PastEventInfo.mediaMentions"
          value={PastEventInfo.mediaMentions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Event Frequency</h3>
        <input
          type="text"
          name="PastEventInfo.eventFrequency"
          placeholder=" "
          value={PastEventInfo.eventFrequency}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Preferred Event Types</h3>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Weddings"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Weddings")
            }
            onChange={handleChange}
          />
          Weddings
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Corporate Events"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Corporate Events")
            }
            onChange={handleChange}
          />
          Corporate Events
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Concerts"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Concerts")
            }
            onChange={handleChange}
          />
          Concerts
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Exhibitions"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Exhibitions")
            }
            onChange={handleChange}
          />
          Exhibitions
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Private Parties"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Private Parties")
            }
            onChange={handleChange}
          />
          Private Parties
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Festivals"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Festivals")
            }
            onChange={handleChange}
          />
          Festivals
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Workshops"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Workshops")
            }
            onChange={handleChange}
          />
          Workshops
        </label>
        <label className="custom-checkbox">
          <input
            type="checkbox"
            name="PastEventInfo.preferredEventTypes"
            value="Seminars"
            checked={
              PastEventInfo.preferredEventTypes &&
              PastEventInfo.preferredEventTypes.includes("Seminars")
            }
            onChange={handleChange}
          />
          Seminars
        </label>
      </div>
    </div>
  );
};






const Step6 = ({ LegalInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 6: Legal and Compliance Information</h2>
      <div className="form-group">
        <label htmlFor="LegalInfo[licensesAndPermits]">
          Licenses and Permits
        </label>
        <textarea
          id="LegalInfo[licensesAndPermits]"
          name="LegalInfo.licensesAndPermits"
          value={LegalInfo.licensesAndPermits}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[safetyMeasures]">Safety Measures</label>
        <textarea
          id="LegalInfo[safetyMeasures]"
          name="LegalInfo.safetyMeasures"
          value={LegalInfo.safetyMeasures}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[businessRegistrationDetails]">
          Business Registration Details
        </label>
        <textarea
          id="LegalInfo[businessRegistrationDetails]"
          name="LegalInfo.businessRegistrationDetails"
          value={LegalInfo.businessRegistrationDetails}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Tax Compliance Status</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.taxComplianceStatus"
            value="Compliant"
            checked={LegalInfo.taxComplianceStatus === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.taxComplianceStatus"
            value="Non-Compliant"
            checked={LegalInfo.taxComplianceStatus === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[healthAndSafetyCertifications]">
          Health and Safety Certifications
        </label>
        <textarea
          id="LegalInfo[healthAndSafetyCertifications]"
          name="LegalInfo.healthAndSafetyCertifications"
          value={LegalInfo.healthAndSafetyCertifications}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h3>Fire Safety Compliance</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.fireSafetyCompliance"
            value="Compliant"
            checked={LegalInfo.fireSafetyCompliance === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.fireSafetyCompliance"
            value="Non-Compliant"
            checked={LegalInfo.fireSafetyCompliance === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[foodSafetyCertifications]">
          Food Safety Certifications (if applicable)
        </label>
        <textarea
          id="LegalInfo[foodSafetyCertifications]"
          name="LegalInfo.foodSafetyCertifications"
          value={LegalInfo.foodSafetyCertifications}
          onChange={handleChange}
        />
      </div>



      {/* ... Other fields ... */}

      <div className="form-group">
        <h3>Alcohol Licensing Details</h3>
        <textarea
          name="LegalInfo.alcoholLicensingDetails"
          value={LegalInfo.alcoholLicensingDetails}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Music Licensing Details</h3>
        <textarea
          name="LegalInfo.musicLicensingDetails"
          value={LegalInfo.musicLicensingDetails}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Insurance Coverage Details</h3>
        <textarea
          name="LegalInfo.insuranceCoverageDetails"
          value={LegalInfo.insuranceCoverageDetails}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Accessibility Compliance</h3>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.accessibilityCompliance"
            value="Compliant"
            checked={LegalInfo.accessibilityCompliance === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.accessibilityCompliance"
            value="Non-Compliant"
            checked={LegalInfo.accessibilityCompliance === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>

      <div className="form-group">
        <h3>Privacy Policy</h3>
        <textarea
          name="LegalInfo.privacyPolicy"
          value={LegalInfo.privacyPolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Terms and Conditions</h3>
        <textarea
          name="LegalInfo.termsAndConditions"
          value={LegalInfo.termsAndConditions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Dispute Resolution Mechanisms</h3>
        <textarea
          name="LegalInfo.disputeResolutionMechanisms"
          value={LegalInfo.disputeResolutionMechanisms}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};





const Step7 = ({ EnvirInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 7: Environmental Impact</h2>

      {/* Environmental Impact - Sustainability Practices */}
      <div className="form-group">
        <h3>Sustainability Practices:</h3>
        <textarea
          id="sustainabilityPractices"
          name="EnvirInfo.sustainabilityPractices"
          value={EnvirInfo.sustainabilityPractices}
          onChange={handleChange}
        />
      </div>

      {/* Environmental Impact - Noise Pollution Controls */}
      <div className="form-group">
        <h3>Noise Pollution Controls:</h3>
        <textarea
          id="noisePollutionControls"
          name="EnvirInfo.noisePollutionControls"
          value={EnvirInfo.noisePollutionControls}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};






const Step8 = ({ VendorsInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 8: Preferred Vendors</h2>

      <div className="form-group">
        <label htmlFor="preferredCateringVendor">Preferred Catering Vendor:</label>
        <select
          id="preferredCateringVendor"
          name="VendorsInfo.preferredCateringVendor"
          value={VendorsInfo.preferredCateringVendor}
          onChange={handleChange}
     
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      
      <div className="form-group">
        <label htmlFor="preferredDesignAndDecorVendor">Preferred Design and Decor Vendor:</label>
        <select
          id="preferredDesignAndDecorVendor"
          name="VendorsInfo.preferredDesignAndDecorVendor"
          value={VendorsInfo.preferredDesignAndDecorVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredTravelVendor">Preferred Travel Vendor:</label>
        <select
          id="preferredTravelVendor"
          name="VendorsInfo.preferredTravelVendor"
          value={VendorsInfo.preferredTravelVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredBeautyVendor">Preferred Beauty Vendor:</label>
        <select
          id="preferredBeautyVendor"
          name="VendorsInfo.preferredBeautyVendor"
          value={VendorsInfo.preferredBeautyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPhotographyVendor">Preferred Photography Vendor:</label>
        <select
          id="preferredPhotographyVendor"
          name="VendorsInfo.preferredPhotographyVendor"
          value={VendorsInfo.preferredPhotographyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEventPlanningVendor">Preferred Event Planning Vendor:</label>
        <select
          id="preferredEventPlanningVendor"
          name="VendorsInfo.preferredEventPlanningVendor"
          value={VendorsInfo.preferredEventPlanningVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAudioVisualEquipmentVendor">Preferred Audio/Visual Equipment Vendor:</label>
        <select
          id="preferredAudioVisualEquipmentVendor"
          name="VendorsInfo.preferredAudioVisualEquipmentVendor"
          value={VendorsInfo.preferredAudioVisualEquipmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEntertainmentVendor">Preferred Entertainment Vendor:</label>
        <select
          id="preferredEntertainmentVendor"
          name="VendorsInfo.preferredEntertainmentVendor"
          value={VendorsInfo.preferredEntertainmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAccommodationVendor">Preferred Accommodation Vendor:</label>
        <select
          id="preferredAccommodationVendor"
          name="VendorsInfo.preferredAccommodationVendor"
          value={VendorsInfo.preferredAccommodationVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPrintingAndSignageVendor">Preferred Printing and Signage Vendor:</label>
        <select
          id="preferredPrintingAndSignageVendor"
          name="VendorsInfo.preferredPrintingAndSignageVendor"
          value={VendorsInfo.preferredPrintingAndSignageVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredSecurityServicesVendor">Preferred Security Services Vendor:</label>
        <select
          id="preferredSecurityServicesVendor"
          name="VendorsInfo.preferredSecurityServicesVendor"
          value={VendorsInfo.preferredSecurityServicesVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>
    </div>
  );
};





const Step9 = ({ DemographicInfo, handleChange }) => {
  return (
    <div>
      <h2>Step 9: Demographic and Market Data</h2>
      <div className="form-group">
        <label htmlFor="targetAudience">Target Audience:</label>
        <textarea
          id="targetAudience"
          name="DemographicInfo.targetAudience"
          value={DemographicInfo.targetAudience}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
      <div className="form-group">
        <label htmlFor="competitiveLandscape">Competitive Landscape:</label>
        <textarea
          id="competitiveLandscape"
          name="DemographicInfo.competitiveLandscape"
          value={DemographicInfo.competitiveLandscape}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
    </div>
  );
};


const Step10 = ({ formData, handleSubmit }) => {
    const { basicInfo, locationInfo } = formData;
    return (
      <div>
        <h2>Step 10: Verification and Final Submit</h2>
        <h3>Basic Information</h3>
        <p>Venue Name: {basicInfo.venueName}</p>
        <p>Venue Address: {basicInfo.venueAddress}</p>
        <p>Venue Address: {basicInfo.venueAddress}</p>
        <div>
          <p>Images and Videos:</p>
          {basicInfo.photosVideos.map((item, index) => (
            <div key={index}>
              {item.name} {/* Display the filename */}
            </div>
          ))}
        </div>
        <p>Venue Address: {basicInfo.venueType}</p>
        <p>Venue Address: {basicInfo.venueOwner}</p>
        <h3>Location Information</h3>
        <p>Verify the information and submit the form.</p>
        
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    );
  };

export {
  Step1,
  Step2,
  Step3,
  Step4,
  Step5,
  Step6,
  Step7,
  Step8,
  Step9,
  Step10,
};
