<template>
  <mg-row>
    <!-- <mg-input/> -->
    <mg-button
      type="primary"
      color="white"
      @click="say('halooo')"
      text="Say Halo"/>
  </mg-row>
</template>

<script>
export default {
  name: 'app',
  methods: {
    say(text) {
      console.log(text);
    },
  },
};
</script>

<style>
</style>
