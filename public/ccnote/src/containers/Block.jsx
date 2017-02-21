import styles from './Block.css'

export default ({ name = 'block', children }) => {
  return <div data-name={name} className={styles['block']}>{children}</div>
}
