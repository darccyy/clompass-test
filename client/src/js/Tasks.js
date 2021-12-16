import { Component } from "react";
import $ from "jquery";

class Tasks extends Component {
  // Initialize state variable
  state = {};

  // Fetch message from server, Add to state
  getTasks(component) {
    fetch(
      `/api/tasks?username=${btoa($("#username").val())}&password=${btoa(
        $("#password").val(),
      )}`,
    )
      .then(res => {
        if (res.status === 200) {
          return res.json();
        }
        console.error(res);
      })
      .then(json => component.setState(json));
  }

  render() {
    console.log(this.state);
    // Display server message
    return (
      <div className="Tasks">
        <input
          id="username"
          type="text"
          placeholder="Username"
        />
        <input
          id="password"
          type="text"
          placeholder="Password"
        />
        <button onClick={() => this.getTasks(this)}>Get Learning Tasks</button>

        <div>
          {!this.state.tasks
            ? "Loading message..."
            : this.state.tasks.map((item, index) => {
                return <h2 key={index}>{item.name}</h2>;
              })}
        </div>
      </div>
    );
  }
}

export default Tasks;
