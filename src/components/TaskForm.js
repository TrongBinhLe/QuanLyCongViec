import React, { Component } from 'react';
import {Button,Icon,Form,Dropdown,Checkbox} from 'semantic-ui-react';

class TaskForm extends Component {
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
              <Form>
                <Form.Field>
                  <label>Name</label>
                  <input placeholder='Name' />
                </Form.Field>
                <Form.Field>
                  <label>Status</label>
                  <Dropdown placeholder='Skills' fluid search selection options={options}></Dropdown>
                </Form.Field>
                <Form.Field>
                  <Checkbox label='I agree to the Terms and Conditions' />
                </Form.Field>
                <div style={{justifyContent:'center',display:'flex'}}>
                  <Button content='Submit' color='blue' />
                  <Button content='Cancel' color='red'  />
                </div>
                </Form>
              </div>
            </div>
          </div>
        );
    }
}
const options = [
  { key: 'angular', text: 'Angular', value: 'angular' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'design', text: 'Graphic Design', value: 'design' },
  { key: 'ember', text: 'Ember', value: 'ember' },
  { key: 'html', text: 'HTML', value: 'html' },
  { key: 'ia', text: 'Information Architecture', value: 'ia' },
  { key: 'javascript', text: 'Javascript', value: 'javascript' },
  { key: 'mech', text: 'Mechanical Engineering', value: 'mech' },
  { key: 'meteor', text: 'Meteor', value: 'meteor' },
  { key: 'node', text: 'NodeJS', value: 'node' },
  { key: 'plumbing', text: 'Plumbing', value: 'plumbing' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'rails', text: 'Rails', value: 'rails' },
  { key: 'react', text: 'React', value: 'react' },
  { key: 'repair', text: 'Kitchen Repair', value: 'repair' },
  { key: 'ruby', text: 'Ruby', value: 'ruby' },
  { key: 'ui', text: 'UI Design', value: 'ui' },
  { key: 'ux', text: 'User Experience', value: 'ux' },
]
export default TaskForm;