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






// let component = this;
// var subject = new Subject(4826);


//
//


//
// let component = this;

//   var subHeader = new Subject(topSubject.props.id)
//   let children = subHeader.findChildren()
//
//   children.map(function(child){
//     var nestedItems = []
//     var grandChildren = child.findChildren()
//     grandChildren.map(function(grandChild){
//       return (
//         nestedItems.push(
//           <ListItem
//           primaryText={grandChild.props.subject}
//           key={grandChild.props.id}
//           leftCheckbox={<Checkbox />}
//           />)
//         )
//
// return (
//   <List>
//         <Subheader key={subHeader.props.id}> {subHeader.props.subject} </Subheader>
//
//                   <ListItem
//                     primaryText={child.props.subject}
//                     key={child.props.id}
//                     nestedItems={nestedItems}
//                     primaryTogglesNestedList={true}
//                     disabled={false}
//                     initiallyOpen={true}
//                     leftCheckbox={<Checkbox />}
//                   />
//   </List>
//               )
//
//
//       })
//
//     })
//
//   })
//
//
//
