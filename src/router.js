import React from 'react';
import { Router ,IndexRoute, IndexRedirect,} from 'dva/router';
import IndexPage from './routes/IndexPage';
import PropTypes from 'prop-types'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import dynamic from 'dva/dynamic'
import { Spin } from 'antd'


const { ConnectedRouter } = routerRedux
const loadingStyle = {
  position: 'absolute',
  top: '50vh',
  left: '50vw',
  background: 'transparent'
}

const Routers = function ({ history, app }) {
  debugger
  const error = dynamic({
    app,
    component: () => import('./routes/ErrorPage'),
  })
  const routes = [
    {
      path: '/home',
      component: () => import('./routes/IndexPage')
    },
    {
      path: '/media/order/account/list',
      models: () => [import('./routes/pages/page01/models')],
      component: () => import('./routes/pages/page01/views')
    },
  ]

  return (
    <ConnectedRouter history={history}>
      <IndexPage>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                  LoadingComponent: () => <Spin style={loadingStyle} />
                })}
              />
            ))
          }
        </Switch>
      </IndexPage>
    </ConnectedRouter>
  )
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers



