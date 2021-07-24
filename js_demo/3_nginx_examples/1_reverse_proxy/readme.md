一、实现效果：
浏览器输入 www.666.com ; 跳转到我们启动的后端服务 localhost:3006

代码：采用文件夹 1_server_backend

1. 启动1_server_backend
   http://localhost:3006/
   http://localhost:3006/test-react

2. 配置host C:\Windows\System32\drivers\etc
   127.0.0.1 www.666.com

3. 启动nginx
   D:\softwares\nginx-1.20.1 
   80端口下修改配置：
   location / {
      proxy_pass http://127.0.0.1:3006;
   }


二、实现效果
浏览器输入不同的url路径，访问不同的服务器
127.0.0.1:8006/user -> http://localhost:3006
127.0.0.1:8006/skill -> http://localhost:3007

1. 分别启动 koa_skill_3006.js  koa_user_3007.js
2. nginx配置：
        location /user {
            proxy_pass http://127.0.0.1:3006;
        }

        location /skill {
            proxy_pass http://127.0.0.1:3007;
        }
