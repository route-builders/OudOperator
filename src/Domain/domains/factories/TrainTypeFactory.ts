import { TrainType } from '../models/TrainType';
import { TrainTypeValue } from '../types/ITrainType';
import { CommonColor } from '../values/common/Color';
import { TrainTypeLineType } from '../values/TrainType/TrainTypeLineType';
import { TrainTypeLineWeight } from '../values/TrainType/TrainTypeLineWeight';
import { TrainTypeName } from '../values/TrainType/TrainTypeName';
import { TrainTypeShortName } from '../values/TrainType/TrainTypeShortName';
import { TrainTypeStopMark } from '../values/TrainType/TrainTypeStopMark';

export class TrainTypeFactory {
  static from(values: TrainTypeValue): TrainType {
    const { name, shortName, color, lineColor, lineType, lineWeight, stopMark } = values;

    return new TrainType({
      name: new TrainTypeName(name),
      shortName: new TrainTypeShortName(shortName),
      color: new CommonColor(color),
      lineColor: new CommonColor(lineColor),
      lineType: new TrainTypeLineType(lineType),
      lineWeight: new TrainTypeLineWeight(lineWeight),
      stopMark: new TrainTypeStopMark(stopMark),
    });
  }
}
