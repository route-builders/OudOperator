/**
 * # OudOperator
 *
 * Hi> \(O_O)/
 *
 * The library to use the string read from OuDia file.
 *
 * - About OuDia
 *
 * The software for editing and displaying railroad diagrams.
 * made by take-okm.
 * @see {@link http://take-okm.a.la9.jp/oudia/ }
 *
 * Copyright 2018-2019 up-tri
 * Released under the GNU General Public License.
 *
 * @author up-tri
 * @version 1.0
 */

/**
 * A class for easy handling of color information
 *
 * @author up-tri
 * @since 1.0
 */
export class Color {
    /**
     * 赤色成分
     *
     * Red component of HEX color
     *
     * @type {string} It takes an integer value in the range of 0 to 255
     */
    private _r: number
    /**
     * 緑色成分
     *
     * Green component of HEX color
     *
     * @type {string} It takes an integer value in the range of 0 to 255
     */
    private _g: number
    /**
     * 青色成分
     *
     * Blue component of HEX color
     *
     * @type {string} It takes an integer value in the range of 0 to 255
     */
    private _b: number
    /**
     * @constructor
     * When a character string representing a color is given, fire *setFromHEX()*.
     *
     * @param {string} v Character string representing colors such as A and B (HEX notation)
     */
    constructor(v?: string) {
        this._r = 0
        this._g = 0
        this._b = 0
        if (v === undefined) {
            return
        }
        this.setFromHEX(v)
    }
    /**
     * A method to store the color expressed in HEX format.
     *
     * @param {string} v Character string representing colors such as "#dc143c" and "#d4c" (HEX notation)
     */
    public setFromHEX(v: string) {
        let matchResults = [
            v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
            v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
        ]
        if (matchResults[0] !== null) {
            this._r = parseInt(matchResults[0][1] + matchResults[0][1], 16)
            this._g = parseInt(matchResults[0][2] + matchResults[0][2], 16)
            this._b = parseInt(matchResults[0][3] + matchResults[0][3], 16)
        } else if (matchResults[1] !== null) {
            this._r = parseInt(matchResults[1][1], 16)
            this._g = parseInt(matchResults[1][2], 16)
            this._b = parseInt(matchResults[1][3], 16)
        } else {
            console.log('ERROR')
        }
    }
    /**
     * A method to store the color expressed in HEX format.
     *
     * @param {string} v Character string representing colors such as "#dc143c" and "#d4c" (HEX notation)
     */
    public setFromABGR(v: string) {
        let matchResult = v.match(
            /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
        )
        this._r = parseInt(matchResult[4], 16)
        this._g = parseInt(matchResult[3], 16)
        this._b = parseInt(matchResult[2], 16)
    }
    /**
     * to get string representing a color such as "rgb(220, 20, 60)"
     *
     * @return {string} color string
     */
    public RGB(): string {
        return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')'
    }
    /**
     * to get string representing a color such as "#dc143c"
     *
     * @param {boolean} withSharp With or without "#"
     *
     * @return {string} A string representing color in the form of HEX
     */
    public HEX(withSharp: boolean = true): string {
        return (
            (withSharp ? '#' : '') +
            this._r.toString(16) +
            this._g.toString(16) +
            this._b.toString(16)
        )
    }
    /**
     * to get string representing a color such as "#3c14dc00"
     *
     * @param {boolean} withSharp With or without "#"
     *
     * @return {string} A string representing color in the form of BGRA
     */
    public BGR(withSharp: boolean = true): string {
        return (
            (withSharp ? '#' : '') +
            this._b.toString(16) +
            this._g.toString(16) +
            this._r.toString(16) +
            '00'
        )
    }
}

/**
 * A class for handling time information comfortably
 *
 * @author up-tri
 * @since 1.0
 */
export class Time {
    /**
     * When it is true, it indicates that the time is not defined.
     *
     * @type {boolean}
     */
    public isNull: boolean = true
    /**
     * hour(s) (0 ~ 23)
     *
     * @type {number}
     */
    private _h: number = 0
    /**
     * minute(s) (0 ~ 59)
     *
     * @type {number}
     */
    private _m: number = 0
    /**
     * second(s) (0 ~ 59)
     *
     * @type {number}
     */
    private _s: number = 0

    constructor(v?: string | null) {
        if (v === undefined || v === null) {
            this.isNull = true
            this._h = 0
            this._m = 0
            this._s = 0
            return
        }
        this.setTime(v)
    }

    public setTime(v: string) {
        if (v.match(/^[0-9]{3,6}$/) === null) {
            this._h = 0
            this._m = 0
            this._s = 0
            return
        }
        let time = parseInt(v)
        if (3 <= v.length && v.length <= 4) {
            this._h = Math.floor(time / 100)
            this._m = time % 100
            this._s = 0
        } else if (5 <= v.length && v.length <= 6) {
            this._h = Math.floor(time / 10000)
            this._m = Math.floor((time % 10000) / 100)
            this._s = time % 100
        }
        this.normalize()
    }

    private __slice(v: number): string {
        return ('00' + v).slice(-2)
    }

    public get h(): string | undefined {
        if (this.isNull) {
            return undefined
        }
        return this.__slice(this._h)
    }
    public set h(v: string | undefined) {
        if (typeof v !== undefined) {
            this._h = 0
        }
        let parseV = parseInt(v)
        this._h = parseV === NaN ? 0 : parseV
    }

    public get m(): string {
        if (this.isNull) {
            return undefined
        }
        return this.__slice(this._h)
    }
    public set m(v: string) {
        let parseV = parseInt(v)
        this._m = parseV === NaN ? 0 : parseV
    }

    public get s(): string {
        if (this.isNull) {
            return undefined
        }
        return this.__slice(this._h)
    }
    public set s(v: string) {
        let parseV = parseInt(v)
        this._s = parseV === NaN ? 0 : parseV
    }

