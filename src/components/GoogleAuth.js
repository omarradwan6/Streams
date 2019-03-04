import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions'

class GoogleAuth extends React.Component{

state={SignedIn:null}

componentDidMount(){


	window.gapi.load('client:auth2',()=>{

		window.gapi.client.init({

			clientId:'797401886567-9cumct9mrt3v2va409rasa7fa6fq02hh.apps.googleusercontent.com',
			scope:'email'


		}).then(()=>{

		this.auth=window.gapi.auth2.getAuthInstance()
		this.onAuthChange(this.auth.isSignedIn.get())
		this.auth.isSignedIn.listen(this.onAuthChange)
		});


	});




	}

	onAuthChange=(isSignedIn)=>{
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId())
		}
		else if(!isSignedIn){

			this.props.signOut()
		}		

	}

	OnsignIn=()=>{
		this.auth.signIn()
	}

	OnsignOut=()=>{
		this.auth.signOut()

	}

renderAuthButton(){

	if(this.props.SignedIn){
		console.log(this.props.userId)
		return <button onClick={this.OnsignOut} type="button" className="btn btn-primary">Sign Out</button>

	}
	else if(!this.props.SignedIn){
		return <button  onClick={this.OnsignIn} type="button" className="btn btn-primary">Sign In</button>
	}
	else{

		return null
	}
}





render(){
return <div>{this.renderAuthButton()}</div>
}

	


}

const mapStateToProps=(state)=>{

return {SignedIn:state.auth.SignedIn,userId:state.auth.userId}


}
export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth)