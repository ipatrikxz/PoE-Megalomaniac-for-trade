import style from '../styles/table.module.scss'
import { useState } from 'react'
import JsonBinioApi from '../components/JsonBinioApi'

const Table = ({ query, addItem }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [items, setItems] = useState([]);

    const search = (data) => {
        return data.filter((jewel) => jewel.name.toLowerCase().includes(query) || jewel.description.toLowerCase().includes(query))
    }

    return (
        <>
            <JsonBinioApi setError={setError} setIsLoaded={setIsLoaded} setItems={setItems} />

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
                        {search(items).map((jewel) => (
                            <tr key={jewel.name} onClick={() => addItem(jewel)}>
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