    /**
     * @private
     * A method to normalize numerical value of hour, minute, second.
     */
    private normalize() {
        this._m += Math.floor(this._s / 60)
        this._h += Math.floor(this._m / 60)
        this._s %= 60
        this._m %= 60
        this._h %= 24
    }
    /**
     * A method for getting a string representing time.
     *
     * @param {boolean} withCoron Whether to add a coron to the string
     * @param {boolean} withSecond Whether to include seconds.
     */
    public str(withCoron: boolean = true, withSecond: boolean = true): string {
        if (withCoron) {
            return this.h + ':' + this.m + (withSecond ? ':' + this.s : '')
        } else {
            return this.h + this.m + (withSecond ? this.s : '')
        }
    }
}

declare var EndpointWork: EndpointWork

interface EndpointWork {
    // new(
    //     worktype: number,
    //     track?: number,
    //     departure?: Time,
    //     arrival?: Time,
    //     operationNum?: string,
    // ): EndpointWork;
    worktype: number
    track?: number
    departure?: Time
    arrival?: Time
    operationNum?: string
}

/**
 * A class with a data structure such as OuDia file.
 *
 * @author up-tri
 * @since 1.0
 */
export class DataSet {
    private _fileStruct: any
    public get fileStruct(): any {
        return this._fileStruct
    }
    public set fileStruct(v: any) {
        this._fileStruct = v
    }

    /**
     * filetype
     */
    private _fileType: string = ''
    public get fileType(): string {
        return this._fileType
    }
    public set fileType(v: string) {
        this._fileType = v
    }

    private _fileTypeAppComment: string = ''
    public get fileTypeAppComment(): string {
        return this._fileTypeAppComment
    }
    public set fileTypeAppComment(v: string) {
        this._fileTypeAppComment = v
    }

    /**
     * A string of route name.
     */
    private _name: string = ''
    public get name(): string {
        return this._name
    }
    public set name(v: string) {
        this._name = v
    }
    /**
     * A string of route color.
     * This field needs to be stored as 6-digit HEX color (eg. "#0033ff" ).
     */
    private _color: Color = new Color()
    public get color(): Color {
        return this._color
    }
    public set color(v: Color) {
        this._color = v
    }
    /**
     * A collection of all the station information included in this route.
     */
    private _stations: Array<Station> = new Array<Station>()
    public get stations(): Array<Station> {
        return this._stations
    }
    public set stations(v: Array<Station>) {
        this._stations = v
    }
    /**
     * A collection of all the train type information included in this route.
     */
    private _trainTypes: Array<TrainType> = new Array<TrainType>()
    public get trainTypes(): Array<TrainType> {
        return this._trainTypes
    }
    public set trainTypes(v: Array<TrainType>) {
        this._trainTypes = v
    }
    /**
     * A collection of all the diagram included in this route.
     */
    private _diagrams: Array<Diagram> = new Array<Diagram>()
    public get diagrams(): Array<Diagram> {
        return this._diagrams
    }
    public set diagrams(v: Array<Diagram>) {
        this._diagrams = v
    }

    // private dataNameLength: number = 0
    // private stationNameLength: number = 0
    // private timeTableWidth: number = 0
    // private diagramStartTime: number = 0
    // private stationSpacing: number = 0

    constructor() {
        this.fileStruct = {
            Rosen: [[]],
            Eki: [[]],
            Ressyasyubetsu: [[]],
            Dia: [{}],
            DispProp: [[]],
        }
    }

    /**
     * A method to get the property from the line defining the value.
     *
     * @param {string} str line
     * @return {string} A string of property key
     */
    private static command(str: string): string {
        return str.split(/=/)[0]
    }

    /**
     * A method to get the value from the line defining the value.
     *
     * @param {string} str line
     * @return {string} A string of property value
     */
    private static value(str: string): string {
        return str.split(/=/)[1]
    }

    /**
     * A method to get the property and value from the line defining the value.
     *
     * @param {string} str line
     * @return {string[]} An string array consist of property name and value
     */
    private static split(str: string): string[] {
        return [DataSet.command(str), DataSet.value(str)]
    }

    /**
     * A method to parse and store data deriverd from lines array of OuDiaSecond v1.05
     * @param {Array<string>} lines rows array of OuDia file
     */
    public fromOud2(lines:Array<string>):Promise<any>{
        return new Promise((resolve: () => void, _: (reason?: any) => void) => {
            /**
             *  propertyStack is stack of nested parent's
             *
             *  oudia file format has nested list
             *  "Hoge." start Hoge node  and "." end current node
             *
             *  stack is pushed when found new node
             *  stack is poped when end current node
             */
            let propertyStack:Array<string>=new Array<string>();
            /**
             *  current node name
             */
            let property:string="";

            let mStation=new Station();
            let mStop=new Stop();
            let mTrainType=new TrainType();
            let mDia=new Diagram();
            let mStreak=new Streak();
            /**
             *   Indicates the direction of the reading train
             *      - 10 ... area of downward timetable
             *      - 20 ... area of upward timetable
             *      - 0  ... no information
             */
            let direct=0;

            for(let i=0;i<lines.length;i++){
                if(lines[i]=="."){
                    //end current node
                    property=propertyStack.pop();
                    if(property==""){
                        break;
                    }
                    continue;
                }
                if(lines[i].endsWith(".")){
                    //start new node
                    propertyStack.push(property);
                    property=lines[i].substring(0,lines[i].length-1);
                    if(property=="Ressya"){
                        mStreak=new Streak();
                        switch (direct) {
                            case 10:
                                mDia.downStreaks.push(mStreak);
                                break;
                            case 20:
                                mDia.upStreaks.push(mStreak);
                                break;
                            default:
                            //null direction is set.
                        }
                    }
                    if(property=="EkiTrack2") {
                        mStop=new Stop();
                        mStation.stops.push(mStop);
                    }
                    if(property=="Eki"){
                        mStation=new Station();
                        this.stations.push(mStation);
                    }
                    if(property=="Ressyasyubetsu") {
                        mTrainType=new TrainType();
                        this.trainTypes.push(mTrainType);
                    }
                    if(property=="Dia") {
                        mDia=new Diagram();
                        this.diagrams.push(mDia);
                    }
                    if(property=="Kudari") {
                        direct=10;
                    }
                    if(property=="Nobori") {
                        direct=20;
                    }

                    continue;
                }
                let command=DataSet.command(lines[i]);
                let value=DataSet.command(lines[i]);
                if(property=="Ressya"){
                    mStreak.setValue(command,value);
                }
                if(property=="EkiTrack2"){
                    mStop.setValue(command,value);
                }
                if(property=="Eki"){
                    mStation.setValue(command,value);
                }
                if(property=="Ressyasyubetsu"){
                    mTrainType.setValue(command,value);
                }
                if(property=="Dia"){
                    mDia.setValue(command,value);
                }
                if(property=="Rosen"){
                    this.setValue(command,value);
                }

            }

            resolve();
        }).then(() => {})
            .catch(() => console.log('ERROR'))

    }

