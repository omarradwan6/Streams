import React from 'react'
import {Field,reduxForm } from 'redux-form'
import {connect} from 'react-redux'
import {streamCreate} from '../../actions'



class StreamForm extends React.Component{


renderError(formProps){

if(formProps.touched && formProps.error){

	return <div>{formProps.error}</div>
}
}


renderInput=(formProps)=>{
	return (
		<div>
		<label>{formProps.label}</label>
		<input className="form-control" onChange={formProps.input.onChange} value={formProps.input.value} />
		<div>{this.renderError(formProps.meta)}</div>
		</div>
	);
}


onSubmit=(formValues)=>{
  this.props.onSubmit(formValues)
}

render(){
console.log(this.props.streams)
	return (
	<div className="container">
 
		<form onSubmit={this.props.handleSubmit(this.onSubmit)}>
		<div className="form-group">
          <Field
            name="title"
            component={this.renderInput}
            label='Title'
          />
         </div> 
         <div className="form-group">
          <Field
            name="description"
            component={this.renderInput}
            label='Description'
          />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
 
        )

}
}


const validate=(formValues)=>{

const error={}
if(!formValues.title){
	error.title="You must fill title"

}
if(!formValues.description){
	error.description="You must fill description"

}

return error

}


const mapStateToProps=(state)=>{

return {streams:state}


}


export default reduxForm({form:'StreamForm',validate:validate})(StreamForm)