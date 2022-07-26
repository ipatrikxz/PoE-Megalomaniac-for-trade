import styles from '../styles/search.module.scss'

const Search = ({setQuery, mods}) => {

    const list = () => {
        return mods.map((mod, i) => { 
            return ( <li key={i} className={styles.card}>{mod.name}</li> ) })           
    }

    return (
        <div className={styles.search}>
            <ul className={styles.cards}>
                { 
                    mods.length > 0 ? list() : <li className={styles.card}>Click on a mod.</li>
                }
            </ul>

            <div className={styles.searchBox}>
                <input type="text" id="searchBox" placeholder="Search.."
                        onChange={e => setQuery(e.target.value.toLocaleLowerCase())} />
            </div>
        </div>
    )
}

export default Search
