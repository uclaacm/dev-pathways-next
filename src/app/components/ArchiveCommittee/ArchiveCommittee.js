import React from "react";
import ArchiveTopicList from "./ArchiveTopicList";
import resources from '../../data/resources';

import './ArchiveCommittee.css'

const ArchiveCommittee = (props) => {
    let {committeeName} = props;
    console.log(committeeName)
    let filteredList = resources.map((item) => {
        return {
            category: item.category,
            links: item.links.filter((link) => link.source === committeeName), 
        };
    });
    console.log(JSON.stringify(filteredList, null, 2));

    return (
        <div className="archive-committee-container">
            <h2 className="committee-name">
                ACM {committeeName.charAt(0).toUpperCase() + committeeName.slice(1)}
            </h2>
            {filteredList.every(item => !item.links[0]) ? (
                <h4 className='no-resource-msg'>No past resources available at this time.</h4>
            ) : (
                filteredList.map((item) => 
                    item.links[0] && (
                        <ArchiveTopicList topicName={item.category} resourceList={item.links} />
                    )
                )
            )}
        </div>
    );
}

export default ArchiveCommittee;