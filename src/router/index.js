import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

/* Layout */
import Layout from "@/layout";

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true
  },

  {
    path: "/404",
    component: () => import("@/views/404"),
    hidden: true
  },

  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: () => import("@/views/dashboard/index"),
        meta: { title: "首页", icon: "dashboard" }
      }
    ]
  },

  {
    path: "/staffManage",
    component: Layout,
    redirect: "/staffManage/infoManage/list",
    alwaysShow: true,
    meta: { title: "职员管理", icon: "user" },
    children: [
      {
        path: "infoManage/list",
        name: "infoManageList",
        component: () => import("@/views/staffManage/infoManage/list"),
        meta: { title: "职员资料管理", icon: "tree" }
      },
      {
        path: "infoManage/edit",
        name: "infoManageEdit",
        hidden: true,
        component: () => import("@/views/staffManage/infoManage/edit"),
        meta: {
          title: "职员信息修改",
          icon: "tree",
          activeMenu: "/staffManage/infoManage/list"
        }
      }
    ]
  },

  {
    path: "/salaryManage",
    component: Layout,
    redirect: "/salaryManage/infoManage/list",
    alwaysShow: true,
    meta: { title: "工资管理", icon: "nested" },
    children: [
      {
        path: "infoManage/list",
        name: "infoManageList",
        component: () => import("@/views/salaryManage/infoManage/list"),
        meta: { title: "职员工资管理", icon: "tree" }
      },
      {
        path: "infoManage/edit",
        name: "infoManageEdit",
        hidden: true,
        component: () => import("@/views/salaryManage/infoManage/edit"),
        meta: {
          title: "职员工资信息修改",
          icon: "tree",
          activeMenu: "/salaryManage/infoManage/list"
        }
      }
    ]
  },

  {
    path: "/checkManage",
    component: Layout,
    redirect: "/checkManage/infoManage/list",
    alwaysShow: true,
    meta: { title: "考勤管理", icon: "form" },
    children: [
      {
        path: "infoManage/list",
        name: "infoManageList",
        component: () => import("@/views/checkManage/infoManage/list"),
        meta: { title: "职员考勤管理", icon: "tree" }
      },
      {
        path: "infoManage/edit",
        name: "infoManageEdit",
        hidden: true,
        component: () => import("@/views/checkManage/infoManage/edit"),
        meta: {
          title: "职员考勤信息修改",
          icon: "tree",
          activeMenu: "/checkManage/infoManage/list"
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: "*", redirect: "/404", hidden: true }
];

const createRouter = () =>
  new Router({
    mode: "history", // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
