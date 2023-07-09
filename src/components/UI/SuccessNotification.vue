<template>
  <!-- 
    this component will be shown/hiden using the ".show" class and 
    conditional rendering inside the parent
     -->
  <div class="notification">
    <slot>✔️ Done Successfully!</slot>
  </div>
</template>

<script>
export default {
  name: "SuccessNotification",
};
</script>

<style scoped>
.notification {
  opacity: 0;
  padding: 1rem 1.5rem;
  background: rgb(99, 241, 99);
  top: 30px;
  right: 30px;
  position: fixed;
  border: 2px solid rgb(76, 197, 57);
  border-radius: 10px;
  transform: translateX(120%);
  transition-property: all;
  transition-duration: 1s;
}

.show {
  transform: translateX(0);
  opacity: 1;
}
</style>
