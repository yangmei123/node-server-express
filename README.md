# node-server-express

> node-server-express

> 使用node ,express ,mysql 构建后端服务

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
# localhost:3000/vue-admin/table/list
npm start
```
