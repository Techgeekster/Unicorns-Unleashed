import React from "react";
import { RouteComponentProps, withRouter} from "react-router-dom";
import "./race-page.scss";
import RaceInfoModel from "./race-info.model";
import RaceInfoService from "./services/race-page.service";
import { Link } from "react-router-dom";

interface State {
  id: string;
  raceInfo: RaceInfoModel;
}

class RacePage extends React.Component<RouteComponentProps, any> {
  constructor(props: any) {
    super(props);
    (this.state as State) = {
      id: "",
      raceInfo: {} as RaceInfoModel
    };
  }

  componentDidMount() {
    let raceInfoService: RaceInfoService = new RaceInfoService();
    let id = (this.props.match.params as any).id;

    this.setState({ id: id, raceInfo: raceInfoService.getRaceInfo(id) });
  }

  render() {    
    let courseImage;
    if (this.state.raceInfo.courseImageSrc) {
      courseImage =
        <div className="course-image">
          <img src={ this.state.raceInfo.courseImageSrc } alt="course"/>
        </div>;
    } else {
      courseImage = "";
    }

    return <div className="race-page">
      <div className="race-controls">
        <Link className="button primary-button" to="/course-info">
          Course Info
        </Link>
        <Link className="button primary-button" to="/course-info">
          Volunteer
        </Link>
        <Link className="button primary-button" to="/course-info">
          Galleries
        </Link>
        <Link className="button primary-button" to="/course-info">
          Results
        </Link>
      </div>
      <div className="header-row">
        <div>
          <div>General Information</div>
          <div className="title">{ this.state.raceInfo.title }</div>
        </div>
        <a className="secondary-button" href={ this.state.raceInfo.registrationLink }>
          <div>{ this.state.raceInfo.registrationText }</div>
        </a>
      </div>
      { courseImage }
      <div className="description-text">{ this.state.raceInfo.courseDescription }</div>
    </div>;
  }
}

export default withRouter(RacePage);
