import styles from './List.module.css'

import { X } from '@phosphor-icons/react'

export function List({
  orderedItems,
  onDeleteItem,
  onTaskCompleteToogle,
  onselectOrderItens,
}) {
  return (
    <main className={styles.mainList}>
      <ul className={styles.itemList}>
        {orderedItems.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => onTaskCompleteToogle(item.id)}
            />
            <p className={item.isChecked ? styles.checked : ''}>
              {item.quantity} {item.name}
            </p>
            <button onClick={() => onDeleteItem(item.id)}>
              <X color="red" size={22} weight="bold" />
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.orderBy}>
        <select
          name="orderBy"
          onChange={(e) => onselectOrderItens(e.target.value)}
        >
          <option value="recently">Ordernar por mais recentes</option>
          <option value="stored">Mostrar guardados</option>
          <option value="alphabetical">Ordem alfabética</option>
        </select>
      </div>
    </main>
  )
}
