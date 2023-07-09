<template>
  <h2>User Bookings</h2>
  <!-- 
    Show table if it has data, else show empty message paragraph
   -->
  <listing-table
    v-if="userBookingsList.length > 0"
    :headerTitles="['Name', 'Email', 'Phone Number', 'Hotel Name']"
    :filedsToShow="['user_name', 'user_email', 'user_phone', 'hotel_name']"
    :fieldsData="userBookingsList"
    :actionsButtonsLabel="'Delete Booking'"
    :actionsButtonsFn="deleteBooking"
    :actionsButtonsClasses="'red'"
  ></listing-table>
  <p v-else class="empty-list">Booking list is empty</p>
</template>

<script>
import bookingStore from "../store/bookingStore";

export default {
  name: "UserBookings",
  computed: {
    // a property that depends on the userBookings vuex state.
    userBookingsList() {
      return bookingStore.state.userBookings;
    },
  },
  methods: {
    // delete user using vuex store by id
    deleteBooking(userId) {
      bookingStore.commit("removeBooking", userId);
    },
  },
};
</script>

<style scoped>
.empty-list {
  margin-top: 20px;
}
</style>
