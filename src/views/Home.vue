<template>
  <div class="container">
    <div class="home">
      <HelloWorld msg="Article List" v-if="response !== null" :data="response.data"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  data() {
    return {
      response: null,
    };
  },
  created() {
    // eslint-disable-next-line no-undef
    axios.get(`${process.env.VUE_APP_API_PATH}/api/v1/articles`)
      .then((response) => {
        this.response = response.data;
      });
  },
};
</script>
