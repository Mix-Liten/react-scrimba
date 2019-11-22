import React from 'react'
import Header from '../components/common/header'
import Home from '../views/Home'
import MemeGenerator from '../views/MemeGenerator'
import TodoList from '../views/TodoList'
import FormTest from '../views/FormTest'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const views = () => {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todo" component={TodoList} />
          <Route path="/form" component={FormTest} />
          <Route path="/meme" component={MemeGenerator} />
        </Switch>
      </>
    </Router>
  )
}

export default views
