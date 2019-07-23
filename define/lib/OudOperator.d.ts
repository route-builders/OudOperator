export declare class Color {
    private _r;
    private _g;
    private _b;
    constructor(v?: string);
    setFromHEX(v: string): void;
    setFromABGR(v: string): void;
    RGB(): string;
    HEX(withSharp?: boolean): string;
    BGR(withSharp?: boolean): string;
}
export declare class Time {
    isNull: boolean;
    private _h;
    private _m;
    private _s;
    constructor(v?: string | null);
    setTime(v: string): void;
    private __slice;
    h: string | undefined;
    m: string;
    s: string;
    private normalize;
    str(withCoron?: boolean, withSecond?: boolean): string;
}
export declare var EndpointWork: EndpointWorkInterface;
export interface EndpointWorkInterface {
    worktype: number;
    track?: number;
    departure?: Time;
    arrival?: Time;
    operationNum?: string;
}
export declare class DataSet {
    private _fileStruct;
    private loadingStartTime;
    fileStruct: any;
    private _fileType;
    fileType: string;
    private _fileTypeAppComment;
    fileTypeAppComment: string;
    private _name;
    name: string;
    private _color;
    color: Color;
    private _stations;
    stations: Array<Station>;
    private _trainTypes;
    trainTypes: Array<TrainType>;
    private _diagrams;
    diagrams: Array<Diagram>;
    constructor();
    private static command;
    private static value;
    private static split;
    fromOud2(lines: Array<string>): Promise<any>;
    fromOud(lines: Array<string>): Promise<any>;
    setValue(command: string, value: string): void;
}
export declare class Station {
    private _name;
    name: string;
    private _timeType;
    timeType: number;
    private _scale;
    scale: number;
    private _trainInfoDown;
    trainInfoDown: number;
    private _trainInfoUp;
    trainInfoUp: number;
    private _boundary;
    boundary: boolean;
    private _additionalOption;
    additionalOption: number;
    private _shouldShowLineNumberDown;
    shouldShowLineNumberDown: boolean;
    private _shouldShowLineNumberUp;
    shouldShowLineNumberUp: boolean;
    private _shouldShowLines;
    shouldShowLines: boolean;
    private _tracks;
    tracks: Track[];
    private _mainLineDown;
    mainLineDown: number;
    private _mainLineUp;
    mainLineUp: number;
    static timeTypeToInt(value: string): number;
    parseTimeType(): string;
    static scaleToInt(value: string): number;
    parseScale(): string;
    static trainInfoToInt(value: string): number;
    setValue(command: string, value: string): void;
}
export declare class Track {
    private _name;
    name: string;
    private _shortName;
    shortName: string;
    setValue(command: string, value: string): void;
}
export declare class TrainType {
    private _name;
    name: string;
    private _shortname;
    shortname: string;
    private _trainColor;
    trainColor: Color;
    private _fontIdx;
    fontIdx: number;
    private _lineColor;
    lineColor: Color;
    private _lineType;
    lineType: number;
    private _lineWeight;
    lineWeight: number;
    private _shoudDrawStopMark;
    shoudDrawStopMark: boolean;
    constructor();
    static lineStyleToInt(str: string): number;
    setValue(command: string, value: string): void;
}
export declare class Diagram {
    private _name;
    name: string;
    private _downStreaks;
    downStreaks: Array<Streak>;
    private _upStreaks;
    upStreaks: Array<Streak>;
    setValue(command: string, value: string): void;
}
export declare class Streak {
    private _operationNum;
    operationNum: string;
    private _typeIdx;
    typeIdx: number;
    private _name;
    name: string;
    private _no?;
    no: string | undefined;
    private _destIdx;
    destIdx: number;
    private _stHandlings;
    stHandlings: Array<StHandling>;
    private _comment;
    comment: string;
    setValue(command: string, value: string): void;
}
export declare class StHandling {
    private _type;
    type: number;
    private _arrival;
    arrival: Time;
    private _departure;
    departure: Time;
    private _track;
    track: number;
    private _endpointWork;
    endpointWork: EndpointWorkInterface;
    constructor();
}
