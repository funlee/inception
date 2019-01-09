import styles from './item.css';
import { connect } from 'dva';

function Item(props) {
  return(
    <div className={styles.normal}>
      <h1>item page</h1>
      <h2>this is {props.item}</h2>
    </div>
  )
}


export default connect(({item}) => ({item}))(Item)

