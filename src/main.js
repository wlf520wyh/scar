import Vue from 'vue'
import App from './App.vue'

//微信ui样式
import 'weui'
//全局ui样式
import '../node_modules/weui/dist/style/weui.min.css'
// 设置屏幕的比列
 var sw = document.documentElement.clientWidth; // 屏宽
 var pw = 750;  // ui设计页面基准
 var f = 100 * sw / pw;
 document.documentElement.style.fontSize = f + 'px';
 //iview ui
// import iView from 'iview';
// import '../node_modules/iview/dist/styles/iview.css'; 
// //实例化
// Vue.use(iView);

Vue.config.productionTip = false
//路由
import Home from './pages/pages'
import Information from './pages/information'
import InformationDetails from './pages/informationDetails'
import StudentsManage from './pages/studentsManage'
import Archives from './pages/archives'
import PasswordReset from './pages/passwordReset'
import Attendance from './pages/attendance'
import Growth from './pages/growth'
import LackRecord from './pages/lackRecord'
import StudentLoans from './pages/studentLoans'
import BadRecord from './pages/badRecord'
import GoodRecord from './pages/goodRecord'
import Graduation from './pages/graduation'
import StudyResult from './pages/studyResult'
import Login from './pages/login'
import ForgotPassword from './pages/forgotPassword'
import Encrypted from './pages/encrypted'
import EmailBack from './pages/emailBack'
import PhoneBack from './pages/phoneBack'
import NewPassword from './pages/newPassword'
import TheMessage from './pages/theMessage'
import Notice from './pages/notice'
import MessageDetails from './pages/messageDetails'
import DynamicColumn from './pages/dynamicColumn'
import DynamicContent from './pages/dynamicContent'
import Warning from './pages/warning'
import Mine from './pages/mine'
import MyWallet from './pages/myWallet'
import Subsidiary from './pages/subsidiary'
import PaymentSecurity from './pages/paymentSecurity'
import SetPassword from './pages/setPassword'
import Transfer from './pages/transfer'
import Collection from './pages/collection'

// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)

const routes = [
// 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    { path: '/', redirect: '/Login' },
    { path: '/Home', component: Home },
    { path: '/Information', component: Information},
	{ path: '/Information/informationDetails', component: InformationDetails},
	{ path: '/StudentsManage', component: StudentsManage},
	{ path: '/Archives', component: Archives},
	{ path: '/PasswordReset', component: PasswordReset},
	{ path: '/Attendance', component: Attendance},
	{ path: '/Growth', component: Growth},
	{ path: '/LackRecord', component: LackRecord},
	{ path: '/StudentLoans', component: StudentLoans},
	{ path: '/BadRecord', component: BadRecord},
	{ path: '/GoodRecord', component: GoodRecord},
	{ path: '/Graduation', component: Graduation},
	{ path: '/StudyResult', component: StudyResult},
	{ path: '/Login', component: Login},
	{ path: '/ForgotPassword', component: ForgotPassword},
	{ path: '/Encrypted', component: Encrypted},
	{ path: '/EmailBack', component: EmailBack},
	{ path: '/PhoneBack', component: PhoneBack},
	{ path: '/NewPassword', component: NewPassword},
	{ path: '/TheMessage', component: TheMessage},
	{ path: '/Notice', component: Notice},
	{ path: '/MessageDetails', component: MessageDetails},
	{ path: '/DynamicColumn', component: DynamicColumn},
	{ path: '/DynamicContent', component: DynamicContent},
	{ path: '/Warning', component: Warning},
	{ path: '/Mine', component: Mine},
	{ path: '/MyWallet', component: MyWallet},
	{ path: '/Subsidiary', component: Subsidiary},
	{ path: '/PaymentSecurity', component: PaymentSecurity},
	{ path: '/SetPassword', component: SetPassword},
	{ path: '/Transfer', component: Transfer},
	{ path: '/Collection', component: Collection},
	
]

//实例路由配置
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 挂载路由
  router,
}).$mount('#app')
