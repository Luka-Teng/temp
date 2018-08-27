`
apt-get install build-essential libssl-dev wget nginx vim net-tools
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash

server {
  listen 80;
  server_name luka-test.cn;
  root /root/project;
  client_max_body_size 20m;
  location / {
    index index.html;
    try_files $uri $uri/ /index.html;
  }
}

记录点：
docker操作：
1. 批量删除不运行容器
docker rm $(docker ps -a -q)

2.删除所有未打 dangling 标签的镜像
docker rmi $(docker images -q -f dangling=true)

3.删除所有镜像
docker rmi $(docker images -q)

4.强制删除镜像名称中包含“doss-api”的镜像
docker rmi --force $(docker images | grep doss-api | awk '{print $3}')

5.docker进入后台
docker exec -it db3 /bin/sh 或者 docker exec -it d48b21a7e439 /bin/sh

6.docker容器后台运行必须保持一个应用在前台运行，以nginx举例
nginx -g "daemon off;"

shell操作：
1.当前目录，shell脚本中
$(cd `dirname $0`; pwd)

2.插入字符串到文件头部
sed -i '1i\xxx' /etc/apt/sources.list

执行的脚本
更改nginx conf的user
运行nginx

deb http://mirrors.163.com/debian/ jessie main non-free contrib \
deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib \
deb http://mirrors.163.com/debian/ jessie-backports main non-free contrib \
deb-src http://mirrors.163.com/debian/ jessie main non-free contrib \
deb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib \
deb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib \
deb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib \
deb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib \