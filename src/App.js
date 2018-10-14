import React, { Component } from 'react';
import {Header,Icon,Button,Divider} from 'semantic-ui-react';
import Control from './components/Control';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [], // id : unique , name, status
      isDisplayForm : false,
    }
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')){
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({tasks : tasks})
    }
    
  }
  onToggleForm = ()=>{
    this.setState({isDisplayForm : !this.state.isDisplayForm})
  }

  onGenerateData(){
    var tasks = [
      {
        id : this.generateID(),
        name : 'ReactJS',
        status : true
      },
      {
        id : this.generateID(),
        name : 'NodeJS',
        status : true
      },
      {
        id : this.generateID(),
        name : 'JavaScript',
        status : false
      }
    ];
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }

  s4(){
    return Math.floor((1+ Math.random())*0x10000 ).toString(16).substring(1);
  }
  generateID(){
    return this.s4() + '-+' +this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4();
  }
  onCloseForm = ()=>{
    this.setState({isDisplayForm:!this.state.isDisplayForm})
    console.log('onCloseForm');
  }

  onSubmit = (data)=>{
    
    var {tasks} = this.state
    var task ={
       id : this.generateID(),
       name : data.name,
       status : data.status
    }
    tasks.push(task)
    this.setState({
      tasks : tasks 
    })
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }
  onUpdateStatus = (id)=>{
    var {tasks}= this.state
    var index = this.findIndex(id)
    if(index!== -1){
      tasks[index].status = ! tasks[index].status
      this.setState({tasks:tasks})
      localStorage.setItem('task',JSON.stringify(tasks))
    }    
  }
  onDeleted = (id)=>{
    var {tasks} = this.state
    var index = this.findIndex(id)

    if(index!== -1){
      tasks.splice(index,1)
      this.setState({tasks:tasks})
      localStorage.setItem('tasks',JSON.stringify(tasks))  
    }
    this.onCloseForm()
  }
  
  findIndex = (id)=>{
    var {tasks} = this.state ;
    var result = -1
    tasks.forEach((task,index)=>{
      if (task.id === id){
         result = index;
      }
    });
    return result
  }

  render() {

    var {isDisplayForm,tasks}=this.state;
    var element = isDisplayForm
          ? <TaskForm onSubmit={this.onSubmit} onCloseForm = {this.onCloseForm}/> 
          : ''
    return (
      <div className='container'>
        <div className='container-header' style={{margin:12}}>
          <Header textAlign='center' as='h2' color='blue'>Adding Jobs</Header>
          <Divider inverted/>
        </div>
        <div className="row">
          <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': ''}> 
          {element}
          </div>        
          <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <div style={{marginBottom:10}}>
              <Button icon labelPosition='left' color='blue' onClick={this.onToggleForm}>
                Adding Jobs
                <Icon name='plus'></Icon>
              </Button>
              <Button icon labelPosition='left' color='twitter' onClick={()=>this.onGenerateData()}>
                Generate Data
                <Icon name='plus'></Icon>
              </Button>
            </div>
            <Control/>
            <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus} onDeleted={this.onDeleted}/>  
            </div> 
        </div>
      </div>  
    );
  }
}

export default App;
