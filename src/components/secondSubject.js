import React from 'react';
import Subject from '../lib/subject';
import ThirdSubjectList from '../containers/thirdSubjectList'

class SecondSubject extends React.Component {
  constructor(props) {
    super()
    this.state = {
      secondSubjectId: props.secondSubjectId,
      subject: props.secondSubject,
      children: []
    }
  }



    findSubjectChildren() {
      let secondSubject = new Subject (this.state.secondSubjectId)

      let children = secondSubject.findChildren();
      this.state.children.push(children)
    }

    componentWillMount() {
      this.findSubjectChildren();
    }



  render() {
    let component = this;
    return (
      <li>
        <p> {this.state.subject} </p>
        {component.state.children.map(function(child){
          return (
            <ThirdSubjectList
              key={component.state.secondSubjectId}
              subjects={child}
            />
          )

        })}
      </li>
    )

  }


}

export default SecondSubject;
