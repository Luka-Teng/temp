# 继承于debian镜像
FROM debian

# 环境变量，表示外部项目地址和内部项目地址
ENV FROMDIR "/home/admin/dockers/debian-nginx-nvm"
ENV TODIR "/root"
MAINTAINER Luka 15000900635@163.com

# 更新源，安装必要工具
RUN apt-get update && apt-get install -y build-essential libssl-dev wget nginx
vim net-tools

# 安装nvm，并且启用node10.0.0
RUN wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh 
| bashRUN rm /bin/sh && ln -s /bin/bash /bin/shRUN source ~/.bashrc
RUN /bin/bash -i -c "nvm install v10.0.0 && nvm use v10.0.0"

# 在容器内创建相关文件、文件夹
RUN mkdir ${TODIR}/project && echo "<html><body>SPA</body></html>" > ${TODIR}/project/index.html
RUN mkdir ${TODIR}/scripts

# 添加外部的entry.sh脚本到容器内部
ADD ./files/entry.sh ${TODIR}/scripts/entry.sh

# 赋予entry.sh权限
RUN chmod -R 777 ${TODIR}/scripts/entry.sh

# 运行容器时执行entry.sh
ENTRYPOINT ${TODIR}/scripts/entry.sh