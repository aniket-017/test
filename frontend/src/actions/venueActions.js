import {
    CREATE_VENUE_REQUEST,
    CREATE_VENUE_SUCCESS,
    CREATE_VENUE_FAIL,
    ALL_VENUE_REQUEST,
    ALL_VENUE_SUCCESS,
    ALL_VENUE_FAIL,
    DELETE_VENUE_REQUEST, // Add the new action type
    DELETE_VENUE_SUCCESS, // Add the new action type
    DELETE_VENUE_FAIL, // Add the new action type
    UPDATE_VENUE_REQUEST, // Add the new action type for updating venue
  UPDATE_VENUE_SUCCESS, // Add the new action type for updating venue
  UPDATE_VENUE_FAIL, // Add the new action type for updating venue
    CLEAR_ERRORS,
  } from "../constants/venueConstants.js";
  import axios from "axios";
  
  // Create Venue
  export const createVenue = (venueData) => async (dispatch) => {
    const venueNameValue = venueData.get('basicInfo[photosVideos]');
    console.log("inAction",venueNameValue);
    try {
      dispatch({ type: CREATE_VENUE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multiform/form-data" },
      };
      console.log("this is ve :",venueData);
  
      const { data } = await axios.post(`/aak/l1/venue/new`, venueData, config);
      console.log("API Response Data:", data);
      dispatch({ type: CREATE_VENUE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({
        type: CREATE_VENUE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  // Get All Venues
export const getAllVenues = (keyword="",currentPage=1) => async (dispatch) => {
  try {
    dispatch({ type: ALL_VENUE_REQUEST });

    let link = `/aak/l1/venues?keyword=${keyword}&page=${currentPage}`;
    const { data } = await axios.get(link);

    dispatch({
      type: ALL_VENUE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ALL_VENUE_FAIL,
      payload: error.response.data.message,
    });
  }
};

 // Delete Venue
 export const deleteVenue = (id) => async (dispatch) => {
  try {
   
    dispatch({ type: DELETE_VENUE_REQUEST });

    const { data } = await axios.delete(`/aak/l1/venue/${id}`);

    dispatch({ type: DELETE_VENUE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: DELETE_VENUE_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Venue
export const updateVenue = (id, venueData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_VENUE_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.put(`/aak/l1/venue/${id}`, venueData, config);

    dispatch({ type: UPDATE_VENUE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: UPDATE_VENUE_FAIL,
      payload: error.response.data.message,
    });
  }
};


  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  

  
  // images 
  // (2) ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAAD…FTX+E0wvxMwvicottGsfLAj3EFtvGeO9FFFcktz0I7H//2Q==', 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ReM6gnIOc9D2/lU+pMj2wEkYZsAhumPaiit7LmFHVan//2Q==']
  // 0
  // : 
  // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAkACQAA
  // 1
  // : 
  // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAA
  // length
  // : 
  // 2
  // [[Prototype]]
  // : 
  // Array(0)



  // {
  //   name: 'sdf',
  //   price: '1321',
  //   Address: 'Rajgurunagar,Pune',  
  //   category: '3_BHK',
  //   LightFacility: '3',
  //   WifiFacility: '3',
  //   NoOfRoomsVacant: '2',
  //   SolarHeater: '2',
  //   NoOFStudents: '2',
  //   Capacitiy: '2',
  //   MessFacility: 'kl',
  //   InOutTime: '2',
  //   ContactNo: '9638527415',       
  //   OtherFacility: '23',
  //   Stock: '2',
  //   lat: '18.982097183872796',     
  //   long: '73.96212473201871',     
  
  
  