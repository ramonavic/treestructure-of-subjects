import React from 'react';
import SubjectList from './containers/subjectList'
import Subject from './lib/subject';

class App extends React.Component {

    render() {
        return (
          <div>
            <SubjectList subjects={Subject.all()} />
            </div>
        );
    }
}

export default App;
