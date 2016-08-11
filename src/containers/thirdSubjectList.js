import React from 'react';
import ThirdSubject from '../components/thirdSubject'

class ThirdSubjectList extends React.Component {
  constructor(props) {
    super()

    this.state ={
      thirdSubjects: props.subjects
    }

  }

  render() {
    return (
      <ul>
        {this.state.thirdSubjects.map(function(thirdSubject){
          return(
              <ThirdSubject
                key={thirdSubject.props.id}
                thirdSubject={thirdSubject.props.subject}
              />
          )
        })}
        </ul>
    )
  }

}

export default ThirdSubjectList;
