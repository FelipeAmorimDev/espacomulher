import styles from './Form.module.css'

export function Form({ onRetainItem }) {
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
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
