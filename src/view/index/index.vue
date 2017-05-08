<template>
<div class="warp">

  <div class="title">
    <span>翟留闯</span>
    <span style="margin-left:20px;">https://github.com/lczhai</span>
    <span class="title-link"> <a href="https://github.com/lczhai" target="_blank">Go To His GitHub</a>  </span>
  </div>

  <div class="contact">
    <span>Email : zhailuo@163.com</span>
  </div>





</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome To My GitHub'
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp{
  color:#fff;
}

.title{
    font-size: 18px;
}

.title-link{
    background: #0090ff no-repeat 95% ;
    font-size:14px;
    padding:4px 10px;
    margin-left: 10px;
    border-radius: 3px;
    cursor: pointer;
    font-family: monospace;
    font-weight: bold;
    color: #fff;
}
.title-link a{
  text-decoration:none;
}
.title-link a:visited{
  color: #fff;
}

.contact{
  margin-top:20px;
  font-size:24px;
}

</style>
