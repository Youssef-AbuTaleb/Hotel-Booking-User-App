<template>
  <div>
    <label :for="id">
      <slot></slot>
    </label>
    <input
      :type="inputType || 'text'"
      :id="id"
      :name="id"
      :style="{ height: inputHeight + 'px' }"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue || defaultValue"
    />
    <p v-if="invalidInput">{{ invalidMessage }}</p>
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  // update:modelValue is used to add v-model to the custom component
  // validInput/invalidInput is emitted to notify parent component of te input validity
  emits: ["update:modelValue", "validInput", "invalidInput"],
  mounted() {
    console.log(typeof this.modelValue);
  },
  props: [
    "modelValue",
    "id",
    "inputHeight",
    "inputType",
    "defaultValue",
    "invalidMessage",
    "validateFn",
  ],
  watch: {
    // this watcher will emit events to notify parent component of te input validity.
    modelValue(newValue) {
      if (!this.validateFn(newValue)) {
        this.invalidInput = true;
        this.$emit("invalidInput");
      } else {
        this.invalidInput = false;
        this.$emit("validInput");
      }
    },
  },
  data() {
    return {
      invalidInput: false,
    };
  },
};
</script>

<style scoped>
div {
  position: relative;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

label {
  display: block;
  margin-bottom: 3px;
}

input {
  font-size: 16px;
  padding: 0 15px;
  height: 45px;
  width: 100%;
  background-color: #fbfbfb;
  border: 1px solid #d8d8d8;
  border-radius: 8px;
  color: #202223;
}

p {
  margin-top: 5px;
  color: red;
}

input:disabled {
  color: #919191;
}

input:focus {
  outline: 1px solid #1575bf;
}
</style>
