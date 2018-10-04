import React, { Component } from 'react';
import {Header,Icon,Form,Checkbox,Button,Dropdown,Divider} from 'semantic-ui-react';
import TaskForm from './components/TaskForm'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='container-header' style={{margin:12}}>
          <Header textAlign='center' as='h2' color='blue'>Adding Jobs</Header>
          <Divider inverted/>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4"> 
            <div className="panel panel-warning"> 
                <div className="panel-heading">
                  <h3 className="panel-title">
                    Add Job
                    <Icon link name='close' color='red'></Icon>
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
          <TaskForm/> 
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
export default App;
