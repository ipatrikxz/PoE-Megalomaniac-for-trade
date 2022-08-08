import styles from '../styles/search.module.scss'
import React, { useState } from 'react'

const Search = ({setQuery, removeItem, mods}) => {

    const [searchType, setSearchType] = useState('count')
    const [count, setCount] = useState(1)

    const handleSelection = (event) => {
        let type = event.target.getAttribute('data-searchType')
        setSearchType(type)
    }

    const isCountSelected = () => {
        return searchType == 'count'
    }

    const makeList = () => {
        return mods.map((mod, i) => { 
            return ( <li key={i} className={styles.card} onClick={() => removeItem(mod)}>{mod.name}</li> ) })           
    }

    const generateListOfIDs = (mods) => {
        return mods.map((mod) => { return { 'id': mod.id }})
    }

    let source = {
        "query": {
            "filters": {
              "type_filters": { 
                    "filters": { 
                        "category": { 
                            "option": "jewel" 
                        } 
                    }
                }
            },
            "status": { 
                "option": "online",
            },
            "name": "Megalomaniac",
            "stats": [{
                "type": searchType,
                "value": {"min": count},
                "filters": generateListOfIDs(mods)
            }]
        }
    }

    let link = mods.length > 0 ? `https://www.pathofexile.com/trade/search/Sentinel?q=${JSON.stringify(source)}` : '#'

    return (
        <div className={styles.search}>
            <ul className={styles.cards}>
                { mods.length > 0 ? makeList() : <li className={styles.card}>Click on a mod.</li> }
            </ul>

            <div className={styles.searchBox}>
                <p className={styles.header}>Search Options:</p>
                
                <div className={styles.searchType}>
                    <div className={styles.countGroup}>
                        <div data-searchtype="count" 
                            className={`${styles.count} ${isCountSelected() && styles.active}`} 
                            onClick={(e) => handleSelection(e)}>
                                Count
                        </div>

                        { isCountSelected() && 
                            <div>
                                <input className={styles.countInput} 
                                        type="number" 
                                        placeholder="count: 1" 
                                        onChange={e => setCount(e.target.value)} />
                            </div>
                        }
                    </div>

                    <div data-searchtype="and" 
                        className={`${styles.and} ${ !isCountSelected() && styles.active}` } 
                        onClick={(e)=> handleSelection(e)}>
                            AND
                    </div>
                </div>

                <div className={styles.SearchOnTrade}>
                    <a href={link} target="_blank">Search on trade {'-->'}</a> 
                </div>
                <input className={styles.searchInput} type="text" placeholder="Search.." onChange={e => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </div>
    )
}

export default Search