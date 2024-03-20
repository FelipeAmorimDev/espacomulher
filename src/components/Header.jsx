import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src="./logo-espaco-mulher.png" alt="Logo Espaço Mulher" />
      <h1>Espaço Mulher</h1>
    </header>
  )
}
