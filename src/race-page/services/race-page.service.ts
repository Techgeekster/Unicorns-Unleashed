import data55k from '../race-info-files/55k.json';
import courseImage55k from '../../images/55k-course.jpg';
import data5k from '../race-info-files/5k.json';
import data1k from '../race-info-files/1k.json';
import RaceInfo from '../race-info.model';

export default class RacePageService {
  public getRaceInfo = (raceId: string): RaceInfo => {
    switch(raceId) {
      case "55k":
        return this.get55kRaceInfo();
      case "5k":
        return this.get5kRaceInfo();
      case "1k":
        return this.get1kRaceInfo();
      default:
        return {} as RaceInfo;
    }
  }

  private get55kRaceInfo = (): RaceInfo => {
    data55k.courseImageSrc = courseImage55k;
    return data55k as RaceInfo;
  }

  private get5kRaceInfo = (): RaceInfo => {
    return data5k as RaceInfo;
  }

  private get1kRaceInfo = (): RaceInfo => {
    return data1k as RaceInfo;
  }
}
