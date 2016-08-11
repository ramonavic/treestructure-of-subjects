import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import SecondSubject from '../components/secondSubject'
import Divider from 'material-ui/Divider';


class Theme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      topSubject: this.props.topSubject,
      secondSubjects: [],
      nestedItems: []
    }
}




  render() {
    let component = this;

    return(
      <div>
        <Subheader key={component.state.topSubject.props.id}> {component.state.topSubject.props.subject} </Subheader>

        <Divider/>
        </div>
      )
  }




}
export default Theme;



// {component.state.secondSubjects.map(function(secondSubject){
//   secondSubject.map(function(subj){
//     console.log(component.state.nestedItems)
//
//     return(
//       <div>
//       <ListItem
//         primaryText={subj.props.subject}
//         key={subj.props.id}
//         nestedItems={component.state.nestedItems}
//         primaryTogglesNestedList={true}
//         disabled={false}
//         initiallyOpen={true}
//         leftCheckbox={<Checkbox />}
//       />
//       </div>
//     )
//   })
// })}