    /**
     * A method to parse and store data derived from lines array of OuDia file's text.
     *
     * @param {Array<string>} lines rows array of OuDia file
     * @return {Promise<any>} file struct object or null
     */
    public fromOud(lines: Array<string>): Promise<any> {
        return new Promise((resolve: () => void, _: (reason?: any) => void) => {
            /**
             * In order to carry out the analysis smoothly,
             * analyze the line number in which constituent elements
             * such as train information and station information are described in advance.
             */
            let currentProp: string = ''
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i]
                let propMatch = line.match(/^(.+)\.$/)
                let propEndMatch = line.match(/^\.$/)
                if (propMatch !== null) {
                    currentProp = propMatch[1]
                    if (currentProp == 'Dia') {
                        let direc = 'root'
                        let Dia: any = {
                            start: i,
                            end: -1,
                            Kudari: [[]],
                            Nobori: [[]],
                        }
                        i += 1
                        let currentPropChild = ''
                        for (let j = i; j < lines.length; j++) {
                            let line = lines[j]
                            let propMatchChild = line.match(/^(.+)\.$/)
                            let propEndMatchChild = line.match(/^\.$/)
                            if (propMatchChild !== null) {
                                currentPropChild = propMatchChild[1]
                                if (currentPropChild == 'Kudari') {
                                    direc = 'Kudari'
                                } else if (currentPropChild == 'Nobori') {
                                    direc = 'Nobori'
                                } else if (currentPropChild == 'Ressya') {
                                    Dia[direc][Dia[direc].length] = {
                                        start: j,
                                    }
                                }
                            } else if (propEndMatchChild !== null) {
                                if (currentPropChild == 'Ressya') {
                                    Dia[direc][Dia[direc].length - 1].end = j
                                    currentPropChild = direc
                                } else if (
                                    direc == 'Kudari' ||
                                    direc == 'Nobori'
                                ) {
                                    Dia[direc][Dia[direc].length - 1].end = j
                                    Dia[direc].shift()
                                    direc = 'root'
                                } else if (direc == 'root') {
                                    i = j
                                    break
                                }
                            }
                        }
                        Dia.end = i
                        this.fileStruct.Dia.push(Dia)
                    } else {
                        this.fileStruct[currentProp][
                            this.fileStruct[currentProp].length
                        ] = { start: i }
                    }
                } else if (propEndMatch !== null) {
                    if (currentProp == 'Dia') {
                        this.fileStruct['Rosen'][
                            this.fileStruct['Rosen'].length - 1
                        ].end = i
                    } else {
                        this.fileStruct[currentProp][
                            this.fileStruct[currentProp].length - 1
                        ].end = i
                    }
                }
            }

            this.fileStruct.Rosen.shift()
            this.fileStruct.Eki.shift()
            this.fileStruct.Ressyasyubetsu.shift()
            this.fileStruct.Dia.shift()
            this.fileStruct.DispProp.shift()

            this.stations = new Array<Station>(this.fileStruct.Eki.length)
            this.trainTypes = new Array<TrainType>(
                this.fileStruct.Ressyasyubetsu.length
            )
            this.diagrams = new Array<Diagram>(this.fileStruct.Dia.length)

            resolve()
        }).then(() => {
            /**
             * Next, analyze in parallel based on the line number processed earlier.
             */
            Promise.all([
                new Promise((resolve, reject) => {
                    // for root (Basic information such as file information.)
                    let fileTypeLine = DataSet.split(lines[0])
                    if (fileTypeLine[0] == 'FileType') {
                        this.fileType = fileTypeLine[1]
                    } else {
                        reject(1)
                        return
                    }
                    let fileTypeAppCommentLine = DataSet.split(
                        lines[
                            this.fileStruct.DispProp[
                                this.fileStruct.DispProp.length - 1
                            ].end + 1
                        ]
                    )
                    if (fileTypeAppCommentLine[0] == 'FileTypeAppComment') {
                        this.fileTypeAppComment = fileTypeAppCommentLine[1]
                    } else {
                        reject(2)
                        return
                    }
                    resolve()
                }),
                new Promise((resolve, _) => {
                    // for station info
                    let promises = []
                    for (let _i = 0; _i < this.fileStruct.Eki.length; _i++) {
                        promises.push(
                            new Promise((_resolve, _reject) => {
                                let i = _i
                                let st = new Station()
                                for (
                                    let j = this.fileStruct.Eki[i].start;
                                    j < this.fileStruct.Eki[i].end;
                                    j++
                                ) {
                                    let lineArr = DataSet.split(lines[j])
                                    switch (lineArr[0]) {
                                        case 'Ekimei':
                                            st.name = lineArr[1]
                                            break
                                        case 'Ekijikokukeisiki':
                                            st.timeType = Station.timeTypeToInt(
                                                lineArr[1]
                                            )
                                            break
                                        case 'Ekikibo':
                                            st.scale = Station.scaleToInt(
                                                lineArr[1]
                                            )
                                            break
                                        case 'Kyoukaisen':
                                            st.boundary = true
                                            break
                                        case 'DiagramRessyajouhouHyoujiKudari':
                                            st.trainInfoDown = Station.trainInfoToInt(
                                                lineArr[1]
                                            )
                                            break
                                        case 'DiagramRessyajouhouHyoujiNobori':
                                            st.trainInfoUp = Station.trainInfoToInt(
                                                lineArr[1]
                                            )
                                            break
                                    }
                                }
                                this.stations[i] = st
                                _resolve()
                            })
                        )
                    }
                    Promise.all(promises).then(resolve)
                }),
                new Promise((resolve, _) => {
                    // for train type
                    let promises = []
                    for (
                        let _i = 0;
                        _i < this.fileStruct.Ressyasyubetsu.length;
                        _i++
                    ) {
                        promises.push(
                            new Promise((_resolve: () => void, _reject) => {
                                let i = _i
                                let tr = new TrainType()
                                for (
                                    let j = this.fileStruct.Ressyasyubetsu[i]
                                        .start;
                                    j < this.fileStruct.Ressyasyubetsu[i].end;
                                    j++
                                ) {
                                    let lineArr = DataSet.split(lines[j])
                                    switch (lineArr[0]) {
                                        case 'Syubetsumei':
                                            tr.name = lineArr[1]
                                            break
                                        case 'Ryakusyou':
                                            tr.shortname = lineArr[1]
                                            break
                                        case 'JikokuhyouMojiColor':
                                            let trainColor = new Color()
                                            trainColor.setFromABGR(lineArr[1])
                                            tr.trainColor = trainColor
                                            break
                                        case 'JikokuhyouMojiIndex':
                                            tr.fontIdx = Number.parseInt(
                                                lineArr[1]
                                            )
                                            break
                                        case 'DiagramSenColor':
                                            let lineColor = new Color()
                                            lineColor.setFromABGR(lineArr[1])
                                            tr.lineColor = lineColor
                                            break
                                        case 'DiagramSenStyle':
                                            tr.lineType = TrainType.lineStyleToInt(
                                                lineArr[1]
                                            )
                                            break
                                        case 'DiagramSenIsBold':
                                            tr.lineWeight = 2
                                            break
                                        case 'StopMarkDrawType':
                                            tr.shoudDrawStopMark = true
                                            break
                                    }
                                }
                                this.trainTypes[i] = tr
                                _resolve()
                            })
                        )
                    }
                    Promise.all(promises).then(resolve)
                }),
                new Promise((resolve, _) => {
                    // for diagram
                    let promises = []
                    for (let _i = 0; _i < this.fileStruct.Dia.length; _i++) {
                        promises.push(
                            new Promise((_resolve: () => void, _reject) => {
                                let i = _i
                                let dia = new Diagram()
                                dia.downStreaks = new Array<Streak>(
                                    this.fileStruct.Dia[i].Kudari.length
                                )
                                dia.upStreaks = new Array<Streak>(
                                    this.fileStruct.Dia[i].Nobori.length
                                )
                                let diaPromises = []
                                for (
                                    let _j = 0;
                                    _j < this.fileStruct.Dia[i].Kudari.length;
                                    _j++
                                ) {
                                    diaPromises.push(
                                        new Promise((__resolve, __reject) => {
                                            let j = _j
                                            let st = new Streak()
                                            for (
                                                let k = this.fileStruct.Dia[i]
                                                    .Kudari[j].start;
                                                k <
                                                this.fileStruct.Dia[i].Kudari[j]
                                                    .end;
                                                k++
                                            ) {
                                                let lineArr = DataSet.split(
                                                    lines[k]
                                                )
                                                switch (lineArr[0]) {
                                                    case 'Syubetsu':
                                                        st.typeIdx = Number.parseInt(
                                                            lineArr[1]
                                                        )
                                                        break
                                                    case 'RessyaBangou':
                                                        st.operationNum =
                                                            lineArr[1]
                                                        break
                                                    case 'Ressyamei':
                                                        st.name = lineArr[1]
                                                        break
                                                    case 'Gousuu':
                                                        st.no = lineArr[1]
                                                        break
                                                    case 'EkiJikoku':
                                                        let stHandlingsStrArr = lineArr[1].split(
                                                            ','
                                                        )
                                                        let stHandlings = new Array<
                                                            StHandling
                                                        >(
                                                            stHandlingsStrArr.length
                                                        )
                                                        for (
                                                            let n = 0;
                                                            n <
                                                            stHandlingsStrArr.length;
                                                            n++
                                                        ) {
                                                            let stStr =
                                                                stHandlingsStrArr[
                                                                    n
                                                                ]
                                                            let sth = new StHandling()
                                                            if (stStr !== '') {
                                                                const homeAndTimes = stStr.split(
                                                                    ';'
                                                                )
                                                                sth.type = Number.parseInt(
                                                                    homeAndTimes[0]
                                                                )
                                                                // when station time exists
                                                                if (
                                                                    homeAndTimes[1] !==
                                                                    undefined
                                                                ) {
                                                                    const arrAndDep = homeAndTimes[1].split(
                                                                        '/'
                                                                    )
                                                                    if (
                                                                        arrAndDep[1] ===
                                                                        undefined
                                                                    ) {
                                                                        sth.arrival.isNull = true
                                                                        sth.departure.isNull = false
                                                                        sth.departure.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                    } else if (
                                                                        arrAndDep[1] ===
                                                                        ''
                                                                    ) {
                                                                        sth.arrival.isNull = false
                                                                        sth.arrival.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                        sth.departure.isNull = true
                                                                    } else {
                                                                        sth.departure.isNull = false
                                                                        sth.departure.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                        sth.arrival.isNull = false
                                                                        sth.arrival.setTime(
                                                                            arrAndDep[1]
                                                                        )
                                                                    }
                                                                }
                                                            }
                                                            stHandlings[n] = sth
                                                        }
                                                        st.stHandlings = stHandlings
                                                        break
                                                    case 'Bikou':
                                                        st.comment = lineArr[1]
                                                        break
                                                }
                                            }
                                            dia.downStreaks[j] = st
                                            __resolve()
                                        })
                                    )
                                }
                                for (
                                    let _j = 0;
                                    _j < this.fileStruct.Dia[i].Nobori.length;
                                    _j++
                                ) {
                                    diaPromises.push(
                                        new Promise((__resolve, __reject) => {
                                            let j = _j
                                            let st = new Streak()
                                            for (
                                                let k = this.fileStruct.Dia[i]
                                                    .Nobori[j].start;
                                                k <
                                                this.fileStruct.Dia[i].Nobori[j]
                                                    .end;
                                                k++
                                            ) {
                                                let lineArr = DataSet.split(
                                                    lines[k]
                                                )
                                                switch (lineArr[0]) {
                                                    case 'Syubetsu':
                                                        st.typeIdx = Number.parseInt(
                                                            lineArr[1]
                                                        )
                                                        break
                                                    case 'RessyaBangou':
                                                        st.operationNum =
                                                            lineArr[1]
                                                        break
                                                    case 'Ressyamei':
                                                        st.name = lineArr[1]
                                                        break
                                                    case 'Gousuu':
                                                        st.no = lineArr[1]
                                                        break
                                                    case 'EkiJikoku':
                                                        let stHandlingsStrArr = lineArr[1].split(
                                                            ','
                                                        )
                                                        let stHandlings = new Array<
                                                            StHandling
                                                        >(
                                                            stHandlingsStrArr.length
                                                        )
                                                        for (
                                                            let n = 0;
                                                            n <
                                                            stHandlingsStrArr.length;
                                                            n++
                                                        ) {
                                                            let stStr =
                                                                stHandlingsStrArr[
                                                                    n
                                                                ]
                                                            let sth = new StHandling()
                                                            if (stStr !== '') {
                                                                const homeAndTimes = stStr.split(
                                                                    ';'
                                                                )
                                                                sth.type = Number.parseInt(
                                                                    homeAndTimes[0]
                                                                )
                                                                var arrival = new Time()
                                                                var departure = new Time()
                                                                // when station time exists
                                                                if (
                                                                    homeAndTimes[1] !==
                                                                    undefined
                                                                ) {
                                                                    const arrAndDep = homeAndTimes[1].split(
                                                                        '/'
                                                                    )
                                                                    if (
                                                                        arrAndDep[1] ===
                                                                        undefined
                                                                    ) {
                                                                        arrival.isNull = true
                                                                        departure.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                    } else if (
                                                                        arrAndDep[1] ===
                                                                        ''
                                                                    ) {
                                                                        arrival.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                        departure.isNull = true
                                                                    } else {
                                                                        departure.setTime(
                                                                            arrAndDep[0]
                                                                        )
                                                                        arrival.setTime(
                                                                            arrAndDep[1]
                                                                        )
                                                                    }
                                                                } else {
                                                                    arrival.isNull = true
                                                                    departure.isNull = true
                                                                }
                                                                sth.arrival = arrival
                                                                sth.departure = departure
                                                            }
                                                            stHandlings[n] = sth
                                                        }
                                                        st.stHandlings = stHandlings
                                                        break
                                                    case 'Bikou':
                                                        st.comment = lineArr[1]
                                                        break
                                                }
                                            }
                                            dia.upStreaks[j] = st
                                            __resolve()
                                        })
                                    )
                                }
                                this.diagrams[i] = dia
                                _resolve()
                            })
                        )
                    }
                    Promise.all(promises).then(resolve)
                }),
            ])
                .then(() => {})
                .catch(() => console.log('ERROR'))

            // // for Rosen
            // for (let i = 0; i < this.fileStruct.Rosen.length; i++) {
            //     for (let j = this.fileStruct.Rosen[i].start; j < this.fileStruct.Rosen[i].end; j++) {

            //     }
            // }
        })
    }

    // private static getStationFromLines(
    //     current: number,
    //     lines: Array<string>
    // ): [Station, number] {
    //     let _st = new Station()
    //     let endIdx = -1
    //     for (let i = current; i < lines.length; i++) {
    //         let line = lines[i]
    //         if (line.match('.')) {
    //             endIdx = i
    //             break
    //         } else {
    //             let splitLine = DataSet.split(line)
    //         }
    //     }
    //     return [_st, endIdx]
    // }
}

