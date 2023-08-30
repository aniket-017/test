const mongoose = require("mongoose");
const Venue = require("../models/venueModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
//Create Venue -- Admin

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.createVenue = async (req, res, next) => {
  // console.log("body : ", req);
  try {
    console.log("files : ", req.files);
    // Handle files for basicInfo[photosVideos] field
    // const uploadedBasicInfoFiles = req.files && req.files["basicInfo[photosVideos]"];
    // const imagesLinks = [];

    // if (uploadedBasicInfoFiles) {
    //   for (const uploadedFile of uploadedBasicInfoFiles) {
    //     const base64Data = uploadedFile.data.toString("base64");
    //     const cloudinaryResult = await cloudinary.uploader.upload(`data:${uploadedFile.mimetype};base64,${base64Data}`);
    //     imagesLinks.push({
    //       public_id: cloudinaryResult.public_id,
    //       url: cloudinaryResult.url,
    //     });
    //   }
    //   console.log("Uploaded files: ", imagesLinks);
    // }

    // Handle files for basicInfo[photosVideos] field
    //  if (!req.files || !req.files["basicInfo[photosVideos]"]) {
    //   return res.status(400).json({ message: "No files were uploaded." });
    // }
    const imagesLinks = [];
    if (req.files && req.files["basicInfo[photosVideos]"]) {
      console.log("1");
      const uploadedFiles = Array.isArray(req.files["basicInfo[photosVideos]"])
        ? req.files["basicInfo[photosVideos]"]
        : [req.files["basicInfo[photosVideos]"]];

      for (const uploadedFile of uploadedFiles) {
        const base64Data = uploadedFile.data.toString("base64");
        const cloudinaryResult = await cloudinary.uploader.upload(`data:${uploadedFile.mimetype};base64,${base64Data}`);
        console.log(cloudinaryResult.public_id);
        imagesLinks.push({
          public_id: cloudinaryResult.public_id,
          url: cloudinaryResult.url,
        });
      }
      console.log("1 file uploaded");
    }
    // end

    const eventPortfolioLinks = [];

    if (req.files && req.files["PastEventInfo[eventPortfolio]"]) {
      const uploadedEventPortfolioFiles = Array.isArray(req.files["PastEventInfo[eventPortfolio]"])
        ? req.files["PastEventInfo[eventPortfolio]"]
        : [req.files["PastEventInfo[eventPortfolio]"]];

      for (const uploadedFile of uploadedEventPortfolioFiles) {
        const base64Data = uploadedFile.data.toString("base64");
        const cloudinaryResult = await cloudinary.uploader.upload(`data:${uploadedFile.mimetype};base64,${base64Data}`);
        console.log(cloudinaryResult.public_id);
        eventPortfolioLinks.push({
          public_id: cloudinaryResult.public_id,
          url: cloudinaryResult.url,
        });
      }
      console.log("Event portfolio files uploaded");
    } else {
      console.log("No event portfolio files uploaded.");
    }

    // Handle files for logo from basicInfo field
    const uploadedLogoFile = req.files && req.files["basicInfo[logo]"];
    let logoLink = null;
    if (uploadedLogoFile) {
      const base64Data = uploadedLogoFile.data.toString("base64");
      const cloudinaryResult = await cloudinary.uploader.upload(
        `data:${uploadedLogoFile.mimetype};base64,${base64Data}`
      );
      logoLink = {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.url,
      };
      console.log("Uploaded logo: ", logoLink);
    }

    const uploadedLayoutFile = req.files && req.files["locationInfo[layoutFloorPlan]"];
    let layoutFloorPlan = null;
    if (uploadedLayoutFile) {
      const base64Data = uploadedLayoutFile.data.toString("base64");
      const cloudinaryResult = await cloudinary.uploader.upload(
        `data:${uploadedLayoutFile.mimetype};base64,${base64Data}`
      );
      layoutFloorPlan = {
        public_id: cloudinaryResult.public_id,
        url: cloudinaryResult.url,
      };
      console.log("Uploaded layout floor plan: ", layoutFloorPlan);
    }

    // Handle files for PastEventInfo[photosAndVideosFromPastEvents] field
    const pastEventImagesLinks = [];

    if (req.files && req.files["PastEventInfo[photosAndVideosFromPastEvents]"]) {
      const uploadedPastEventFiles = Array.isArray(req.files["PastEventInfo[photosAndVideosFromPastEvents]"])
        ? req.files["PastEventInfo[photosAndVideosFromPastEvents]"]
        : [req.files["PastEventInfo[photosAndVideosFromPastEvents]"]];

      for (const uploadedFile of uploadedPastEventFiles) {
        const base64Data = uploadedFile.data.toString("base64");
        const cloudinaryResult = await cloudinary.uploader.upload(`data:${uploadedFile.mimetype};base64,${base64Data}`);
        console.log(cloudinaryResult.public_id);
        pastEventImagesLinks.push({
          public_id: cloudinaryResult.public_id,
          url: cloudinaryResult.url,
        });
      }
      console.log("Past event files uploaded");
    } else {
      console.log("No past event files uploaded.");
    }

    console.log("uptil here ");
    // req.body.user = req.user.id;
    console.log(req.body.user);
    console.log(req.body);

    const venueData = {
      basicInfo: {
        venueName: req.body["basicInfo[venueName]"],
        venueAddress: req.body["basicInfo[venueAddress]"],
        phoneNumber: req.body["basicInfo[phoneNumber]"],
        email: req.body["basicInfo[email]"],
        venueType: req.body["basicInfo[venueType]"],
        venueOwner: req.body["basicInfo[venueOwner]"],
        venueDescription: req.body["basicInfo[venueDescription]"],

        contactInformation: req.body["basicInfo[contactInformation]"],

        venueCategory: req.body["basicInfo[venueCategory]"].split(","),
        socialMediaHandles: req.body["basicInfo[socialMediaHandles]"],
        operatingHours: req.body["basicInfo[operatingHours]"],
        languagesSpoken: req.body["basicInfo[languagesSpoken]"].split(","),
        affiliationsOrPartnerships: req.body["basicInfo[affiliationsOrPartnerships]"],
        awardsAndRecognitions: req.body["basicInfo[awardsAndRecognitions]"],
        nearestLandmarks: req.body["basicInfo[nearestLandmarks]"],
        publicTransportAccessibility: req.body["basicInfo[publicTransportAccessibility]"],
        emergencyServices: req.body["basicInfo[emergencyServices]"],
        photosVideos: imagesLinks, // Array of Cloudinary URLs and public IDs
        logo: logoLink, // You should set this based on your logic
        yearOfEstablishment: req.body["basicInfo[yearOfEstablishment]"],
        ownershipType: req.body["basicInfo[ownershipType]"],
        uniqueIdentifier: req.body["basicInfo[uniqueIdentifier]"],
      },
      locationInfo: {
        totalArea: req.body["locationInfo[totalArea]"],
        indoorArea: req.body["locationInfo[indoorArea]"],
        outdoorArea: req.body["locationInfo[outdoorArea]"],
        seatingCapacity: req.body["locationInfo[seatingCapacity]"],
        standingCapacity: req.body["locationInfo[standingCapacity]"],
        numberOfRoomsSpaces: req.body["locationInfo[numberOfRoomsSpaces]"],
        layoutFloorPlan: layoutFloorPlan, // Assuming layoutFloorPlan is already defined
        accessibilityFeatures: req.body["locationInfo[accessibilityFeatures]"].split(","),
        stageAvailability: req.body["locationInfo[stageAvailability]"],
        podiumAvailability: req.body["locationInfo[podiumAvailability]"],
        technicalEquipment: req.body["locationInfo[technicalEquipment]"].split(","),
        parkingFacilities: req.body["locationInfo[parkingFacilities]"],
        parkingCapacity: req.body["locationInfo[parkingCapacity]"],
        valetParkingAvailability: req.body["locationInfo[valetParkingAvailability]"],
        proximityToPublicTransport: req.body["locationInfo[proximityToPublicTransport]"],
        proximityToMajorRoads: req.body["locationInfo[proximityToMajorRoads]"],
        proximityToAirport: req.body["locationInfo[proximityToAirport]"],
        surroundingEnvironment: req.body["locationInfo[surroundingEnvironment]"],
        noiseRestrictions: req.body["locationInfo[noiseRestrictions]"],
        ceilingHeight: req.body["locationInfo[ceilingHeight]"],
        loadInOutFacilities: req.body["locationInfo[loadInOutFacilities]"],
        greenRoomAvailability: req.body["locationInfo[greenRoomAvailability]"],
        dressingRoomAvailability: req.body["locationInfo[dressingRoomAvailability]"],
        kitchenFacilities: req.body["locationInfo[kitchenFacilities]"],
        restroomFacilities: req.body["locationInfo[restroomFacilities]"],
        powerSupplyBackup: req.body["locationInfo[powerSupplyBackup]"],
        airConditioningHeating: req.body["locationInfo[airConditioningHeating]"],
        naturalLightAvailability: req.body["locationInfo[naturalLightAvailability]"],
        outdoorSpaceDescription: req.body["locationInfo[outdoorSpaceDescription]"],
        scenicView: req.body["locationInfo[scenicView]"],
        smokingArea: req.body["locationInfo[smokingArea]"],
        petFriendly: req.body["locationInfo[petFriendly]"],
        childFriendly: req.body["locationInfo[childFriendly]"],
        noiseLevel: req.body["locationInfo[noiseLevel]"],
        nearbyParkingFacilities: req.body["locationInfo[nearbyParkingFacilities]"],
        securityFeatures: req.body["locationInfo[securityFeatures]"].split(","),
        fireSafetyMeasures: req.body["locationInfo[fireSafetyMeasures]"].split(","),
      },

      ServicesInfo: {
        cateringServices: req.body["ServicesInfo[cateringServices]"],
        typesOfCuisine: req.body["ServicesInfo[typesOfCuisine]"]
          ? req.body["ServicesInfo[typesOfCuisine]"].split(",")
          : [],
        barServices: req.body["ServicesInfo[barServices]"],
        alcoholLicensing: req.body["ServicesInfo[alcoholLicensing]"],
        decorServices: req.body["ServicesInfo[decorServices]"],
        eventPlanningServices: req.body["ServicesInfo[eventPlanningServices]"],
        audioVisualServices: req.body["ServicesInfo[audioVisualServices]"],
        internetWifiAvailability: req.body["ServicesInfo[internetWifiAvailability]"],
        accommodationAvailability: req.body["ServicesInfo[accommodationAvailability]"],
        numberOfRoomsForAccommodation: req.body["ServicesInfo[numberOfRoomsForAccommodation]"],
        typesOfRooms: req.body["ServicesInfo[typesOfRooms]"].split(","),
        furnitureAvailability: req.body["ServicesInfo[furnitureAvailability]"],
        typesOfFurnitureAvailable: req.body["ServicesInfo[typesOfFurnitureAvailable]"],
        decorRestrictions: req.body["ServicesInfo[decorRestrictions]"],
        cleaningServices: req.body["ServicesInfo[cleaningServices]"],
        onSiteStaffAvailability: req.body["ServicesInfo[onSiteStaffAvailability]"],
        eventCoordinationServices: req.body["ServicesInfo[eventCoordinationServices]"],
        equipmentRentalOptions: req.body["ServicesInfo[equipmentRentalOptions]"],
        storageFacilities: req.body["ServicesInfo[storageFacilities]"],
        signageBannerAllowed: req.body["ServicesInfo[signageBannerAllowed]"],
        specialLighting: req.body["ServicesInfo[specialLighting]"],
        danceFloor: req.body["ServicesInfo[danceFloor]"],
        outdoorHeating: req.body["ServicesInfo[outdoorHeating]"],
        tentingFacilities: req.body["ServicesInfo[tentingFacilities]"],
        coatCheck: req.body["ServicesInfo[coatCheck]"],
        bridalSuite: req.body["ServicesInfo[bridalSuite]"],
        childCareFacilities: req.body["ServicesInfo[childCareFacilities]"],
        petCareFacilities: req.body["ServicesInfo[petCareFacilities]"],
      },
      BookingInfo: {
        availability: req.body["BookingInfo[availability]"],
        minimumNoticePeriod: req.body["BookingInfo[minimumNoticePeriod]"],
        cancellationPolicy: req.body["BookingInfo[cancellationPolicy]"],
        pricing: req.body["BookingInfo[pricing]"],
        paymentMethodsAccepted: req.body["BookingInfo[paymentMethodsAccepted]"]
          ? req.body["BookingInfo[paymentMethodsAccepted]"].split(",")
          : [],
        insuranceRequirements: req.body["BookingInfo[insuranceRequirements]"],
        bookingChannels: req.body["BookingInfo[bookingChannels]"].split(","),
        depositRequirement: req.body["BookingInfo[depositRequirement]"],
        depositAmount: req.body["BookingInfo[depositAmount]"],
        depositRefundPolicy: req.body["BookingInfo[depositRefundPolicy]"],
        fullPaymentDueDate: req.body["BookingInfo[fullPaymentDueDate]"],
        discountsAvailable: req.body["BookingInfo[discountsAvailable]"],
        typesOfDiscounts: req.body["BookingInfo[typesOfDiscounts]"].split(","),
        minimumBookingDuration: req.body["BookingInfo[minimumBookingDuration]"],
        maximumBookingDuration: req.body["BookingInfo[maximumBookingDuration]"],
        overtimePolicy: req.body["BookingInfo[overtimePolicy]"],
        setupTakedownTimeIncluded: req.body["BookingInfo[setupTakedownTimeIncluded]"],
        additionalCosts: req.body["BookingInfo[additionalCosts]"],
        contractRequirement: req.body["BookingInfo[contractRequirement]"],
        contractTerms: req.body["BookingInfo[contractTerms]"],
        cancellationByVenuePolicy: req.body["BookingInfo[cancellationByVenuePolicy]"],
        forceMajeurePolicy: req.body["BookingInfo[forceMajeurePolicy]"],
      },
      PastEventInfo: {
        typesOfEventsHosted: req.body["PastEventInfo[typesOfEventsHosted]"]
          ? req.body["PastEventInfo[typesOfEventsHosted]"].split(",")
          : [],
        clientTestimonialsAndReviews: req.body["PastEventInfo[clientTestimonialsAndReviews]"],
        photosAndVideosFromPastEvents: pastEventImagesLinks,
        numberOfEventsHosted: req.body["PastEventInfo[numberOfEventsHosted]"],
        notableEventsOrClients: req.body["PastEventInfo[notableEventsOrClients]"],
        clientReferences: req.body["PastEventInfo[clientReferences]"],
        eventSuccessStories: req.body["PastEventInfo[eventSuccessStories]"],
        eventFailuresOrLessonsLearned: req.body["PastEventInfo[eventFailuresOrLessonsLearned]"],
        averageEventRating: req.body["PastEventInfo[averageEventRating]"],
        eventPortfolio: eventPortfolioLinks,
        mediaMentions: req.body["PastEventInfo[mediaMentions]"],
        eventFrequency: req.body["PastEventInfo[eventFrequency]"],
        preferredEventTypes: req.body["PastEventInfo[preferredEventTypes]"]
          ? req.body["PastEventInfo[preferredEventTypes]"].split(",")
          : [],
      },
      LegalInfo: {
        licensesAndPermits: req.body["LegalInfo[licensesAndPermits]"],
        safetyMeasures: req.body["LegalInfo[safetyMeasures]"],
        businessRegistrationDetails: req.body["LegalInfo[businessRegistrationDetails]"],
        taxComplianceStatus: req.body["LegalInfo[taxComplianceStatus]"],
        healthAndSafetyCertifications: req.body["LegalInfo[healthAndSafetyCertifications]"],
        fireSafetyCompliance: req.body["LegalInfo[fireSafetyCompliance]"],
        foodSafetyCertifications: req.body["LegalInfo[foodSafetyCertifications]"],
        alcoholLicensingDetails: req.body["LegalInfo[alcoholLicensingDetails]"],
        musicLicensingDetails: req.body["LegalInfo[musicLicensingDetails]"],
        insuranceCoverageDetails: req.body["LegalInfo[insuranceCoverageDetails]"],
        accessibilityCompliance: req.body["LegalInfo[accessibilityCompliance]"],
        privacyPolicy: req.body["LegalInfo[privacyPolicy]"],
        termsAndConditions: req.body["LegalInfo[termsAndConditions]"],
        disputeResolutionMechanisms: req.body["LegalInfo[disputeResolutionMechanisms]"],
      },
      EnvirInfo: {
        sustainabilityPractices: req.body["EnvirInfo[sustainabilityPractices]"],
        noisePollutionControls: req.body["EnvirInfo[noisePollutionControls]"],
      },
      VendorsInfo: {
        preferredCateringVendor: req.body["VendorsInfo[preferredCateringVendor]"],
        preferredDesignAndDecorVendor: req.body["VendorsInfo[preferredDesignAndDecorVendor]"],
        preferredTravelVendor: req.body["VendorsInfo[preferredTravelVendor]"],
        preferredBeautyVendor: req.body["VendorsInfo[preferredBeautyVendor]"],
        preferredPhotographyVendor: req.body["VendorsInfo[preferredPhotographyVendor]"],
        preferredEventPlanningVendor: req.body["VendorsInfo[preferredEventPlanningVendor]"],
        preferredAudioVisualEquipmentVendor: req.body["VendorsInfo[preferredAudioVisualEquipmentVendor]"],
        preferredEntertainmentVendor: req.body["VendorsInfo[preferredEntertainmentVendor]"],
        preferredAccommodationVendor: req.body["VendorsInfo[preferredAccommodationVendor]"],
        preferredPrintingAndSignageVendor: req.body["VendorsInfo[preferredPrintingAndSignageVendor]"],
        preferredSecurityServicesVendor: req.body["VendorsInfo[preferredSecurityServicesVendor]"],
      },
      DemographicInfo: {
        targetAudience: req.body["DemographicInfo[targetAudience]"],
        competitiveLandscape: req.body["DemographicInfo[competitiveLandscape]"],
      },
      user: req.body["user"],

      // Other venue data fields
    };
    console.log("venueData : ", venueData);

    const venue = await Venue.create(venueData);

    res.status(201).json({
      success: true,
      venue,
    });
  } catch (error) {
    console.log(error);
    // Handle errors
    next(error);
  }
};

// exports.createVenue = catchAsyncErrors(async (req, res, next) => {
//   // console.log("Received request body:", req.files);
//   const files = req.files['basicInfo[photosVideos]'];
// // console.log(files);
// const imagesLinks = [];
//   // let images = [];

//   if (!req.files || !req.files.photosVideos) {
//     console.log("you are")
//     return res.status(400).json({ message: 'No files were uploaded.' });
//   }

//   const uploadedFile = req.files.photosVideos;

//   // if(typeof req.files.)
//   // if (req.files) {
//   //   if (typeof req.body.images === "string") {
//   //     images.push(req.body.images);
//   //   } else if (Array.isArray(req.body.images)) {
//   //     images = req.body.images;
//   //   }
//   // }

//   for (let i = 0; i < files.length; i++) {
//     try {
//       const result = await cloudinary.uploader.upload_stream(files[i].data, {
//         folder: "venues", // Folder in your Cloudinary where images will be stored
//       });

//       console.log(result.url);
//       imagesLinks.push({
//         public_id: "dsfdsf",
//         url:"sdfsf",
//       });

//     } catch (error) {
//       console.error('Error uploading image:', error);
//     }
//   }

//   // Update the photosVideos field only, preserving the rest of the data
//   // req.body.basicInfo.photosVideos = imagesLinks;

//   console.log("Received request body after:", req.body);

//   const venue = await Venue.create(req.body);
//   res.status(201).json({
//     success: true,
//     venue,
//   });
// });

// Get All Venues -- Admin
exports.getAllVenues = catchAsyncErrors(async (req, res, next) => {
  const venuesCount = await Venue.countDocuments();
  const resultPerPage = 100;

  const apiFeatures = new ApiFeatures(Venue.find(), req.query).search().pagination(resultPerPage);
  // const venues = await Venue.find();
  const venues = await apiFeatures.query;

  res.status(200).json({
    success: true,
    venues,
    venuesCount,
    // resultPerPage,
  });
});

// update Venues
exports.updateVenue = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  console.log(req.body);

  let venue = await Venue.findById(id);

  if (!venue) {
    // return next(new ErrorHandler("Venue not found",404));
    return next(new ErrorHander("Venue not found", 404));
  }

  // Continue with the update logic using findByIdAndUpdate

  const updatedVenue = await Venue.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Venue Updated Successfully",
    data: updatedVenue, // Optionally, you can send the updated venue data back in the response
  });
});

