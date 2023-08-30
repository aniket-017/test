import React, { useState } from "react";
import "./Step3.css";
import { DateRangePicker } from 'react-date-range';
import "react-date-range/dist/styles.css"; // Make sure to import the styles
import "react-date-range/dist/theme/default.css"; // Optional theme styles
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TimePicker from 'react-time-picker';
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
// ... Other imports ...

const Step1 = ({ data, handleChange }) => {
  // const [value, onChange] = useState('10:00');
  const photoo = data.photosVideos;
  return (
    <div>
      <h2>Step 1: Basic Information</h2>

      {/* Venue Name */}
      <div className="form-group">
        <h3>Venue Name </h3>
        <input
          type="text"
          name="basicInfo.venueName"
          placeholder="Venue Name (Required Field)"
          value={data.venueName}
          onChange={handleChange}
          required
        />
      </div>

      {/* Venue Address */}
      <div className="form-group">
        <h3>Venue Address</h3>
        <textarea
          name="basicInfo.venueAddress"
          placeholder="Venue Address (Required Field)"
          value={data.venueAddress}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
  <h3>Email Address</h3>
  <input
    type="email"
    name="basicInfo.email"
    placeholder="Email Address (Required Field)"
    value={data.email}
    onChange={handleChange}

  />
</div>

<div className="form-group">
  <h3>Contact Number</h3>
  <input
    type="tel"
    name="basicInfo.phoneNumber"
    placeholder="Contact Number (Required Field)"
    value={data.phoneNumber}
    onChange={handleChange}
    
  />
</div>
      {/* Contact Information */}
      <div className="form-group">
        <h3>Contact Information</h3>
        <input
          type="text"
          name="basicInfo.contactInformation"
          placeholder="Contact Information"
          value={data.contactInformation}
          onChange={handleChange}
        />
      </div>

      {/* Venue Type */}
      <div className="form-group">
        <h3>Venue Type</h3>
        <select
          name="basicInfo.venueType"
          value={data.venueType}
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
          value={data.venueOwner}
          onChange={handleChange}
        />
      </div>

      {/* Venue Description */}
      <div className="form-group">
        <h3>Venue Description</h3>
        <textarea
          name="basicInfo.venueDescription"
          placeholder="Venue Description"
          value={data.venueDescription}
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
              data.venueCategory && data.venueCategory.includes("Weddings")
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
              data.venueCategory && data.venueCategory.includes("Corporate")
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
              data.venueCategory && data.venueCategory.includes("Concerts")
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
              data.venueCategory && data.venueCategory.includes("Exhibitions")
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
              data.venueCategory &&
              data.venueCategory.includes("PrivateParties")
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
              data.venueCategory && data.venueCategory.includes("Festivals")
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
              data.venueCategory && data.venueCategory.includes("Workshops")
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
              data.venueCategory && data.venueCategory.includes("Seminars")
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
          value={data.socialMediaHandles}
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
          value={data.operatingHours}
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
              data.languagesSpoken && data.languagesSpoken.includes("English")
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
              data.languagesSpoken && data.languagesSpoken.includes("Hindi")
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
              data.languagesSpoken && data.languagesSpoken.includes("Marathi")
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
              data.languagesSpoken && data.languagesSpoken.includes("Gujarati")
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
              data.languagesSpoken && data.languagesSpoken.includes("Bengali")
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
              data.languagesSpoken && data.languagesSpoken.includes("Tamil")
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
              data.languagesSpoken && data.languagesSpoken.includes("Telugu")
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
              data.languagesSpoken && data.languagesSpoken.includes("Kannada")
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
              data.languagesSpoken && data.languagesSpoken.includes("Malayalam")
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
              data.languagesSpoken && data.languagesSpoken.includes("Punjabi")
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
          value={data.affiliationsOrPartnerships}
          onChange={handleChange}
        />
      </div>

      {/* Awards and Recognitions */}
      <div className="form-group">
        <h3>Awards and Recognitions</h3>
        <textarea
          name="basicInfo.awardsAndRecognitions"
          placeholder="Awards and Recognitions"
          value={data.awardsAndRecognitions}
          onChange={handleChange}
        />
      </div>

      {/* Nearest Landmarks */}
      <div className="form-group">
        <h3>Nearest Landmarks</h3>
        <textarea
          name="basicInfo.nearestLandmarks"
          placeholder="Nearest Landmarks"
          value={data.nearestLandmarks}
          onChange={handleChange}
        />
      </div>

      {/* Public Transport Accessibility */}
      <div className="form-group">
        <h3>Public Transport Accessibility</h3>
        <textarea
          name="basicInfo.publicTransportAccessibility"
          placeholder="Public Transport Accessibility"
          value={data.publicTransportAccessibility}
          onChange={handleChange}
        />
      </div>

      {/* Emergency Services */}
      <div className="form-group">
        <h3>Emergency Services</h3>
        <textarea
          name="basicInfo.emergencyServices"
          placeholder="Emergency Services"
          value={data.emergencyServices}
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
        <div className="uploaded-files">
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
      </div>
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
        {data.logo instanceof Blob && (
          <img src={URL.createObjectURL(data.logo)} alt="Logo" />
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
        value={data.establishmentYear}
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
            checked={data.ownershipType === "Privately Owned"}
            onChange={handleChange}
          />
          Privately Owned
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="basicInfo.ownershipType"
            value="Chain"
            checked={data.ownershipType === "Chain"}
            onChange={handleChange}
          />
          Chain
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="basicInfo.ownershipType"
            value="Government-Owned"
            checked={data.ownershipType === "Government-Owned"}
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
          value={data.uniqueIdentifier}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Step2 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 2: Location Information</h2>

      <div className="form-group">
        <h3>Total Area</h3>
        <input
          type="text"
          name="locationInfo.totalArea"
          placeholder="Total Area"
          value={data.totalArea} // Update the path to access the correct nested property
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div className="form-group">
        <h3>Indoor Area</h3>
        <input
          type="text"
          name="locationInfo.indoorArea"
          placeholder="Indoor Area"
          value={data.indoorArea}
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div className="form-group">
        <h3>Outdoor Area</h3>
        <input
          type="text"
          name="locationInfo.outdoorArea"
          placeholder="Outdoor Area"
          value={data.outdoorArea}
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div className="form-group">
        <h3>Seating Capacity</h3>
        <input
          type="text"
          name="locationInfo.seatingCapacity"
          placeholder="Seating Capacity"
          value={data.seatingCapacity}
          onChange={handleChange}
          inputMode="numeric"
        />
      </div>
      <div className="form-group">
        <h3>Standing Capacity</h3>
        <input
          type="number"
          name="locationInfo.standingCapacity"
          placeholder="Standing Capacity"
          value={data.standingCapacity}
          onChange={handleChange}
          
        />
      </div>

      <div className="form-group">
        <h3>Number of Rooms/Spaces</h3>
        <input
          type="text"
          name="locationInfo.numberOfRoomsSpaces"
          placeholder="Number of Rooms/Spaces"
          value={data.numberOfRoomsSpaces}
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Wheelchair Access")
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Elevator Access")
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Ramps")
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Accessible Restrooms")
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Braille Signage")
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
              data.accessibilityFeatures &&
              data.accessibilityFeatures.includes("Parking Facilities")
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
            checked={data.stageAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.stageAvailability"
            value="No"
            checked={data.stageAvailability === "No"}
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
            checked={data.podiumAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.podiumAvailability"
            value="No"
            checked={data.podiumAvailability === "No"}
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Sound System")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Lighting")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Projectors")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Screens")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Microphones")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("DJ Equipment")
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
              data.technicalEquipment &&
              data.technicalEquipment.includes("Video Recording Equipment")
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
          value={data.parkingFacilities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Parking Capacity</h3>
        <input
          type="text"
          name="locationInfo.parkingCapacity"
          placeholder="Parking Capacity"
          value={data.parkingCapacity}
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
            checked={data.valetParkingAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.valetParkingAvailability"
            value="No"
            checked={data.valetParkingAvailability === "No"}
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
          value={data.proximityToPublicTransport}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Proximity to Major Roads</h3>
        <input
          type="text"
          name="locationInfo.proximityToMajorRoads"
          placeholder="Proximity to Major Roads"
          value={data.proximityToMajorRoads}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Proximity to Airport</h3>
        <input
          type="text"
          name="locationInfo.proximityToAirport"
          placeholder="Proximity to Airport"
          value={data.proximityToAirport}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Surrounding Environment</h3>
        <textarea
          name="locationInfo.surroundingEnvironment"
          placeholder="Surrounding Environment"
          value={data.surroundingEnvironment}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Noise Restrictions</h3>
        <textarea
          name="locationInfo.noiseRestrictions"
          placeholder="Noise Restrictions"
          value={data.noiseRestrictions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Ceiling Height</h3>
        <input
          type="text"
          name="locationInfo.ceilingHeight"
          placeholder="Ceiling Height"
          value={data.ceilingHeight}
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
            checked={data.loadInOutFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.loadInOutFacilities"
            value="No"
            checked={data.loadInOutFacilities === "No"}
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
            checked={data.greenRoomAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.greenRoomAvailability"
            value="No"
            checked={data.greenRoomAvailability === "No"}
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
            checked={data.dressingRoomAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.dressingRoomAvailability"
            value="No"
            checked={data.dressingRoomAvailability === "No"}
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
            checked={data.kitchenFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.kitchenFacilities"
            value="No"
            checked={data.kitchenFacilities === "No"}
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
          value={data.restroomFacilities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Power Supply/Backup</h3>
        <input
          type="text"
          name="locationInfo.powerSupplyBackup"
          placeholder="Power Supply/Backup"
          value={data.powerSupplyBackup}
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
            checked={data.airConditioningHeating === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.airConditioningHeating"
            value="No"
            checked={data.airConditioningHeating === "No"}
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
            checked={data.naturalLightAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.naturalLightAvailability"
            value="No"
            checked={data.naturalLightAvailability === "No"}
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
          value={data.outdoorSpaceDescription}
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
            checked={data.scenicView === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.scenicView"
            value="No"
            checked={data.scenicView === "No"}
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
            checked={data.smokingArea === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.smokingArea"
            value="No"
            checked={data.smokingArea === "No"}
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
            checked={data.petFriendly === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.petFriendly"
            value="No"
            checked={data.petFriendly === "No"}
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
            checked={data.childFriendly === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="locationInfo.childFriendly"
            value="No"
            checked={data.childFriendly === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Noise Level</h3>
        <select
          name="locationInfo.noiseLevel"
          value={data.noiseLevel}
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
          value={data.nearbyParkingFacilities}
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
              data.securityFeatures && data.securityFeatures.includes("CCTV")
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
              data.securityFeatures &&
              data.securityFeatures.includes("Security Personnel")
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
              data.securityFeatures &&
              data.securityFeatures.includes("Alarm System")
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
              data.securityFeatures && data.securityFeatures.includes("Other")
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
              data.fireSafetyMeasures &&
              data.fireSafetyMeasures.includes("Fire Extinguishers")
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
              data.fireSafetyMeasures &&
              data.fireSafetyMeasures.includes("Fire Exit Signs")
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
              data.fireSafetyMeasures &&
              data.fireSafetyMeasures.includes("Sprinkler System")
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
              data.fireSafetyMeasures &&
              data.fireSafetyMeasures.includes("Other")
            }
            onChange={handleChange}
          />
          Other
        </label>
      </div>
    </div>
  );
};

const Step3 = ({ data, handleChange }) => {
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
            checked={data.cateringServices === "In-House"}
            onChange={handleChange}
          />
          In-House
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="Outsourced"
            checked={data.cateringServices === "Outsourced"}
            onChange={handleChange}
          />
          Outsourced
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="Both"
            checked={data.cateringServices === "Both"}
            onChange={handleChange}
          />
          Both
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cateringServices"
            value="None"
            checked={data.cateringServices === "None"}
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Indian")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Chinese")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Italian")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Continental")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Vegan")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Gluten-Free")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Halal")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Kosher")
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
              data.typesOfCuisine && data.typesOfCuisine.includes("Other")
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
            checked={data.barServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.barServices"
            value="Not Available"
            checked={data.barServices === "Not Available"}
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
            checked={data.alcoholLicensing === "Licensed"}
            onChange={handleChange}
          />
          Licensed
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.alcoholLicensing"
            value="Not Licensed"
            checked={data.alcoholLicensing === "Not Licensed"}
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
            checked={data.decorServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.decorServices"
            value="Not Available"
            checked={data.decorServices === "Not Available"}
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
            checked={data.eventPlanningServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventPlanningServices"
            value="Not Available"
            checked={data.eventPlanningServices === "Not Available"}
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
            checked={data.audioVisualServices === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.audioVisualServices"
            value="Not Available"
            checked={data.audioVisualServices === "Not Available"}
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
            checked={data.internetWifiAvailability === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.internetWifiAvailability"
            value="Not Available"
            checked={data.internetWifiAvailability === "Not Available"}
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
            checked={data.accommodationAvailability === "Available"}
            onChange={handleChange}
          />
          Available
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.accommodationAvailability"
            value="Not Available"
            checked={data.accommodationAvailability === "Not Available"}
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
          value={data.numberOfRoomsForAccommodation}
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
      checked={data.typesOfRooms && data.typesOfRooms.includes("Single")}
      onChange={handleChange}
    />
    Single
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Double"
      checked={data.typesOfRooms && data.typesOfRooms.includes("Double")}
      onChange={handleChange}
    />
    Double
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Suite"
      checked={data.typesOfRooms && data.typesOfRooms.includes("Suite")}
      onChange={handleChange}
    />
    Suite
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Accessible"
      checked={data.typesOfRooms && data.typesOfRooms.includes("Accessible")}
      onChange={handleChange}
    />
    Accessible
  </label>
  <label className="custom-checkbox">
    <input
      type="checkbox"
      name="ServicesInfo.typesOfRooms"
      value="Other"
      checked={data.typesOfRooms && data.typesOfRooms.includes("Other")}
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
            checked={data.furnitureAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.furnitureAvailability"
            value="No"
            checked={data.furnitureAvailability === "No"}
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
          value={data.typesOfFurnitureAvailable}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Decor Restrictions</h3>
        <textarea
          name="ServicesInfo.decorRestrictions"
          placeholder="Decor Restrictions"
          value={data.decorRestrictions}
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
            checked={data.cleaningServices === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.cleaningServices"
            value="No"
            checked={data.cleaningServices === "No"}
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
            checked={data.onSiteStaffAvailability === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.onSiteStaffAvailability"
            value="No"
            checked={data.onSiteStaffAvailability === "No"}
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
            checked={data.eventCoordinationServices === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.eventCoordinationServices"
            value="No"
            checked={data.eventCoordinationServices === "No"}
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
          value={data.equipmentRentalOptions}
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
            checked={data.storageFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.storageFacilities"
            value="No"
            checked={data.storageFacilities === "No"}
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
            checked={data.signageBannerAllowed === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.signageBannerAllowed"
            value="No"
            checked={data.signageBannerAllowed === "No"}
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
            checked={data.specialLighting === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.specialLighting"
            value="No"
            checked={data.specialLighting === "No"}
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
            checked={data.danceFloor === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.danceFloor"
            value="No"
            checked={data.danceFloor === "No"}
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
            checked={data.outdoorHeating === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.outdoorHeating"
            value="No"
            checked={data.outdoorHeating === "No"}
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
            checked={data.tentingFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.tentingFacilities"
            value="No"
            checked={data.tentingFacilities === "No"}
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
            checked={data.coatCheck === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.coatCheck"
            value="No"
            checked={data.coatCheck === "No"}
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
            checked={data.bridalSuite === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.bridalSuite"
            value="No"
            checked={data.bridalSuite === "No"}
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
            checked={data.childCareFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.childCareFacilities"
            value="No"
            checked={data.childCareFacilities === "No"}
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
            checked={data.petCareFacilities === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="ServicesInfo.petCareFacilities"
            value="No"
            checked={data.petCareFacilities === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>
    </div>
  );
};

const Step4 = ({ data, handleChange, setDateRange }) => {
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
            value={data.minimumNoticePeriod}
            onChange={handleChange}
          />
    
      </div>

      <div className="form-group">
      <h3>Cancellation Policy:</h3> 
     
          
          <textarea
            name="BookingInfo.cancellationPolicy"
            value={data.cancellationPolicy}
            onChange={handleChange}
          />
   
      </div>

      <div className="form-group">
      <h3> Pricing:</h3> 
  
         
          <input
            type="text"
            name="BookingInfo.pricing"
            value={data.pricing}
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Cash")
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Credit Card")
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Debit Card")
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Bank Transfer")
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Mobile Payment")
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
              data.paymentMethodsAccepted &&
              data.paymentMethodsAccepted.includes("Other")
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
          value={data.insuranceRequirements}
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
              data.bookingChannels && data.bookingChannels.includes("Phone")
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
              data.bookingChannels && data.bookingChannels.includes("Email")
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
              data.bookingChannels && data.bookingChannels.includes("Website")
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
              data.bookingChannels && data.bookingChannels.includes("In-Person")
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
              data.bookingChannels &&
              data.bookingChannels.includes("Third-Party Platforms")
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
            checked={data.depositRequirement === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.depositRequirement"
            value="No"
            checked={data.depositRequirement === "No"}
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
          value={data.depositAmount}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Deposit Refund Policy</h3>
        <textarea
          name="BookingInfo.depositRefundPolicy"
          value={data.depositRefundPolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Full Payment Due Date</h3>
        <input
          type="text"
          name="BookingInfo.fullPaymentDueDate"
          value={data.fullPaymentDueDate}
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
            checked={data.discountsAvailable === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.discountsAvailable"
            value="No"
            checked={data.discountsAvailable === "No"}
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
              data.typesOfDiscounts &&
              data.typesOfDiscounts.includes("Early Bird")
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
              data.typesOfDiscounts &&
              data.typesOfDiscounts.includes("Bulk Booking")
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
              data.typesOfDiscounts &&
              data.typesOfDiscounts.includes("Off-Season")
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
              data.typesOfDiscounts && data.typesOfDiscounts.includes("Other")
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
          value={data.minimumBookingDuration}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Maximum Booking Duration</h3>
        <input
          type="text"
          name="BookingInfo.maximumBookingDuration"
          value={data.maximumBookingDuration}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Overtime Policy</h3>
        <textarea
          name="BookingInfo.overtimePolicy"
          value={data.overtimePolicy}
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
            checked={data.setupTakedownTimeIncluded === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.setupTakedownTimeIncluded"
            value="No"
            checked={data.setupTakedownTimeIncluded === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Additional Costs (if any)</h3>
        <textarea
          name="BookingInfo.additionalCosts"
          value={data.additionalCosts}
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
            checked={data.contractRequirement === "Yes"}
            onChange={handleChange}
          />
          Yes
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="BookingInfo.contractRequirement"
            value="No"
            checked={data.contractRequirement === "No"}
            onChange={handleChange}
          />
          No
        </label>
      </div>

      <div className="form-group">
        <h3>Contract Terms</h3>
        <textarea
          name="BookingInfo.contractTerms"
          value={data.contractTerms}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Cancellation by Venue Policy</h3>
        <textarea
          name="BookingInfo.cancellationByVenuePolicy"
          value={data.cancellationByVenuePolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Force Majeure Policy</h3>
        <textarea
          name="BookingInfo.forceMajeurePolicy"
          value={data.forceMajeurePolicy}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};

const Step5 = ({ data, handleChange }) => {
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Weddings")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Corporate Events")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Concerts")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Exhibitions")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Private Parties")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Festivals")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Workshops")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Seminars")
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
              data.typesOfEventsHosted &&
              data.typesOfEventsHosted.includes("Other")
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
          value={data.clientTestimonialsAndReviews}
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
          value={data.numberOfEventsHosted}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <h3>Notable Events or Clients :</h3>
        <textarea
          name="PastEventInfo.notableEventsOrClients"
          value={data.notableEventsOrClients}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Client References :</h3>
        <textarea
          name="PastEventInfo.clientReferences"
          value={data.clientReferences}
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <h3>Event Success Stories</h3>
        <textarea
          name="PastEventInfo.eventSuccessStories"
          value={data.eventSuccessStories}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Event Failures/Lessons Learned</h3>
        <textarea
          name="PastEventInfo.eventFailuresLessonsLearned"
          value={data.eventFailuresLessonsLearned}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Average Event Rating</h3>
        <input
          type="text"
          name="PastEventInfo.averageEventRating"
          placeholder=" "
          value={data.averageEventRating}
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
          value={data.mediaMentions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Event Frequency</h3>
        <input
          type="text"
          name="PastEventInfo.eventFrequency"
          placeholder=" "
          value={data.eventFrequency}
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Weddings")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Corporate Events")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Concerts")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Exhibitions")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Private Parties")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Festivals")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Workshops")
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
              data.preferredEventTypes &&
              data.preferredEventTypes.includes("Seminars")
            }
            onChange={handleChange}
          />
          Seminars
        </label>
      </div>
    </div>
  );
};

const Step6 = ({ data, handleChange }) => {
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
          value={data.licensesAndPermits}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="LegalInfo[safetyMeasures]">Safety Measures</label>
        <textarea
          id="LegalInfo[safetyMeasures]"
          name="LegalInfo.safetyMeasures"
          value={data.safetyMeasures}
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
          value={data.businessRegistrationDetails}
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
            checked={data.taxComplianceStatus === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.taxComplianceStatus"
            value="Non-Compliant"
            checked={data.taxComplianceStatus === "Non-Compliant"}
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
          value={data.healthAndSafetyCertifications}
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
            checked={data.fireSafetyCompliance === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.fireSafetyCompliance"
            value="Non-Compliant"
            checked={data.fireSafetyCompliance === "Non-Compliant"}
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
          value={data.foodSafetyCertifications}
          onChange={handleChange}
        />
      </div>



      {/* ... Other fields ... */}

      <div className="form-group">
        <h3>Alcohol Licensing Details</h3>
        <textarea
          name="LegalInfo.alcoholLicensingDetails"
          value={data.alcoholLicensingDetails}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Music Licensing Details</h3>
        <textarea
          name="LegalInfo.musicLicensingDetails"
          value={data.musicLicensingDetails}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Insurance Coverage Details</h3>
        <textarea
          name="LegalInfo.insuranceCoverageDetails"
          value={data.insuranceCoverageDetails}
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
            checked={data.accessibilityCompliance === "Compliant"}
            onChange={handleChange}
          />
          Compliant
        </label>
        <label className="custom-radio">
          <input
            type="radio"
            name="LegalInfo.accessibilityCompliance"
            value="Non-Compliant"
            checked={data.accessibilityCompliance === "Non-Compliant"}
            onChange={handleChange}
          />
          Non-Compliant
        </label>
      </div>

      <div className="form-group">
        <h3>Privacy Policy</h3>
        <textarea
          name="LegalInfo.privacyPolicy"
          value={data.privacyPolicy}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Terms and Conditions</h3>
        <textarea
          name="LegalInfo.termsAndConditions"
          value={data.termsAndConditions}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <h3>Dispute Resolution Mechanisms</h3>
        <textarea
          name="LegalInfo.disputeResolutionMechanisms"
          value={data.disputeResolutionMechanisms}
          onChange={handleChange}
        />
      </div>

    </div>
  );
};

const Step7 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 7: Environmental Impact</h2>

      {/* Environmental Impact - Sustainability Practices */}
      <div className="form-group">
        <h3>Sustainability Practices : </h3>
        <textarea
          id="sustainabilityPractices"
          name="EnvirInfo.sustainabilityPractices"
          value={data.sustainabilityPractices}
          onChange={handleChange}
        />
      </div>

      {/* Environmental Impact - Noise Pollution Controls */}
      <div className="form-group">
        <h3>Noise Pollution Controls : </h3>

        <textarea
          id="noisePollutionControls"
          name="EnvirInfo.noisePollutionControls"
          value={data.noisePollutionControls}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

const Step8 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 8: Preferred Vendors</h2>

      <div className="form-group">
        <label htmlFor="preferredCateringVendor">
          Preferred Catering Vendor:
        </label>
        <select
          id="preferredCateringVendor"
          name="VendorsInfo.preferredCateringVendor"
          value={data.preferredCateringVendor}
          onChange={handleChange}
          required
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredDesignAndDecorVendor">
          Preferred Design and Decor Vendor:
        </label>
        <select
          id="preferredDesignAndDecorVendor"
          name="VendorsInfo.preferredDesignAndDecorVendor"
          value={data.preferredDesignAndDecorVendor}
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
          value={data.preferredTravelVendor}
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
          value={data.preferredBeautyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPhotographyVendor">
          Preferred Photography Vendor:
        </label>
        <select
          id="preferredPhotographyVendor"
          name="VendorsInfo.preferredPhotographyVendor"
          value={data.preferredPhotographyVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEventPlanningVendor">
          Preferred Event Planning Vendor:
        </label>
        <select
          id="preferredEventPlanningVendor"
          name="VendorsInfo.preferredEventPlanningVendor"
          value={data.preferredEventPlanningVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAudioVisualEquipmentVendor">
          Preferred Audio/Visual Equipment Vendor:
        </label>
        <select
          id="preferredAudioVisualEquipmentVendor"
          name="VendorsInfo.preferredAudioVisualEquipmentVendor"
          value={data.preferredAudioVisualEquipmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredEntertainmentVendor">
          Preferred Entertainment Vendor:
        </label>
        <select
          id="preferredEntertainmentVendor"
          name="VendorsInfo.preferredEntertainmentVendor"
          value={data.preferredEntertainmentVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredAccommodationVendor">
          Preferred Accommodation Vendor:
        </label>
        <select
          id="preferredAccommodationVendor"
          name="VendorsInfo.preferredAccommodationVendor"
          value={data.preferredAccommodationVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredPrintingAndSignageVendor">
          Preferred Printing and Signage Vendor:
        </label>
        <select
          id="preferredPrintingAndSignageVendor"
          name="VendorsInfo.preferredPrintingAndSignageVendor"
          value={data.preferredPrintingAndSignageVendor}
          onChange={handleChange}
        >
          <option value="">Select a vendor</option>
          <option value="Vendor 1">Vendor 1</option>
          <option value="Vendor 2">Vendor 2</option>
          <option value="Vendor 3">Vendor 3</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="preferredSecurityServicesVendor">
          Preferred Security Services Vendor:
        </label>
        <select
          id="preferredSecurityServicesVendor"
          name="VendorsInfo.preferredSecurityServicesVendor"
          value={data.preferredSecurityServicesVendor}
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

const Step9 = ({ data, handleChange }) => {
  return (
    <div>
      <h2>Step 9: Demographic and Market Data</h2>
      <div className="form-group">
        <label htmlFor="targetAudience">Target Audience:</label>
        <textarea
          id="targetAudience"
          name="DemographicInfo.targetAudience"
          value={data.targetAudience}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
      <div className="form-group">
        <label htmlFor="competitiveLandscape">Competitive Landscape:</label>
        <textarea
          id="competitiveLandscape"
          name="DemographicInfo.competitiveLandscape"
          value={data.competitiveLandscape}
          onChange={handleChange}
          placeholder=" "
        />
      </div>
    </div>
  );
};

const Step10 = ({ formData, handleSubmit }) => {
  const { basicInfo, locationInfo } = formData;
  const photoo = basicInfo.photosVideos;
  return (
    <div>
      <h2>Step 10: Verification and Final Submit</h2>
      <h3>Basic Information</h3>
      <p>Venue Name: {basicInfo.venueName}</p>
      <p>Venue Address: {basicInfo.venueAddress}</p>
      <p>Contact Information: {basicInfo.contactInformation}</p>
      <p>Venue Type: {basicInfo.venueType}</p>
      <p>Venue Owner/Manager Information: {basicInfo.venueOwner}</p>
      <p>Venue Description: {basicInfo.venueDescription}</p>
      <p>Venue Category: {basicInfo.venueCategory.join(', ')}</p>
      <p>Social Media Handles: {basicInfo.socialMediaHandles}</p>
      <p>Operating Hours: {basicInfo.operatingHours}</p>
      <p>Languages Spoken: {basicInfo.languagesSpoken.join(', ')}</p>
      <p>Affiliations or Partnerships: {basicInfo.affiliationsOrPartnerships}</p>
      <p>Awards and Recognitions: {basicInfo.awardsAndRecognitions}</p>
      <p>Nearest Landmarks: {basicInfo.nearestLandmarks}</p>
      <p>Public Transport Accessibility: {basicInfo.publicTransportAccessibility}</p>
      <p>Emergency Services: {basicInfo.emergencyServices}</p>
      <div>
        <p>Images and Videos</p>
        <div className="uploaded-files">
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
        </div> 
      </div>
      <div>
        <p>Logo</p>
        <div className="logo-preview">
          {basicInfo.logo instanceof Blob && (
            <img src={URL.createObjectURL(basicInfo.logo)} alt="Logo" />
          )}
        </div>
      </div>
      <p>Year of Establishment: {basicInfo.yearOfEstablishment}</p>
      <p>Ownership Type: {basicInfo.ownershipType}</p>
      <p>Unique Identifier: {basicInfo.uniqueIdentifier}</p>

      {/* Display Images and Videos */}
     
      
      <h3>Location Information</h3>

      <p>Total Area: {locationInfo.totalArea}</p>
      <p>Indoor Area: {locationInfo.indoorArea}</p>
      <p>Outdoor Area: {locationInfo.outdoorArea}</p>
      <p>Seating Capacity: {locationInfo.seatingCapacity}</p>
      <p>Standing Capacity: {locationInfo.standingCapacity}</p>
      <p>Number of Rooms/Spaces: {locationInfo.numberOfRoomsSpaces}</p>
      {/* Display other locationInfo fields in a similar format */}
      <p>Layout/Floor Plan: {locationInfo.layoutFloorPlan}</p>
      <p>Accessibility Features: {locationInfo.accessibilityFeatures.join(', ')}</p>
      <p>Stage Availability: {locationInfo.stageAvailability}</p>
      <p>Podium Availability: {locationInfo.podiumAvailability}</p>
      <p>Technical Equipment: {locationInfo.technicalEquipment.join(', ')}</p>
      <p>Parking Facilities: {locationInfo.parkingFacilities}</p>
      <p>Parking Capacity: {locationInfo.parkingCapacity}</p>
      <p>Valet Parking Availability: {locationInfo.valetParkingAvailability}</p>
      <p>Proximity to Public Transport: {locationInfo.proximityToPublicTransport}</p>
      <p>Proximity to Major Roads: {locationInfo.proximityToMajorRoads}</p>
      <p>Proximity to Airport: {locationInfo.proximityToAirport}</p>
      <p>Surrounding Environment: {locationInfo.surroundingEnvironment}</p>
      <p>Noise Restrictions: {locationInfo.noiseRestrictions}</p>
      <p>Ceiling Height: {locationInfo.ceilingHeight}</p>
      <p>Load-in/Load-out Facilities: {locationInfo.loadInOutFacilities}</p>
      <p>Green Room Availability: {locationInfo.greenRoomAvailability}</p>
      <p>Dressing Room Availability: {locationInfo.dressingRoomAvailability}</p>
      <p>Kitchen Facilities: {locationInfo.kitchenFacilities}</p>
      <p>Restroom Facilities: {locationInfo.restroomFacilities}</p>
      <p>Power Supply/Backup: {locationInfo.powerSupplyBackup}</p>
      <p>Air Conditioning/Heating: {locationInfo.airConditioningHeating}</p>
      <p>Natural Light Availability: {locationInfo.naturalLightAvailability}</p>
      <p>Outdoor Space Description: {locationInfo.outdoorSpaceDescription}</p>
      <p>Scenic View: {locationInfo.scenicView}</p>
      <p>Smoking Area: {locationInfo.smokingArea}</p>
      <p>Pet-Friendly: {locationInfo.petFriendly}</p>
      <p>Child-Friendly: {locationInfo.childFriendly}</p>
      <p>Noise Level: {locationInfo.noiseLevel}</p>
      <p>Nearby Parking Facilities: {locationInfo.nearbyParkingFacilities}</p>
      <p>Security Features: {locationInfo.securityFeatures.join(', ')}</p>
      <p>Fire Safety Measures: {locationInfo.fireSafetyMeasures.join(', ')}</p>

      {/* Submit Button */}








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
