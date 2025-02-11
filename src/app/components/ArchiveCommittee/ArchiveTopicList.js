import React, { useState } from "react";
import DropDownButton from "../DropDownButton/DropDownButton";
import ControlledAccordion from "../ControlledAccordion/ControlledAccordion";

import './ArchiveTopicList.css';

const ArchiveTopicList = (props) => {

    const [isExpanded, setIsExpanded] = useState(false);
    let {topicName, resourceList} = props;

    return (
        <div className="archive-committee-content">
            <ControlledAccordion
                topicName={topicName}
                resourceList={resourceList}
            ></ControlledAccordion>
        </div>
    )
}

export default ArchiveTopicList;