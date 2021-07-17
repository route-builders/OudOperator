import { IStation } from '../types/IStation';
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

  constructor(props: IStation) {
    this.uuid = props.uuid;
    this.name = props.name;
    this.timeFormat = props.timeFormat;
    this.scale = props.scale;
    this.outboundTrainInfo = props.outboundTrainInfo;
    this.inboundTrainInfo = props.inboundTrainInfo;
    this.boundary = props.boundary;
    Object.freeze(this);
  }
}
