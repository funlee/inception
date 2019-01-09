import styles from './summoner.css';
import { connect } from 'dva';

function Summoner(props) {
  return(
    <div className={styles.normal}>
      <h1>summoner page</h1>
      <h2>this is {props.summoner}</h2>
    </div>
  )
}


export default connect(({summoner}) => ({summoner}))(Summoner)


