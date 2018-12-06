<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Citations :</h3>
    <ul>
      <li v-for="(citation,index) in citations" :key="index">
        {{citation}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      citations: [],
    };
  },
  created() {
    axios.post('/api/inspire', {
      nbQuotes: Math.floor(Math.random() * 10) + 1,
    }).then(({ data }) => {
      this.citations = data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  padding: 0;
  text-align: left;
}
a {
  color: #42b983;
}

.hello{
  ul{
    width: 600px;
    margin: 0 auto;
    margin-top:10px;
    text-align: left;
  }
}

</style>
