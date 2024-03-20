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
      i.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item,
      ),
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
