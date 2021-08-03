import data55k from "../race-info-files/55k.json";
import courseImage55k from "../../../images/55k-course.jpg";
import data5k from "../race-info-files/5k.json";
import courseImage5k from "../../../images/5k-course.jpg";
import data1k from "../race-info-files/1k.json";
import courseImage1k from "../../../images/1k-course.jpg";
import RaceInfoModel from "../race-info.model";

export default class RacePageService {
  public getRaceInfo = (raceId: string): RaceInfoModel => {
    switch(raceId) {
    case "55k":
      return this.get55kRaceInfo();
    case "5k":
      return this.get5kRaceInfo();
    case "1k":
      return this.get1kRaceInfo();
    default:
      return {} as RaceInfoModel;
    }
  }

  private get55kRaceInfo = (): RaceInfoModel => {
    data55k.courseImageSrc = courseImage55k;
    return data55k as RaceInfoModel;
  }

  private get5kRaceInfo = (): RaceInfoModel => {
    data5k.courseImageSrc = courseImage5k;
    return data5k as RaceInfoModel;
  }

  private get1kRaceInfo = (): RaceInfoModel => {
    data1k.courseImageSrc = courseImage1k;
    return data1k as RaceInfoModel;
  }
}
