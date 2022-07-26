import styles from '../styles/search.module.scss'

const Search = ({setQuery, removeItem, mods}) => {

    const list = () => {
        return mods.map((mod, i) => { 
            return ( <li key={i} className={styles.card} onClick={() => removeItem(mod)}>{mod.name}</li> ) })           
    }

    return (
        <div className={styles.search}>
            <ul className={styles.cards}>
                { mods.length > 0 ? list() : <li className={styles.card}>Click on a mod.</li> }
            </ul>

            <div className={styles.searchBox}>
                <div className={styles.selectedModsCounter}>Selected mods: {mods.length}</div>
                <input type="text" id="searchBox" placeholder="Search.."
                        onChange={e => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </div>
    )
}

export default Search
