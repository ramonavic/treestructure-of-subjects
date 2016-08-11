import React from 'react'
import Subject from '../lib/subject';
import SecondSubjectList from './secondSubjectList'

class Theme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      themeSubject: props.themeSubject,
      themeSubjectID: props.id,
      children: []
    }
  }

  findSubjectChildren() {
    let themeSubject = new Subject (this.state.themeSubjectID)

    let children = themeSubject.findChildren();
    this.state.children.push(children)
  }

  componentWillMount() {
    this.findSubjectChildren();
  }

      render() {
        let component = this;
      return (
        <ul>
          <h1> {this.state.themeSubject} </h1>
          {this.state.children.map(function(child){
            console.log(child)
            return(
            <SecondSubjectList key={component.state.themeSubjectID} secondSubjects={child}  />
          )
          })}
        </ul>
      )
    }
}

export default Theme
