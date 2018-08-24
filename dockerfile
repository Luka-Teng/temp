apt-get install build-essential libssl-dev wget nginx vim net-tools
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

server {
  listen 80;
  server_name temp.luka-test.cn;
  root /home/admin/temp/temp;
  client_max_body_size 20m;
  location / {
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}

记录点：
1. 批量删除不运行容器
docker rm $(docker ps -a -q)

2.删除所有未打 dangling 标签的镜像
docker rmi $(docker images -q -f dangling=true)

3.删除所有镜像
docker rmi $(docker images -q)

4.强制删除镜像名称中包含“doss-api”的镜像
docker rmi --force $(docker images | grep doss-api | awk '{print $3}')


执行的脚本
更改nginx conf的user
运行nginx