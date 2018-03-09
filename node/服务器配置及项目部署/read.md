# 服务器配置及项目部署
ssh -p 40001 banli@140.143.91.39
## 要素
- 域名
- 服务器
- 域名备案
- 配置服务器应用环境
- 安装配置数据库
- 项目远程部署发布与更新

## 增强服务器安全

1. 修改默认的22端口号

```
sudo vim /etc/ssh/sshd_config
```

- 修改`port`端口
- 将UseDNS改为no
- 新增`AllowUsers banli17`，如果不增加这句，登录时会报`can't be established`错误。

2. 重启服务

```
sudo service sshd restart
```

3. 关闭root密码登录

```
PermitEmptyPasswords no
PermitRootLogin no
PasswordAuthentication no  // 密码登录
```

## 安装部署node

1. 安装一些依赖

```
yum install vim openssl build-essential libssl-dev wget curl git
```

2. 安装[nvm](https://github.com/creationix/nvm)

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

3. 通过nvm安装node

```
nvm install v6.9.5
nvm use v6.9.5
nvm alias default v6.9.5
```

4. 配置npm淘宝源，安装nrm

```
npm install nrm -g
nrm ls
nrm use taobao
```

5
```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

6. 安装全局工具包

```
npm i pm2 webpack gulp grunt-cli -g
```

7. 新建`/www/app.js`

```

```
远程通过ip + port的方式(99.99.99.99:8081)访问。

8. 使用pm2，用来运维node，防止挂掉，可以自动重启

```
pm2 start app.js  // 开启
pm2 logs
```

9. 外部通过80端口来访问，用nginx转发到其它端口

```
sudo yum install nginx
cd /etc/nginx/default.d
sudo vim test-com-8081.conf    // 新建一个网址的配置文件
```

`test-com-8081.conf`文件内容如下：
```
upstream test{
    server 127.0.0.1:8081;
}

server {
    listen 80;
    server_name localhost;

    location / {
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forward-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X-Nginx-Proxy true;
        proxy_pass http://test;
        proxy_redirect off;
    }
}
```

打开`/etc/nginx/nginx.conf`可以看到它会默认引入`default.d/`里的全部`.conf`配置。

`sudo vi ngix.conf`将server_tokens设置为off，隐藏浏览器上访问时头部的nginx版本信息

`service nginx restart`

10. [安装mongoDB](https://docs.mongodb.com/tutorials/install-mongodb-on-red-hat/)

```
https://docs.mongodb.com/tutorials/install-mongodb-on-red-hat/
```