<template>
  <div>
    <ul class="clearfix">
      <li
        @click="changeItem(index)"
        v-for="(item,index) in titles"
        :key="index"
        :class="{'active':index==isActive}"
        v-text="item"
      ></li>
    </ul>
    <ul class="clearfix">
      <li v-for="(v,index) in showorder" :key="index">
        <!-- <img
          src="https://image3.ichuanyi.cn/Files/d7/38/5c/d7385c6fdc7f7d03b30e4fd141f6e39e4ca4fa3f_510826.jpg"
          alt
        >
        <p>hahahhahahahha</p>
        <p>50</p>-->
        <img v-bind:src="'https://image3.ichuanyi.cn/'+v.image.image" alt>
        <p v-text="v.name"></p>
        <p v-text="`￥${v.price}`">{{v.price}}</p>
      </li>
      <li></li>
    </ul>
    <ul></ul>
  </div>
</template>



<script>
export default {
  // 获取父组件传过来的属性值，让子组件呈现对应的状态
  // props: ["showorder"],
  data() {
    return {
      isActive: 0,
      titles: ["综合排序", "销售排序", "上新排序", "价格排序"],
      showorder: [
        {
          image: {
            image:
              "Files/e1/9b/fb/e19bfb3a6e2580c54638d4fe2dccf2e19da95e82_525384.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "极简风偏襟啪扣风衣",
          name: "极简风偏襟啪扣风衣",
          goodsId: "27021599158393903",
          price: 599,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393903¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "姜黄",
              image: {
                image: "ai-admin/9316537d6dcf95d7b3fdc6f92ed7bfce.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393903¤tColor=%E5%A7%9C%E9%BB%84&appId=3"
            },
            {
              color: "卡其",
              image: {
                image: "ai-admin/388e58d44ef1979ec15a9db02a1a251c.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393903¤tColor=%E5%8D%A1%E5%85%B6&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/b8/59/58/b85958839db5528d3ac116bc2be999dd8e636026_564341.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722681,
          username: "I.s-Street",
          goodsName: "英伦风格纹拼袖短风衣",
          name: "英伦风格纹拼袖短风衣",
          goodsId: "27021599158393915",
          price: 699,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393915¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "卡其",
              image: {
                image: "ai-admin/30c9d0d9b0e261c0f7d85091370331c6.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393915¤tColor=%E5%8D%A1%E5%85%B6&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/35/3f/7a/353f7a6166a49860c98d0584e8cd3032744e23a5_484365.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422756560,
          username: "朱建军",
          goodsName: "知性风衬衫式连衣裙",
          name: "知性风衬衫式连衣裙",
          goodsId: "27021599158393912",
          price: 899,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393912¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "卡其色",
              image: {
                image: "ai-admin/0441f418142098c5852e600d2e675c98.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393912¤tColor=%E5%8D%A1%E5%85%B6%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/66/d8/ad/66d8ad216fdceae1d82d5bc554cdacb90c366679_524459.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "英伦风落肩灯笼袖风衣",
          name: "英伦风落肩灯笼袖风衣",
          goodsId: "27021599158393902",
          price: 699,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393902¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "黑",
              image: {
                image: "ai-admin/34f87f49af7956699d5850fdd62cf77d.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393902¤tColor=%E9%BB%91&appId=3"
            },
            {
              color: "卡其",
              image: {
                image: "ai-admin/0f1be2d1caeb0e6bc13ee58acaa7ab39.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393902¤tColor=%E5%8D%A1%E5%85%B6&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/20/75/ad/2075adfbafdaff41048e180dc3c366f39e6748c4_592998.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "解构式西装袖绑腰锥裤",
          name: "解构式西装袖绑腰锥裤",
          goodsId: "27021599158393907",
          price: 459,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393907¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "深咖",
              image: {
                image: "ai-admin/ce7b27ed121a582e93de43b78c4f3a64.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393907¤tColor=%E6%B7%B1%E5%92%96&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/e0/b8/e1/e0b8e1dba03f18c8ae3db06ef58e074e28fa51f6_656139.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1424153925,
          username: "REY&BOBO.zhang",
          goodsName: "运动风撞色拼饰毛织裙",
          name: "运动风撞色拼饰毛织裙",
          goodsId: "27021599158393918",
          price: 599,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393918¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "蓝色",
              image: {
                image: "ai-admin/884d58c6a3dd5835cc2b791e697c65e3.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393918¤tColor=%E8%93%9D%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/4b/d0/44/4bd04454350db87ca5b1c9e9bee66b88794da524_524820.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "设计感西装袖绑腰锥裤",
          name: "设计感西装袖绑腰锥裤",
          goodsId: "27021599158393908",
          price: 459,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393908¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "灰色",
              image: {
                image: "ai-admin/3534bdaa30e094d170ed135f52fed7fa.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393908¤tColor=%E7%81%B0%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/ec/6e/77/ec6e772f4d993891b97e44eba366a3f4b1767871_512641.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722681,
          username: "I.s-Street",
          goodsName: "设计感露肩扣带饰风衣",
          name: "设计感露肩扣带饰风衣",
          goodsId: "27021599158393916",
          price: 899,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393916¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "卡其",
              image: {
                image: "ai-admin/d0acaa9f61fce61044795de4f127551b.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393916¤tColor=%E5%8D%A1%E5%85%B6&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/d3/89/4d/d3894dbc04c4049b3aaa553b169250ba60a44f60_671809.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1424153925,
          username: "REY&BOBO.zhang",
          goodsName: "运动风金属光感短袖衫",
          name: "运动风金属光感短袖衫",
          goodsId: "27021599158393917",
          price: 699,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393917¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "蓝色",
              image: {
                image: "ai-admin/44783964359053bb81a933f58d948bda.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393917¤tColor=%E8%93%9D%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/2b/5a/f9/2b5af97d788cfc63a3043784ad5ce2d578599659_474783.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "通勤系袋盖装饰衬衫",
          name: "通勤系袋盖装饰衬衫",
          goodsId: "27021599158393913",
          price: 599,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393913¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "白色",
              image: {
                image: "ai-admin/e8e5fbac5410a524ce3ad3e0157f79f6.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393913¤tColor=%E7%99%BD%E8%89%B2&appId=3"
            },
            {
              color: "绿色",
              image: {
                image: "ai-admin/939a41790b83d1ead39d465ca25cae20.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393913¤tColor=%E7%BB%BF%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/eb/83/96/eb83961becb8af4a8db3a248cf752afc1328f873_585231.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "设计感缎面拼接连衣裙",
          name: "设计感缎面拼接连衣裙",
          goodsId: "27021599158393914",
          price: 899,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393914¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "金色",
              image: {
                image: "ai-admin/ad58c2fa024cb6ca00723f8c7d073a66.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393914¤tColor=%E9%87%91%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/46/2f/88/462f88ad959dadb21fe80bc962436262114ab4a3_541351.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422727594,
          username: "曹武",
          goodsName: "浪漫系领口绑带连衣裙",
          name: "浪漫系领口绑带连衣裙",
          goodsId: "27021599158393911",
          price: 799,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393911¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "裸粉",
              image: {
                image: "ai-admin/e50172719155dd809cc708b50fdd8636.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393911¤tColor=%E8%A3%B8%E7%B2%89&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/9c/85/6b/9c856b75d74b7881803e0ea35e2f7062b815b979_558458.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722681,
          username: "I.s-Street",
          goodsName: "极简风中腰牛仔萝卜裤",
          name: "极简风中腰牛仔萝卜裤",
          goodsId: "27021599158393910",
          price: 399,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393910¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "军绿",
              image: {
                image: "ai-admin/f04789ac1d3a61e6e57f5e3a4897d575.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393910¤tColor=%E5%86%9B%E7%BB%BF&appId=3"
            },
            {
              color: "白色",
              image: {
                image: "ai-admin/a71038dc5101366bafa89029b32c769c.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393910¤tColor=%E7%99%BD%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/51/50/1b/51501bd38c4f5f041521ba0a25c406aaca31c069_586354.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "通勤系格纹腰带微喇裤",
          name: "通勤系格纹腰带微喇裤",
          goodsId: "27021599158393909",
          price: 399,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393909¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "深咖",
              image: {
                image: "ai-admin/701ad80960a8ffef3928699c295ed00f.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393909¤tColor=%E6%B7%B1%E5%92%96&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/62/46/ca/6246ca24ac03ddc71d47cc4d9877df1304885ae1_598326.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "通勤系飘带领结衬衫",
          name: "通勤系飘带领结衬衫",
          goodsId: "27021599158393904",
          price: 459,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393904¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "白色",
              image: {
                image: "ai-admin/debe4978ade84fa312c7220ebee5c273.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393904¤tColor=%E7%99%BD%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/1b/1c/97/1b1c978353de0b2fdc4a2d7d9145afc3b66fe050_530170.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "通勤系窄幅腰带哈伦裤",
          name: "通勤系窄幅腰带哈伦裤",
          goodsId: "27021599158393906",
          price: 399,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393906¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "米色",
              image: {
                image: "ai-admin/dee76759a3e7ee8f0077226e772772d6.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393906¤tColor=%E7%B1%B3%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/ea/72/a4/ea72a45bbba58a55822785de61c37165f3a6c0c2_539122.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1422722652,
          username: "I.s-Office",
          goodsName: "知性风领结背镂裁衬衫",
          name: "知性风领结背镂裁衬衫",
          goodsId: "27021599158393919",
          price: 699,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393919¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "绿色",
              image: {
                image: "ai-admin/b4627d11b53cb8818a3bcf22d6ef8448.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393919¤tColor=%E7%BB%BF%E8%89%B2&appId=3"
            },
            {
              color: "粉色",
              image: {
                image: "ai-admin/0716d461ec70f82b9f13fe08475cd907.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393919¤tColor=%E7%B2%89%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/40/f1/01/40f101dc32457a431c344ab6ee6b31f3c53ad33f_501049.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1420356966,
          username: "Jez",
          goodsName: "克莱因蓝高腰萝卜裤",
          name: "克莱因蓝高腰萝卜裤",
          goodsId: "27021599158393775",
          price: 399,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393775¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 3,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "宝蓝色",
              image: {
                image: "ai-admin/982ad567d45a9f860ecd959701715afb.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393775¤tColor=%E5%AE%9D%E8%93%9D%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/53/de/b2/53deb25ffaa4bc32391805e5e149f1d27174c5b2_547070.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1423372807,
          username: "华嘉",
          goodsName: "泡泡袖光感丝线针织衫",
          name: "泡泡袖光感丝线针织衫",
          goodsId: "27021599158393901",
          price: 499,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393901¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 0,
          isHasVideo: 1,
          isCombineColors: 0,
          pricePreview: {},
          colors: [
            {
              color: "宝蓝色",
              image: {
                image: "ai-admin/6471a0fc4b879bca89b94245bc2fd441.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393901¤tColor=%E5%AE%9D%E8%93%9D%E8%89%B2&appId=3"
            }
          ],
          activityLabel: {}
        },
        {
          image: {
            image:
              "Files/20/66/c6/2066c61ae47148fcff5f078c343a8a2bf257c4de_475791.jpg",
            width: 1200,
            height: 1200
          },
          userId: 1423094878,
          username: "陈如",
          goodsName: "复古风流苏缀插袋长裤",
          name: "复古风流苏缀插袋长裤",
          goodsId: "27021599158393898",
          price: 459,
          link:
            "http://icy.design/icy/goodsDetail?goodsId=27021599158393898¤tColor=&appId=3",
          hasTLDiscount: 0,
          badge: 0,
          isHasVideo: 1,
          isCombineColors: 1,
          pricePreview: {},
          colors: [
            {
              color: "杏色",
              image: {
                image: "ai-admin/bda7a171720b4c66d9ff05810655d8c5.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393898¤tColor=%E6%9D%8F%E8%89%B2&appId=3"
            },
            {
              color: "薄荷绿",
              image: {
                image: "ai-admin/510a89f02c94474649f1ee5737f83489.jpg",
                width: 1200,
                height: 1200
              },
              link:
                "http://icy.design/icy/goodsDetail?goodsId=27021599158393898¤tColor=%E8%96%84%E8%8D%B7%E7%BB%BF&appId=3"
            }
          ],
          activityLabel: {}
        }
      ]
    };
  },
  methods: {
    changeItem(index) {
      this.isActive = index;
      var i = this.isActive
      // if(this.isActive) {
         console.log(this.isActive);
         console.log(i);
      this.showorder.sort(function(p1, p2) {
        if (i === 0) {
      //     // 默认排序
          return p2.userId - p1.userId;
          console.log
        } else if (i === 1) {
      //     // 销量
          return p1.goodsId - p2.goodsId;
        } else if (i === 2) {
      //     //上新
          return p1.userId - p2.userId;
        } else {
      //     //价格
          return p1.price - p2.price;
        }
        return showorder;
      });
    // }
    },
  },
  computed: {
   
  },
  watch: {},
  created() {},
  mounted() {}
 
};
</script>
<style lang="scss" scoped>
div {
  ul:nth-child(1) {
    padding-top: 100px;
    width: 100%;
    li {
      float: left;
      width: 24.9%;
      text-align: center;
      font-size: 18px;
    }
    .active {
      color: #ff966b;
    }
  }
  ul:nth-child(2) {
    li:nth-child(odd) {
      width: 44%;
      float: left;
      padding-left: 4%;
      padding-top: 20px;
    }
    li:nth-child(even) {
      width: 44%;
      float: right;
      padding-right: 4%;
      padding-top: 20px;
    }
    li {
      p {
        padding-left: 26px;
      }
      p:nth-child(2) {
        font-size: 30px;
      }
      p:nth-child(3) {
        font-size: 24px;
        color: #666;
      }
    }
  }
  ul:nth-child(3) {
    height: 100px;
  }
}
</style>
