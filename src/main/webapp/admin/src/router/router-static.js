import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import adminexam from '@/views/modules/shijuanliebiao/exam'
    import weizhifudingdan from '@/views/modules/weizhifudingdan/list'
    import yiquxiaodingdan from '@/views/modules/yiquxiaodingdan/list'
    import shangpin from '@/views/modules/shangpin/list'
    import lunbotuguanli from '@/views/modules/lunbotuguanli/list'
    import yizhifudingdan from '@/views/modules/yizhifudingdan/list'
    import kefuguanli from '@/views/modules/kefuguanli/list'
    import yonghu from '@/views/modules/yonghu/list'
    import shangpinfenlei from '@/views/modules/shangpinfenlei/list'
    import yifahuodingdan from '@/views/modules/yifahuodingdan/list'
    import chongwuzixun from '@/views/modules/chongwuzixun/list'
    import yituikuandingdan from '@/views/modules/yituikuandingdan/list'
    import yiwanchengdingdan from '@/views/modules/yiwanchengdingdan/list'

//2.配置路由   注意：名字
const routes = [
    {
        path: '/index', name:'index', component: Index, children: [{
            // 这里不设置值，是把main作为默认页面
            path: '/',
            name: 'home',
            component: Home
        },{
            path: '/updatePassword',
            name: 'updatePassword',
            component: UpdatePassword
        } ,{
            path: '/pay',
            name: 'pay',
            component: pay
        } ,{
            path: '/center',
            name: 'center',
            component: center
        } 
                    ,{
                path: '/weizhifudingdan',
                name: 'weizhifudingdan',
                component: weizhifudingdan
            } 
                    ,{
                path: '/yiquxiaodingdan',
                name: 'yiquxiaodingdan',
                component: yiquxiaodingdan
            } 
                    ,{
                path: '/shangpin',
                name: 'shangpin',
                component: shangpin
            } 
                    ,{
                path: '/lunbotuguanli',
                name: 'lunbotuguanli',
                component: lunbotuguanli
            } 
                    ,{
                path: '/yizhifudingdan',
                name: 'yizhifudingdan',
                component: yizhifudingdan
            } 
                    ,{
                path: '/kefuguanli',
                name: 'kefuguanli',
                component: kefuguanli
            } 
                    ,{
                path: '/yonghu',
                name: 'yonghu',
                component: yonghu
            } 
                    ,{
                path: '/shangpinfenlei',
                name: 'shangpinfenlei',
                component: shangpinfenlei
            } 
                    ,{
                path: '/yifahuodingdan',
                name: 'yifahuodingdan',
                component: yifahuodingdan
            } 
                    ,{
                path: '/chongwuzixun',
                name: 'chongwuzixun',
                component: chongwuzixun
            } 
                    ,{
                path: '/yituikuandingdan',
                name: 'yituikuandingdan',
                component: yituikuandingdan
            } 
                    ,{
                path: '/yiwanchengdingdan',
                name: 'yiwanchengdingdan',
                component: yiwanchengdingdan
            } 
                ]
    },
    { path: '/adminexam', name: 'adminexam', component: adminexam },
    { path: '/login', name:'login', component: Login },
    { path: '/register', name:'register', component: register },
    { path: '/', redirect: '/index/' },      /*默认跳转路由*/
    { path: '*', component: NotFound }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
    mode: 'hash',   /*hash模式改为history*/
    routes // （缩写）相当于 routes: routes
})

export default router;

