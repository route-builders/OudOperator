import { CommonColor, CommonColorValue } from '../values/common/Color';
import { TrainTypeLineType, TrainTypeLineTypeValue } from '../values/TrainType/TrainTypeLineType';
import { TrainTypeLineWeight, TrainTypeLineWeightValue } from '../values/TrainType/TrainTypeLineWeight';
import { TrainTypeName, TrainTypeNameValue } from '../values/TrainType/TrainTypeName';
import { TrainTypeShortName, TrainTypeShortNameValue } from '../values/TrainType/TrainTypeShortName';
import { TrainTypeStopMark, TrainTypeStopMarkValue } from '../values/TrainType/TrainTypeStopMark';

export type TrainTypeValue = {
  name: TrainTypeNameValue;
  shortName: TrainTypeShortNameValue;
  color: CommonColorValue;
  lineColor: CommonColorValue;
  lineType: TrainTypeLineTypeValue;
  lineWeight: TrainTypeLineWeightValue;
  stopMark: TrainTypeStopMarkValue;
};

export type ITrainType = {
  name: TrainTypeName;
  shortName: TrainTypeShortName;
  color: CommonColor;
  lineColor: CommonColor;
  lineType: TrainTypeLineType;
  lineWeight: TrainTypeLineWeight;
  stopMark: TrainTypeStopMark;
};
