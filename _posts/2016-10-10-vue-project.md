---
layout: post
title:  "利用WebPack构建VUE项目"
date:   2016-12-11
excerpt: "gcd"
tag:
- vue 
- 笔记
comments: false
---

##一、构建项目
1，首先新建一个目录，名为 myProject ，这是我们的项目根目录。然后在根目录下使用 ****npm init -y****  命令，在我们的项目中生成 package.json 文件，因为我们的项目要有很多依赖，都是通过npm来管理的，而npm对于我们项目的管理，则是通过package.json文件。

2，我们新建一个叫做 app 的目录，这个是我们页面模块的目录，再在app目录下建立一个index目录，假设这个是首页模块的目录，然后再在index目录下建立一个 index.html 文件和 index.js 文件，分别是首页入口html文件和主js文件，然后再在index目录下建立一个components目录，这个目录用作存放首页组件模块的目录，因为我们最终要实现组件化开发。 

##二、通过****npm****安装项目依赖项在根目录（myProject）下执行以下命令

>npm install webpack webpack-dev-server vue-loader vue-html-loader css-loader vue-style-loader vue-hot-reload-api babel-loader babel-core babel-plugin-transform-runtime babel-preset-es2015 babel-runtime@5 --save-dev

>npm install vue --save

完成后，你的package.json应该是这样的：

```
{
  "name": "myProject",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "vue": "^1.0.28"
  },
  "devDependencies": {
    "babel-core": "^6.14.0",
    "babel-loader": "^6.2.5",
    "babel-plugin-transform-runtime": "^6.15.0",
    "babel-preset-es2015": "^6.14.0",
    "babel-runtime": "^5.8.38",
    "css-loader": "^0.25.0",
    "vue-hot-reload-api": "^2.0.6",
    "vue-html-loader": "^1.2.3",
    "vue-loader": "^8.5.4",
    "vue-style-loader": "^1.0.0",
    "webpack": "^1.13.2",
    "webpack-dev-server": "^1.16.1"
  }
}

```

我们安装了 babel 一系列包，用来解析ES6语法，因为我们使用ES6来开发项目，如果你不了解ES6语法，建议你看一看阮老师的教程，然后我们安装了一些loader包，比如css-loader/vue-loader等等，因为webpack是使用这些指定的loader去加载指定的文件的。

另外我们还使用 npm install vue –save 命令安装了 vue ，这个就是我们要在项目中使用的vue.js，我们可以直接像开发nodejs应用一样，直接require(‘vue’);即可，而不需要通过script标签引入，这一点在开发中很爽。

##三，编辑****html****、****js****、****vue****文件**

###index.html
```
<!DOCTYPE html>
<html lang="zh">
 <head>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <title>首页</title>
 </head>
 <body>
  <!-- vue的组件以自定义标签的形式使用 -->
  <favlist></favlist>
 </body>
</html>
```
###index.js
```
import Vue from 'Vue'
import Favlist from './components/Favlist'

new Vue({
 el: 'body',
 components: { Favlist }
})
```
###Favlist.vue
****3****、在****components****目录下新建一个**** Favlist.vue ****文件，作为我们的第一个组件********

```
<template>
    <div v-for="n in 10">div</div>
</template>

<script>
    export default {
        data () {
            return {
                msg: 'Hello World!'
            }
        }
    }
</script>

<style>
    html{
        background: red;
    }
</style>
```

我们在index.html中使用了自定义标签（即组件），然后在index.js中引入了Vue和我们的Favlist.vue组件，Favlist.vue文件中，我们使用了基本的vue组件语法，最后，我们希望它运行起来，这个时候，我们就需要webpack了。

##四、配置****webpack****服务**
###1、在项目根目录下新建 build 目录，用来存放我们的构建相关的代码文件等
###2、然后在build目录下新建 webpack.config.js 这是我们的webpack配置文件，webpack需要通过读取你的配置，进行相应的操作。
####webpack.config.js
```
// nodejs 中的path模块
var path = require('path');

module.exports = {
    // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
    entry: path.resolve(__dirname, '../app/index/index.js'),
    // 输出配置
    output: {
        // 输出路径是 myProject/output/static
        path: path.resolve(__dirname, '../output/static'),
        publicPath: 'static/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    module: {
        
        loaders: [
            // 使用vue-loader 加载 .vue 结尾的文件
            {
                test: /\.vue$/, 
                loader: 'vue'   
            },
            {
                test: /\.js$/,
                loader: 'babel?presets=es2015',
                exclude: /node_modules/
            }
        ]
    }
}
```

###3、构建项目
上例中，相信你已经看懂了我的配置，入口文件是index.js文件，配置了相应输出，然后使用 vue-loader 去加载 .vue 结尾的文件，接下来我们就可以构建项目了，我们可以在命令行中执行：

