import React, {useState} from 'react';
import teams from '../../data/teams';
import TeamButton from '../TeamButton/TeamButton';
import ArchiveCommittee from '../ArchiveCommittee/ArchiveCommittee';
import "./ArchiveBody.css";

function ArchiveBody() {

  const [committee, setCommittee] = useState("Studio")

  const refArray = ["Studio", "ICPC", "Design", "Cyber", "Teach LA", "W", "AI", "Hack"]
  const sortedTeams = JSON.parse(JSON.stringify(teams))
  console.log('here1')

  return (
    <div className='ArchiveBody'>
        <div className='button-col'>
            {sortedTeams.sort((a,b) => refArray.indexOf(a.name) - refArray.indexOf(b.name)).map((team) => (team.name !== "Board") && 
            <TeamButton
                key={team.name}
                className = 'team-button'
                icon = {team.logotype}
                alt = {team.name}
                onClick = {() => (setCommittee(team.name))}
            />)}
        </div>
        <div className='list-content'>
            <div className='static-bar'></div>
        </div>
        <ArchiveCommittee committeeName={committee}/>
    </div>
  );
}

export default ArchiveBody;
