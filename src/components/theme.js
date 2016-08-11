import React from 'react'
import Subject from '../lib/subject';
import SecondSubjects from './secondSubjects'

class Theme extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      themeSubject: props.themeSubject,
      themeSubjectID: props.id,
      children: []
    }
  }

  findChildren() {
    let themeSubject = new Subject (this.state.themeSubjectID)

    let children = themeSubject.findChildren();
    this.state.children.push(children)
  }

  componentWillMount() {
    this.findChildren();
  }

      render() {
      return (
        <ul>
          <h1> {this.state.themeSubject} </h1>
          <SecondSubjects secondSubjects={this.state.children}  />
        </ul>
      )
    }
}

export default Theme