exports.deleteVenue = catchAsyncErrors(async (req, res, next) => {
  // console.log(req);
  const venue = await Venue.findById(req.params.id);

  if (!venue) {
    // return next(new ErrorHandler("Venue not found",404));
    return next(new ErrorHander("Venue not found", 404));
  }

  // Optionally, you can add some authorization logic here to check if the user is allowed to delete the venue.

  await venue.deleteOne();

  res.status(200).json({
    success: true,
    message: "Venue Deleted Successfully",
  });
});

exports.getVenueDetails = catchAsyncErrors(async (req, res, next) => {
  const venue = await Venue.findById(req.params.id);

  if (!venue) {
    // return next(new ErrorHandler("Venue not found",404));
    return next(new ErrorHander("Venue not found", 404));
  }

  res.status(200).json({
    success: true,
    venue,
  });
});

// const availabilityRange = '2023-08-01T18:30:00.000Z to 2023-08-22T18:30:00.000Z';

// const [startString, endString] = availabilityRange.split(' to ');

// const startDate = new Date(startString);
// const endDate = new Date(endString);

// const formattedStartDate = startDate.toISOString().split('T')[0];
// const formattedEndDate = endDate.toISOString().split('T')[0];

// console.log('Formatted Start Date:', formattedStartDate);
// console.log('Formatted End Date:', formattedEndDate);

