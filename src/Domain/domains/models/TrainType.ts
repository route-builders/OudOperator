import { ITrainType } from '../types/ITrainType';
import { CommonColor } from '../values/common/Color';
import { TrainTypeLineType } from '../values/TrainType/TrainTypeLineType';
import { TrainTypeLineWeight } from '../values/TrainType/TrainTypeLineWeight';
import { TrainTypeName } from '../values/TrainType/TrainTypeName';
import { TrainTypeShortName } from '../values/TrainType/TrainTypeShortName';
import { TrainTypeStopMark } from '../values/TrainType/TrainTypeStopMark';

export class TrainType implements ITrainType {
  public readonly name: TrainTypeName;
  public readonly shortName: TrainTypeShortName;
  public readonly color: CommonColor;
  public readonly lineColor: CommonColor;
  public readonly lineType: TrainTypeLineType;
  public readonly lineWeight: TrainTypeLineWeight;
  public readonly stopMark: TrainTypeStopMark;

  constructor(props: ITrainType) {
    this.name = props.name;
    this.shortName = props.shortName;
    this.color = props.color;
    this.lineColor = props.lineColor;
    this.lineType = props.lineType;
    this.lineWeight = props.lineWeight;
    this.stopMark = props.stopMark;
    Object.freeze(this);
  }
}
