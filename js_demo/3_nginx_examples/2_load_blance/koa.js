/**
 * 启动多个服务来mock负载均衡
 * nodemon koa.js
 * nodemon koa.js 3006
 * 
 * nginx配置：upstream myServer { ... }
 * 
 * Author: shujun
 * Date 2021-7-23 23:10
 */
const Koa = require('koa');
const app = new Koa();
const port = process.argv[2] ? process.argv[2] : 3006
app.listen(port);

const router = require('koa-router')();

router.get("/", ctx => {
        console.log(port);
        ctx.response.body = "visit " + port
    })
    .get("/user", async ctx => {
        console.log(port);
        ctx.response.body = port + '，user: { "name": "唐三", "props": "蓝银草&昊天锤" }';
    })

app.use(router.routes());


