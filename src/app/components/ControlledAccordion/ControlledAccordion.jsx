import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArticleIcon from '@mui/icons-material/Article';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from '@mui/material';

import './ControlledAccordion.css';

export default function ControlledAccordion(props) {
    const [expanded, setExpanded] = React.useState(false);
    let {topicName, resourceList} = props;

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
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{ boxShadow: "none" }}>
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
                            <a className="resource">
                                <div className="resource-header">
                                    <div className="resource-header-left">
                                        <h4 className="resource-name">{ resource.name }</h4>
                                        <h6 className="resource-difficulty">Difficulty:&nbsp;&nbsp;{renderStars(resource.difficulty)}</h6>
                                    </div>
                                    <div className="resource-icons">
                                        { resource.article && 
                                            <Link href={resource.article} target="_blank" rel="noopener">
                                                <ArticleIcon className="article-icon"/>
                                            </Link>
                                        }
                                        <Link href={resource.video} target="_blank" rel="noopener">
                                            <YouTubeIcon className="video-icon"/>
                                        </Link>
                                    </div>
                                </div>
                                <p className="description">{ resource.description }</p>
                            </a>
                        ))
                    }
                </div>
            </AccordionDetails>
        </Accordion>
    )
}