>webpack --display-modules --display-chunks --config build/webpack.config.js

这个时候，我们修改 index.html ，将输出的js文件引入：
注意：**html中的script标签的src路径为你项目根目录中生成的output->static->main.xxxxx.js,哈希值是不同的，故需要手动修改下**

index.html

```
<!DOCTYPE html>
<html lang="zh">
 <head>
  <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no">
  <meta charset="utf-8">
  <title>首页</title>
 </head>
 <body>
  <!-- vue的组件以自定义标签的形式使用 -->
  <favlist></favlist>

  <script src="../../output/static/main.ce853b65bcffc3b16328.js"></script>
 </body>
</html>

```
此时，你的Vue已经能够渲染出来了。但是，也有一个很严重的问题就是，你每次修改后，都要重新构建项目，生成一个main.xxx.js文件，这显然不是我们要达到的目的。而webpack也不会这么的愚蠢，所以我们需要安装几个webpack插件来解决这个问题

##五,添加**node**服务，实现**webpack**的打包加载

1.首先安装 html-webpack-plugin 插件：
在根目录下输入命令安装： 
>npm install html-webpack-plugin --save-dev

2.修改build文件就夹的webpack.config.js文件

```
// nodejs 中的path模块
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
 // 入口文件，path.resolve()方法，可以结合我们给定的两个参数最后生成绝对路径，最终指向的就是我们的index.js文件
 entry: path.resolve(__dirname, '../app/index/index.js'),
 // 输出配置
 output: {
  // 输出路径是 myProject/output/static
  path: path.resolve(__dirname, '../output/static'),
  publicPath: 'static/',
  filename: '[name].[hash].js',
  chunkFilename: '[id].[chunkhash].js'
 },
 resolve: {
  extensions: ['', '.js', '.vue']
 },
 module: {

  loaders: [
   // 使用vue-loader 加载 .vue 结尾的文件
   {
    test: /\.vue$/,
    loader: 'vue'
   },
   {
    test: /\.js$/,
    loader: 'babel?presets=es2015',
    exclude: /node_modules/
   }
  ]
 },
 plugins: [
  new HtmlWebpackPlugin({
   filename: '../index.html',
   template: path.resolve(__dirname, '../app/index/index.html'),
   inject: true
  })
 ]
}
```
根目录下再次执行构建命令：
>webpack --display-modules --display-chunks --config build/webpack.config.js

构建完成后，应该在输出目录，多出来一个index.html文件，双击它，代码正确执行，你可以打开这个文件查看一下，webpack自动帮我们引入了相应的文件。

问题继续来了，难道每次我们都要构建之后才能查看运行的代码吗？那岂不是很没有效率?别急

3.安装 webpack-dev-middleware中间件和webpack-hot-middleware中间件，进行加载

1）
>npm install webpack-dev-middleware webpack-hot-middleware --save-dev

2）
>npm install express --save-dev

4，下面我们在build目录中创建一个 dev-server.js 的文件，并写入一下内容：

```
// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.config')

// 创建一个express实例
var app = express()

// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 注册中间件
app.use(devMiddleware)

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})
```

别急我们要对我们的 webpack.config.js 配置文件做两处修改：
1）将 config.output.publicPath 修改为 ‘/‘：
2）将 plugins 中 HtmlWebpackPlugin 中的 filename 修改为 ‘app/index/index.html’

此时在项目根目录执行以下命令启动服务：
命令：
> node build/dev-server.js

当看到如下提示，则代表开启服务成功了：
```
Listening at http://localhost:8888
Hash: 2b9c279685625d1c9154
Version: webpack 1.13.2
Time: 7888ms
                       Asset       Size  Chunks             Chunk Names
main.2b9c279685625d1c9154.js     287 kB       0  [emitted]  main
               ../index.html  439 bytes          [emitted]
Child html-webpack-plugin for "../index.html":
            Asset    Size  Chunks       Chunk Names
    ../index.html  552 kB       0
webpack: bundle is now VALID.
```
服务启动成功，接下来就可以打开浏览器，输入：
http://localhost:8888/app/index/index.html

##OK，大功告成，今天就到这里，当开启服务后，你每次修改代码保存后直接刷新页面即可看到显示。
>目前为止并没有启动真正的热加载模式（代码保存后浏览器自动更新页面而不需手动刷新的模式），实际因为现在热加载模式开发还有很多问题，且当项目越来越大时，延迟越来越严重，机器负载也很大，故还没完善前就先不写出来了，另外大家也可以去多探索探索！祝大家好运


###Tips
**当然了你也可以使用“vue-cli”脚手架来完成安装**
**github地址：https://github.com/vuejs/vue-cli**
