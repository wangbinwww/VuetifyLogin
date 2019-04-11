<template>
  <v-app>
    <!-- <v-toolbar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <span>Login</span>
        <span class="font-weight-light">Lonin-Demo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat href="https://www.iconics.com" target="_blank">
        <span class="mr-2">关于</span>
      </v-btn>
    </v-toolbar>-->
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>{{Title}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat v-for="menu in menus">{{menu.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <HelloWorld/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  data() {
    return {
      //
      Title: "用户名",
      menus: [{ name: "login" }, { name: "logout" }, { name: "about" }]
    };
  }
};
</script>
