
class ParentComponent extends React.Component {
  state = {
    message: "Hello from the parent component!",
  };

  render() {
    return <div>{this.state.message}</div>;
  }
}

class ChildComponent extends ParentComponent {
  state = {
    message: "Hello from the child component!",
  };
}
