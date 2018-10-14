import React, { Component } from 'react';
import {Table,TableHeader,TableRow,TableHeaderCell} from 'semantic-ui-react';
import TaskItem from './TaskItem'
class TaskList extends Component {
    

    render() {
       const {tasks} = this.props
       var elementItems = tasks.map((task,index)=>{
        return <TaskItem 
                    key={task.id}
                    index={index}
                    task={task}
                    onUpdateStatus={this.props.onUpdateStatus}
                    onDeleted = {this.props.onDeleted} />
       });

        return (
            <div>
                <Table celled>
                <TableHeader>
                  <TableRow>
                    <TableHeaderCell>STT</TableHeaderCell>
                    <TableHeaderCell>Name</TableHeaderCell>
                    <TableHeaderCell>Status</TableHeaderCell>
                    <TableHeaderCell>Action</TableHeaderCell>
                  </TableRow>
                </TableHeader>
                  {elementItems}
              </Table>
            </div>
        )
    }
}

export default TaskList