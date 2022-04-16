import React, { Component } from "react";
import Icon from "@mdi/react";
import { mdiDelete, mdiMinus, mdiPlus } from "@mdi/js";

class Counter extends Component {
  render() {
    const { onIncrement, counter, onDelete } = this.props;

    return (
      <div>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter, -1)}
        >
          <Icon
            path={mdiMinus}
            title="Subtract 1"
            size={1}
            horizontal
            vertical
            color="white"
          />
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter, 1)}
        >
          <Icon
            path={mdiPlus}
            title="Increase 1"
            size={1}
            horizontal
            vertical
            color="white"
          />
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}
        >
          <Icon
            path={mdiDelete}
            title="Delete Counter"
            size={1}
            horizontal
            vertical
            rotate={180}
            color="white"
          />
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    return (classes +=
      this.props.counter.value === 0 ? "warning" : "primary m-3");
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
