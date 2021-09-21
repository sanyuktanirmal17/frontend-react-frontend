import * as React from 'react';
import DashBoard from '../Pages/Dashboard/dashboard';
import CreateNote  from './Create Note/createNote';


export class NotesContainer extends React.Component {
    render() {
        return (
           <DashBoard>
                <CreateNote/>
           </DashBoard>
        );
    }
}