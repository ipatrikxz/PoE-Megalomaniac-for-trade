import React, { useState } from 'react'
import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import Hero from '../components/Hero'
import MyMods from '../components/MyMods'
import SearchOptions from '../components/SearchOptions'
import Table from '../components/Table'
import ScrollToTop from '../components/ScrollToTop'

export default function Home() {

  const [searchInput, setSearchInput] = useState('')
  const [mods, setMod] = useState([])

  const addMod = (mod) => {
    setMod(prevMods => {
      return !prevMods.includes(mod) ? [...prevMods, mod] : [...prevMods]
    })
  }

  const removeMod = (mod) => {
    setMod(current => current.filter(currMod => {
        return currMod.name != mod.name
      }));
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Megalomaniac Jewel Finder</title>
      </Head>

      <Hero />
      
      <main className={styles.main}>
        <div className={styles.search}>
            <MyMods mods={mods} removeMod={removeMod} />
            <SearchOptions mods={mods} setSearchInput={setSearchInput} />
        </div>

        <Table query={searchInput} addMod={addMod} />
      </main>

      <ScrollToTop />
    </div>
  )
}
