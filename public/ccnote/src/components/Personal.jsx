import NoteBook from './main/NoteBook'
import styles from './Personal.css'

export default class Personal extends React.Component {
  render() {
    return (
      <div className={styles['personal']}>
        <div className={styles['notes']}>
        </div>
      </div>
    )
  }
}
