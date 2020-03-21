import React, {
  Component
} from "react";
import "./Add.css"

class Add extends Component {
  delete = id => {
    this.props.delete(id);
  };

  deletejsitems = id1 => {
    this.props.deletejsitems(id1);
  };

  render() {
    return (
      <ul>
        {this.props.jsitems.map(item1 => (
          <li key={item1.toString()} onClick={this.deletejsitems.bind(this, item1)}>
            {item1.items}
          </li>
        ))}
        
        {this.props.items.map(item => (
          <li key={item.toString()} onClick={this.delete.bind(this, item)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default Add;