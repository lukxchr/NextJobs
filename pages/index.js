import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function Home () {
  return (
    <Layout testProp='test prop passed from index page comp'>
      abcde
    </Layout>
  )
}
