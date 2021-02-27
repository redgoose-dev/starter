import React from 'react';
import { useRecoilState } from 'recoil';
import * as sample from '~/store/sample';
import styles from './index.module.scss';

function HelloWorld()
{
  const [ text ] = useRecoilState(sample.text);
  const [ count, setCount ] = useRecoilState(sample.count);
  return (
    <div className={styles.wrap}>
      <ul>
        <li>HelloWorld component</li>
        <li>{text}</li>
        <li>{count}</li>
      </ul>
      <nav className={styles.nav}>
        <button type="button" onClick={() => setCount(count + 1)}>+1</button>
        &nbsp;
        <button type="button" onClick={() => setCount(count - 1)}>-1</button>
      </nav>
    </div>
  );
}

export default HelloWorld;
