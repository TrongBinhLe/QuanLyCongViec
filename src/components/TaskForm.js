import React, { Component } from 'react';
import {Button,Icon,Form,Checkbox,Input} from 'semantic-ui-react';

class TaskForm extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name : '', 
       status : 'false'
    }
  }
  onChange = (event)=>{
    var target = event.target
    var name = target.name
    var value = target.value
    if(name === 'status'){
      value = target.value === 'true' ? true : false
    }

    this.setState({
      [name] : value
    });    
  }
  onClear = ()=>{
    this.setState({name : '',status : ''})
  }
  onCloseForm = ()=>{
    this.props.onCloseForm()
  }

  onSubmit = (event)=>{
    this.props.onSubmit(this.state)
    this.onCloseForm()
  }

    render() {
      const {onCloseForm} = this.props
        return (
          <div>
            <div className="panel panel-warning"> 
            <div className="panel-heading">
              <h3 className="panel-title">
                Add Job
                <Button icon onClick={onCloseForm} floated={"right"} style = {{marginVertical: 'auto'}}>
                <Icon link name='close' color='red'></Icon>
                </Button>
              </h3>
            </div>
            <div className="panel-body">  
              <Form onSubmit ={this.onSubmit}>
                <Form.Field>
                  <label>Name</label>
                  <Input  placeholder='Name' 
                          name = 'name' 
                          value = {this.state.name}
                          onChange = {this.onChange} />
                </Form.Field>
                <Form.Field>
                  <label>Status</label>
                  <select value={this.state.value} onChange={this.onChange} name='status'>
                    <option value='true'>Active</option>
                    <option value='false'>Not Active</option>
                  </select>
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <div style={{justifyContent:'center',display:'flex'}}>
                  <Button content='Submit' color='blue' type='submit'/>
                  <Button content='Cancel' color='red' onClick={this.onClear}/>
                </div>
                </Form>
              </div>
            </div>
          </div>
        );
    }
}
export default TaskForm;