/**
 * A class that constitutes a facility
 * that can be treated as a station on the operation of a train,
 * such as a station such as a station or a signal field.
 */
export class Station {
    /**
     * 駅名
     *
     * station's name
     *
     * @type {string}
     */
    private _name: string = ''
    public get name(): string {
        return this._name
    }
    public set name(v: string) {
        this._name = v
    }
    /**
     * 駅時刻形式
     *
     * time display format at the station
     *      - 10 ... shown in arrival and departure
     *      - 20 ... only arrival of outbound line
     *      - 30 ... only arrival of up line
     *      - 0  ... only arrival
     *
     * @type {number}
     */
    private _timeType: number = 0
    public get timeType(): number {
        return this._timeType
    }
    public set timeType(v: number) {
        this._timeType = v
    }
    /**
     * 駅規模
     *
     * station scale
     *
     * @type {number}
     */
    private _scale: number = 0
    public get scale(): number {
        return this._scale
    }
    public set scale(v: number) {
        this._scale = v
    }
    /**
     * 下りダイヤグラム列車情報
     *
     * train-information's (for downward direction) display format
     *
     * @type {number}
     */
    private _trainInfoDown: number = 0
    public get trainInfoDown(): number {
        return this._trainInfoDown
    }
    public set trainInfoDown(v: number) {
        this._trainInfoDown = v
    }
    /**
     * 上りダイヤグラム列車情報
     *
     * train-information's (for up direction) display format
     *
     * @type {number}
     */
    private _trainInfoUp: number = 0
    public get trainInfoUp(): number {
        return this._trainInfoUp
    }
    public set trainInfoUp(v: number) {
        this._trainInfoUp = v
    }
    /**
     * 境界線表示
     *
     * If true, display the boundary.
     *
     * **notice**
     *
     * This parameter is used only in the conventional version.
     *
     * @type {boolean}
     */
    private _boundary: boolean = false
    public get boundary(): boolean {
        return this._boundary
    }
    public set boundary(v: boolean) {
        this._boundary = v
    }
    /**
     * 駅の扱い方（分岐起点、環状終点　など）
     *
     * handling pattern of this station
     * (eg. bifurcation point or starting point of a circular line)
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type {number}
     */
    private _additionalOption: number = 0
    public get additionalOption(): number {
        return this._additionalOption
    }
    public set additionalOption(v: number) {
        this._additionalOption = v
    }
    /**
     * 時刻表下り番線表示
     *
     * If it is set to true, departure / arrival line of the down line are displayed in the timetable.
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type {boolean}
     */
    private _shouldShowLineNumberDown: boolean = false
    public get shouldShowLineNumberDown(): boolean {
        return this._shouldShowLineNumberDown
    }
    public set shouldShowLineNumberDown(v: boolean) {
        this._shouldShowLineNumberDown = v
    }
    /**
     * 時刻表上り番線表示
     *
     * If it is set to true, departure / arrival line of the up line are displayed in the timetable.
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type {boolean}
     */
    private _shouldShowLineNumberUp: boolean = false
    public get shouldShowLineNumberUp(): boolean {
        return this._shouldShowLineNumberUp
    }
    public set shouldShowLineNumberUp(v: boolean) {
        this._shouldShowLineNumberUp = v
    }
    /**
     * 在線表表示
     *
     * If it is set to true, the departure and arrival departure is displayed in the diagram.
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type {boolean}
     */
    private _shouldShowLines: boolean = false
    public get shouldShowLines(): boolean {
        return this._shouldShowLines
    }
    public set shouldShowLines(v: boolean) {
        this._shouldShowLines = v
    }
    /**
     * 番線構成
     *
     * track number configuration of the station
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type { {string, string}[] }
     */
    private _lines: {
        name: string
        shortname: string
    }[] = []
    public get lines(): { name: string; shortname: string }[] {
        return this._lines
    }
    public set lines(v: { name: string; shortname: string }[]) {
        this._lines = v
    }
    /**
     * 下り本線のindex
     *
     * main line order of down line
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @example
     *
     * ```ts
     * var st = new Station();
     * st.lines = [ {name: "No1", shortname: "1"}, {name: "No2", shortname: "2"} ];
     * // This points to the 0th position of the array, ie "No1".
     * st._mainLineDown = 0;
     * // This points to the 1st position of the array, ie "No2".
     * st._mainLineUp = 1;
     * ```
     *
     * @type {number}
     */
    private _mainLineDown: number = 0
    public get mainLineDown(): number {
        return this._mainLineDown
    }
    public set mainLineDown(v: number) {
        this._mainLineDown = v
    }
    /**
     * 上り本線のindex
     *
     * main line order of up line
     *
     * See Field A for usage of this field
     *
     * **notice**
     *
     * This parameter is not used in the conventional format (.oud) .
     * Used in a file of a different software format (.oud2) .
     *
     * @type {number}
     */
    private _mainLineUp: number = 0
    public get mainLineUp(): number {
        return this._mainLineUp
    }
    public set mainLineUp(v: number) {
        this._mainLineUp = v
    }

