<template>
  <form class="booking-form" @submit="submitUserData">
    <base-input
      id="userName"
      inputHeight="40"
      inputType="text"
      v-model="userName"
      invalidMessage="Name must be atleast 3 characters."
      :validateFn="validateName"
      @invalid-input="validName = false"
      @valid-input="validName = true"
    >
      Name
    </base-input>
    <base-input
      id="userEmail"
      inputHeight="40"
      inputType="email"
      v-model="userEmail"
      invalidMessage="Please enter a valid email."
      :validateFn="validateEmail"
      @invalid-input="validEmail = false"
      @valid-input="validEmail = true"
    >
      Email
    </base-input>
    <base-input
      id="userPhoneNumber"
      inputHeight="40"
      inputType="text"
      v-model="userPhoneNumber"
      invalidMessage="Phone number must be 11 numbers exaclty."
      :validateFn="validatePhone"
      @invalid-input="validPhone = false"
      @valid-input="validPhone = true"
    >
      Phone Number
    </base-input>
    <base-button :disabled="!validForm" type="submit" class="submit-btn"
      >Save My Data</base-button
    >
  </form>
</template>

<script>
import bookingStore from "../store/bookingStore";

export default {
  name: "BookingForm",
  emits: ["submitForm"],
  // hotel id received from HotelList component which is setted due to user click on the book button.
  props: {
    selectedHotelId: {
      type: String,
      required: true,
    },
  },
  computed: {
    // this property will enable and disable submit button to prevent user from adding invalid data.
    validForm() {
      if (this.validName && this.validPhone && this.validEmail) {
        return true;
      }
      return false;
    },
  },
  data() {
    return {
      userName: "",
      userEmail: "",
      userPhoneNumber: "",
      validName: false,
      validEmail: false,
      validPhone: false,
    };
  },
  methods: {
    // when data is submited, the data is saved in the store inputs are reseted and form is hided
    // also hotel id is added to sent data
    submitUserData(event) {
      event.preventDefault();
      const userData = {
        id: `${Math.random()}`,
        user_name: this.userName,
        user_email: this.userEmail,
        user_phone: this.userPhoneNumber,
        hotel_id: this.selectedHotelId,
      };
      bookingStore.commit("addBooking", userData);
      this.resetInputs();
      // emit submitForm to hide the form and reset data.
      this.$emit("submitForm");
    },
    resetInputs() {
      this.userName = "";
      this.userEmail = "";
      this.userPhoneNumber = "";
    },
    /* Inputs Validation Methods */
    validateName(value) {
      // name is valid if its length is more than three.
      return value.trim().length >= 3;
    },
    validateEmail(value = "") {
      // Regular expression for validating email addresses.
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      // Return true if the email address matches the regular expression.
      return emailRegex.test(value);
    },
    validatePhone(value) {
      // phone is valid if it is a number and has length of 11.
      if (value.length !== 11) {
        return false;
      }
      if (isNaN(value)) {
        return false;
      }
      return true;
    },
  },
};
</script>

<style scoped>
.booking-form {
  display: flex;
  flex-direction: column;

  gap: 10px;
  padding: 1.5rem 2rem;
}

.submit-btn {
  margin-top: 10px;
  align-self: flex-end;
}
</style>
