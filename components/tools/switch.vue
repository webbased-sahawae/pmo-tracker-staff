<template>
  <div>
    <label class="switch">
      <input type="checkbox" :value="value" @change="() => (value = !value)" />
      <span class="slider round"></span>
    </label>
    {{ value }}
  </div>
</template>
<script setup>
const { value } = defineProps(["value"]);
</script>
<style scoped>
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 25.5px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 19.5px;
  width: 19.5px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #21f356;
}

input:focus + .slider {
  box-shadow: 0 0 1px #21f356;
}

input:checked + .slider:before {
  -webkit-transform: translateX(19.5px);
  -ms-transform: translateX(19.5px);
  transform: translateX(19.5px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
