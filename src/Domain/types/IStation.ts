import { StationBoundary, StationBoundaryValue } from '../values/Station/StationBoundary';
import { StationID, StationIDValue } from '../values/Station/StationID';
import { StationName, StationNameValue } from '../values/Station/StationName';
import { StationTrainTimeFormat, StationTrainTimeFormatValue } from '../values/Station/StationTrainTimeFormat';
import { StationScale, StationScaleValue } from '../values/Station/StationScale';
import { StationTimeFormat, StationTimeFormatValue } from '../values/Station/StationTimeFormat';

export type StationValue = {
  uuid: StationIDValue;
  name: StationNameValue;
  timeFormat: StationTimeFormatValue;
  scale: StationScaleValue;
  outboundTrainInfo: StationTrainTimeFormatValue;
  inboundTrainInfo: StationTrainTimeFormatValue;
  boundary: StationBoundaryValue;
};

export type IStation = {
  uuid: StationID;
  name: StationName;
  timeFormat: StationTimeFormat;
  scale: StationScale;
  outboundTrainInfo: StationTrainTimeFormat;
  inboundTrainInfo: StationTrainTimeFormat;
  boundary: StationBoundary;
};
