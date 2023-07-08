<template>
  <h2>User Bookings</h2>
  <table v-if="userBookingsList.length > 0">
    <tr>
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Hotel Name</th>
      <th>Delete booking</th>
    </tr>
    <tr v-for="user in userBookingsList" :key="user.id">
      <td>{{ user.user_name }}</td>
      <td>{{ user.user_email }}</td>
      <td>{{ user.user_phone }}</td>
      <td>{{ user.hotel_name }}</td>
      <td>
        <base-button @click="deleteBooking(user.id)"
          >Delete Booking</base-button
        >
      </td>
    </tr>
  </table>
  <p v-else>Booking list is empty</p>
</template>

<script>
import bookingStore from "../store/bookingStore";

export default {
  computed: {
    userBookingsList() {
      return bookingStore.state.userBookings;
    },
  },
  data() {
    return {
      // userBookingsList: bookingStore.state.userBookings,
    };
  },
  methods: {
    deleteBooking(userId) {
      bookingStore.commit("removeBooking", userId);
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
</style>
