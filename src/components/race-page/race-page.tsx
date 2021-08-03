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
    let introductionParagraphs: JSX.Element[] = [];
    if (this.state.raceInfo.introduction && this.state.raceInfo.introduction.length > 0) {
      for (let introductionParagraph of this.state.raceInfo.introduction) {
        introductionParagraphs.push(<div className="description-text introduction-paragraph" key={introductionParagraph}>{introductionParagraph}</div>);
      }
    }
    
    let courseImage;
    if (this.state.raceInfo.courseImageSrc) {
      courseImage =
        <div className="course-image">
          <img src={ this.state.raceInfo.courseImageSrc } alt="course"/>
        </div>;
    } else {
      courseImage = "";
    }

    let courseLink;
    if (this.state.raceInfo.courseLink) {
      courseLink =
        <div className="course-link">
          <a href={ this.state.raceInfo.courseLink } target="_blank">Go to course stats</a>
        </div>;
    } else {
      courseLink = "";
    }

    let courseDescriptionParagraphs: JSX.Element[] = [];
    if (this.state.raceInfo.courseDescription && this.state.raceInfo.courseDescription.length > 0) {
      for (let courseDescriptionParagraph of this.state.raceInfo.courseDescription) {
        courseDescriptionParagraphs.push(<div className="description-text course-description-paragraph" key={courseDescriptionParagraph}>{courseDescriptionParagraph}</div>);
      }
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
        <Link className="button primary-button" to="/home">
          Home
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
      <div className="description-text introduction-text">{ introductionParagraphs }</div>
      { courseImage }
      { courseLink }
      <div className="course-description-container">
        <div className="header center">{ this.state.raceInfo.raceDistance } Course Description</div>
        <div className="description-text">{ courseDescriptionParagraphs }</div>
      </div>
      { extraInfoContainers }
    </div>;
  }
}

export default withRouter(RacePage);
