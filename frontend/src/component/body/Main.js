import React, { useState } from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import { createVenue } from "../../actions/venueActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
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

import { Step1, Step2, Step3, Step4, Step5, Step6, Step7, Step8, Step9, Step10 } from "./StepComponents";

const Main = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.venue);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  // Basic Information State
  const [venueName, setVenueName] = useState("");
  const [venueAddress, setVenueAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [venueType, setVenueType] = useState("");
  const [venueOwner, setVenueOwner] = useState("");
  const [contactInformation, setContactInformation] = useState("");
  const [venueDescription, setVenueDescription] = useState("");
  const [venueCategory, setVenueCategory] = useState([]);
  const [socialMediaHandles, setSocialMediaHandles] = useState("");
  const [operatingHours, setOperatingHours] = useState("");
  const [languagesSpoken, setLanguagesSpoken] = useState([]);
  const [affiliationsOrPartnerships, setAffiliationsOrPartnerships] = useState("");
  const [awardsAndRecognitions, setAwardsAndRecognitions] = useState("");
  const [nearestLandmarks, setNearestLandmarks] = useState("");
  const [publicTransportAccessibility, setPublicTransportAccessibility] = useState("");
  const [emergencyServices, setEmergencyServices] = useState("");
  const [photosVideos, setPhotosVideos] = useState([]);
  const [logo, setLogo] = useState([]);
  const [yearOfEstablishment, setYearOfEstablishment] = useState("");
  const [ownershipType, setOwnershipType] = useState("");
  const [uniqueIdentifier, setUniqueIdentifier] = useState("");

  // Location Information State
  const [totalArea, setTotalArea] = useState("");
  const [indoorArea, setIndoorArea] = useState("");
  const [outdoorArea, setOutdoorArea] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("");
  const [standingCapacity, setStandingCapacity] = useState("");
  const [numberOfRoomsSpaces, setNumberOfRoomsSpaces] = useState("");
  const [layoutFloorPlan, setLayoutFloorPlan] = useState("");
  const [accessibilityFeatures, setAccessibilityFeatures] = useState([]);
  const [stageAvailability, setStageAvailability] = useState("");
  const [podiumAvailability, setPodiumAvailability] = useState("");
  const [technicalEquipment, setTechnicalEquipment] = useState([]);
  const [parkingFacilities, setParkingFacilities] = useState("");
  const [parkingCapacity, setParkingCapacity] = useState("");
  const [valetParkingAvailability, setValetParkingAvailability] = useState("");
  const [proximityToPublicTransport, setProximityToPublicTransport] = useState("");
  const [proximityToMajorRoads, setProximityToMajorRoads] = useState("");
  const [proximityToAirport, setProximityToAirport] = useState("");
  const [surroundingEnvironment, setSurroundingEnvironment] = useState("");
  const [noiseRestrictions, setNoiseRestrictions] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [loadInOutFacilities, setLoadInOutFacilities] = useState("");
  const [greenRoomAvailability, setGreenRoomAvailability] = useState("");
  const [dressingRoomAvailability, setDressingRoomAvailability] = useState("");
  const [kitchenFacilities, setKitchenFacilities] = useState("");
  const [restroomFacilities, setRestroomFacilities] = useState("");
  const [powerSupplyBackup, setPowerSupplyBackup] = useState("");
  const [airConditioningHeating, setAirConditioningHeating] = useState("");
  const [naturalLightAvailability, setNaturalLightAvailability] = useState("");
  const [outdoorSpaceDescription, setOutdoorSpaceDescription] = useState("");
  const [scenicView, setScenicView] = useState("");
  const [smokingArea, setSmokingArea] = useState("");
  const [petFriendly, setPetFriendly] = useState("");
  const [childFriendly, setChildFriendly] = useState("");
  const [noiseLevel, setNoiseLevel] = useState("");
  const [nearbyParkingFacilities, setNearbyParkingFacilities] = useState("");
  const [securityFeatures, setSecurityFeatures] = useState([]);
  const [fireSafetyMeasures, setFireSafetyMeasures] = useState([]);

  // Service Information State
  const [cateringServices, setCateringServices] = useState("");
  const [typesOfCuisine, setTypesOfCuisine] = useState([]);
  const [barServices, setBarServices] = useState("");
  const [alcoholLicensing, setAlcoholLicensing] = useState("");
  const [decorServices, setDecorServices] = useState("");
  const [eventPlanningServices, setEventPlanningServices] = useState("");
  const [audioVisualServices, setAudioVisualServices] = useState("");
  const [internetWifiAvailability, setInternetWifiAvailability] = useState("");
  const [accommodationAvailability, setAccommodationAvailability] = useState("");
  const [numberOfRoomsForAccommodation, setNumberOfRoomsForAccommodation] = useState("");
  const [typesOfRooms, setTypesOfRooms] = useState([]);
  const [furnitureAvailability, setFurnitureAvailability] = useState("");
  const [typesOfFurnitureAvailable, setTypesOfFurnitureAvailable] = useState("");
  const [decorRestrictions, setDecorRestrictions] = useState("");
  const [cleaningServices, setCleaningServices] = useState("");
  const [onSiteStaffAvailability, setOnSiteStaffAvailability] = useState("");
  const [eventCoordinationServices, setEventCoordinationServices] = useState("");
  const [equipmentRentalOptions, setEquipmentRentalOptions] = useState("");
  const [storageFacilities, setStorageFacilities] = useState("");
  const [signageBannerAllowed, setSignageBannerAllowed] = useState("");
  const [specialLighting, setSpecialLighting] = useState("");
  const [danceFloor, setDanceFloor] = useState("");
  const [outdoorHeating, setOutdoorHeating] = useState("");
  const [tentingFacilities, setTentingFacilities] = useState("");
  const [coatCheck, setCoatCheck] = useState("");
  const [bridalSuite, setBridalSuite] = useState("");
  const [childCareFacilities, setChildCareFacilities] = useState("");
  const [petCareFacilities, setPetCareFacilities] = useState("");

  //Booking Information State
  const [availabilityDateRange, setAvailabilityDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [minimumNoticePeriod, setMinimumNoticePeriod] = useState("");
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  const [pricing, setPricing] = useState("");
  const [paymentMethodsAccepted, setPaymentMethodsAccepted] = useState([]);
  const [insuranceRequirements, setInsuranceRequirements] = useState("");
  const [bookingChannels, setBookingChannels] = useState([]);
  const [depositRequirement, setDepositRequirement] = useState("");
  const [depositAmount, setDepositAmount] = useState("");
  const [depositRefundPolicy, setDepositRefundPolicy] = useState("");
  const [fullPaymentDueDate, setFullPaymentDueDate] = useState("");
  const [discountsAvailable, setDiscountsAvailable] = useState("");
  const [typesOfDiscounts, setTypesOfDiscounts] = useState([]);
  const [minimumBookingDuration, setMinimumBookingDuration] = useState("");
  const [maximumBookingDuration, setMaximumBookingDuration] = useState("");
  const [overtimePolicy, setOvertimePolicy] = useState("");
  const [setupTakedownTimeIncluded, setSetupTakedownTimeIncluded] = useState("");
  const [additionalCosts, setAdditionalCosts] = useState("");
  const [contractRequirement, setContractRequirement] = useState("");
  const [contractTerms, setContractTerms] = useState("");
  const [cancellationByVenuePolicy, setCancellationByVenuePolicy] = useState("");
  const [forceMajeurePolicy, setForceMajeurePolicy] = useState("");

  // Past Event Information State
  const [typesOfEventsHosted, setTypesOfEventsHosted] = useState([]);
  const [clientTestimonialsAndReviews, setClientTestimonialsAndReviews] = useState("");
  const [photosAndVideosFromPastEvents, setPhotosAndVideosFromPastEvents] = useState([]);
  const [numberOfEventsHosted, setNumberOfEventsHosted] = useState("");
  const [notableEventsOrClients, setNotableEventsOrClients] = useState("");
  const [clientReferences, setClientReferences] = useState("");
  const [eventSuccessStories, setEventSuccessStories] = useState("");
  const [eventFailuresOrLessonsLearned, setEventFailuresOrLessonsLearned] = useState("");
  const [averageEventRating, setAverageEventRating] = useState("");
  const [eventPortfolio, setEventPortfolio] = useState([]);
  const [mediaMentions, setMediaMentions] = useState("");
  const [eventFrequency, setEventFrequency] = useState("");
  const [preferredEventTypes, setPreferredEventTypes] = useState([]);

  // Legal and Compliance Information State
  const [licensesAndPermits, setLicensesAndPermits] = useState("");
  const [safetyMeasures, setSafetyMeasures] = useState("");
  const [businessRegistrationDetails, setBusinessRegistrationDetails] = useState("");
  const [taxComplianceStatus, setTaxComplianceStatus] = useState("");
  const [healthAndSafetyCertifications, setHealthAndSafetyCertifications] = useState("");
  const [fireSafetyCompliance, setFireSafetyCompliance] = useState("");
  const [foodSafetyCertifications, setFoodSafetyCertifications] = useState("");
  const [alcoholLicensingDetails, setAlcoholLicensingDetails] = useState("");
  const [musicLicensingDetails, setMusicLicensingDetails] = useState("");
  const [insuranceCoverageDetails, setInsuranceCoverageDetails] = useState("");
  const [accessibilityCompliance, setAccessibilityCompliance] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState("");
  const [termsAndConditions, setTermsAndConditions] = useState("");
  const [disputeResolutionMechanisms, setDisputeResolutionMechanisms] = useState("");

  // Environmental Impact
  const [sustainabilityPractices, setSustainabilityPractices] = useState("");
  const [noisePollutionControls, setNoisePollutionControls] = useState("");

  // Step 8: Preferred Vendors
  const [preferredCateringVendor, setPreferredCateringVendor] = useState("");
  const [preferredDesignAndDecorVendor, setPreferredDesignAndDecorVendor] = useState("");
  const [preferredTravelVendor, setPreferredTravelVendor] = useState("");
  const [preferredBeautyVendor, setPreferredBeautyVendor] = useState("");
  const [preferredPhotographyVendor, setPreferredPhotographyVendor] = useState("");
  const [preferredEventPlanningVendor, setPreferredEventPlanningVendor] = useState("");
  const [preferredAudioVisualEquipmentVendor, setPreferredAudioVisualEquipmentVendor] = useState("");
  const [preferredEntertainmentVendor, setPreferredEntertainmentVendor] = useState("");
  const [preferredAccommodationVendor, setPreferredAccommodationVendor] = useState("");
  const [preferredPrintingAndSignageVendor, setPreferredPrintingAndSignageVendor] = useState("");
  const [preferredSecurityServicesVendor, setPreferredSecurityServicesVendor] = useState("");

  // Step 9: Demographic and Market Dat
  const [targetAudience, setTargetAudience] = useState("");
  const [competitiveLandscape, setCompetitiveLandscape] = useState("");

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // Define formData here
  const formData = {
    basicInfo: {
      venueName,
      venueAddress,
      email,
      phoneNumber,
      photosVideos,
      venueType,
      venueOwner,
      contactInformation,
      venueDescription,
      venueCategory,
      socialMediaHandles,
      operatingHours,
      languagesSpoken,
      affiliationsOrPartnerships,
      awardsAndRecognitions,
      nearestLandmarks,
      publicTransportAccessibility,
      emergencyServices,
      logo,
      yearOfEstablishment,
      ownershipType,
      uniqueIdentifier,
    },
    locationInfo: {
      totalArea,
      indoorArea,
      outdoorArea,
      seatingCapacity,
      standingCapacity,
      numberOfRoomsSpaces,
      layoutFloorPlan,
      accessibilityFeatures,
      stageAvailability,
      podiumAvailability,
      technicalEquipment,
      parkingFacilities,
      parkingCapacity,
      valetParkingAvailability,
      proximityToPublicTransport,
      proximityToMajorRoads,
      proximityToAirport,
      surroundingEnvironment,
      noiseRestrictions,
      ceilingHeight,
      loadInOutFacilities,
      greenRoomAvailability,
      dressingRoomAvailability,
      kitchenFacilities,
      restroomFacilities,
      powerSupplyBackup,
      airConditioningHeating,
      naturalLightAvailability,
      outdoorSpaceDescription,
      scenicView,
      smokingArea,
      petFriendly,
      childFriendly,
      noiseLevel,
      nearbyParkingFacilities,
      securityFeatures,
      fireSafetyMeasures,
    },
    ServicesInfo: {
      cateringServices,
      typesOfCuisine,
      barServices,
      alcoholLicensing,
      decorServices,
      eventPlanningServices,
      audioVisualServices,
      internetWifiAvailability,
      accommodationAvailability,
      numberOfRoomsForAccommodation,
      typesOfRooms,
      furnitureAvailability,
      typesOfFurnitureAvailable,
      decorRestrictions,
      cleaningServices,
      onSiteStaffAvailability,
      eventCoordinationServices,
      equipmentRentalOptions,
      storageFacilities,
      signageBannerAllowed,
      specialLighting,
      danceFloor,
      outdoorHeating,
      tentingFacilities,
      coatCheck,
      bridalSuite,
      childCareFacilities,
      petCareFacilities,
    },
    BookingInfo: {
      availability: availabilityDateRange.map((range) => ({
        startDate: range.startDate.toISOString(),
        endDate: range.endDate.toISOString(),
      })),
      minimumNoticePeriod,
      cancellationPolicy,
      pricing,
      paymentMethodsAccepted,
      insuranceRequirements,
      bookingChannels,
      depositRequirement,
      depositAmount,
      depositRefundPolicy,
      fullPaymentDueDate,
      discountsAvailable,
      typesOfDiscounts,
      minimumBookingDuration,
      maximumBookingDuration,
      overtimePolicy,
      setupTakedownTimeIncluded,
      additionalCosts,
      contractRequirement,
      contractTerms,
      cancellationByVenuePolicy,
      forceMajeurePolicy,
    },

    PastEventInfo: {
      typesOfEventsHosted,
      clientTestimonialsAndReviews,
      photosAndVideosFromPastEvents,
      numberOfEventsHosted,
      notableEventsOrClients,
      clientReferences,
      eventSuccessStories,
      eventFailuresOrLessonsLearned,
      averageEventRating,
      eventPortfolio,
      mediaMentions,
      eventFrequency,
      preferredEventTypes,
    },
    LegalInfo: {
      licensesAndPermits,
      safetyMeasures,
      businessRegistrationDetails,
      taxComplianceStatus,
      healthAndSafetyCertifications,
      fireSafetyCompliance,
      foodSafetyCertifications,
      alcoholLicensingDetails,
      musicLicensingDetails,
      insuranceCoverageDetails,
      accessibilityCompliance,
      privacyPolicy,
      termsAndConditions,
      disputeResolutionMechanisms,
    },
    EnvirInfo: {
      sustainabilityPractices,
      noisePollutionControls,
    },
    VendorsInfo: {
      preferredCateringVendor,
      preferredDesignAndDecorVendor,
      preferredTravelVendor,
      preferredBeautyVendor,
      preferredPhotographyVendor,
      preferredEventPlanningVendor,
      preferredAudioVisualEquipmentVendor,
      preferredEntertainmentVendor,
      preferredAccommodationVendor,
      preferredPrintingAndSignageVendor,
      preferredSecurityServicesVendor,
    },
    DemographicInfo: {
      targetAudience,
      competitiveLandscape,
    },
  };

  const handleDateRangeChange = (newDateRange) => {
    console.log(newDateRange);
    setAvailabilityDateRange(newDateRange);
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    if (type === "radio") {
      // Handle radio buttons
      if (name === "basicInfo.ownershipType") {
        setOwnershipType(value);
      }
      if (name === "ServicesInfo.cateringServices") {
        setCateringServices(value);
      } else if (name === "ServicesInfo.barServices") {
        setBarServices(value);
      } else if (name === "ServicesInfo.alcoholLicensing") {
        setAlcoholLicensing(value);
      } else if (name === "ServicesInfo.decorServices") {
        setDecorServices(value);
      } else if (name === "ServicesInfo.eventPlanningServices") {
        setEventPlanningServices(value);
        // Handle other radio button changes here
      } else if (name === "LegalInfo.taxComplianceStatus") {
        setTaxComplianceStatus(value);
      } else if (name === "LegalInfo.fireSafetyCompliance") {
        setFireSafetyCompliance(value);
      } else if (name === "locationInfo.stageAvailability") {
        setStageAvailability(value);
      } else if (name === "locationInfo.podiumAvailability") {
        setPodiumAvailability(value);
      } else if (name === "locationInfo.valetParkingAvailability") {
        setValetParkingAvailability(value);
      } else if (name === "locationInfo.loadInOutFacilities") {
        setLoadInOutFacilities(value);
      } else if (name === "locationInfo.greenRoomAvailability") {
        setGreenRoomAvailability(value);
      } else if (name === "locationInfo.dressingRoomAvailability") {
        setDressingRoomAvailability(value);
      } else if (name === "locationInfo.kitchenFacilities") {
        setKitchenFacilities(value);
      } else if (name === "locationInfo.airConditioningHeating") {
        setAirConditioningHeating(value);
      } else if (name === "locationInfo.naturalLightAvailability") {
        setNaturalLightAvailability(value);
      } else if (name === "locationInfo.scenicView") {
        setScenicView(value);
      } else if (name === "locationInfo.smokingArea") {
        setSmokingArea(value);
      } else if (name === "locationInfo.petFriendly") {
        setPetFriendly(value);
      } else if (name === "locationInfo.childFriendly") {
        setChildFriendly(value);
      } else if (name === "ServicesInfo.audioVisualServices") {
        setAudioVisualServices(value);
      } else if (name === "ServicesInfo.internetWifiAvailability") {
        setInternetWifiAvailability(value);
      } else if (name === "ServicesInfo.accommodationAvailability") {
        setAccommodationAvailability(value);
      } else if (name === "ServicesInfo.furnitureAvailability") {
        setFurnitureAvailability(value);
      } else if (name === "ServicesInfo.cleaningServices") {
        setCleaningServices(value);
      } else if (name === "ServicesInfo.onSiteStaffAvailability") {
        setOnSiteStaffAvailability(value);
      } else if (name === "ServicesInfo.eventCoordinationServices") {
        setEventCoordinationServices(value);
      } else if (name === "ServicesInfo.storageFacilities") {
        setStorageFacilities(value);
      } else if (name === "ServicesInfo.signageBannerAllowed") {
        setSignageBannerAllowed(value);
      } else if (name === "ServicesInfo.specialLighting") {
        setSpecialLighting(value);
      } else if (name === "ServicesInfo.danceFloor") {
        setDanceFloor(value);
      } else if (name === "ServicesInfo.outdoorHeating") {
        setOutdoorHeating(value);
      } else if (name === "ServicesInfo.tentingFacilities") {
        setTentingFacilities(value);
      } else if (name === "ServicesInfo.coatCheck") {
        setCoatCheck(value);
      } else if (name === "ServicesInfo.bridalSuite") {
        setBridalSuite(value);
      } else if (name === "ServicesInfo.childCareFacilities") {
        setChildCareFacilities(value);
      } else if (name === "ServicesInfo.petCareFacilities") {
        setPetCareFacilities(value);
      } else if (name === "BookingInfo.depositRequirement") {
        setDepositRequirement(value);
      } else if (name === "BookingInfo.discountsAvailable") {
        setDiscountsAvailable(value);
      } else if (name === "BookingInfo.setupTakedownTimeIncluded") {
        setSetupTakedownTimeIncluded(value);
      } else if (name === "BookingInfo.contractRequirement") {
        setContractRequirement(value);
      } else if (name === "LegalInfo.accessibilityCompliance") {
        setAccessibilityCompliance(value);
      }
    } else if (type === "file") {
      const files = Array.from(event.target.files);
      // Check if the input field is for photosAndVideosFromPastEvents
      if (name === "PastEventInfo.photosAndVideosFromPastEvents") {
        setPhotosAndVideosFromPastEvents(files);
      } else if (name === "basicInfo.logo") {
        setLogo(files[0]);
      } else if (name === "basicInfo.photosVideos") {
        setPhotosVideos(files);
      } else if (name === "locationInfo.layoutFloorPlan") {
        setPhotosVideos(files[0]);
      } else if (name === "PastEventInfo.eventPortfolio") {
        setEventPortfolio(files);
      }
    } else {
      const [section, field] = name.split("."); // Split the name into section and field

      if (section === "basicInfo") {
        switch (field) {
          case "venueName":
            setVenueName(value);
            break;
          case "venueAddress":
            setVenueAddress(value);
            break;
          case "email":
            setEmail(value);
            break;
          case "phoneNumber":
            setPhoneNumber(value);
            break;
          case "venueType":
            setVenueType(value);
            break;
          case "venueOwner":
            setVenueOwner(value);
            break;
          case "contactInformation":
            setContactInformation(value);
            break;
          case "venueDescription":
            setVenueDescription(value);
            break;
          case "venueCategory":
            const selectedCategory = value;
            const updatedCategories = venueCategory.includes(selectedCategory)
              ? venueCategory.filter((category) => category !== selectedCategory)
              : [...venueCategory, selectedCategory];
            setVenueCategory(updatedCategories);
            break;
          case "socialMediaHandles":
            setSocialMediaHandles(value);
            break;
          case "operatingHours":
            setOperatingHours(value);
            break;
          case "languagesSpoken":
            const selectedLanguage = value;
            const updatedLanguages = languagesSpoken.includes(selectedLanguage)
              ? languagesSpoken.filter((language) => language !== selectedLanguage)
              : [...languagesSpoken, selectedLanguage];
            setLanguagesSpoken(updatedLanguages);
            break;
          case "affiliationsOrPartnerships":
            setAffiliationsOrPartnerships(value);
            break;
          case "awardsAndRecognitions":
            setAwardsAndRecognitions(value);
            break;
          case "nearestLandmarks":
            setNearestLandmarks(value);
            break;
          case "publicTransportAccessibility":
            setPublicTransportAccessibility(value);
            break;
          case "emergencyServices":
            setEmergencyServices(value);
            break;

          case "yearOfEstablishment":
            setYearOfEstablishment(value);
            break;
          case "ownershipType":
            setOwnershipType(value);
            break;
          case "uniqueIdentifier":
            setUniqueIdentifier(value);
            break;
          default:
            break;
        }
      } else if (section === "locationInfo") {
        switch (field) {
          case "totalArea":
            setTotalArea(value);
            break;
          case "indoorArea":
            setIndoorArea(value);
            break;
          case "outdoorArea":
            setOutdoorArea(value);
            break;
          case "seatingCapacity":
            setSeatingCapacity(value);
            break;
          case "standingCapacity":
            setStandingCapacity(value);
            break;
          case "numberOfRoomsSpaces":
            setNumberOfRoomsSpaces(value);
            break;

          case "accessibilityFeatures":
            const selectedAccessibility = value;
            const updatedAccessibility = accessibilityFeatures.includes(selectedAccessibility)
              ? accessibilityFeatures.filter((accessibility) => accessibility !== selectedAccessibility)
              : [...accessibilityFeatures, selectedAccessibility];
            setAccessibilityFeatures(updatedAccessibility);
            break;

          case "technicalEquipment":
            const selectedTechnicalEquipment = value;
            const updatedTechnicalEquipment = technicalEquipment.includes(selectedTechnicalEquipment)
              ? technicalEquipment.filter((equipment) => equipment !== selectedTechnicalEquipment)
              : [...technicalEquipment, selectedTechnicalEquipment];
            setTechnicalEquipment(updatedTechnicalEquipment);
            break;
          case "parkingFacilities":
            setParkingFacilities(value);
            break;
          case "parkingCapacity":
            setParkingCapacity(value);
            break;
          // Handle the rest of the locationInfo fields
          case "parkingCapacity":
            setParkingCapacity(value);
            break;
          case "proximityToAirport":
            setProximityToAirport(value);
            break;
          case "proximityToPublicTransport":
            setProximityToPublicTransport(value);
            break;
          case "proximityToMajorRoads":
            setProximityToMajorRoads(value);
            break;
          case "surroundingEnvironment":
            setSurroundingEnvironment(value);
            break;
          case "noiseRestrictions":
            setNoiseRestrictions(value);
            break;
          case "ceilingHeight":
            setCeilingHeight(value);
            break;
          case "restroomFacilities":
            setRestroomFacilities(value);
            break;
          case "powerSupplyBackup":
            setPowerSupplyBackup(value);
            break;
          case "outdoorSpaceDescription":
            setOutdoorSpaceDescription(value);
            break;
          case "noiseLevel":
            setNoiseLevel(value);
            break;
          case "nearbyParkingFacilities":
            setNearbyParkingFacilities(value);
            break;
          case "securityFeatures":
            const selectedSecurityFeature = value;
            const updatedSecurityFeatures = securityFeatures.includes(selectedSecurityFeature)
              ? securityFeatures.filter((feature) => feature !== selectedSecurityFeature)
              : [...securityFeatures, selectedSecurityFeature];
            setSecurityFeatures(updatedSecurityFeatures);
            break;
          case "fireSafetyMeasures":
            const selectedFireSafetyMeasure = value;
            const updatedFireSafetyMeasures = fireSafetyMeasures.includes(selectedFireSafetyMeasure)
              ? fireSafetyMeasures.filter((measure) => measure !== selectedFireSafetyMeasure)
              : [...fireSafetyMeasures, selectedFireSafetyMeasure];
            setFireSafetyMeasures(updatedFireSafetyMeasures);
            break;
          default:
            break;
        }
      } else if (section === "ServicesInfo") {
        switch (field) {
          case "typesOfCuisine":
            const selectedCuisine = value;
            const updatedCuisines = typesOfCuisine.includes(selectedCuisine)
              ? typesOfCuisine.filter((cuisine) => cuisine !== selectedCuisine)
              : [...typesOfCuisine, selectedCuisine];
            setTypesOfCuisine(updatedCuisines);
            break;
          case "cateringServices":
            setCateringServices(value);
            break;
          case "barServices":
            setBarServices(value);
            break;
          case "alcoholLicensing":
            setAlcoholLicensing(value);
            break;
          case "decorServices":
            setDecorServices(value);
            break;
          case "eventPlanningServices":
            setEventPlanningServices(value);
            break;
          case "numberOfRoomsForAccommodation":
            setNumberOfRoomsForAccommodation(value);
            break;
          case "typesOfRooms":
            const selectedRoomType = value;
            const updatedRoomTypes = typesOfRooms.includes(selectedRoomType)
              ? typesOfRooms.filter((roomType) => roomType !== selectedRoomType)
              : [...typesOfRooms, selectedRoomType];
            setTypesOfRooms(updatedRoomTypes);
            break;
          case "typesOfFurnitureAvailable":
            setTypesOfFurnitureAvailable(value);
            break;
          case "decorRestrictions":
            setDecorRestrictions(value);
            break;
          case "equipmentRentalOptions":
            setEquipmentRentalOptions(value);
            break;
          // ... handle other service fields ...
          default:
            break;
        }
      } else if (section === "BookingInfo") {
        // Handle BookingInfo fields
        switch (field) {
          case "availability":
            const [start, end] = value.split(" to ");
            const startDate = new Date(start);
            const endDate = new Date(end);
            setAvailabilityDateRange([{ startDate, endDate, key: "selection" }]);
            break;
          case "minimumNoticePeriod":
            setMinimumNoticePeriod(value);
            break;
          case "cancellationPolicy":
            setCancellationPolicy(value);
            break;
          case "pricing":
            setPricing(value);
            break;
          case "paymentMethodsAccepted":
            const selectedMethod = value;
            const updatedPaymentMethods = paymentMethodsAccepted.includes(selectedMethod)
              ? paymentMethodsAccepted.filter((method) => method !== selectedMethod)
              : [...paymentMethodsAccepted, selectedMethod];
            setPaymentMethodsAccepted(updatedPaymentMethods);
            break;
          case "insuranceRequirements":
            setInsuranceRequirements(value);
            break;
          case "bookingChannels":
            const selectedChannel = value;
            const updatedChannels = bookingChannels.includes(selectedChannel)
              ? bookingChannels.filter((channel) => channel !== selectedChannel)
              : [...bookingChannels, selectedChannel];
            setBookingChannels(updatedChannels);
            break;

          case "typesOfDiscounts":
            const selectedDiscount = value;
            const updatedDiscounts = typesOfDiscounts.includes(selectedDiscount)
              ? typesOfDiscounts.filter((discount) => discount !== selectedDiscount)
              : [...typesOfDiscounts, selectedDiscount];
            setTypesOfDiscounts(updatedDiscounts);
            break;
          case "depositAmount":
            setDepositAmount(value);
            break;
          case "depositRefundPolicy":
            setDepositRefundPolicy(value);
            break;
          case "minimumBookingDuration":
            setMinimumBookingDuration(value);
            break;
          case "maximumBookingDuration":
            setMaximumBookingDuration(value);
            break;
          case "overtimePolicy":
            setOvertimePolicy(value);
            break;
          case "additionalCosts":
            setAdditionalCosts(value);
            break;
          case "contractTerms":
            setContractTerms(value);
            break;
          case "cancellationByVenuePolicy":
            setCancellationByVenuePolicy(value);
            break;
          case "forceMajeurePolicy":
            setForceMajeurePolicy(value);
            break;
          case "fullPaymentDueDate":
            setFullPaymentDueDate(value);
            break;

          // ... handle other BookingInfo fields ...
          default:
            break;
        }
      } else if (section === "PastEventInfo") {
        // Handle PastEventInfo fields
        switch (field) {
          case "typesOfEventsHosted":
            const selectedEventType = value;
            const updatedEventTypes = typesOfEventsHosted.includes(selectedEventType)
              ? typesOfEventsHosted.filter((eventType) => eventType !== selectedEventType)
              : [...typesOfEventsHosted, selectedEventType];
            setTypesOfEventsHosted(updatedEventTypes);
            break;
          case "clientTestimonialsAndReviews":
            setClientTestimonialsAndReviews(value);
            break;
          case "numberOfEventsHosted":
            setNumberOfEventsHosted(value);
            break;
          case "notableEventsOrClients":
            setNotableEventsOrClients(value);
            break;
          case "clientReferences":
            setClientReferences(value);
            break;

          case "eventSuccessStories":
            setEventSuccessStories(value);
            break;
          case "eventFailuresOrLessonsLearned":
            setEventFailuresOrLessonsLearned(value);
            break;
          case "averageEventRating":
            setAverageEventRating(value);
            break;
          case "mediaMentions":
            setMediaMentions(value);
            break;
          case "eventFrequency":
            setEventFrequency(value);
            break;
          case "preferredEventTypes":
            const selectedEventTypePref = value;
            const updatedPreferredEventTypes = preferredEventTypes.includes(selectedEventTypePref)
              ? preferredEventTypes.filter((eventTypePref) => eventTypePref !== selectedEventTypePref)
              : [...preferredEventTypes, selectedEventTypePref];
            setPreferredEventTypes(updatedPreferredEventTypes);
            break;
          // ... handle other PastEventInfo fields ...
          default:
            break;
        }
      } else if (section === "LegalInfo") {
        switch (field) {
          case "licensesAndPermits":
            setLicensesAndPermits(value);
            break;
          case "safetyMeasures":
            setSafetyMeasures(value);
            break;
          case "businessRegistrationDetails":
            setBusinessRegistrationDetails(value);
            break;
          case "taxComplianceStatus":
            setTaxComplianceStatus(value);
            break;
          case "healthAndSafetyCertifications":
            setHealthAndSafetyCertifications(value);
            break;
          case "fireSafetyCompliance":
            setFireSafetyCompliance(value);
            break;

          case "foodSafetyCertifications":
            setFoodSafetyCertifications(value);
            break;
          case "alcoholLicensingDetails":
            setAlcoholLicensingDetails(value);
            break;
          case "musicLicensingDetails":
            setMusicLicensingDetails(value);
            break;
          case "insuranceCoverageDetails":
            setInsuranceCoverageDetails(value);
            break;
          case "privacyPolicy":
            setPrivacyPolicy(value);
            break;
          case "termsAndConditions":
            setTermsAndConditions(value);
            break;
          case "disputeResolutionMechanisms":
            setDisputeResolutionMechanisms(value);
            break;
          // ... handle other LegalInfo fields ...
          default:
            break;
        }
      } else if (section === "EnvirInfo") {
        switch (field) {
          case "sustainabilityPractices":
            setSustainabilityPractices(value);
            break;
          case "noisePollutionControls":
            setNoisePollutionControls(value);
            break;
          // ... handle other EnvirInfo fields ...
          default:
            break;
        }
      } else if (section === "VendorsInfo") {
        // Handle VendorsInfo fields
        switch (field) {
          case "preferredCateringVendor":
            setPreferredCateringVendor(value);
            break;
          case "preferredDesignAndDecorVendor":
            setPreferredDesignAndDecorVendor(value);
            break;
          case "preferredTravelVendor":
            setPreferredTravelVendor(value);
            break;
          case "preferredBeautyVendor":
            setPreferredBeautyVendor(value);
            break;
          case "preferredPhotographyVendor":
            setPreferredPhotographyVendor(value);
            break;
          case "preferredEventPlanningVendor":
            setPreferredEventPlanningVendor(value);
            break;
          case "preferredAudioVisualEquipmentVendor":
            setPreferredAudioVisualEquipmentVendor(value);
            break;
          case "preferredEntertainmentVendor":
            setPreferredEntertainmentVendor(value);
            break;
          case "preferredAccommodationVendor":
            setPreferredAccommodationVendor(value);
            break;
          case "preferredPrintingAndSignageVendor":
            setPreferredPrintingAndSignageVendor(value);
            break;
          case "preferredSecurityServicesVendor":
            setPreferredSecurityServicesVendor(value);
            break;
          // ... handle other VendorsInfo fields ...
          default:
            break;
        }
      } else if (section === "DemographicInfo") {
        switch (field) {
          case "targetAudience":
            setTargetAudience(value);
            break;
          case "competitiveLandscape":
            setCompetitiveLandscape(value);
            break;
          // ... Handle other DemographicInfo fields ...
          default:
            break;
        }
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Create a FormData object
    try {
      const formDataObject = new FormData();

      // // Append each photosVideos file separately
      // for (let i = 0; i < photosVideos.length; i++) {
      //   console.log("p :", photosVideos[i].files);
      //   formDataObject.append("basicInfo[photosVideos]", photosVideos[i]);
      // }

      // Append Basic Information fields
      formDataObject.set("basicInfo[venueName]", venueName);
      formDataObject.set("basicInfo[venueAddress]", venueAddress);
      formDataObject.set("basicInfo[phoneNumber]", phoneNumber);
      formDataObject.set("basicInfo[email]", email);
      formDataObject.set("basicInfo[venueType]", venueType);
      formDataObject.set("basicInfo[venueOwner]", venueOwner);
      formDataObject.set("basicInfo[contactInformation]", contactInformation);
      formDataObject.set("basicInfo[venueDescription]", venueDescription);
      formDataObject.set("basicInfo[venueCategory]", venueCategory.join(","));
      formDataObject.set("basicInfo[socialMediaHandles]", socialMediaHandles);
      formDataObject.set("basicInfo[operatingHours]", operatingHours);
      formDataObject.set("basicInfo[languagesSpoken]", languagesSpoken.join(","));
      formDataObject.set("basicInfo[affiliationsOrPartnerships]", affiliationsOrPartnerships);
      formDataObject.set("basicInfo[awardsAndRecognitions]", awardsAndRecognitions);
      formDataObject.set("basicInfo[nearestLandmarks]", nearestLandmarks);
      formDataObject.set("basicInfo[publicTransportAccessibility]", publicTransportAccessibility);
      formDataObject.set("basicInfo[emergencyServices]", emergencyServices);
      formDataObject.set("basicInfo[yearOfEstablishment]", yearOfEstablishment);
      formDataObject.set("basicInfo[ownershipType]", ownershipType);
      formDataObject.set("basicInfo[uniqueIdentifier]", uniqueIdentifier);
      // Append Photos and Videos files
      for (let i = 0; i < photosVideos.length; i++) {
        formDataObject.append("basicInfo[photosVideos]", photosVideos[i]);
      }
      // Append Logo file
      formDataObject.append("basicInfo[logo]", logo);

      // Append Location Information fields
      formDataObject.set("locationInfo[totalArea]", totalArea);
      formDataObject.set("locationInfo[indoorArea]", indoorArea);
      formDataObject.set("locationInfo[outdoorArea]", outdoorArea);
      formDataObject.set("locationInfo[seatingCapacity]", seatingCapacity);
      formDataObject.set("locationInfo[standingCapacity]", standingCapacity);
      formDataObject.set("locationInfo[numberOfRoomsSpaces]", numberOfRoomsSpaces);
      formDataObject.append("locationInfo[layoutFloorPlan]", layoutFloorPlan);
      formDataObject.set("locationInfo[accessibilityFeatures]", accessibilityFeatures.join(","));
      formDataObject.set("locationInfo[stageAvailability]", stageAvailability);
      formDataObject.set("locationInfo[podiumAvailability]", podiumAvailability);
      formDataObject.set("locationInfo[technicalEquipment]", technicalEquipment.join(","));
      formDataObject.set("locationInfo[parkingFacilities]", parkingFacilities);
      formDataObject.set("locationInfo[parkingCapacity]", parkingCapacity);
      formDataObject.set("locationInfo[valetParkingAvailability]", valetParkingAvailability);
      formDataObject.set("locationInfo[proximityToPublicTransport]", proximityToPublicTransport);
      formDataObject.set("locationInfo[proximityToMajorRoads]", proximityToMajorRoads);
      formDataObject.set("locationInfo[proximityToAirport]", proximityToAirport);
      formDataObject.set("locationInfo[surroundingEnvironment]", surroundingEnvironment);
      formDataObject.set("locationInfo[noiseRestrictions]", noiseRestrictions);
      formDataObject.set("locationInfo[ceilingHeight]", ceilingHeight);
      formDataObject.set("locationInfo[loadInOutFacilities]", loadInOutFacilities);
      formDataObject.set("locationInfo[greenRoomAvailability]", greenRoomAvailability);
      formDataObject.set("locationInfo[dressingRoomAvailability]", dressingRoomAvailability);
      formDataObject.set("locationInfo[kitchenFacilities]", kitchenFacilities);
      formDataObject.set("locationInfo[restroomFacilities]", restroomFacilities);
      formDataObject.set("locationInfo[powerSupplyBackup]", powerSupplyBackup);
      formDataObject.set("locationInfo[airConditioningHeating]", airConditioningHeating);
      formDataObject.set("locationInfo[naturalLightAvailability]", naturalLightAvailability);
      formDataObject.set("locationInfo[outdoorSpaceDescription]", outdoorSpaceDescription);
      formDataObject.set("locationInfo[scenicView]", scenicView);
      formDataObject.set("locationInfo[smokingArea]", smokingArea);
      formDataObject.set("locationInfo[petFriendly]", petFriendly);
      formDataObject.set("locationInfo[childFriendly]", childFriendly);
      formDataObject.set("locationInfo[noiseLevel]", noiseLevel);
      formDataObject.set("locationInfo[nearbyParkingFacilities]", nearbyParkingFacilities);
      formDataObject.set("locationInfo[securityFeatures]", securityFeatures.join(","));
      formDataObject.set("locationInfo[fireSafetyMeasures]", fireSafetyMeasures.join(","));

      // ... (rest of your code)

      // Append Service Information fields
      formDataObject.set("ServicesInfo[cateringServices]", cateringServices);
      formDataObject.set("ServicesInfo[typesOfCuisine]", typesOfCuisine.join(","));
      formDataObject.set("ServicesInfo[barServices]", barServices);
      formDataObject.set("ServicesInfo[alcoholLicensing]", alcoholLicensing);
      formDataObject.set("ServicesInfo[decorServices]", decorServices);
      formDataObject.set("ServicesInfo[eventPlanningServices]", eventPlanningServices);
      formDataObject.set("ServicesInfo[audioVisualServices]", audioVisualServices);
      formDataObject.set("ServicesInfo[internetWifiAvailability]", internetWifiAvailability);
      formDataObject.set("ServicesInfo[accommodationAvailability]", accommodationAvailability);
      formDataObject.set("ServicesInfo[numberOfRoomsForAccommodation]", numberOfRoomsForAccommodation);
      formDataObject.set("ServicesInfo[typesOfRooms]", typesOfRooms.join(","));
      formDataObject.set("ServicesInfo[furnitureAvailability]", furnitureAvailability);
      formDataObject.set("ServicesInfo[typesOfFurnitureAvailable]", typesOfFurnitureAvailable);
      formDataObject.set("ServicesInfo[decorRestrictions]", decorRestrictions);
      formDataObject.set("ServicesInfo[cleaningServices]", cleaningServices);
      formDataObject.set("ServicesInfo[onSiteStaffAvailability]", onSiteStaffAvailability);
      formDataObject.set("ServicesInfo[eventCoordinationServices]", eventCoordinationServices);
      formDataObject.set("ServicesInfo[equipmentRentalOptions]", equipmentRentalOptions);
      formDataObject.set("ServicesInfo[storageFacilities]", storageFacilities);
      formDataObject.set("ServicesInfo[signageBannerAllowed]", signageBannerAllowed);
      formDataObject.set("ServicesInfo[specialLighting]", specialLighting);
      formDataObject.set("ServicesInfo[danceFloor]", danceFloor);
      formDataObject.set("ServicesInfo[outdoorHeating]", outdoorHeating);
      formDataObject.set("ServicesInfo[tentingFacilities]", tentingFacilities);
      formDataObject.set("ServicesInfo[coatCheck]", coatCheck);
      formDataObject.set("ServicesInfo[bridalSuite]", bridalSuite);
      formDataObject.set("ServicesInfo[childCareFacilities]", childCareFacilities);
      formDataObject.set("ServicesInfo[petCareFacilities]", petCareFacilities);

      // ... (rest of your code)

      // Adding BookingInfo fields
      formDataObject.set(
        "BookingInfo[availability]",
        availabilityDateRange[0].startDate.toISOString() + " to " + availabilityDateRange[0].endDate.toISOString()
      );
      formDataObject.set("BookingInfo[minimumNoticePeriod]", minimumNoticePeriod);
      formDataObject.set("BookingInfo[cancellationPolicy]", cancellationPolicy);
      formDataObject.set("BookingInfo[pricing]", pricing);
      formDataObject.set("BookingInfo[paymentMethodsAccepted]", paymentMethodsAccepted.join(","));
      formDataObject.set("BookingInfo[insuranceRequirements]", insuranceRequirements);
      formDataObject.set("BookingInfo[bookingChannels]", bookingChannels.join(","));
      formDataObject.set("BookingInfo[depositRequirement]", depositRequirement);
      formDataObject.set("BookingInfo[depositAmount]", depositAmount);
      formDataObject.set("BookingInfo[depositRefundPolicy]", depositRefundPolicy);
      formDataObject.set("BookingInfo[fullPaymentDueDate]", fullPaymentDueDate);
      formDataObject.set("BookingInfo[discountsAvailable]", discountsAvailable);
      formDataObject.set("BookingInfo[typesOfDiscounts]", typesOfDiscounts.join(","));
      formDataObject.set("BookingInfo[minimumBookingDuration]", minimumBookingDuration);
      formDataObject.set("BookingInfo[maximumBookingDuration]", maximumBookingDuration);
      formDataObject.set("BookingInfo[overtimePolicy]", overtimePolicy);
      formDataObject.set("BookingInfo[setupTakedownTimeIncluded]", setupTakedownTimeIncluded);
      formDataObject.set("BookingInfo[additionalCosts]", additionalCosts);
      formDataObject.set("BookingInfo[contractRequirement]", contractRequirement);
      formDataObject.set("BookingInfo[contractTerms]", contractTerms);
      formDataObject.set("BookingInfo[cancellationByVenuePolicy]", cancellationByVenuePolicy);
      formDataObject.set("BookingInfo[forceMajeurePolicy]", forceMajeurePolicy);

      // ... (rest of your code)

      // Append PastEventInfo fields
      formDataObject.set("PastEventInfo[typesOfEventsHosted]", typesOfEventsHosted.join(","));
      formDataObject.set("PastEventInfo[clientTestimonialsAndReviews]", clientTestimonialsAndReviews);

      // Append each photosAndVideosFromPastEvents file separately
      for (let i = 0; i < photosAndVideosFromPastEvents.length; i++) {
        formDataObject.append("PastEventInfo[photosAndVideosFromPastEvents]", photosAndVideosFromPastEvents[i]);
      }

      formDataObject.set("PastEventInfo[numberOfEventsHosted]", numberOfEventsHosted);
      formDataObject.set("PastEventInfo[notableEventsOrClients]", notableEventsOrClients);
      formDataObject.set("PastEventInfo[clientReferences]", clientReferences);
      formDataObject.set("PastEventInfo[eventSuccessStories]", eventSuccessStories);
      formDataObject.set("PastEventInfo[eventFailuresOrLessonsLearned]", eventFailuresOrLessonsLearned);
      formDataObject.set("PastEventInfo[averageEventRating]", averageEventRating);
      for (let i = 0; i < eventPortfolio.length; i++) {
        formDataObject.append("PastEventInfo[eventPortfolio]", eventPortfolio[i]);
      }

      formDataObject.set("PastEventInfo[mediaMentions]", mediaMentions);
      formDataObject.set("PastEventInfo[eventFrequency]", eventFrequency);
      formDataObject.set("PastEventInfo[preferredEventTypes]", preferredEventTypes.join(","));

      // Append LegalInfo fields
      formDataObject.set("LegalInfo[licensesAndPermits]", licensesAndPermits);
      formDataObject.set("LegalInfo[safetyMeasures]", safetyMeasures);
      formDataObject.set("LegalInfo[businessRegistrationDetails]", businessRegistrationDetails);
      formDataObject.set("LegalInfo[taxComplianceStatus]", taxComplianceStatus);
      formDataObject.set("LegalInfo[healthAndSafetyCertifications]", healthAndSafetyCertifications);
      formDataObject.set("LegalInfo[fireSafetyCompliance]", fireSafetyCompliance);
      formDataObject.set("LegalInfo[foodSafetyCertifications]", foodSafetyCertifications);
      formDataObject.set("LegalInfo[alcoholLicensingDetails]", alcoholLicensingDetails);
      formDataObject.set("LegalInfo[musicLicensingDetails]", musicLicensingDetails);
      formDataObject.set("LegalInfo[insuranceCoverageDetails]", insuranceCoverageDetails);
      formDataObject.set("LegalInfo[accessibilityCompliance]", accessibilityCompliance);
      formDataObject.set("LegalInfo[privacyPolicy]", privacyPolicy);
      formDataObject.set("LegalInfo[termsAndConditions]", termsAndConditions);
      formDataObject.set("LegalInfo[disputeResolutionMechanisms]", disputeResolutionMechanisms);

      // Append EnvirInfo fields
      formDataObject.set("EnvirInfo[sustainabilityPractices]", sustainabilityPractices);
      formDataObject.set("EnvirInfo[noisePollutionControls]", noisePollutionControls);

      // Append VendorsInfo fields
      formDataObject.set("VendorsInfo[preferredCateringVendor]", preferredCateringVendor);
      formDataObject.set("VendorsInfo[preferredDesignAndDecorVendor]", preferredDesignAndDecorVendor);
      formDataObject.set("VendorsInfo[preferredTravelVendor]", preferredTravelVendor);
      formDataObject.set("VendorsInfo[preferredBeautyVendor]", preferredBeautyVendor);
      formDataObject.set("VendorsInfo[preferredPhotographyVendor]", preferredPhotographyVendor);
      formDataObject.set("VendorsInfo[preferredEventPlanningVendor]", preferredEventPlanningVendor);
      formDataObject.set("VendorsInfo[preferredAudioVisualEquipmentVendor]", preferredAudioVisualEquipmentVendor);
      formDataObject.set("VendorsInfo[preferredEntertainmentVendor]", preferredEntertainmentVendor);
      formDataObject.set("VendorsInfo[preferredAccommodationVendor]", preferredAccommodationVendor);
      formDataObject.set("VendorsInfo[preferredPrintingAndSignageVendor]", preferredPrintingAndSignageVendor);
      formDataObject.set("VendorsInfo[preferredSecurityServicesVendor]", preferredSecurityServicesVendor);

      formDataObject.set("DemographicInfo[targetAudience]", targetAudience);
      formDataObject.set("DemographicInfo[competitiveLandscape]", competitiveLandscape);
      formDataObject.set("user", user.name);
      // console.log(formDataObject);

      await dispatch(createVenue(formDataObject));
      setIsFormSubmitted(true); // Set the submission status to success
    } catch (error) {
      setSubmissionStatus("error"); // Set the submission status to error
    }
  };

  const stepsMobile = ["B", "L", "S", "B", "P", "L", "E", "PV", "D", "V"];
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
  // const steps = [<FontAwesomeIcon icon={faCircleInfo} size="2xl" />, 'Location Information', 'Services and Amenities','Booking Information','Past Event Information','Legal and Compliance Information','Environmental Impact','Preferred Vendors','Demographic and Market Data','Verification',];

  return (
    <div className="container">
      <div className="refer">
        <button type="button" className="back-button " onClick={() => navigate(-1)}>
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
        {/* <div className="stepper">
        {stepsMobile.map((stepLabel, index) => (
          <div
            key={index}
            className={`step ${step === index + 1 ? "active" : ""}`}
          >
            <h1 className="steplabel"> {stepLabel}</h1>
        
          </div>
        ))}
        </div> */}
      </div>
      <div>
        {isFormSubmitted ? (
          <div className="success-message">
            Form submitted successfully!
            <button className="close-button" onClick={() => setIsFormSubmitted(false)}>
              Close
            </button>
          </div>
        ) : (
          <form className="createForm" encType="multipart/form-data" onSubmit={handleSubmit}>
            {step === 1 && <Step1 data={formData.basicInfo} handleChange={handleChange} />}
            {step === 2 && <Step2 data={formData.locationInfo} handleChange={handleChange} />}
            {step === 3 && <Step3 data={formData.ServicesInfo} handleChange={handleChange} />}
            {step === 4 && (
              <Step4 data={formData.BookingInfo} handleChange={handleChange} setDateRange={handleDateRangeChange} />
            )}
            {step === 5 && <Step5 data={formData.PastEventInfo} handleChange={handleChange} />}
            {step === 6 && <Step6 data={formData.LegalInfo} handleChange={handleChange} />}
            {step === 7 && <Step7 data={formData.EnvirInfo} handleChange={handleChange} />}
            {step === 8 && <Step8 data={formData.VendorsInfo} handleChange={handleChange} />}
            {step === 9 && <Step9 data={formData.DemographicInfo} handleChange={handleChange} />}

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
        )}
      </div>

      {loading ? <p>Loading...</p> : <>{error && <p className="error-message">{error}</p>}</>}
    </div>
  );
};

export default Main;
