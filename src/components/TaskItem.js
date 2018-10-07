import React, { Component } from 'react';
import {TableCell,Button,Icon,TableRow, TableBody} from 'semantic-ui-react'
class TaskItem extends Component {
    render() {
			const {index,task} = this.props
        return (

							<TableBody>
								<TableRow>
									<TableCell>{index + 1}</TableCell>
									<TableCell textAlign='center'>{task.name}</TableCell>
									<TableCell style={{justifyContent:'center',display:'flex'}}>
										<Button color={task.status?'instagram':'orange'}>{task.status ? 'Active' : 'Not Active'}</Button>
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
 
        );
    }
}

export default TaskItem;