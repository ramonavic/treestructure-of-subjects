import React from 'react';
import SecondSubject from './secondSubject'

class SecondSubjects extends React.Component {
  constructor(props) {
    super()

    this.state = {
      children: props.secondSubjects,
    }
  }



    render() {
      return (
        <div>
      {this.state.children.map(function(secondSubjects){
        secondSubjects.map(function(secondSubject){
          return (
            <SecondSubject key={secondSubject.props.id} id={secondSubject.props.id} subject={secondSubject.props.subject}/>
          )

        })


      })}
        </div>
      )
    }



  }






export default SecondSubjects
