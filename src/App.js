import React, { Component } from 'react';
import {Header,Icon,Button,Divider,Table,TableHeader
,TableRow,TableHeaderCell,TableBody,TableCell} from 'semantic-ui-react';
import Control from './components/Control';
import './App.css'
import TaskForm from './components/TaskForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayForm: false,
        
    }
  }
  onToggleForm = ()=>{
    this.setState({isDisplayForm : !this.state.isDisplayForm})
  }
  
  render() {
    var {isDisplayForm}=this.state;
    var element = isDisplayForm ? <TaskForm/>:''
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
            </div>
            <Control/>
            <Table celled>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>STT</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell>Action</TableHeaderCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell textAlign='center'>Angular</TableCell>
                  <TableCell style={{justifyContent:'center',display:'flex'}}>
                    <Button color='instagram'>Active</Button>
                  </TableCell>
                  <TableCell >
                    <Button color='facebook' icon labelPosition='left' >
                      Edit
                      <Icon name='edit'></Icon>
                    </Button>
                    <Button color='orange'labelPosition='left' icon >
                      Delete
                      <Icon name='delete'></Icon>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
        </div> 
        </div>
      </div>  
    );
  }
}

export default App;
