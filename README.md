# node-server-express

> node-server-express

> 使用node ,express ,mysql 构建后端服务

> 注意在本机要安装对应的mysql数据库，可使用docker安装

> 对应的vue前端地址 https://github.com/yangmei123/vue-vue-router

* node
* express
* mysql

## 路由接口名

查看app.js文件，就可以看到现有配置的接口。

```
// app.js
app.use('/', index);
app.use('/add', add);
app.use('/delete', deletePage);
app.use('/vue-admin/user/login', loginPage);
app.use('/vue-admin/user/info', infoPage);
app.use('/vue-admin/table/list', listPage);
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
# 查看数据库数据： http://localhost:3000/vue-admin/collect/list
# 查看默认：localhost:3000/vue-admin/table/list
npm start
```

## 生成Docker image

生成docker镜像时要注意修改对应的数据库连接host，否则启动容器时会连接失败。


```
var connection = mysql.createConnection({
  //host: 'localhost',  // 外部链接docker内mysql使用
  // host: 'mysql', // docker-compose使用
  host: '172.17.0.1', // docker使用
  user: 'root',
  password: 'root',
  port: '3306',
  database: 'node'
});
```

## 数据库、表

```
// 建数据库

CREATE DATABASE node;

// 使用node数据库建表
use node

// 建表

CREATE TABLE IF NOT EXISTS `collect`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `age` VARCHAR(100) NOT NULL,
   `height` VARCHAR(40) NOT NULL,
   `weight` VARCHAR(100) NOT NULL,
   `faceColor` VARCHAR(40) NOT NULL,
   `face` VARCHAR(100) NOT NULL,
   `skin` VARCHAR(40) NOT NULL,
   `style` VARCHAR(100) NOT NULL,
   `createdTime` DATE,
    PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
```