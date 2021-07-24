const Koa = require('koa');
const app = new Koa();
app.listen(3006);

const router = require('koa-router')();

router.get("/", ctx => ctx.response.body = "welcome to port 3006")
    .get("/user", async ctx => {
        ctx.response.body = '3006，user: { "name": "唐三", "props": "蓝银草&昊天锤" }';
    })

app.use(router.routes());


