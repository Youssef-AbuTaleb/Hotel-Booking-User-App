import { createStore } from "vuex";

const bookingStore = createStore({
  state() {
    return {
      userBookings: [],
      hotelsList: [
        {
          id: "1",
          hotel_name: "first hotel",
          hotel_address: "first hotel address first street",
          hotel_rating: 3,
        },
        {
          id: "2",
          hotel_name: "second hotel",
          hotel_address: "second hotel address second street",
          hotel_rating: 2,
        },
        {
          id: "3",
          hotel_name: "third hotel",
          hotel_address: "third hotel address third street",
          hotel_rating: 4,
        },
        {
          id: "4",
          hotel_name: "fourth hotel",
          hotel_address: "fourth hotel address fourth street",
          hotel_rating: 5,
        },
        {
          id: "5",
          hotel_name: "fifth hotel",
          hotel_address: "fifth hotel address fifth street",
          hotel_rating: 4.5,
        },
        {
          id: "6",
          hotel_name: "sixth hotel",
          hotel_address: "sixth hotel address fifth street",
          hotel_rating: 5.0,
        },
      ],
    };
  },
  mutations: {
    addBooking(state, userData) {
      let selectedHotelName = state.hotelsList.find(
        (hotel) => hotel.id === userData.hotel_id
      ).hotel_name;

      state.userBookings.push({ ...userData, hotel_name: selectedHotelName });
    },
    removeBooking(state, bookingId) {
      state.userBookings = state.userBookings.filter(
        (booking) => booking.id !== bookingId
      );
    },
  },
});

export default bookingStore;
