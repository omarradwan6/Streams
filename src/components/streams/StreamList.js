import React from 'react'
import {connect} from 'react-redux'
import {fetchStreams} from '../../actions'
import { Link } from 'react-router-dom'

class StreamList extends React.Component{

componentDidMount(){

this.props.fetchStreams()


}

renderAdmin(stream){

	if(stream.userId===this.props.currentUserId){
		return (<div>
		<Link to={`/streams/edit/${stream.id}`} className="btn btn-primary">
 		EDIT
 		</Link>
 		<Link
            to={`/streams/delete/${stream.id}`}
          	className="btn btn-primary"
          >
        Delete
          </Link>
        </div>
        )
 }
}

renderCreate() {
    if (this.props.SignedIn) {
      return (
        <div>
          <Link to={"/streams/new"} className="btn btn-primary">
            Create Stream
          </Link>
        </div>
      );
    }
  }

renderList(){

 return this.props.streamsList.map(stream => {
      return (
      	<div className="card">
      	 <div className="card-body">
        <h5  className="card-title"> {stream.title}  </h5 > 
        <p className="card-text"> {stream.description}  </p>
        {this.renderAdmin(stream)}
        </div>  
        </div>  
        )
    });
  }

render(){

	return (<div>
			<div>

			{this.renderList()}
			</div>
			{this.renderCreate()}
			</div>

	)
}
}


const MapStateToProps=(state)=>{

return {streamsList:Object.values(state.streams),currentUserId:state.auth.userId,SignedIn:state.auth.SignedIn}

}

export default connect(MapStateToProps,{fetchStreams})(StreamList)