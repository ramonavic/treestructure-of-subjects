import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


class SubSubjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subSubjects: this.props.subSubject,
      open: true,
      nestedItems: []
    }
  }

  handleNestedListToggle(item) {
    this.renderChildren();
    let toggle = !this.state.open
    console.log(item)
    this.setState({
      open: toggle,
    },console.log(this.state.open));
    console.log(this.props.nestedItems)
  }

  renderSubjects() {
    let component = this;
    if (this.state.subSubjects !== null) {


    return (
      <div>
        {this.state.subSubjects.map(function(subSubject){
          return (
          <ListItem
            key={subSubject.props.id}
            primaryText={subSubject.props.subject}
            nestedItems={component.state.nestedItems}
            initiallyOpen={component.state.open}
            onClick={component.handleNestedListToggle.bind(component)}
            leftCheckbox={<Checkbox />}
            primaryTogglesNestedList={true}

          />
        )

        })}
        </div>

    )
  }
  }

  renderChildren() {
    let component = this;
    let subSubjects = component.state.subSubjects;
    subSubjects.map(function(subSubject){
    let nestedItems = subSubject.findChildren();


        nestedItems.map(function(nestedItem){
            component.state.nestedItems.push(
              <ListItem
                key={nestedItem.props.id}
                primaryText={nestedItem.props.subject}
                leftCheckbox={<Checkbox />}
              />)

          })
  })
}
  componentWillMount() {
  }

  render() {
    return this.renderSubjects();

  }



}

export default SubSubjects
