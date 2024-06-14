import React from 'react'
import styles from './styles/cssModule.module.css';

export default function CssModuleComponent() {
    //CSS Module
    // - 클래스명 중복 방지
    // - css 파일명 : .module.css 로 끝남
    // - react component 파일에서 해당 CSS파일을 불러올 때 CSS 파일에 선언한 클래스 이름들이 모두 고유해짐
    // -  고유 CSS 클래스 이름들이 만들어지는 과정에서 사용되는 값은 파일 경로, 파일 이름, 해쉬 값 등
console.log(styles);

  return (
    <div className={styles.container}>
        <div className={[styles.box, styles.red].join(' ')}></div>
        <div className={[styles.box, styles.orange].join(' ')}></div>
        <div className={`${styles.box} ${styles.yellow}`}></div>
    </div>
  )
}
