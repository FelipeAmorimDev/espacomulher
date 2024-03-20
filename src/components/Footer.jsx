import styles from './Footer.module.css'

export function Footer({ itens }) {
  const quantityItens = itens.length
  const quantityItensCheck = itens.filter((item) => item.isChecked === true)

  return (
    <footer className={styles.footer}>
      {quantityItens === 0 ? (
        <p>Você tem 0 itens na lista</p>
      ) : (
        <p>
          Você tem {itens.length} itens na lista e já guardou{' '}
          {quantityItensCheck.length} (
          {((quantityItensCheck.length / quantityItens) * 100).toFixed(0)}%)
        </p>
      )}
    </footer>
  )
}
