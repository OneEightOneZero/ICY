//引入第三方express模块
const express = require("express")

const proxy = require("http-proxy-middleware")

const mongodb = require('mongodb');
const bodyParser = require("body-parser")

// 获取Mongo客户端
const MongoClient = mongodb.MongoClient;
// 生成http服务器
let app = express();
// 利用中间件实现静态资源服务器
app.use(express.static("./"));


let Router = express.Router();

let urlencoded = bodyParser.urlencoded({ extended: false });

//允许跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // console.log(req.method == )
    // 跨域请求CORS中的预请求
    if (req.method == "OPTIONS") {
        res.send(200); /*让options请求快速返回*/
    } else {
        next();
    }
});
app.use('/new', proxy({
    "target": "https://icy.design/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=0",
    "changeOrigin": true,
    // "pathRewrite": {
    // "^/checklogin": "/"
    // }
}))

app.use('/blogger', proxy({
    "target": "https://icy.design/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=1483760162",
    "changeOrigin": true,
    // "pathRewrite": {
    // "^/checklogin": "/"
    // }
}))

app.use('/start', proxy({
    "target": "https://icy.design/icym.php?method=icy.getCollocationList&appId=4&page=1&pageSize=10&categoryId=1483760164",
    "changeOrigin": true,
    // "pathRewrite": {
    // "^/checklogin": "/"
    // }
}))



// app.use('/shop', proxy({
//     "target": "https://icy.design/icym.php?method=icy.getGoodsList",
//     "changeOrigin": true,
//     // "pathRewrite": {
//     // "^/checklogin": "/"
//     // }
// }))

// 服务器代理
//如果请求以/sinaapi开头，则进入代理模式
// http://localhost:4008/sinaapi/api/config/list 转成 https://m.weibo.cn/sinaapi/api/config/list
// app.use('/sinaapi', proxy({
//     "target": "https://m.weibo.cn",
//     "changeOrigin": true,
//     "pathRewrite": {
//         "^/sinaapi" : "/"
//     }
// }));
//监听端口


//登录

// 用户登录 '/checklogin'
app.use('/login', urlencoded, (req, res) => {
    // console.log("进入")
    // console.log("req.body", req.body);
    let { username } = req.body;
    // console.log("00", username)
    // console.log(username, password)
    MongoClient.connect('mongodb://localhost:27017', (err, database) => {
        //连接成功后执行这个回调函数
        if (err) throw err;

        // 使用某个数据库，无则自动创建
        let db = database.db('icy');

        // 使用集合
        let user = db.collection('login');
        // console.log({ username: username, password: password })
        // 查询是否存在数据
        // console.log(username, password);
        user.findOne({ username }, function(err, result) {
            // console.log(username)
            if (result) {
                console.log("存在", result)
                res.send({
                    code: 1,
                    msg: "登录成功",
                    userId: result._id
                })
            } else {
                user.insertOne({ username }, function(err, result) {
                    console.log("不存在", result.insertedId)
                    if (result.result.ok == 1) {
                        res.send({
                            code: 1,
                            msg: "登录成功",
                            userId: result.insertedId
                        })
                    }
                })

            }
        })


    });
});



app.listen(3001, () => {
    console.log(`this is running on http:localhost:3001`);
})