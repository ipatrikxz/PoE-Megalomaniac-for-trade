import style from '../styles/table.module.scss'
import useMods from '../hooks/useMods'

const Table = ({ query, addMod }) => {
    
    const myMods = useMods()
    const { isLoaded, error, mods } = myMods

    const search = (data) => {
        return data.filter((item) => item.name.toLowerCase().includes(query) || item.description.toLowerCase().includes(query))
    }

    return (
        <>
            {error && <div><h1>Error during loading the data.</h1></div>}
            
            {!isLoaded && <div><h1>Loading...</h1></div>}

            {isLoaded && 
                <table className={style.table}>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Name</th>
                            <th>Full Descriptions</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {search(mods).map((jewel) => (
                            <tr key={jewel.name} onClick={() => addMod(jewel)}>
                                <td id="preSuff">{ jewel.prefsuff }</td>
                                <td id="name">{ jewel.name }</td>
                                <td id="fullDesc">{ jewel.description }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    );
};


export default Table;