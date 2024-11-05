'use client';
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import NavBar from '../components/NavBar/NavBar';
import ControlledAccordion from "../components/ControlledAccordion/ControlledAccordion";
import LinkIcon from '@mui/icons-material/Link';
import PageHeader from '../components/PageHeader/PageHeader';
import ArchiveHeader from "../img/archive-header.svg";
import ArchiveBody from '../components/ArchiveBody/ArchiveBody';

const Archive = (props: any) => {

    const router = useRouter();

    return (
        <>
            <NavBar></NavBar>
            <PageHeader 
                header="ACM Archive"
                subheader="A list of the previous workshops given by ACM!"
                img={ArchiveHeader}
                imgStyle={{
                    backgroundSize: "423px 297px",
                    backgroundPosition: "100%",
                }}
            />
            <ArchiveBody />
            {/* <div className="quarters"> */}
                {/* <div className="quarter">
                    <div className="quarter-title">Spring 2023</div>
                    <div className="quarter-content">
                        <ControlledAccordion
                            title="Hackschool"
                            titleIcon={<LinkIcon />}
                            titleIconLink="www.google.com"
                        ></ControlledAccordion>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}

export default Archive;
