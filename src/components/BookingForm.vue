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
  props: ["selectedHotelId"],
  computed: {
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
      this.$emit("submitForm");
    },
    resetInputs() {
      this.userName = "";
      this.userEmail = "";
      this.userPhoneNumber = "";
    },
    validateName(value) {
      return value.trim().length >= 3;
    },
    validateEmail(value = "") {
      return value.trim().includes("@");
    },
    validatePhone(value) {
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
