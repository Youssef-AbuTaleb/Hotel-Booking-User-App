<template>
  <h2>Hotels List</h2>

  <table>
    <tr>
      <th>Name</th>
      <th>Address</th>
      <th>Rating</th>
      <th>Booking</th>
    </tr>
    <tr v-for="hotel in hotelsList" :key="hotel.id">
      <td class="hotel-name">{{ hotel.hotel_name }}</td>
      <td class="hotel-address">{{ hotel.hotel_address }}</td>
      <td class="hotel-rating">{{ hotel.hotel_rating }}</td>
      <td class="hotel-book">
        <base-button @click="showBookingForm(hotel.id)">Book Now</base-button>
      </td>
    </tr>
  </table>
  <modal-overlay v-if="bookingFormVisible" :hideModalFn="hideBookingForm">
    <booking-form
      @submit-form="formSubmitHandler"
      :selectedHotelId="selectedHotelId"
    />
  </modal-overlay>
  <success-notification :class="{ show: visibleNotification }"
    >Thank you for booking with us</success-notification
  >
</template>

<script>
import BookingForm from "../components/BookingForm.vue";
import bookingStore from "../store/bookingStore";

export default {
  components: { BookingForm },
  name: "HotelsList",

  data() {
    return {
      visibleNotification: false,
      bookingFormVisible: false,
      selectedHotelId: null,
      hotelsList: bookingStore.state.hotelsList,
    };
  },
  methods: {
    showBookingForm(hotelId) {
      this.bookingFormVisible = true;
      this.selectedHotelId = hotelId;
    },
    hideBookingForm() {
      this.bookingFormVisible = false;
    },
    formSubmitHandler() {
      this.hideBookingForm();
      this.showNotification();
    },
    showNotification() {
      this.visibleNotification = true;
      setTimeout(() => {
        this.visibleNotification = false;
      }, 1500);
    },
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

td.hotel-name {
  text-transform: capitalize;
}
</style>
