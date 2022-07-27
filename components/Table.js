import style from '../styles/table.module.scss'

const Table = ({data, addItem}) => {

return (
    <table className={style.table}>
        <thead>
            <tr>
                <th>Pass/Suff</th>
                <th>Name</th>
                <th>Full Descriptions</th>
            </tr>
        </thead>
        
        <tbody>
            {data.map((jewel) => ( 
                <tr key={jewel.name} onClick={() => addItem(jewel)}>
                    <td id="preSuff">{ jewel.prefsuff }</td>
                    <td id="name">{ jewel.name }</td>
                    <td id="fullDesc">{ jewel.description }</td>
                </tr>
            ))}
        </tbody>
    </table>
);
};


export default Table;