import React from 'react';
import SubjectList from './containers/subjectList'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subject from './lib/subject';

class App extends React.Component {

    render() {
        return (
          <MuiThemeProvider >
            <SubjectList subjects={Subject.all()} />
          </MuiThemeProvider >
        );
    }
}

export default App;
