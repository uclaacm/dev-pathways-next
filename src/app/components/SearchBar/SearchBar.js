import React, { useState } from 'react';
import './SearchBar.css';
import Clickable from '../Clickable/Clickable';
import line from './line.svg';
import search from "./search.svg"
import TypingAnimation from '../TypingAnimation/TypingAnimation';
import Image from 'next/image';

const SearchBar = props => {
    const [showPlaceholder, setShowPlaceholder] = useState(true);
    const { value, onSubmit, onChange, onKeyDown } = props;

    return (
        <div className="searchbar">
            <div className="search-icon">
                <Clickable onClick={onSubmit}>
                    {/* <img src={search} alt="search icon" /> */}
                    <Image src={search} alt="search icon" width={100} height={100}/>
                </Clickable>
            </div>
            {/* <img src={line} alt="line" /> */}
            <Image src={line} alt="line" width={100} height={100}/>
            <div>
                {showPlaceholder && !value && <label for="search">
                    What do you want to learn? <span id="animation"><TypingAnimation words={["html/css", "javascript", "react"]} /></span>
                </label>}
                <input
                    id="search"
                    value={[value]}
                    type="text"
                    onChange={onChange}
                    onFocus={() => setShowPlaceholder(false)}
                    onBlur={() => setShowPlaceholder(true)}
                    onKeyDown={onKeyDown}
                    autoComplete="off"
                />
            </div>
        </div>
    );
}

export default SearchBar;