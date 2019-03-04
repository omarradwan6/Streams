
const INITIAL={
		SignedIn:null,userId:null
}


export default (state={INITIAL},action)=>{

	switch(action.type){

		case 'SIGN_IN': return {...state,SignedIn:true,userId:action.userId};
		case 'SIGN_OUT': return {...state,SignedIn:false,userId:null};
		default: return state


	}





}