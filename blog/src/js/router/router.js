const Router = {
  path: '/',
  component: app,
  childRoutes: [
    { path: 'detail/:id', component: '../detail/index' }
  ]
}
export default Router;