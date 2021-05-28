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

    let cutOffTimes: JSX.Element[] = [];
    if (this.state.raceInfo.cutOffTimes && this.state.raceInfo.cutOffTimes.length > 0) {
      for (let cutOffTimeDescription of this.state.raceInfo.cutOffTimes) {
        cutOffTimes.push(<div className="description-text cut-off-time-description" key={cutOffTimeDescription}>{cutOffTimeDescription}</div>);
      }
    }

    let extraInfoContainers: JSX.Element[] = [];
    if (this.state.raceInfo.cutOffTimes && this.state.raceInfo.cutOffTimes.length > 0) {
      extraInfoContainers.push(
        <div className="cut-off-times-container">
          <div className="header">Cut Off Times:</div>
          { cutOffTimes }
        </div>
      );
    }
    if (this.state.raceInfo.coolFact) {
      extraInfoContainers.push(      
        <div className="cool-fact-container">
          <div className="header">Cool Fact:</div>
          <div className="description-text">{ this.state.raceInfo.coolFact}</div>
        </div>
      );
    }

    return <div className="race-page">
      <div className="race-controls">
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
      <div className="course-description-container">
        <div className="header center">{ this.state.raceInfo.raceDistance } Course Description</div>
        <div className="description-text">{ this.state.raceInfo.courseDescription }</div>
      </div>
      { extraInfoContainers }
    </div>;
  }
}

export default withRouter(RacePage);
