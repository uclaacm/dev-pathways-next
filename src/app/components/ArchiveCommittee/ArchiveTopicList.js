import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import ControlledAccordion from "../ControlledAccordion/ControlledAccordion";

import './ArchiveTopicList.css';

const ArchiveTopicList = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    let {topicName, resourceList} = props;
    console.log('here')
    // console.log(topicName)
    // console.log(resourceList)

    // return (
    //     <div>
    //         <DropDownButton 
    //             onClick={()=>{setIsExpanded(!isExpanded)}} 
    //             isExpanded={isExpanded}
    //             text={topicName} />
    //         {isExpanded && 
    //             resourceList.map((link) => {
    //                 return <p>{link.name}</p>
    //             })}
    //     </div>
    // );

    return (
        <div className="archive-committee-content">
            {/* <div className="quarter-title">{topicName}</div> */}
            {/* <div className="quarter-content"> */}
                <ControlledAccordion
                    topicName={topicName}
                    resourceList={resourceList}
                ></ControlledAccordion>
            {/* </div> */}
        </div>
    )
}

export default ArchiveTopicList;