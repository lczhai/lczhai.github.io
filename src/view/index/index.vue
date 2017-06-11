<template>
<div class="warp">

  <!--左边部分-->
  <div class="warp-left">
    <div class="warp-left-content">
      <img class="avatar" src="../../statics/images/avatar.png" alt="帅哥">
      <span class="realname">翟留闯</span>
      <a class="github-url" href="https://github.com/lczhai" target="_blank">https://github.com/lczhai</a>
      <span>Email : zhailuo@163.com</span>
      <a class="resume" href="/resume" target="_blank">个人简历</a>
    </div>
    
    
  </div>

  <!--右边部分-->
  <div class="warp-right">
    <div class="warp-right-content">
        <span>Demo</span>
        <div class="warp-right-item" v-for="demo in demos">
          <span class="warp-right-name" @click="jumpUrl(demo.url)">{{demo.name}}</span>
          <span class="warp-right-description">{{demo.description}}</span>
        </div>
    </div>
  </div>






</div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      demos:[]
    }
  },
  created(){
    this.demos = [
      {name:'ZLCBlueTooth',url:'https://github.com/lczhai/ZLCBlueTooth',description:'iOS连接蓝牙设备Demo',language:'Object-C'},
      {name:'3DModelShow',url:'https://github.com/lczhai/3DModelShow',description:'展示Stl 及 Obj文件',language:'Object-C'},
      {name:'GuidePage',url:'https://github.com/lczhai/GuidePage',description:'简单的引导页集成，（给大家提供一个框子，定制性高）省去累赘代码，直接使用或者优化即可',language:'Object-C'},
      {name:'ZLCWebView',url:'https://github.com/lczhai/ZLCWebView',description:'将UIWebView和WKWebView封装在一起，ios8以上使用WKWebVIew以下使用UIWebView。直接使用或者继承都可以，依旧是四个常用的代理进行接收回调',language:'Object-C'}
    ];
  },
  methods:{
    jumpUrl(url){
      window.open(url);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.warp{
  color:#fff;
  display: flex;
  justify-content: space-around;
}

.warp-left-content{
  height: 400px;
  margin: auto;
  width: 48%;
  font-size: 18px;
  text-align: center;
  padding: 20px;
  padding: 20px;
  background: cadetblue;
  border-radius: 10px;
}
.warp-left{
    width: 50%;
    text-align: center;
    height: 400px;
}
.avatar{
  height: 205px;
  width: 205px;
  border-radius: 5px;
}
.realname{
  display: block;
  margin-top: 20px;
}


.github-url{
      display: block;
    text-decoration: none;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 10px;
}
.github-url:hover{
  color:#4ab7ed;
}

.warp-right{
  width: 50%;
  text-align: left;
}


.warp-right-content{
  height: 360px;
  padding: 10px 20px 20px 20px;
  width: 50%;
  background: lightslategray;
  border-radius: 10px;
}


.warp-right-item{
  margin-bottom: 10px;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 5px;
}

.warp-right-name{
  color: chartreuse;
  margin-right:20px;
  cursor: pointer;
}
.warp-right-name:hover{
  color: darkturquoise;
}
.warp-right-description{
  color: #fff;
}

.resume{
  margin-top:10px;
  display:block;
  color:#fff;
  text-decoration: none;
}
.resume:hover{
  color:burlywood;
}

</style>
