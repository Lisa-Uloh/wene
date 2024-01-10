<template>
    <div class="page-wrapper bg-dark p-t-100 p-b-50">
          <div class="wrapper wrapper--w900">
              <div class="card card-6">
                  <div class="card-heading">
                      <h2 class="title">Register</h2>
                  </div>
                  <div class="card-body">
                      <form method="POST" @submit.prevent="submitForm">
                          <div class="form-row">
                              <div class="name">First name</div>
                              <div class="value">
                                  <input class="input--style-6" type="text" v-model="user.firstname" placeholder="First Name" required>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Last name</div>
                              <div class="value">
                                  <input class="input--style-6" type="text" v-model="user.lastname" placeholder="Last Name" required>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Email address</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-6" type="email" v-model="user.email" placeholder="Email" required>
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Phone Number</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-6" type="text"
          v-model="user.phone"
          placeholder="Phone Number"
          required>
                                  </div>
                              </div>
                          </div>
                          <div class="form-row">
                              <div class="name">Address</div>
                              <div class="value">
                                  <div class="input-group">
                                      <input class="input--style-6" type="text"
          v-model="user.address"
          placeholder="Address"
          required>
                                  </div>
                              </div>
                          </div>
                          
                          <div class="form-row">
                              <div class="name">Upload CV</div>
                              <div class="value">
                                  <div class="input-group js-input-file">
                                      <input type="file" @change="onFileChange" required>
                                      <!-- <label class="label--file" for="file">Choose file</label> -->
                                      <!-- <span class="input-file__info">No file chosen</span> -->
                                  </div>
                                  <!-- <div class="label--desc">Upload your CV/Resume or any other relevant file. Max file size 50 MB</div> -->
                              </div>
                          </div>
                          <div class="card-footer">
                      <button class="btn btn--radius-2 btn--blue-2" type="submit">Send Application</button>
                  </div>
                      </form>
                  </div>
                  
              </div>
          </div>
      </div>
    <!-- <div>
      <h1> User Registration</h1>
      <form @submit.prevent="submitForm">
        <input
          type="text"
          v-model="user.firstname"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          v-model="user.lastname"
          placeholder="Last Name"
          required
        />
        <input type="email" v-model="user.email" placeholder="Email" required />
        <input
          type="text"
          v-model="user.phone"
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          v-model="user.address"
          placeholder="Address"
          required
        />
        <input type="file" @change="onFileChange" required />
        <button type="submit">Sign Up</button>
      </form>
    </div> -->
  </template>
    
    <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        user: {
          firstname: "",
          lastname: "",
          email: "",
          address: "",
          phone: "",
        },
        videoPath: null,
      };
    },
    methods: {
      onFileChange(e) {
        this.videoPath = e.target.files[0];
      },
      async submitForm() {
    const formData = new FormData();
    formData.append("firstname", this.user.firstname);
    formData.append("lastname", this.user.lastname);
    formData.append("email", this.user.email);
    formData.append("phone", this.user.phone);
    formData.append("address", this.user.address);
    formData.append("video", this.videoPath);
  
    try {
      const response = await axios.post('http://localhost:3000/api/register', formData);
      console.log(response.data);
  
      if (response.data.success) {
        this.$router.push("/payment");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(error.response.data);
        console.error(error.response.status);
        console.error(error.response.headers);
        alert('Error: ' + error.response.data.message);
      } else if (error.request) {
        // The request was made but no response was received
        console.error(error.request);
        alert('Error: No response from the server');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error', error.message);
        alert('Error: ' + error.message);
      }
    }
  },
  
    },
  };
  </script>
    