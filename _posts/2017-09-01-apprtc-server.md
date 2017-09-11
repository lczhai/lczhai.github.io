---
layout: post
title:  "AppRtc 搭建笔记"
date:   2017-09-01
excerpt: "给予webrtc所提供的服务"
tag:
- 笔记
comments: false
---

# AppRtc 搭建笔记


##源项目GitHub地址

> apprtc：https://github.com/webrtc/apprtc

##前提

1，自行科学上网（要下载许多谷歌的包，且有用到Go语言）

2，环境准备（需要node、npm、grunt、Python、Go、jdk、GoogleAppEngine、、）请自行下载安装

###  一，房间服务器搭建

（1）下载apprtc源码

```
	git clone https://github.com/webrtc/apprtc.git

	cd apprtc

	npm install

```



**npm install *有可能出现各种错误，不要捉急，慢慢处理***

(2)修改配置文件

接下来更改项目中的配置文件/apprtc/src/app_engine/constants

由于笔者基于的ubuntu内网IP是222.201.145.167，故以下配置中均改为此IP.

constants.py需要更改配置如下

```
//turn打洞服务器配置

TURN_BASE_URL = 'https://222.201.145.167'

TURN_URL_TEMPLATE = '%s/turn?username=%s&key=%s'

CEOD_KEY = 'luluteam'//与之后turn服务器配置中的配置一致

//ice服务器配置

ICE_SERVER_BASE_URL = 'https://222.201.145.167'

ICE_SERVER_URL_TEMPLATE = '%s/v1alpha/iceconfig?key=%s'

ICE_SERVER_API_KEY = os.environ.get('ICE_SERVER_API_KEY')

//信令服务器配置，分配8089端口

WSS_INSTANCE_HOST_KEY = '222.201.145.167:8089'

WSS_INSTANCE_NAME_KEY = 'vm_name'

WSS_INSTANCE_ZONE_KEY = 'zone'

WSS_INSTANCES = [{

WSS_INSTANCE_HOST_KEY: '222.201.145.167:8089',

WSS_INSTANCE_NAME_KEY: 'wsserver-std',

WSS_INSTANCE_ZONE_KEY: 'us-central1-a'

}, {

WSS_INSTANCE_HOST_KEY: '222.201.145.167:8089',

WSS_INSTANCE_NAME_KEY: 'wsserver-std-2',

WSS_INSTANCE_ZONE_KEY: 'us-central1-f'

}]

```





(3)执行命令

```
grunt build
```

 

改好constants文件后，在apprtc根目录下grunt build得到编译好的out目录，可以进去查看之前constants的修改是否生效。到此为止，房间服务器配置完毕。

错误提示：

错误1：requests.exceptions.SSLError: [Errno 1] _ssl.c:510: error:14077410:SSL routines:SSL23_GET_SERVER_HELLO:sslv3 alert handshake failur

请执行命令： pip install pyopenssl ndg-httpsclient pyasn1

**grunt build *依然会遇到各种错误，请务必善用*google*搜索***

（4）运行项目

***运行还依赖* GoogleAppEngine *这里选择合适的目录，进行下载并配置环境变量***

假设你的GoogleAppEngine安装在”/usr/local/“目录下，且您当前在apprtc跟目录下，那么你的服务启动命令应该为

```
sudo /usr/local/google_appengine/dev_appserver.py ./out/app_engine
```

或者

```
sudo /usr/local/google_appengine/dev_appserver.py --host=222.201.145.167  ./out/app_engine
```

启动成功的话，即可在222.201.145.167下访问

### 二，Collider信令服务器搭建

（1）使用apt-get命令来安装Go环境

```
sudo apt-get install software-properties-common

sudo apt-get install python-software-properties

sudo add-apt-repository ppa:gophers/go

sudo apt-get update

sudo apt-get install golang-go git-core mercurial

```





（2）$home 目录下 创建文件夹 ‘mkdir goWorkspace’ （亦可自行创建，记住名字和路径就好，一下则以 ‘~/goWorkspace’ 目录为例）

(3)将 Collider 链到 $GOPATH/src

```
ln -s pwd /apprtc/src/collider/collider $GOPATH/src

ln -s pwd /apprtc/src/collider/collidermain $GOPATH/src

ln -s pwd /apprtc/src/collider/collidertest $GOPATH/src

```



(4)修改源码

进入/collidermain/main.go,修改房间服务器为我们前面的房间服务器

```
var roomSrv = flag.String("room-server", "https://222.201.145.167", "The origin of the room server")
```



(5) 安装依赖关系 

``` 
go get collidermain
```



(6) 安装 collidermain

``` 
go install collidermain
```

成功编译后会在gopath目录下生成bin和pkg目录，执行文件在bin下





（7）***运行*collider*服务器***

> 进入bin目录运行./collidermain -port=8089 -tls=true

> (nohup ./collidermain -port=8089 -tls=true & 后台运行)

 

 

\### 三，coTurn打洞服务器

（1）本文使用turnserver-4.4.5.3-debian-wheezy-ubuntu-mint-x86-64bits.tar.gz(云盘密码:n8cr)

找个地方创建turnserver目录，将上面下载下来的服务器文件解压，解压后得到INSTALL安装须知和.deb包，然后执行命令

```
sudo apt-get install gdebi-core
sudo gdebi *.deb
```



（2）安装成功后修改配置文件

​	① sudo vim /etc/default/coturn 将TURNSERVER_ENABLED=1的注释去除。

​	② sudo vim /etc/turnserver.conf 加入下述内容到此文本最后

​	***注意*:3478*是*coturn*服务器端口号，下面*user*和*static-auth-secret*中的自定义名称要和房间服务器配置时*constants.py*文件的*CEOD_KEY*一致***

```
listening-device=eth0

listening-port=3478

relay-device=eth0

min-port=49152

max-port=65535

Verbose

fingerprint

lt-cred-mech

use-auth-secret

static-auth-secret=luluteam

user=luluteam:0x06b2afcf07ba085b7777b481b1020391

user=luluteam:luluteam

stale-nonce

cert=/usr/local/etc/turn_server_cert.pem

pkey=/usr/local/etc/turn_server_pkey.pem

no-loopback-peers

no-multicast-peers

mobility

no-cli
```



**保存，上面添加文本需要的证书使用openssl生成**

> 生成秘钥

上面配置文件中的0x06b2afcf07ba085b7777b481b1020391

通过turnadmin命令生成

```
turnadmin -k -u luluteam -r north.gov -p luluteam
//前面的luluteam是用户名,后者是密码.
```



> 生成coturn证书(openssl生成签名证书)

```
sudo openssl req -x509 -newkey rsa:2048 -keyout /usr/local/etc/turn_server_pkey.pem -out /usr/local/etc/turn_server_cert.pem -days 99999 -nodes
```



(3)基于coturn证书设置修改文件

①进入/apprtc/src/web_app/js/utils.js

②将requestIceServers函数改为如下

笔者设置coturn的用户名和密码均为luluteam,故函数中改为luluteam

```
function requestIceServers(iceServerRequestUrl, iceTransports) { 
	return new Promise(function(resolve, reject){
      var servers = [{ 
      		credential: "xxxxx", 
      		username: "xxxxx", 
      		urls:["turn:222.201.145.167:3478?transport=udp", 
      		"turn:222.201.145.167:3478?transport=tcp"] 
        }];
      resolve(servers);
});}
```



>  更改之后重新进入apprtc根目录使用 "grunt build'' 命令重新编译源码

**这时三个服务器都起来了**



大功告成！！！记得要启用HTTPS哦！！！



