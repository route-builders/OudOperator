import { IStation, StationValue } from '../types/IStation';
import { StationBoundary } from '../values/Station/StationBoundary';
import { StationID } from '../values/Station/StationID';
import { StationInboundTrainTimeFormat } from '../values/Station/StationInboundTrainTimeFormat';
import { StationName } from '../values/Station/StationName';
import { StationOutboundTrainTimeFormat } from '../values/Station/StationOutboundTrainTimeFormat';
import { StationScale } from '../values/Station/StationScale';
import { StationTimeFormat } from '../values/Station/StationTimeFormat';

export class Station implements IStation {
  public readonly uuid: StationID;
  public readonly name: StationName;
  public readonly timeFormat: StationTimeFormat;
  public readonly scale: StationScale;
  public readonly outboundTrainInfo: StationOutboundTrainTimeFormat;
  public readonly inboundTrainInfo: StationInboundTrainTimeFormat;
  public readonly boundary: StationBoundary;

  constructor(props: StationValue) {
    this.uuid = new StationID(props.uuid);
    this.name = new StationName(props.name);
    this.timeFormat = new StationTimeFormat(props.timeFormat);
    this.scale = new StationScale(props.scale);
    this.outboundTrainInfo = new StationOutboundTrainTimeFormat(props.outboundTrainInfo);
    this.inboundTrainInfo = new StationInboundTrainTimeFormat(props.inboundTrainInfo);
    this.boundary = new StationBoundary(props.boundary);
    Object.freeze(this);
  }
}