// Handle files for basicInfo[photosVideos] field
// if (!req.files || !req.files["basicInfo[photosVideos]"]) {
//   return res.status(400).json({ message: "No files were uploaded." });
// }
// const uploadedFiles = Array.isArray(req.files["basicInfo[photosVideos]"])
//   ? req.files["basicInfo[photosVideos]"]
//   : [req.files["basicInfo[photosVideos]"]];
// const imagesLinks = [];
// for (const uploadedFile of uploadedFiles) {
//   const base64Data = uploadedFile.data.toString("base64");
//   const cloudinaryResult = await cloudinary.uploader.upload(
//     `data:${uploadedFile.mimetype};base64,${base64Data}`,
//     { folder: "basicInfo" } // Upload to a folder named "basicInfo"
//   );
//   imagesLinks.push({
//     public_id: cloudinaryResult.public_id,
//     url: cloudinaryResult.url,
//   });
// }

// // Handle files for PastEventInfo[photosAndVideosFromPastEvents] field
// const uploadedPastEventFiles = req.files["PastEventInfo[photosAndVideosFromPastEvents]"];
// const pastEventImagesLinks = [];
// if (uploadedPastEventFiles) {
//   for (const uploadedFile of uploadedPastEventFiles) {
//     const base64Data = uploadedFile.data.toString("base64");
//     const cloudinaryResult = await cloudinary.uploader.upload(
//       `data:${uploadedFile.mimetype};base64,${base64Data}`,
//       { folder: "pastEventInfo" } // Upload to a folder named "pastEventInfo"
//     );
//     pastEventImagesLinks.push({
//       public_id: cloudinaryResult.public_id,
//       url: cloudinaryResult.url,
//     });
//   }
// }

