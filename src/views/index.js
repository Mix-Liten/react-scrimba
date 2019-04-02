import React from 'react'
import Header from '../components/Header'
import MemeGenerator from './MemeGenerator'
import TodoList from './TodoList'
import FormTest from './FormTest'

const views = () => {
  return (
    <div>
      <Header />
      <MemeGenerator />
      <TodoList />
      <FormTest />
    </div>
  )
}

export default views
