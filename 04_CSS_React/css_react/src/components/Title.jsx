import styles from './Title.module.css'

const Title = () => {
  return (
    <div className={styles.my_Title}>
        <p>Ao invés de se utilizar o App.css, usamos o App.module.css</p>
        <p>Isso o Torna exclusivo do componente</p>
    </div>
  )
}

export default Title