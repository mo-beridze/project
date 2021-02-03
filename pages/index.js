import { MainLayout } from '../components/MainLayout'
import { ProductsList } from '../components/ProductsList'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <MainLayout className={styles.container}>
        <h2 className={styles.title}>
        List of products
        </h2>
      <ProductsList/>
    </MainLayout>
  )
}
