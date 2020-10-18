import React from 'react'

const User = (props) => {
	return(
    	<li>
      		<p>{props.user.userName}</p>
      		<p>Number of Games Played : {props.showGamesPlayed ? props.user.numGamesPlayed : '*'}</p>
      	</li>
    )
}

export default User