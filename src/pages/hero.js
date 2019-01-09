import styles from './hero.css';
import { connect } from 'dva';

function Hero(props) {
  return(
    <div className={styles.normal}>
      <h1>hero page</h1>
      <h2>this is {props.hero}</h2>
    </div>
  )
}


export default connect(({hero}) => ({hero}))(Hero)
