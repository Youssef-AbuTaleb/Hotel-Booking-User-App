import { createStore } from "vuex";

const bookingStore = createStore({
  state() {
    return {
      // each object in the array should contains: user id ,user_nameuser_email,user_phone and hotel_id.
      userBookings: [],

      // array state to save user hotels data available for booking.
      // this data can be changed accordingly to add,update and remove hotels data.
      hotelsList: [
        {
          id: "1",
          hotel_name: "first hotel",
          hotel_address: "first hotel address, 1 street",
          hotel_rating: 3,
        },
        {
          id: "2",
          hotel_name: "second hotel",
          hotel_address: "second hotel address, 2 street",
          hotel_rating: 2,
        },
        {
          id: "3",
          hotel_name: "third hotel",
          hotel_address: "third hotel address, 3 street",
          hotel_rating: 4,
        },
        {
          id: "4",
          hotel_name: "fourth hotel",
          hotel_address: "fourth hotel address, 4 street",
          hotel_rating: 5,
        },
        {
          id: "5",
          hotel_name: "fifth hotel",
          hotel_address: "fifth hotel address, 5 street",
          hotel_rating: 4.5,
        },
        {
          id: "6",
          hotel_name: "sixth hotel",
          hotel_address: "sixth hotel address, 6 street",
          hotel_rating: 5.0,
        },
      ],
    };
  },
  mutations: {
    // adding a booking object to the userBookings state array.
    addBooking(state, userData) {
      // finding the hotel name by recieved hotel id and adding it to the pushed object.
      let selectedHotelName = state.hotelsList.find(
        (hotel) => hotel.id === userData.hotel_id
      ).hotel_name;
      // push modified object to array
      state.userBookings.push({ ...userData, hotel_name: selectedHotelName });
    },
    //remove a booking by id recieved from parameters.
    removeBooking(state, bookingId) {
      state.userBookings = state.userBookings.filter(
        (booking) => booking.id !== bookingId
      );
    },
  },
});

export default bookingStore;
