import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';


class SubSubjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subSubjects: this.props.subSubject,
      open: true,
      nestedItems: [],
      checked: false

    }
  }

  checkChildren() {
    console.log("check children")
    this.setState({
      checked: !this.state.checked,
      open: !this.state.checked,
    })
  }

  handleNestedListToggle(item) {
    item.open = !item.open
    console.log("Toggling list")
    this.setState({
      open: !this.state.open,
    },console.log(this.state.open));
  }

  renderSubjects() {
    let component = this;
    if (this.state.subSubjects !== null) {


    return (
      <div>
        {this.state.subSubjects.map(function(subSubject){
          return (
          <ListItem
            key={`sub-${subSubject.props.id}`}
            primaryText={subSubject.props.subject}
            nestedItems={component.state.nestedItems}
            // initiallyOpen={component.state.open}
            // open={component.state.open}
            // onNestedListToggle={component.handleNestedListToggle}
            // leftCheckbox={<Checkbox onCheck={component.checkChildren.bind(component)} />}
            // primaryTogglesNestedList={true}

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
                key={`nest-${nestedItem.props.id}`}
                primaryText={nestedItem.props.subject}
                // leftCheckbox={<Checkbox />}
              />)

          })
  })
}
  componentWillMount() {
    this.renderChildren();
  }

  render() {
    console.log(this.state)
    return this.renderSubjects();

  }



}

export default SubSubjects
