import React, { Component } from 'react';
import {Button,Icon,Input} from 'semantic-ui-react'
class Control extends Component {
    render() {
        return (
            <div>
                <div>
                    <Input size='medium' action={{icon:'search'}} placeholder='Search' style={{marginRight: 20,}}></Input>
                    <Button icon color='violet' size='medium'>
                        Sort
                        <Icon name='sort'></Icon>
                    </Button>
                </div>
            </div>
        );
    }
}

export default Control;