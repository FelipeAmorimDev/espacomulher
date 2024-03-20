import styles from './List.module.css'

import { X } from '@phosphor-icons/react'

export function List({ itens, onDeleteItem, onTaskCompleteToogle }) {
  return (
    <main className={styles.mainList}>
      <ul className={styles.itemList}>
        {itens.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
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
    </main>
  )
}
