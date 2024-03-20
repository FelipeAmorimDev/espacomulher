import { useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Form } from './components/Form'
import { Footer } from './components/Footer'
import { List } from './components/List'

export function App() {
  const [itens, setItens] = useState([])

  const [orderBy, setOrderBy] = useState('recently')

  const orderedItems =
    orderBy === 'stored' ? itens.filter((item) => item.isChecked) : itens

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

  function selectOrderItens(value) {
    setOrderBy(value)
  }

  return (
    <>
      <Header />
      <Form onRetainItem={retainItem} />
      <List
        orderedItems={orderedItems}
        onTaskCompleteToogle={taskCompleteToogle}
        onDeleteItem={deleteItem}
        onselectOrderItens={selectOrderItens}
      />
      <Footer itens={itens} />
    </>
  )
}