//my first code is below start
// exports.createVenue = async (req, res, next) => {
//   console.log("body : ", req);
//   try {
//     console.log(req.files);
//     // Handle files for basicInfo[photosVideos] field
//     if (!req.files || !req.files["basicInfo[photosVideos]"]) {
//       return res.status(400).json({ message: "No files were uploaded." });
//     }
//     const uploadedFiles = Array.isArray(req.files["basicInfo[photosVideos]"])
//       ? req.files["basicInfo[photosVideos]"]
//       : [req.files["basicInfo[photosVideos]"]];
//     const imagesLinks = [];
//     for (const uploadedFile of uploadedFiles) {
//       const base64Data = uploadedFile.data.toString("base64");
//       const cloudinaryResult = await cloudinary.uploader.upload(
//         `data:${uploadedFile.mimetype};base64,${base64Data}`
//       );
//       imagesLinks.push({
//         public_id: cloudinaryResult.public_id,
//         url: cloudinaryResult.url,
//       });
//     }
//     console.log("1 file uploaded");
//     // Handle files for PastEventInfo[photosAndVideosFromPastEvents] field
//     const uploadedPastEventFiles = Array.isArray(
//       req.files["PastEventInfo[photosAndVideosFromPastEvents]"]
//     )
//       ? req.files["PastEventInfo[photosAndVideosFromPastEvents]"]
//       : [req.files["PastEventInfo[photosAndVideosFromPastEvents]"]];
//     console.log(uploadedPastEventFiles);

