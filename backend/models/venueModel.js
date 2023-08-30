const mongoose = require('mongoose');

// MongoDB Venue Collection Schema
const venueSchema = new mongoose.Schema({
  // Step 1: Basic Information
  basicInfo: {
    venueName: { type: String, required:true },
    venueAddress: { type: String, required:true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    venueType: { type: String,
      //  enum: ['Conference Centre', 'Hotel', 'Outdoor Space', 'Banquet Hall', 'Stadium', 'Auditorium', 'Restaurant', 'Museum'] 
      },
    venueOwner: { type: String },
    venueDescription: { type: String },
    contactInformation: { type: String },
    venueCategory: [{ type: String, 
      // enum: ['Weddings', 'Corporate Events', 'Concerts', 'Exhibitions', 'PrivateParties', 'Festivals', 'Workshops', 'Seminars'] 
    }],
    socialMediaHandles: { type: String },
    operatingHours: { type: String }, // You might want to use a different type for this, based on your needs
    languagesSpoken: [{ type: String, 
      // enum: ['English', 'Hindi', 'Marathi', 'Gujarati', 'Bengali', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Punjabi']
     }],
    affiliationsOrPartnerships: { type: String },
    awardsAndRecognitions: { type: String },
    nearestLandmarks: { type: String },
    publicTransportAccessibility: { type: String },
    emergencyServices: { type: String },
    photosVideos: [{
      public_id: { type: String, 
        // required: true
       },
      url: { type: String, 
        // required: true 
      },
    }],
    logo: {
      public_id: { type: String, 
        // required: true 
      },
      url: { type: String, 
        // required: true 
      },
    },
    yearOfEstablishment: { type: Date },
    ownershipType: { type: String,
      //  enum: ['Privately Owned', 'Chain', 'Government-Owned'] 
      },
    uniqueIdentifier: { type: String },
  },
   



  
  // Step 2: Location Information
  locationInfo: {
    totalArea: { type: String }, // Total Area
    indoorArea: { type: String }, // Indoor Area
    outdoorArea: { type: String }, // Outdoor Area
    seatingCapacity: { type: String }, // Seating Capacity
    standingCapacity: { type: String }, // Standing Capacity
    numberOfRoomsSpaces: { type: String }, // Number of Rooms/Spaces
    layoutFloorPlan: {
      public_id: { type: String, 
        // required: true 
      },
      url: { type: String, 
        // required: true 
      },
    }, // Layout/Floor Plan (file path)
    accessibilityFeatures: [{
      type: String,
      // enum: [
      //   "Wheelchair Access",
      //   "Elevator Access",
      //   "Ramps",
      //   "Accessible Restrooms",
      //   "Braille Signage",
      //   "Parking Facilities"
      // ]
    }], // Accessibility Features (checkbox)
    stageAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Stage Availability (radio)
    podiumAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Podium Availability (radio)
    technicalEquipment: [{
      type: String,
      // enum: [
      //   "Sound System",
      //   "Lighting",
      //   "Projectors",
      //   "Screens",
      //   "Microphones",
      //   "DJ Equipment",
      //   "Video Recording Equipment"
      // ]
    }], // Technical Equipment (checkbox)
    parkingFacilities: { type: String }, // Parking Facilities
    parkingCapacity: { type: String }, // Parking Capacity
    valetParkingAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Valet Parking Availability (radio)
    proximityToPublicTransport: { type: String }, // Proximity to Public Transport
    proximityToMajorRoads: { type: String }, // Proximity to Major Roads
    proximityToAirport: { type: String }, // Proximity to Airport
    surroundingEnvironment: { type: String }, // Surrounding Environment (text area)
    noiseRestrictions: { type: String }, // Noise Restrictions (text area)
    ceilingHeight: { type: String }, // Ceiling Height
    loadInOutFacilities: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Load-in/Load-out Facilities (radio)
    greenRoomAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Green Room Availability (radio)
    dressingRoomAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Dressing Room Availability (radio)
    kitchenFacilities: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Kitchen Facilities (radio)
    restroomFacilities: { type: String }, // Restroom Facilities
    powerSupplyBackup: { type: String }, // Power Supply/Backup
    airConditioningHeating: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Air Conditioning/Heating (radio)
    naturalLightAvailability: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Natural Light Availability (radio)
    outdoorSpaceDescription: { type: String }, // Outdoor Space Description (text area)
    scenicView: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Scenic View (radio)
    smokingArea: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Smoking Area (radio)
    petFriendly: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Pet-Friendly (radio)
    childFriendly: {
      type: String,
      // enum: ["Yes", "No"]
    }, // Child-Friendly (radio)
    noiseLevel: {
      type: String,
      // enum: ["Quiet", "Moderate", "Loud"]
    }, // Noise Level (dropdown)
    nearbyParkingFacilities: { type: String }, // Nearby Parking Facilities (text area)
    securityFeatures: [{
      type: String,
      // enum: ["CCTV", "Security Personnel", "Alarm System", "Other"]
    }], // Security Features (checkbox)
    fireSafetyMeasures: [{
      type: String,
      // enum: ["Fire Extinguishers", "Fire Exit Signs", "Sprinkler System", "Other"]
    }] // Fire Safety Measures (checkbox)
  },
  
  // Step 3: Services and Amenities Information
  ServicesInfo: {
    cateringServices: {
      type: String,
      // enum: ["In-House", "Outsourced", "Both", "None"],
    },
    typesOfCuisine: {
      type: [String],
      // enum: ["Indian", "Chinese", "Italian", "Continental", "Vegan", "Gluten-Free", "Halal", "Kosher", "Other"],
    },
    barServices: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    alcoholLicensing: {
      type: String,
      // enum: ["Licensed", "Not Licensed"],
    },
    decorServices: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    eventPlanningServices: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    audioVisualServices: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    internetWifiAvailability: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    accommodationAvailability: {
      type: String,
      // enum: ["Available", "Not Available"],
    },
    numberOfRoomsForAccommodation: { type: String }, // Number of Rooms (for Accommodation)
    typesOfRooms: [{
      type: String,
      // enum: ["Single", "Double", "Suite", "Accessible", "Other"],
    }], // Types of Rooms (checkbox)
    furnitureAvailability: {
      type: String,
      // enum: ["Yes", "No"],
    },
    typesOfFurnitureAvailable: { type: String }, // Types of Furniture Available
    decorRestrictions: { type: String }, // Decor Restrictions (text area)
    cleaningServices: {
      type: String,
      // enum: ["Yes", "No"],
    },
    onSiteStaffAvailability: {
      type: String,
      // enum: ["Yes", "No"],
    },
    eventCoordinationServices: {
      type: String,
      // enum: ["Yes", "No"],
    },
    equipmentRentalOptions: { type: String }, // Equipment Rental Options
    storageFacilities: {
      type: String,
      // enum: ["Yes", "No"],
    },
    signageBannerAllowed: {
      type: String,
      // enum: ["Yes", "No"],
    },
    specialLighting: {
      type: String,
      // enum: ["Yes", "No"],
    },
    danceFloor: {
      type: String,
      // enum: ["Yes", "No"],
    },
    outdoorHeating: {
      type: String,
      // enum: ["Yes", "No"],
    },
    tentingFacilities: {
      type: String,
      // enum: ["Yes", "No"],
    },
    coatCheck: {
      type: String,
      // enum: ["Yes", "No"],
    },
    bridalSuite: {
      type: String,
      // enum: ["Yes", "No"],
    },
    childCareFacilities: {
      type: String,
      // enum: ["Yes", "No"],
    },
    petCareFacilities: {
      type: String,
      // enum: ["Yes", "No"],
    },
  },
  
 

  // Step 4: Booking Information 

  BookingInfo: {
    availability: {
      type: String,
    },
    minimumNoticePeriod: {
      type: String,
    },
    cancellationPolicy: {
      type: String,
    },
    pricing: {
      type: String,
    },
    paymentMethodsAccepted: [{
      type: String,
      // enum: ["Cash", "Credit Card", "Debit Card", "Bank Transfer", "Mobile Payment", "Other"],
    }],
    insuranceRequirements: {
      type: String,
    },
    bookingChannels: [{
      type: String,
      // enum: ["Phone", "Email", "Website", "In-Person", "Third-Party Platforms"],
    }],
    depositRequirement: {
      type: String,
      // enum: ["Yes", "No"],
    },
    depositAmount: {
      type: String,
    },
    depositRefundPolicy: {
      type: String,
    },
    fullPaymentDueDate: {
      type: String,
    },
    discountsAvailable: {
      type: String,
      // enum: ["Yes", "No"],
    },
    typesOfDiscounts: [{
      type: String,
      // enum: ["Early Bird", "Bulk Booking", "Off-Season", "Other"],
    }],
    minimumBookingDuration: {
      type: String,
    },
    maximumBookingDuration: {
      type: String,
    },
    overtimePolicy: {
      type: String,
    },
    setupTakedownTimeIncluded: {
      type: String,
      // enum: ["Yes", "No"],
    },
    additionalCosts: {
      type: String,
    },
    contractRequirement: {
      type: String,
      // enum: ["Yes", "No"],
    },
    contractTerms: {
      type: String,
    },
    cancellationByVenuePolicy: {
      type: String,
    },
    forceMajeurePolicy: {
      type: String,
    },
  },
  
  

  // Step 5: Past Event Information 

  PastEventInfo: {
    typesOfEventsHosted: [{
      type: String,
      // enum: ["Weddings", "Corporate Events", "Concerts", "Exhibitions", "Private Parties", "Festivals", "Workshops", "Seminars", "Other"],
    }],
    clientTestimonialsAndReviews: {
      type: String,
    },
    photosAndVideosFromPastEvents: [
      {
        public_id: {
          type: String,
          // required: true,
        },
        url: {
          type: String,
          // required: true,
        },
      },
    ],
    numberOfEventsHosted: {
      type: String,
    },
    notableEventsOrClients: {
      type: String,
    },
    clientReferences: {
      type: String,
    },
    eventSuccessStories: {
      type: String,
    },
    eventFailuresOrLessonsLearned: {
      type: String,
    },
    averageEventRating: {
      type: String,
    },
    eventPortfolio: [
      {
        public_id: {
          type: String,
          // required: true,
        },
        url: {
          type: String,
          // required: true,
        },
      },
    ],
    mediaMentions: {
      type: String,
    },
    eventFrequency: {
      type: String,
    },
    preferredEventTypes: [{
      type: String,
      // enum: ["Weddings", "Corporate Events", "Concerts", "Exhibitions", "Private Parties", "Festivals", "Workshops", "Seminars"],
    }],
  },


 

  // Step 6: Legal and Compliance Information

  LegalInfo: {
    licensesAndPermits: {
      type: String,
    },
    safetyMeasures: {
      type: String,
    },
    businessRegistrationDetails: {
      type: String,
    },
    taxComplianceStatus: {
      type: String,
      // enum: ["Compliant", "Non-Compliant"],
    },
    healthAndSafetyCertifications: {
      type: String,
    },
    fireSafetyCompliance: {
      type: String,
      // enum: ["Compliant", "Non-Compliant"],
    },
    foodSafetyCertifications: {
      type: String,
    },
    alcoholLicensingDetails: {
      type: String,
    },
    musicLicensingDetails: {
      type: String,
    },
    insuranceCoverageDetails: {
      type: String,
    },
    accessibilityCompliance: {
      type: String,
      // enum: ["Compliant", "Non-Compliant"],
    },
    privacyPolicy: {
      type: String,
    },
    termsAndConditions: {
      type: String,
    },
    disputeResolutionMechanisms: {
      type: String,
    },
  },
  
  

  // Step 7: Environmental Impact
  EnvirInfo: {
    sustainabilityPractices: {
      type: String, // Sustainability Practices (Text Area)
    },
    noisePollutionControls: {
      type: String, // Noise Pollution Controls (Text Area)
    },
  },

 // Step 8: Preferred Vendors
VendorsInfo: {
  preferredCateringVendor: {
    type: String, // Preferred Catering Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredDesignAndDecorVendor: {
    type: String, // Preferred Design and Decor Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredTravelVendor: {
    type: String, // Preferred Travel Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredBeautyVendor: {
    type: String, // Preferred Beauty Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredPhotographyVendor: {
    type: String, // Preferred Photography Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredEventPlanningVendor: {
    type: String, // Preferred Event Planning Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredAudioVisualEquipmentVendor: {
    type: String, // Preferred Audio/Visual Equipment Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredEntertainmentVendor: {
    type: String, // Preferred Entertainment Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredAccommodationVendor: {
    type: String, // Preferred Accommodation Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredPrintingAndSignageVendor: {
    type: String, // Preferred Printing and Signage Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
  preferredSecurityServicesVendor: {
    type: String, // Preferred Security Services Vendor (Dropdown Menu)
    // enum: ["Vendor 1", "Vendor 2", "Vendor 3", /* ... */],
  },
},


  // Step 9: Demographic and Market Data
  DemographicInfo: {
    targetAudience: {
      type: String, // Target Audience (Text Area)
    },
    competitiveLandscape: {
      type: String, // Competitive Landscape (Text Area)
    },
  },

  user:{
    type:String,
    ref:"User",
    // required:true,
  },

  createdAt:{
    type:Date,
    default:Date.now
  }

});

module.exports = mongoose.model('Venue', venueSchema);



