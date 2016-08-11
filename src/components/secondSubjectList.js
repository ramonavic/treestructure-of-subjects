import React from 'react';
import SecondSubject from './secondSubject';

class SecondSubjectList extends React.Component {
  constructor(props) {
    super();

    this.state = {
      children: props.secondSubjects,
    }
    console.log(this.state)
  }


    render() {
      return (
        <div>
        {this.state.children.map(function(secondSubject){
          console.log(secondSubject)
            return(
                <SecondSubject
                  key={secondSubject.props.id}
                  secondSubjectId={secondSubject.props.id}
                  secondSubject={secondSubject.props.subject}
                />
              )
          })}
        </div>
      )

  }



  }



export default SecondSubjectList