//     const pastEventImagesLinks = [];
//     if (uploadedPastEventFiles) {
//       for (const uploadedFile of uploadedPastEventFiles) {
//         const base64Data = uploadedFile.data.toString("base64");
//         const cloudinaryResult = await cloudinary.uploader.upload(
//           `data:${uploadedFile.mimetype};base64,${base64Data}`
//         );
//         pastEventImagesLinks.push({
//           public_id: cloudinaryResult.public_id,
//           url: cloudinaryResult.url,
//         });
//       }
//     }
//     console.log("uptil here ");
//     // req.body.user = req.user.id;
//     console.log(req.body.user);
//     console.log(req.body);

//     const venueData = {
//       basicInfo: {
//         venueName: req.body["basicInfo[venueName]"],
//         venueAddress: req.body["basicInfo[venueAddress]"],
//         venueType: req.body["basicInfo[venueType]"],
//         venueOwner: req.body["basicInfo[venueOwner]"],
//         photosVideos: imagesLinks, // Array of Cloudinary URLs and public IDs
//       },
//       locationInfo: {
//         totalArea: req.body["locationInfo[totalArea]"],
//         indoorArea: req.body["locationInfo[indoorArea]"],
//         outdoorArea: req.body["locationInfo[outdoorArea]"],
//         seatingCapacity: req.body["locationInfo[seatingCapacity]"],
//         standingCapacity: req.body["locationInfo[standingCapacity]"],
//       },

