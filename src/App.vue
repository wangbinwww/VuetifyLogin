<template>
  <v-app>
    <v-toolbar app dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{Title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="menu in menus" :key="menu.name" :to="menu.link">{{menu.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      Title: "ICONICS",
      menus: [
        { name: "Home", link: "Home" },
        { name: "Login", link: "Login" },
        { name: "Signup", link: "Signup" },
        { name: "About", link: "About" }
      ]
    };
  }
};
</script>
