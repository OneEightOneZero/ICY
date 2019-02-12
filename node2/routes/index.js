var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 获取首页STYLE
router.get('/style', async (req, res, next) => {
  let getStyle = () => {
    return new Promise((resolve, reject) => {
      request('https://icy.design/icym.php?method=icy.getHome&appId=4&page=1&pageSize=20', (err, response, body) => {
        resolve(body)
      })
    })
  }
  let data = await getStyle();
  res.send({
    status: 1,
    data:JSON.parse(data)
  });
});

// 获取SHOP页
router.get('/shop', async (req, res, next) => {
  let getShop = () => {
    return new Promise((resolve, reject) => {
      request('https://icy.design/icym.php?method=icy.getGoodsList', (err, response, body) => {
        resolve(body)
      })
    })
  }
  let data = await getShop();
  res.send({
    status: 1,
    data:JSON.parse(data)
  });
});


//获取第二页ICON
// router.get('/icon', async (req, res, next) => {
//   let getIcon = () => {
//     return new Promise((resolve, reject) => {
//       request('https://icy.design/icym.php?method=icy.getCollocationList&appId=4&page=2&pageSize=10&categoryId=0https://icy.design/icym.php?method=icy.getHome&appId=4&page=1&pageSize=20', (err, response, body) => {
//         resolve(body)
//       })
//     })
//   }
//   let data = await getIcon();
//   res.send({
//     status: 1,
//     data:JSON.parse(data)
//   });
// });
// 获取今日头条新闻的
// router.get('/news', async (req, res, next) => {
//   let getNews = () => {
//     return new Promise((resolve, reject) => {
//       request('https://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A1953CE4F2E8037&cp=5C42B8209347CE1&min_behot_time=0&_signature=tA0phwAA6F08ONhfbOoQDLQNKZ&i=', (err, response, body) => {
//         resolve(body)
//       })
//     })
//   }
//   let data = await getNews();
//   res.send({
//     status: 1,
//     data:JSON.parse(data).data
//   });
// });
// 获取style首页
// router.get('/style', async (req, res, next) => {
//   let getStyle = () => {
//     return new Promise((resolve, reject) => {
//       request('https://icy.design/icym.php?method=icy.getHome&appId=4&page=1&pageSize=20', (err, response, body) => {
//         resolve(body)
//       })
//     })
//   }
//   let data = await getStyle();
//   res.send({
//     status: 1,
//     data:JSON.parse(data)
//   });
// });
module.exports = router;
