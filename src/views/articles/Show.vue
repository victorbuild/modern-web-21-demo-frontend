<template>
  <div>
    <nav aria-label="breadcrumb" v-if="this.response !== null">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ this.response.data.title }}</li>
      </ol>
    </nav>
    <div class="card my-2" v-if="this.response !== null">
      <div class="card-body">
        <h5 class="card-title">{{ this.response.data.title }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">建立時間：{{ this.response.data.created_at }}</h6>
        <hr>
        <p class="card-text">{{ this.response.data.content }}</p>
      </div>
    </div>
    <router-link to="/" class="card-link">返回列表</router-link>
  </div>
</template>

<script>
export default {
  name: 'ArticleShow',
  components: {},
  data() {
    return {
      id: null,
      response: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    // eslint-disable-next-line no-undef
    axios.get(`${process.env.VUE_APP_API_PATH}/api/v1/articles/${this.id}`)
      .then((response) => {
        this.response = response.data;
      });
  },
};
</script>