//       ServicesInfo: {
//         cateringServices: req.body["ServicesInfo[cateringServices]"],
//         typesOfCuisine: req.body["ServicesInfo[typesOfCuisine]"]
//           ? req.body["ServicesInfo[typesOfCuisine]"].split(",")
//           : [],
//         barServices: req.body["ServicesInfo[barServices]"],
//         alcoholLicensing: req.body["ServicesInfo[alcoholLicensing]"],
//         decorServices: req.body["ServicesInfo[decorServices]"],
//         eventPlanningServices: req.body["ServicesInfo[eventPlanningServices]"],
//       },
//       BookingInfo: {
//         availability: req.body["BookingInfo[availability]"],
//         minimumNoticePeriod: req.body["BookingInfo[minimumNoticePeriod]"],
//         cancellationPolicy: req.body["BookingInfo[cancellationPolicy]"],
//         pricing: req.body["BookingInfo[pricing]"],
//         paymentMethodsAccepted: req.body["BookingInfo[paymentMethodsAccepted]"]
//           ? req.body["BookingInfo[paymentMethodsAccepted]"].split(",")
//           : [],
//         insuranceRequirements: req.body["BookingInfo[insuranceRequirements]"],
//       },
//       PastEventInfo: {
//         typesOfEventsHosted: req.body["PastEventInfo[typesOfEventsHosted]"]
//           ? req.body["PastEventInfo[typesOfEventsHosted]"].split(",")
//           : [],
//         clientTestimonialsAndReviews:
//           req.body["PastEventInfo[clientTestimonialsAndReviews]"],
//         photosAndVideosFromPastEvents: pastEventImagesLinks,
//         numberOfEventsHosted: req.body["PastEventInfo[numberOfEventsHosted]"],
//         notableEventsOrClients:
//           req.body["PastEventInfo[notableEventsOrClients]"],
//         clientReferences: req.body["PastEventInfo[clientReferences]"],
//       },
//       LegalInfo: {
//         licensesAndPermits: req.body["LegalInfo[licensesAndPermits]"],
//         safetyMeasures: req.body["LegalInfo[safetyMeasures]"],
//         businessRegistrationDetails:
//           req.body["LegalInfo[businessRegistrationDetails]"],
//         taxComplianceStatus: req.body["LegalInfo[taxComplianceStatus]"],
//         healthAndSafetyCertifications:
//           req.body["LegalInfo[healthAndSafetyCertifications]"],
//         fireSafetyCompliance: req.body["LegalInfo[fireSafetyCompliance]"],
//       },
//       EnvirInfo: {
//         sustainabilityPractices: req.body["EnvirInfo[sustainabilityPractices]"],
//         noisePollutionControls: req.body["EnvirInfo[noisePollutionControls]"],
//       },
//       VendorsInfo: {
//         preferredCateringVendor:
//           req.body["VendorsInfo[preferredCateringVendor]"],
//         preferredDesignAndDecorVendor:
//           req.body["VendorsInfo[preferredDesignAndDecorVendor]"],
//         preferredTravelVendor: req.body["VendorsInfo[preferredTravelVendor]"],
//         preferredBeautyVendor: req.body["VendorsInfo[preferredBeautyVendor]"],
//         preferredPhotographyVendor:
//           req.body["VendorsInfo[preferredPhotographyVendor]"],
//         preferredEventPlanningVendor:
//           req.body["VendorsInfo[preferredEventPlanningVendor]"],
//         preferredAudioVisualEquipmentVendor:
//           req.body["VendorsInfo[preferredAudioVisualEquipmentVendor]"],
//         preferredEntertainmentVendor:
//           req.body["VendorsInfo[preferredEntertainmentVendor]"],
//         preferredAccommodationVendor:
//           req.body["VendorsInfo[preferredAccommodationVendor]"],
//         preferredPrintingAndSignageVendor:
//           req.body["VendorsInfo[preferredPrintingAndSignageVendor]"],
//         preferredSecurityServicesVendor:
//           req.body["VendorsInfo[preferredSecurityServicesVendor]"],
//       },
//       DemographicInfo: {
//         targetAudience: req.body["DemographicInfo[targetAudience]"],
//         competitiveLandscape: req.body["DemographicInfo[competitiveLandscape]"],
//       },
//       user : req.body["user"]

//       // Other venue data fields
//     };
//     console.log("venueData : ", venueData);

//     const venue = await Venue.create(venueData);

//     res.status(201).json({
//       success: true,
//       venue,
//     });
//   } catch (error) {
//     // Handle errors
//     next(error);
//   }
// };
// first code end
