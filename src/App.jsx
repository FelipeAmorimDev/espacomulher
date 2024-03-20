import { useState } from 'react'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { List } from './components/List'

export function App() {
  const [itens, setItens] = useState([])

  function retainItem(item) {
    setItens((i) => [...i, item])
  }

  function deleteItem(id) {
    setItens((i) => i.filter((item) => item.id !== id))
  }

  function taskCompleteToogle(id) {
    setItens((i) =>
      i.map((item) => {
        if (item.id === id) {
          return { ...item, isChecked: !item.isChecked }
        } else {
          return { ...item }
        }
      }),
    )
  }

  return (
    <>
      <Header />
      <Form onRetainItem={retainItem} />
      <List
        itens={itens}
        onTaskCompleteToogle={taskCompleteToogle}
        onDeleteItem={deleteItem}
      />
      <Footer itens={itens} />
    </>
  )
}
