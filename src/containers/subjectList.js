import React from 'react';
import Theme from '../components/theme';
import Search from '../lib/search';
import Subject from '../lib/subject';

let KEYS = ['subject', 'id']
let KEY = 'subject'
let ITEMS = Subject.all()
console.log(ITEMS)


class SubjectList extends React.Component {
  constructor(props) {
    super();


    this.state = {
      subjects: props.subjects,
      topSubjects: [],

    }
  }
  renderTopSubjects() {
    let component = this;
    var topSubjectArray = []

    {component.state.subjects.map(function(subject){

        if (subject.props.parent_subject_id == 0) {
          return (
          component.state.topSubjects.push(subject)
          )
        }


      }
    )}

  }

  componentWillMount() {
       this.renderTopSubjects();
     }

  render() {

    return(
      <div>
        <Search items={ITEMS} searchKey={KEY} keys={KEYS} placeholder={"Zoek een onderwerp"} />

        {this.state.topSubjects.map(function(topSubject){
            return (
              <Theme key={topSubject.props.id} id={topSubject.props.id} themeSubject={topSubject.props.subject} />
            )

      })}
      </div>
    )
  }


}







export default SubjectList;
