<template>
  <div class="signup">
    <v-app id="app">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card light class="elevation-12">
                <v-toolbar dark color="blue darken-4">
                  <v-toolbar-title>Signup</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      prepend-icon="person"
                      name="username"
                      label="Username"
                      type="text"
                      color="blue darken-4"
                      v-model="user.username"
                    ></v-text-field>
                    <v-text-field
                      prepend-icon="lock"
                      v-model="user.password"
                      :append-icon="show1 ? 'visibility' : 'visibility_off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      @click:append="show1 = !show1"
                      label="Password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn dark color="blue darken-4" @click="addToApi">Submit</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Signup",
  data() {
    return {
      user: {
        username: null,
        password: null
      },
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: 'Password',
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters',
        emailMatch: () => ('The email and password you entered don\'t match')
      }
    }
  },
  methods: {
    addToApi() {
      let newUser = {
        username: this.user.username,
        password: this.user.password
      }
      
      axios.post("http://localhost:3000/posts/adduser", newUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
