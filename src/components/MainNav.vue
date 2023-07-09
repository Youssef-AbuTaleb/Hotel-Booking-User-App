<template>
  <nav>
    <ul>
      <li v-for="item in navData" :key="item.tabRoute">
        <router-link :to="item.tabRoute">
          <span>{{ item.tabLabel }}</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      // this data can be changed accordingly based on routes
      navData: [
        {
          tabLabel: "Hotels List",
          tabRoute: "/hotels",
        },
        {
          tabLabel: "User Bookings",
          tabRoute: "/bookings",
        },
      ],
    };
  },
};
</script>

<style scoped>
nav {
  padding: 0 10px;
  width: 100%;
  height: 44px;
  background-color: #fafbfb;
}

ul {
  padding-left: 1rem;
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 53px;
}

ul li {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

ul li:hover {
  border-bottom: 3px solid #cecece;
}

.active-tab {
  color: #00206f;
  border-bottom: 3px solid #00206f;
}

li a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #6d6d6d;
  height: 100%;
}

@media only screen and (max-width: 530px) {
  nav {
    height: auto;
    padding: 20px;
  }
  ul {
    gap: 20px;
    border-bottom: none;
    flex-direction: column;
  }
}
</style>