    /**
     * A static method to convert OuDia value of display station time type to numeric parameter.
     *
     * @param {string} value A value of property line
     * @return {number} property number as integer
     *                  - 10 ... arrival and departure
     *                  - 20 ... arrival of outbound line
     *                  - 30 ... arrival of up line
     *                  - 0  ... only arrival
     */
    public static timeTypeToInt(value: string): number {
        switch (value) {
            case 'Jikokukeisiki_Hatsuchaku':
                return 10
            case 'Jikokukeisiki_KudariChaku':
                return 20
            case 'Jikokukeisiki_NoboriChaku':
                return 30
            default:
                return 0
        }
    }
    /**
     * A method of converting the integer value of the station time to the string value of OuDia format.
     *
     * @return {string} station time type value (OuDia format string)
     */
    public parseTimeType(): string {
        switch (this.timeType) {
            case 10:
                return 'Jikokukeisiki_Hatsuchaku'
            case 20:
                return 'Jikokukeisiki_KudariChaku'
            case 30:
                return 'Jikokukeisiki_NoboriChaku'
            default:
                return 'Jikokukeisiki_Hatsu'
        }
    }
    /**
     * A static method to convert OuDia value of station scale to numeric parameter.
     *
     * @param {string} value A value of property line
     * @return {number} property number as integer
     *                  - 10 ... large-scale station ( eg. terminal )
     *                  - 0  ... normal station
     */
    public static scaleToInt(value: string): number {
        switch (value) {
            case 'Ekikibo_Syuyou':
                return 10
            default:
                return 0
        }
    }
    /**
     * A method of converting the integer value of the station size to the string value of OuDia format.
     *
     * @todo Consider the value in the case of a normal station.
     *
     * @return {string} station size value (OuDia format string)
     */
    public parseScale(): string {
        switch (this.scale) {
            case 10:
                return 'Ekikibo_Syuyou'
            // case 0:
            default:
                return 'Ekikibo_Ippan'
        }
    }
    /**
     * A static method to convert OuDia value of train-information's display format to numeric parameter.
     *
     * @param {string} value A value of property line
     * @return {number} property number as integer
     *                  - 20 ... always show
     *                  - 10 ... displayed only when it is the starting station
     *                  - 0  ... do not show
     */
    public static trainInfoToInt(value: string): number {
        switch (value) {
            case 'DiagramRessyajouhouHyouji_Anytime':
                return 20
            case 'DiagramRessyajouhouHyouji_Not':
                return 0
            default:
                return 10
        }
    }

