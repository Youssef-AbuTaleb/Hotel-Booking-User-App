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
    // this method will show the booking form and save the hotel id to be used later
    // hotel id will passed as props to the Shown form to be attached with sent data
    showBookingForm(hotelId) {
      this.bookingFormVisible = true;
      this.selectedHotelId = hotelId;
    },
    // hide the form
    hideBookingForm() {
      this.bookingFormVisible = false;
    },
    // show notification and hide it after 1.5 second
    showNotification() {
      this.visibleNotification = true;
      setTimeout(() => {
        this.visibleNotification = false;
      }, 1500);
    },
    // when form is submitted hide the form and show the notification message
    formSubmitHandler() {
      this.hideBookingForm();
      this.showNotification();
    },
  },
};
</script>
