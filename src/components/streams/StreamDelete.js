import React from 'react'
import Modal from '../Modal'
import history from '../../history'

const StreamDelete=()=>{


	return (
		<React.Fragment>

		<div>StreamDelete</div>
		<Modal onDismiss={()=>history.push('/')}/>
		</React.Fragment>


		)
}

export default StreamDelete