    /**
     * oudiaファイルの１行を用いて情報を追加します
     * oudia ファイルは=でキーと値が結ばれている
     *
     * @param command key of the line of oudia file
     * @param value   value of the line of oudia file
     */
    public setValue(command:string,value:string){
        switch (command) {
            case "Ekimei":
                this.name=value;
                break;
            case "Ekijikokukeisiki":
                this.timeType=Station.timeTypeToInt(value);
                break;
            case "Ekikibo":
                this.scale=Station.scaleToInt(value);
                break;
            case "DiagramRessyajouhouHyoujiKudari":
                this.trainInfoDown=Station.trainInfoToInt(value);
                break;
            case "DiagramRessyajouhouHyoujiNobori":
                this.trainInfoUp=Station.trainInfoToInt(value);
                break;
            case "DownMain":
                this.mainLineDown=parseInt(value);
                break;
            case "UpMain":
                this.mainLineUp=parseInt(value);
                break;
            case "LoopOriginEkiIndex":
                //todo
                break;
            case "BrunchCoreEkiIndex":
                //todo
                //分岐駅の扱いがoudとoud2ndで別なので要調整
                break;
            case "JikokuhyouTrackDisplayKudari":
                this.shouldShowLineNumberDown=(value=="1");
                break;
            case "JikokuhyouTrackDisplayNobori":
                this.shouldShowLineNumberUp=(value=="1");
                break;
            case "DiagramTrackDisplay":
                this.shouldShowLines=(value=="1");
                break;
            case "NextEkiDistance":
                //todo
                break;
        }
    }
}

