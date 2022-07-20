import style from '../styles/table.module.css'

const Table = ({data}) => {

    return (
        <>
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
                    <tr key={jewel.notableName} >
                        <td id="preSuff">{ jewel.prefsuff }</td>
                        <td id="name">{ jewel.notableName }</td>
                        <td id="fullDesc">{ jewel.description }</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
};


export default Table;