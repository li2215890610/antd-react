const menuList = [
  {
      "title": '首页',
      "icon":'home',      
      "key": '/admin/home',
  },
  {
      "title": 'UI',
      "key": '/ui',
      "icon":'appstore',      
      "children": [
          {
              "title": '按钮',
              "key": '/ui/buttons',
          },
          {
              "title": '弹框',
              "key": '/ui/modals',
          },
          {
              "title": 'Loading',
              "key": '/ui/loadings',
          },
          {
              "title": '通知提醒',
              "key": '/ui/notification',
          },
          {
              "title": '全局Message',
              "key": '/ui/messages',
          },
          {
              "title": 'Tab页签',
              "key": '/ui/tabs',
          },
          {
              "title": '图片画廊',
              "key": '/ui/gallery',
          },
          {
              "title": '轮播图',
              "key": '/ui/carousel',
          }
      ]
  },
  {
      "title": '表单',
      "key": '/form',
      "icon":'form',      
      "children": [
          {
              "title": '登录',
              "key": '/admin/form/login',
          },
          {
              "title": '注册',
              "key": '/admin/form/reg',
          }
      ]
  },
  {
      "title": '表格',
      "key": '/table',
      "icon":'table',      
      "children": [
          {
              "title": '基础表格',
              "key": '/table/basic',
          },
          {
              "title": '高级表格',
              "key": '/table/high',
          }
      ]
  },
  {
      "icon":'file-text',      
      "title": '富文本',
      "key": '/rich'
  },
  {
      "title": '城市管理',
      "icon":'flag',      
      "key": '/city'
  },
  {
      "title": '订单管理',
      "key": '/copy',   
      "icon":'file-add',      
      "children": [
          {
              "title": '订单详情',
              "key": 'detail'
          },
          {
              "title": '结束订单',
              "key": 'finish'
          }
      ]
  },
  {
      "title": '员工管理',
      "icon":'usergroup-add',      
      "key": '/user'
  },
  {
      "title": '车辆地图',
      "icon":'environment',      
      "key": '/bikeMap'
  },
  {
      "title": '图表',
      "key": '/charts',
      "icon":'area-chart',      
      "children": [
          {
              "title": '柱形图',
              "key": '/charts/bar'
          },
          {
              "title": '饼图',
              "key": '/charts/pie'
          },
          {
              "title": '折线图',
              "key": '/charts/line'
          },
      ]
  },
  {
      "title": '权限设置',
      "icon":'codepen',      
      "key": '/permission'
  },
];


export default menuList;