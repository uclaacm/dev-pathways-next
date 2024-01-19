'use client'

import Image from 'next/image'
import styles from './page.module.css'

import React from 'react';
import SearchSection from 'src/app/components/SearchSection/SearchSection.js';
import TeamSection from 'src/app/components/TeamSection/TeamSection';
import PathwaysSection from 'src/app/components/PathwaysSection/PathwaysSection';

export default function Home(){
    return (
        <div className="Home">
            <SearchSection/>
            <TeamSection />
            <PathwaysSection/>
        </div>
    );
}
