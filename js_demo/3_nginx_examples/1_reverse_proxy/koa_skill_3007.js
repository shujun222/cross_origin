const Koa = require('koa');
const app = new Koa();
app.listen(3007);

const router = require('koa-router')();

router.get("/skill", ctx => {
        ctx.response.body = '3007, skill: ["缠绕", "寄生", "蛛网束缚", "蓝银囚笼"]'
    })

app.use(router.routes());


