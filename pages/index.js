import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Hero from '../components/Hero'
import Table from '../components/Table'
import Search from '../components/Search'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {

  const [query, setQuery] = useState('')
  const [mods, setMod] = useState([])

  const addItem = (mod) => {
    setMod(prevMods => {
      return !prevMods.includes(mod) ? [...prevMods, mod] : [...prevMods]
    })
  }

  const removeItem = (mod) => {
    setMod(current =>
      current.filter(currMod => {
        return currMod.name != mod.name
      }),
    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Megalomaniac Jewel Finder</title>
        <meta name="description" content="Made for Path of Exile enjoyers, Who loves to lurk for Megalomaniac Jewels." />
      </Head>

      <Hero />
      
      <main className={styles.main}>
        <Search setQuery={setQuery} mods={mods} removeItem={removeItem} />
        <Table query={query} addItem={addItem} />
      </main>

      <ScrollToTop />
    </div>
  )
}
