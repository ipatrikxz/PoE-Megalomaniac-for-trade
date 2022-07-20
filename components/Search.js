import React, { useEffect, useState } from 'react';
import style from '../styles/search.module.css'

const Search = (props) => {

    return (
        <div className={style.search}>
            <div className={style.list}>
                <ul>
                    <li>elem 1</li>
                </ul>
            </div>

            <div className={style.searchBox}>
                <input type="text" id="searchBox" placeholder="Search.."
                        onChange={(event) => setValue(event.target.value)}
                        value={value} />
            </div>
        </div>
    );
};

export default Search;