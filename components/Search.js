import styles from '../styles/search.module.scss'
import React, { setValue, setState, useState } from 'react'

const Search = ({setQuery, removeItem, mods}) => {

    const [searchType, setSearchType] = useState('count')

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
                "type": "count",
                "value": {"min": 1},
                "filters": generateListOfIDs(mods)
            }]
        }
    }

    let link = `https://www.pathofexile.com/trade/search/Sentinel?q=${JSON.stringify(source)}`

    return (
        <div className={styles.search}>
            <ul className={styles.cards}>
                { mods.length > 0 ? makeList() : <li className={styles.card}>Click on a mod.</li> }
            </ul>

            <div className={styles.searchBox}>
                <div className={styles.selectedModsCounter} onClick={() => removeItem()}>Selected mods: {mods.length}</div>
                
                <div className={styles.SearchOnTrade}>
                    <a href={link} target="_blank">Search on trade {'------>'}</a>
                </div>
                <input type="text" id="searchBox" placeholder="Search.." onChange={e => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </div>
    )
}

export default Search
