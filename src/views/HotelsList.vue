<template>
  <h2>Hotels List</h2>
  <listing-table
    :headerTitles="['Hotel Name', 'Hotel Address', 'Rating']"
    :filedsToShow="['hotel_name', 'hotel_address', 'hotel_rating']"
    :fieldsData="hotelsList"
    :actionsButtonsFn="showBookingForm"
    :actionsButtonsLabel="'Book Now'"
  ></listing-table>
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
import bookingStore from "../store/bookingStore";
import BookingForm from "../components/BookingForm.vue";

export default {
  name: "HotelsList",
  components: { BookingForm },
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
