import React from "react";
import { RouteComponentProps, withRouter} from "react-router-dom";

class RacePage extends React.Component<RouteComponentProps, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      id: ""
    }
  }

  componentDidMount() {
    this.setState({id: (this.props.match.params as any).id})
  }

  render() {    
    return <div className="race-page">
      <h1>Race Page</h1>
      <h1>ID: {this.state.id}</h1>
    </div>
  }
}

export default withRouter(RacePage);