/**
 * A class of Stop in Station
 * Sometimes, this is called platform
 *
 * oudia2ndのEkiTrack2Contに対応
 */
export class Stop{
    /**
     * 番線名
     * stop name
     * @type {string}
     */
    private _name:string;
    public get name():string{
        return this._name;
    }
    public set name(v:string){
        this._name=v;
    }

    /**
     * 種別略称
     *
     * 数字もしくはアルファベットを推奨する。
     *
     * Abbreviation for stop name
     */
    private _shortName:string;
    public get shortName():string{
        return this._shortName;
    }
    public set shortName(v:string){
        this._shortName=v;
    }
}

/**
 * A class constituting the train type included in this route.
 */
export class TrainType {
    /**
     * 列車種別名
     *
     * train type name
     *
     * @type {string}
     */
    private _name: string
    public get name(): string {
        return this._name
    }
    public set name(v: string) {
        this._name = v
    }
    /**
     * 種別略称名
     *
     * Abbreviation for train type name
     *
     * @type {string}
     */
    private _shortname: string
    public get shortname(): string {
        return this._shortname
    }
    public set shortname(v: string) {
        this._shortname = v
    }
    /**
     * 種別色
     *
     * Color of train type
     *
     * @type {Color}
     */
    private _trainColor: Color
    public get trainColor(): Color {
        return this._trainColor
    }
    public set trainColor(v: Color) {
        this._trainColor = v
    }
    /**
     * 時刻表フォントのIndex
     *
     * Index of font for time display.
     *
     * @type {number}
     */
    private _fontIdx: number
    public get fontIdx(): number {
        return this._fontIdx
    }
    public set fontIdx(v: number) {
        this._fontIdx = v
    }
    /**
     * 種別の線色
     *
     * Line color of train type
     *
     * @type {Color}
     */
    private _lineColor: Color
    public get lineColor(): Color {
        return this._lineColor
    }
    public set lineColor(v: Color) {
        this._lineColor = v
    }
    /**
     * ダイヤグラム上での線の種類
     *
     * A number of line type when drawing on diagrams
     *
     * - 0  ... normal line        eg. "-------"
     * - 10 ... dotted line        eg. ". . . ."
     * - 20 ... dashed line        eg. "- - - -"
     * - 30 ... dash-dotted line   eg. "-.-.-.-"
     * - 40 ... Two-dot chain line eg. "-..-..-"
     *
     * @type {number}
     */
    private _lineType: number
    public get lineType(): number {
        return this._lineType
    }
    public set lineType(v: number) {
        this._lineType = v
    }
    /**
     * 線の太さ
     *
     * line width when drawn on the diagram
     *
     * @type {number} Numerical value representing thickness. Unit is pixel.
     */
    private _lineWeight: number
    public get lineWeight(): number {
        return this._lineWeight
    }
    public set lineWeight(v: number) {
        this._lineWeight = v
    }

