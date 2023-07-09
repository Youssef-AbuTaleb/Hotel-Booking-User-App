<template>
  <button>
    <slot>Please Enter Button Label</slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
};
</script>

<style scoped>
button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  height: 35px;
  padding: 0 15px;
  background-color: #004982;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 14px;
  color: #fff;
  outline: none;
}

button:hover,
button:active {
  background-color: #1166a8;
}

button:disabled {
  cursor: auto;
  background-color: #acacac;
}

.red {
  /* color: #004982; */
  /* border: 1px solid #cecece; */
  background-color: #ff6060;
}

button.red:hover,
button.red:active {
  background-color: #ff8181;
}
</style>
