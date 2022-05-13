# 基于 node:14.18.0 的定制镜像
FROM node:14.18.0

WORKDIR /app
# 只复制"package.json", "package-lock.json*"而不是整个目录，利用缓存的docker层
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --registry=https://registry.npm.taobao.org

COPY . .
# 声明端口
EXPOSE 3000

# 运行 命令
CMD [ "npm", "start" ] 