import styles from '../styles/mods.module.scss'

const Mods = ({mods, removeMod}) => {

  const isPrefix = (mod) => {
    return mod.prefsuff === 'Prefix'
  }

  const makeList = () => {
    return mods.map((mod, i) => { 
        return ( 
            <li key={i} className={`${styles.card} ${isPrefix(mod) ? styles.prefix : styles.suffix}`} onClick={() => removeMod(mod)}> {mod.name} </li> 
        ) 
    })           
  }

  return (
    <div className={styles.mods}>
      <p className={styles.header}>Mod List:</p>

        { mods.length > 0 ?
          <ul className={styles.cards}>
            { makeList() }
          </ul>
          :
          <p>Select a mod to add to the list.</p>
        }
    </div>
  );
};

export default Mods;