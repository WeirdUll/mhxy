import Layout from '@/layout'

const dashboardRouter = {
  path: '/dashboard',
  component: Layout,
  redirect: '/dashboard/remote-files',
  name: 'Dashboard',

  hidden: true,
  meta: {
    title: 'dashboard',
    icon: 'dashboard'
  },
  children: [
    {
      path: 'remote-files',
      component: () => import('@/views/dashboard/remote-files'),
      name: '编辑远程文件',
      meta: { title: '编辑远程文件',noCache: true },
      hidden: true
    }
  ]
}
export default dashboardRouter