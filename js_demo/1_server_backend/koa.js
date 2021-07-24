const Koa = require('koa');
const app = new Koa();
app.listen(3006);

const router = require('koa-router')(); 
const views = require("koa-views")
app.use(views(__dirname, {extension:'html'}))

//controller：后端设置页面路由 && 数据接口
router.get("/",  async ctx => await ctx.render("index"))
      .get("/test-react",  async ctx => await ctx.render("test-react"))  
      .get("/api/service/getUser", async ctx => {
          const data = {"name": "唐三", "props": "蓝银草&昊天锤"}
          ctx.response.body = data;
      }) 

app.use(router.routes());