<template>
  <div>
    <GoogleSignInButton
      @success="handleLoginSuccess"
      @error="handleLoginError"
    ></GoogleSignInButton>
  </div>
</template>

<script setup>
import { GoogleSignInButton } from "vue3-google-signin";
import useICookie from "~/composables/cookie";

// handle success event
const handleLoginSuccess = (response) => {
  const { credential } = response;
  useICookie.set("access_token", credential);
  return navigateTo({
    path: "/tracker/general-report",
  });
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>
