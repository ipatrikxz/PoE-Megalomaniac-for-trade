import styles from '../styles/mods.module.scss'

const MyMods = ({mods, removeMod}) => {

  const { prefix, suffix, card } = styles

  const isPrefix = (mod) => {
    return mod.prefsuff === 'Prefix'
  }

  return (
    <div className={styles.mods}>
      <p className={styles.header}>Mod List:</p>
 
        { mods.length === 0 &&
          <p>Select a mod to add to the list.</p>
        }

        { mods.length != 0 &&
          <ul className={styles.cards}>
            { mods.map((mod, i) => { 
                return ( 
                    <li key={i} className={`${card} ${isPrefix(mod) ? prefix : suffix}`} onClick={() => removeMod(mod)}> {mod.name} </li> 
                ) 
            })}
          </ul>
        }

    </div>
  );
};

export default MyMods;