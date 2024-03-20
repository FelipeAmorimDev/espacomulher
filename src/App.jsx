import { useState } from 'react'

import { Header } from './components/Header'
import { Form } from './components/Form'

export function App() {
  const [itens, setItens] = useState([])

  function retainItem(item) {
    setItens((i) => [...i, item])
  }

  return (
    <>
      <Header />
      <Form onRetainItem={retainItem} />
    </>
  )
}
