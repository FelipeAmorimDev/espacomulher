import styles from './Form.module.css'

export function Form({ onRetainItem }) {
  const ids = Array.from({ length: 20 }, () => crypto.randomUUID())

  function handleRetainItem(e) {
    e.preventDefault()

    const { qntItens, itemName } = e.target.elements

    const item = {
      id: crypto.randomUUID(),
      name: itemName.value,
      quantity: Number(qntItens.value),
      isChecked: false,
    }

    onRetainItem(item)
  }

  return (
    <form className={styles.formElement} onSubmit={handleRetainItem}>
      <label htmlFor="itemName">O que você precisa guardar?</label>
      <div>
        <select name="qntItens">
          {ids.map((id, index) => (
            <option key={id} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Manda aqui"
          name="itemName"
          id="itemName"
        />
        <button type="submit">Adicionar</button>
      </div>
    </form>
  )
}
