import React from 'react';
import {List, ListItem} from 'material-ui/List';

import Subject from '../lib/subject';
import Theme from './theme';
import SubSubjects from '../components/subSubjects'


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
    let component = this

    return (
      <div>
      <List>
          {this.state.topSubjects.map(function(topSubject, i){
            let children = topSubject.findChildren();
            console.log(topSubject.props.id)
            console.log(children)
            return(
              <div>
                <Theme key={`theme${topSubject.props.id}`} topSubject={topSubject} />
                <SubSubjects key={`list${topSubject.props.id}`} subSubject={children}/>
              </div>
            )
          }, this)
        }
        </List>

      </div>
    )
  }
}


export default SubjectList;
