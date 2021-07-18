import { Station } from '../entities/Station';
import { StationValue } from '../types/IStation';
import { StationBoundary } from '../values/Station/StationBoundary';
import { StationID } from '../values/Station/StationID';
import { StationName } from '../values/Station/StationName';
import { StationTrainTimeFormat } from '../values/Station/StationTrainTimeFormat';
import { StationScale } from '../values/Station/StationScale';
import { StationTimeFormat } from '../values/Station/StationTimeFormat';

export class StationFactory {
  static from(values: StationValue): Station {
    const { uuid, name, timeFormat, scale, outboundTrainInfo, inboundTrainInfo, boundary } = values;

    return new Station({
      uuid: new StationID(uuid),
      name: new StationName(name),
      timeFormat: new StationTimeFormat(timeFormat),
      scale: new StationScale(scale),
      outboundTrainInfo: new StationTrainTimeFormat(outboundTrainInfo),
      inboundTrainInfo: new StationTrainTimeFormat(inboundTrainInfo),
      boundary: new StationBoundary(boundary),
    });
  }
}
