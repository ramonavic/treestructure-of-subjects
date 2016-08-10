import React from 'react';
import SubjectList from './containers/subjectList'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class App extends React.Component {

    render() {
        return (
          <MuiThemeProvider >
            <SubjectList/>
          </MuiThemeProvider >
        );
    }
}

export default App;
