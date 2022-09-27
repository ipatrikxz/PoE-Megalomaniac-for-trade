import styles from '../styles/searchOptions.module.scss'
import { useState } from 'react';

const SearchOptions = ({mods, setSearchInput}) => {

  const [searchType, setSearchType] = useState('count')
  const [isCountSelected, setIsCountSelected] = useState(true)
  const [count, setCount] = useState(1)

  const handleSelection = (e) => {
    let type = e.target.attributes['type'].value
    
    if(type === 'count') {
      setIsCountSelected(true)
      setSearchType(type)
    } else {
      setIsCountSelected(false)
      setSearchType(type)
    }
  }

  const generateListOfIDs = (mods) => {
    return mods.map((mod) => { return { 'id': mod.id }})
  }

  let source = JSON.stringify({
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
            "value": { "min": count },
            "filters": generateListOfIDs(mods)
        }]
    }
  })

  let link = mods.length > 0 ? `https://www.pathofexile.com/trade/search/Sentinel?q=${source}` : '#'

  return (
    <div className={styles.searchBox}>
      <p className={styles.header}>Search Options:</p>
      
      <div className={styles.searchType}>
        <ul className={styles.countGroup}>

          <li type='count' className={`${styles.count} ${isCountSelected && styles.selected}`} onClick={(e) => handleSelection(e)}>COUNT</li>

          {
            isCountSelected &&
              <li><input className={styles.countInput} type="number" placeholder="min count: 1, 2, 3" onChange={e => setCount(e.target.value)} /></li>
          }
        
          <li type='and' className={`${styles.and} ${!isCountSelected && styles.selected}`} onClick={(e) => handleSelection(e)}>AND</li>

        </ul>
      </div>

      <div className={styles.SearchOnTradeBtn}>
          <a href={link} target="_blank" rel="noreferrer">Search on trade {'-->'}</a> 
      </div>
      
      <input className={styles.searchInput} type="text" placeholder="Search.." onChange={e => setSearchInput(e.target.value.toLocaleLowerCase())} />
      
    </div>
  );
};

export default SearchOptions;