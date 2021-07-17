import { StationBoundary, StationBoundaryValue } from '../values/Station/StationBoundary';
import { StationID, StationIDValue } from '../values/Station/StationID';
import {
  StationInboundTrainTimeFormat,
  StationInboundTrainTimeFormatValue,
} from '../values/Station/StationInboundTrainTimeFormat';
import { StationName, StationNameValue } from '../values/Station/StationName';
import {
  StationOutboundTrainTimeFormat,
  StationOutboundTrainTimeFormatValue,
} from '../values/Station/StationOutboundTrainTimeFormat';
import { StationScale, StationScaleValue } from '../values/Station/StationScale';
import { StationTimeFormat, StationTimeFormatValue } from '../values/Station/StationTimeFormat';

export type StationValue = {
  uuid: StationIDValue;
  name: StationNameValue;
  timeFormat: StationTimeFormatValue;
  scale: StationScaleValue;
  outboundTrainInfo: StationOutboundTrainTimeFormatValue;
  inboundTrainInfo: StationInboundTrainTimeFormatValue;
  boundary: StationBoundaryValue;
};

export type IStation = {
  uuid: StationID;
  name: StationName;
  timeFormat: StationTimeFormat;
  scale: StationScale;
  outboundTrainInfo: StationOutboundTrainTimeFormat;
  inboundTrainInfo: StationInboundTrainTimeFormat;
  boundary: StationBoundary;
};
