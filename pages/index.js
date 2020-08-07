import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout testProp='test prop passed from index page comp'>
      <ul>
        <li>can pass</li>
        <li>like this</li>
        <li>children</li>
      </ul>
    </Layout>
  )
}
