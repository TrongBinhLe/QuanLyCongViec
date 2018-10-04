import React, { Component } from 'react';
import {Input, Table, TableHeader, TableRow, TableHeaderCell, TableBody, TableCell,Button,Icon} from 'semantic-ui-react';
import Control from './Control'
class TaskForm extends Component {
    render() {
        return (
        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
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
        );
    }
}

export default TaskForm;