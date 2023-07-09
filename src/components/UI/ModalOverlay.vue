<template>
  <div class="overlay" @click="hideModalFn">
    <div class="modal" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalOverlay",
  // a function to hide the modal when triggered
  props: {
    hideModalFn: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.35);
}
.modal {
  margin-top: 50px;
  width: 50vw;
  /* height: 80vh; */
  background-color: #fff;
  z-index: 3;
}
</style>