    private _shoudDrawStopMark: boolean
    public get shoudDrawStopMark(): boolean {
        return this._shoudDrawStopMark
    }
    public set shoudDrawStopMark(v: boolean) {
        this._shoudDrawStopMark = v
    }

    constructor() {
        this._name = ''
        this._shortname = ''
        this._trainColor = new Color()
        this._fontIdx = 0
        this._lineColor = new Color()
        this._lineType = 0
        this._lineWeight = 0
        this._shoudDrawStopMark = false
    }

    /**
     * A static method to convert OuDia value of train line style (in the diagram view) to numeric parameter.
     *
     * @param {string} str
     * @return {number}
     */
    public static lineStyleToInt(str: string): number {
        switch (str) {
            case 'SenStyle_Tensen':
                return 10
            case 'SenStyle_Hasen':
                return 20
            default:
                return 0
        }
    }
}
export class Diagram {
    /**
     * ダイヤグラム名
     */
    private _name: string = ''
    public get name(): string {
        return this._name
    }
    public set name(v: string) {
        this._name = v
    }
    /**
     * 下り運用
     *
     * Train operation in the downward direction
     */
    private _downStreaks: Array<Streak> = new Array<Streak>()
    public get downStreaks(): Array<Streak> {
        return this._downStreaks
    }
    public set downStreaks(v: Array<Streak>) {
        this._downStreaks = v
    }
    /**
     * 上り運用
     *
     * Train operation in the up direction
     */
    private _upStreaks: Array<Streak> = new Array<Streak>()
    public get upStreaks(): Array<Streak> {
        return this._upStreaks
    }
    public set upStreaks(v: Array<Streak>) {
        this._upStreaks = v
    }
}
/**
 * Class that implements train operation called "streak".
 */
export class Streak {
    /**
     * 運用番号
     *
     * Train operation number
     *
     * @type {string}
     */
    private _operationNum: string = ''
    public get operationNum(): string {
        return this._operationNum
    }
    public set operationNum(v: string) {
        this._operationNum = v
    }
    /**
     * 列車種別を格納する配列のindex
     *
     * Index of array storing train type (`Array<TrainType>`)
     *
     * @type {number}
     */
    private _typeIdx: number = 0
    public get typeIdx(): number {
        return this._typeIdx
    }
    public set typeIdx(v: number) {
        this._typeIdx = v
    }
    /**
     * 列車名
     *
     * train name
     *
     * @type {string}
     */
    private _name: string = ''
    public get name(): string {
        return this._name
    }
    public set name(v: string) {
        this._name = v
    }
    /**
     * 号数
     *
     * train No.
     *
     * @type {string}
     */
    private _no?: string | undefined
    public get no(): string | undefined {
        return this._no
    }
    public set no(v: string | undefined) {
        this._no = v
    }
    /**
     * 行き先駅の配列Index
     *
     * Destination index of `Array<Station>`
     *
     * @type {number}
     */
    private _destIdx: number = 0
    public get destIdx(): number {
        return this._destIdx
    }
    public set destIdx(v: number) {
        this._destIdx = v
    }
    /**
     * 各駅の発着を格納する配列
     *
     * An array storing the arrival and departure handling of each station.
     *
     * @type {Array<StHandling>}
     */
    private _stHandlings: Array<StHandling> = new Array<StHandling>()
    public get stHandlings(): Array<StHandling> {
        return this._stHandlings
    }
    public set stHandlings(v: Array<StHandling>) {
        this._stHandlings = v
    }
    /**
     * 備考情報
     *
     * additional comment
     *
     * @type {string}
     */
    private _comment: string = ''
    public get comment(): string {
        return this._comment
    }
    public set comment(v: string) {
        this._comment = v
    }
}

/**
 * A class to implement how to handle stations on rail operation.
 */
export class StHandling {
    /**
     * 駅の扱い方
     * - 0  ... 運行なし
     * - 10 ... 停車
     * - 20 ... 通過
     * - 30 ... 経由なし
     * - 40 ...直通
     *
     * Station handling type
     * - 0  ... no operation
     * - 10 ... stop
     * - 20 ... passing through
     * - 30 ... not via
     * - 40 ... direct
     *
     * @type {number}
     */
    private _type: number = 0
    public get type(): number {
        return this._type
    }
    public set type(v: number) {
        this._type = v
    }
    /**
     * 到着時刻
     *
     * arrival time
     *
     * @type {Time}
     */
    private _arrival: Time = new Time()
    public get arrival(): Time {
        return this._arrival
    }
    public set arrival(v: Time) {
        this._arrival = v
    }
    /**
     * 発車時刻
     *
     * departure time
     *
     * @type {Time}
     */
    private _departure: Time = new Time()
    public get departure(): Time {
        return this._departure
    }
    public set departure(v: Time) {
        this._departure = v
    }
    /**
     * 発着番線
     *
     * Arrival and departure track number
     *
     * @type {number}
     */
    private _track: number = 0
    public get track(): number {
        return this._track
    }
    public set track(v: number) {
        this._track = v
    }

    private _endpointWork: EndpointWork = EndpointWork
    public get endpointWork(): EndpointWork {
        return this._endpointWork
    }
    public set endpointWork(v: EndpointWork) {
        this._endpointWork = v
    }

    constructor() {
        this.type = 0
        this.arrival = new Time()
        this.departure = new Time()
    }
}

// var O_O = {
//     OudOperator: OudOperator,
//     Station: Station,
//     TrainType: TrainType,
//     Diagram: Diagram,
//     Time: Time,
//     Streak: Streak,
//     StHandling: StHandling,
//     DataSet: DataSet,
//     EndpointWork: EndpointWork,
// }
// export default O_O

// export {
//     OudOperator,
//     Station,
//     TrainType,
//     Diagram,
//     Time,
//     Streak,
//     StHandling,
//     DataSet,
//     EndpointWork,
// }
