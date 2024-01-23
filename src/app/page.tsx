'use client'

import Image from 'next/image'
import styles from './page.module.css'

import React from 'react';
import SearchSection from './components/SearchSection/SearchSection';
import TeamSection from './components/TeamSection/TeamSection';
import PathwaysSection from './components/PathwaysSection/PathwaysSection';

export default function Home(){
    return (
        <div className="Home">
            <SearchSection/>
            <TeamSection />
            <PathwaysSection/>
        </div>
    );
}
