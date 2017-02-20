import { Link } from 'react-router'
import styles from './NoteBook.css'

export default ({ title, cover, href, edit }) => {
  return (
    <div className={styles['note-book']}>
      <div className={styles['note-book__cover']} style={{backgroundImage: `url(${cover})`}}>
        <Link to={href} className={styles['note-book__content']} />
        <Link to={edit} className={styles['note-book__add-cover']} />
      </div>
      <div className={styles['note-book__title']}>{title}</div>
    </div>
  )
}
