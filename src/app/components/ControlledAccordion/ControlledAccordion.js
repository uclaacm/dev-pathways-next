import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import './ControlledAccordion.css'

export default function ControlledAccordion(props) {
    const [expanded, setExpanded] = React.useState(false);
    let {topicName, resourceList} = props;
    console.log('break')
    // console.log(topicName)
    console.log(JSON.stringify(resourceList, null, 2));

    if (!resourceList) return;
  
    const handleChange =
      (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    // difficulty stars
    const renderStars = (difficulty) => {
        let stars = '';
        switch (difficulty) {
            case 'Beginner':
                stars = '⭐';
                break;
            case 'Intermediate':
                stars = '⭐⭐';
                break;
            case 'Difficult':
                stars = '⭐⭐⭐';
                break;
            default:
                stars = ''; // You can add a default case if needed
        }
        return stars;
    };

    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary 
                className="panel-header"
                id="panel-header" 
                aria-controls="panel-content" 
                expandIcon={expanded === 'panel1'?<RemoveIcon />:<AddIcon/>}
            >
                <h3 className="summary-name">
                    {topicName}
                </h3>

            </AccordionSummary>
            <AccordionDetails>
                <div className="resources-container">
                    { 
                        resourceList.map((resource) => (
                            <div className="resource">
                                <h4 className="resource-name">{ resource.name }</h4>
                                <h6>Difficulty: {renderStars(resource.difficulty)}</h6>
                                <a href={resource.video}>Video</a><br></br>
                                {/* <a href="#">article link</a> */}
                                <p className="description">{ resource.description }</p>
                            </div>
                        ))
                    }
                </div>
            </AccordionDetails>
        </Accordion>
    )
}