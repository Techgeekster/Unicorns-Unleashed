import React from "react";
import { RouteComponentProps, withRouter} from "react-router-dom";
import './race-page.scss';
import RaceInfo from './race-info.model';
import RaceInfoService from './services/race-page.service';
import courseImage from '../images/course-picture-1.jpg';

interface State {
  id: string;
  raceInfo: RaceInfo;
}

class RacePage extends React.Component<RouteComponentProps, any> {
  constructor(props: any) {
    super(props);
    (this.state as State) = {
      id: "",
      raceInfo: {} as RaceInfo
    }
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
          <img src={ this.state.raceInfo.courseImageSrc } />
        </div> 
    } else {
      courseImage = '';
    }

    return <div className="race-page">
      <div className="race-controls">
        <a className="button primary-button" href="">Course Info</a>
        <a className="button primary-button" href="">Support</a>
        <a className="button primary-button" href="">Galleries</a>
        <a className="button primary-button" href="">Results</a>
      </div>
      <div className="header-row">
        <div>
          <div>General Information</div>
          <div className="title">{ this.state.raceInfo.title }</div>
        </div>
        <a className="secondary-button" href="">
          <div>{ this.state.raceInfo.registrationText }</div>
        </a>
      </div>
      { courseImage }
      <div className="description-text">{ this.state.raceInfo.courseDescription }</div>
    </div>
  }
}

export default withRouter(RacePage);
