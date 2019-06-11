"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A class for easy handling of color information
 *
 * @author up-tri
 * @since 1.0
 */
class Color {
    /**
     * @constructor
     * When a character string representing a color is given, fire *setFromHEX()*.
     *
     * @param {string} v Character string representing colors such as A and B (HEX notation)
     */
    constructor(v) {
        this._r = 0;
        this._g = 0;
        this._b = 0;
        if (v === undefined) {
            return;
        }
        this.setFromHEX(v);
    }
    /**
     * A method to store the color expressed in HEX format.
     *
     * @param {string} v Character string representing colors such as "#dc143c" and "#d4c" (HEX notation)
     */
    setFromHEX(v) {
        let matchResults = [
            v.match(/^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/),
            v.match(/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/),
        ];
        if (matchResults[0] !== null) {
            this._r = parseInt(matchResults[0][1] + matchResults[0][1], 16);
            this._g = parseInt(matchResults[0][2] + matchResults[0][2], 16);
            this._b = parseInt(matchResults[0][3] + matchResults[0][3], 16);
        }
        else if (matchResults[1] !== null) {
            this._r = parseInt(matchResults[1][1], 16);
            this._g = parseInt(matchResults[1][2], 16);
            this._b = parseInt(matchResults[1][3], 16);
        }
        else {
            console.log('ERROR');
        }
    }
    /**
     * A method to store the color expressed in HEX format.
     *
     * @param {string} v Character string representing colors such as "#dc143c" and "#d4c" (HEX notation)
     */
    setFromABGR(v) {
        let matchResult = v.match(/^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/);
        this._r = parseInt(matchResult[4], 16);
        this._g = parseInt(matchResult[3], 16);
        this._b = parseInt(matchResult[2], 16);
    }
    /**
     * to get string representing a color such as "rgb(220, 20, 60)"
     *
     * @return {string} color string
     */
    RGB() {
        return 'rgb(' + this._r + ', ' + this._g + ', ' + this._b + ')';
    }
    /**
     * to get string representing a color such as "#dc143c"
     *
     * @param {boolean} withSharp With or without "#"
     *
     * @return {string} A string representing color in the form of HEX
     */
    HEX(withSharp = true) {
        return ((withSharp ? '#' : '') +
            this._r.toString(16) +
            this._g.toString(16) +
            this._b.toString(16));
    }
    /**
     * to get string representing a color such as "#3c14dc00"
     *
     * @param {boolean} withSharp With or without "#"
     *
     * @return {string} A string representing color in the form of BGRA
     */
    BGR(withSharp = true) {
        return ((withSharp ? '#' : '') +
            this._b.toString(16) +
            this._g.toString(16) +
            this._r.toString(16) +
            '00');
    }
}
exports.Color = Color;
/**
 * A class for handling time information comfortably
 *
 * @author up-tri
 * @since 1.0
 */
class Time {
    constructor(v) {
        /**
         * When it is true, it indicates that the time is not defined.
         *
         * @type {boolean}
         */
        this.isNull = true;
        /**
         * hour(s) (0 ~ 23)
         *
         * @type {number}
         */
        this._h = 0;
        /**
         * minute(s) (0 ~ 59)
         *
         * @type {number}
         */
        this._m = 0;
        /**
         * second(s) (0 ~ 59)
         *
         * @type {number}
         */
        this._s = 0;
        if (v === undefined || v === null) {
            this.isNull = true;
            this._h = 0;
            this._m = 0;
            this._s = 0;
            return;
        }
        this.setTime(v);
    }
    setTime(v) {
        if (v.match(/^[0-9]{3,6}$/) === null) {
            this._h = 0;
            this._m = 0;
            this._s = 0;
            return;
        }
        let time = parseInt(v);
        if (3 <= v.length && v.length <= 4) {
            this._h = Math.floor(time / 100);
            this._m = time % 100;
            this._s = 0;
            this.isNull = false;
        }
        else if (5 <= v.length && v.length <= 6) {
            this._h = Math.floor(time / 10000);
            this._m = Math.floor((time % 10000) / 100);
            this._s = time % 100;
            this.isNull = false;
        }
        this.normalize();
    }
    __slice(v) {
        return ('00' + v).slice(-2);
    }
    get h() {
        if (this.isNull) {
            return undefined;
        }
        return this.__slice(this._h);
    }
    set h(v) {
        if (typeof v !== undefined) {
            this._h = 0;
        }
        let parseV = parseInt(v);
        this._h = parseV === NaN ? 0 : parseV;
    }
    get m() {
        if (this.isNull) {
            return undefined;
        }
        return this.__slice(this._h);
    }
    set m(v) {
        let parseV = parseInt(v);
        this._m = parseV === NaN ? 0 : parseV;
    }
    get s() {
        if (this.isNull) {
            return undefined;
        }
        return this.__slice(this._h);
    }
    set s(v) {
        let parseV = parseInt(v);
        this._s = parseV === NaN ? 0 : parseV;
    }
    /**
     * @private
     * A method to normalize numerical value of hour, minute, second.
     */
    normalize() {
        this._m += Math.floor(this._s / 60);
        this._h += Math.floor(this._m / 60);
        this._s %= 60;
        this._m %= 60;
        this._h %= 24;
    }
    /**
     * A method for getting a string representing time.
     *
     * @param {boolean} withCoron Whether to add a coron to the string
     * @param {boolean} withSecond Whether to include seconds.
     */
    str(withCoron = true, withSecond = true) {
        if (withCoron) {
            return this.h + ':' + this.m + (withSecond ? ':' + this.s : '');
        }
        else {
            return this.h + this.m + (withSecond ? this.s : '');
        }
    }
}
exports.Time = Time;
/**
 * 始終着駅操作
 *
 *
 */
class EndpointWork {
}
/**
 * A class with a data structure such as OuDia file.
 *
 * @author up-tri
 * @since 1.0
 */
class DataSet {
    // private dataNameLength: number = 0
    // private stationNameLength: number = 0
    // private timeTableWidth: number = 0
    // private diagramStartTime: number = 0
    // private stationSpacing: number = 0
    constructor() {
        this.loadingStartTime = 0;
        /**
         * filetype
         */
        this._fileType = '';
        this._fileTypeAppComment = '';
        /**
         * A string of route name.
         */
        this._name = '';
        /**
         * A string of route color.
         * This field needs to be stored as 6-digit HEX color (eg. "#0033ff" ).
         */
        this._color = new Color();
        /**
         * A collection of all the station information included in this route.
         */
        this._stations = new Array();
        /**
         * A collection of all the train type information included in this route.
         */
        this._trainTypes = new Array();
        /**
         * A collection of all the diagram included in this route.
         */
        this._diagrams = new Array();
        this.fileStruct = {
            Rosen: [[]],
            Eki: [[]],
            Ressyasyubetsu: [[]],
            Dia: [{}],
            DispProp: [[]],
        };
    }
    get fileStruct() {
        return this._fileStruct;
    }
    set fileStruct(v) {
        this._fileStruct = v;
    }
    get fileType() {
        return this._fileType;
    }
    set fileType(v) {
        this._fileType = v;
    }
    get fileTypeAppComment() {
        return this._fileTypeAppComment;
    }
    set fileTypeAppComment(v) {
        this._fileTypeAppComment = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get color() {
        return this._color;
    }
    set color(v) {
        this._color = v;
    }
    get stations() {
        return this._stations;
    }
    set stations(v) {
        this._stations = v;
    }
    get trainTypes() {
        return this._trainTypes;
    }
    set trainTypes(v) {
        this._trainTypes = v;
    }
    get diagrams() {
        return this._diagrams;
    }
    set diagrams(v) {
        this._diagrams = v;
    }
    /**
     * A method to get the property from the line defining the value.
     *
     * @param {string} str line
     * @return {string} A string of property key
     */
    static command(str) {
        return str.split(/=/)[0];
    }
    /**
     * A method to get the value from the line defining the value.
     *
     * @param {string} str line
     * @return {string} A string of property value
     */
    static value(str) {
        return str.split(/=/)[1];
    }
    /**
     * A method to get the property and value from the line defining the value.
     *
     * @param {string} str line
     * @return {string[]} An string array consist of property name and value
     */
    static split(str) {
        return [DataSet.command(str), DataSet.value(str)];
    }
    /**
     * A method to parse and store data deriverd from lines array of OuDiaSecond v1.05
     * @param {Array<string>} lines rows array of OuDia file
     */
    fromOud2(lines) {
        let starttime = new Date().getTime();
        return new Promise((resolve, _) => {
            /**
             *  propertyStack is stack of nested parent's
             *
             *  oudia file format has nested list
             *  "Hoge." start Hoge node  and "." end current node
             *
             *  stack is pushed when found new node
             *  stack is poped when end current node
             */
            let propertyStack = new Array();
            /**
             *  current node name
             */
            let property = "";
            let mStation = new Station();
            let mStop = new Track();
            let mTrainType = new TrainType();
            let mDia = new Diagram();
            let mStreak = new Streak();
            /**
             *   Indicates the direction of the reading train
             *      - 10 ... area of downward timetable
             *      - 20 ... area of upward timetable
             *      - 0  ... no information
             */
            let direct = 0;
            for (let i = 0; i < lines.length; i++) {
                if (lines[i] == ".") {
                    //end current node
                    if (propertyStack.length == 0) {
                        break;
                    }
                    property = propertyStack.pop();
                    continue;
                }
                if (lines[i].endsWith(".")) {
                    //start new node
                    propertyStack.push(property);
                    property = lines[i].substring(0, lines[i].length - 1);
                    if (property == "Ressya") {
                        mStreak = new Streak();
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
                    if (property == "EkiTrack2") {
                        mStop = new Track();
                        mStation.tracks.push(mStop);
                    }
                    if (property == "Eki") {
                        mStation = new Station();
                        this.stations.push(mStation);
                    }
                    if (property == "Ressyasyubetsu") {
                        mTrainType = new TrainType();
                        this.trainTypes.push(mTrainType);
                    }
                    if (property == "Dia") {
                        mDia = new Diagram();
                        this.diagrams.push(mDia);
                    }
                    if (property == "Kudari") {
                        direct = 10;
                    }
                    if (property == "Nobori") {
                        direct = 20;
                    }
                    continue;
                }
                let command = DataSet.command(lines[i]);
                let value = DataSet.value(lines[i]);
                if (property == "Ressya") {
                    mStreak.setValue(command, value);
                }
                if (property == "EkiTrack2") {
                    mStop.setValue(command, value);
                }
                if (property == "Eki") {
                    mStation.setValue(command, value);
                }
                if (property == "Ressyasyubetsu") {
                    mTrainType.setValue(command, value);
                }
                if (property == "Dia") {
                    mDia.setValue(command, value);
                }
                if (property == "Rosen") {
                    this.setValue(command, value);
                }
                if (property == "DispProp") {
                    this.setValue(command, value);
                }
                if (property == "") {
                    this.setValue(command, value);
                }
            }
            let endtime = new Date().getTime();
            console.log("loading time=" + (endtime - starttime));
            resolve();
        }).then(() => { })
            .catch(function (e) {
            console.log(e);
            if (e.fileName && e.lineNumber) {
                // エラーの発生場所が取れる場合は、情報を追加する
                console.log("ファイル:" + e.fileName + ", 行:" + e.lineNumber);
            }
        });
    }
    /**
     * A method to parse and store data derived from lines array of OuDia file's text.
     *
     * @param {Array<string>} lines rows array of OuDia file
     * @return {Promise<any>} file struct object or null
     */
    fromOud(lines) {
        return new Promise((resolve, _) => {
            this.loadingStartTime = new Date().getTime();
            /**
             * In order to carry out the analysis smoothly,
             * analyze the line number in which constituent elements
             * such as train information and station information are described in advance.
             */
            let currentProp = '';
            for (let i = 0; i < lines.length; i++) {
                let line = lines[i];
                let propMatch = line.match(/^(.+)\.$/);
                let propEndMatch = line.match(/^\.$/);
                if (propMatch !== null) {
                    currentProp = propMatch[1];
                    if (currentProp == 'Dia') {
                        let direc = 'root';
                        let Dia = {
                            start: i,
                            end: -1,
                            Kudari: [[]],
                            Nobori: [[]],
                        };
                        i += 1;
                        let currentPropChild = '';
                        for (let j = i; j < lines.length; j++) {
                            let line = lines[j];
                            let propMatchChild = line.match(/^(.+)\.$/);
                            let propEndMatchChild = line.match(/^\.$/);
                            if (propMatchChild !== null) {
                                currentPropChild = propMatchChild[1];
                                if (currentPropChild == 'Kudari') {
                                    direc = 'Kudari';
                                }
                                else if (currentPropChild == 'Nobori') {
                                    direc = 'Nobori';
                                }
                                else if (currentPropChild == 'Ressya') {
                                    Dia[direc][Dia[direc].length] = {
                                        start: j,
                                    };
                                }
                            }
                            else if (propEndMatchChild !== null) {
                                if (currentPropChild == 'Ressya') {
                                    Dia[direc][Dia[direc].length - 1].end = j;
                                    currentPropChild = direc;
                                }
                                else if (direc == 'Kudari' ||
                                    direc == 'Nobori') {
                                    Dia[direc][Dia[direc].length - 1].end = j;
                                    Dia[direc].shift();
                                    direc = 'root';
                                }
                                else if (direc == 'root') {
                                    i = j;
                                    break;
                                }
                            }
                        }
                        Dia.end = i;
                        this.fileStruct.Dia.push(Dia);
                    }
                    else {
                        this.fileStruct[currentProp][this.fileStruct[currentProp].length] = { start: i };
                    }
                }
                else if (propEndMatch !== null) {
                    if (currentProp == 'Dia') {
                        this.fileStruct['Rosen'][this.fileStruct['Rosen'].length - 1].end = i;
                    }
                    else {
                        this.fileStruct[currentProp][this.fileStruct[currentProp].length - 1].end = i;
                    }
                }
            }
            this.fileStruct.Rosen.shift();
            this.fileStruct.Eki.shift();
            this.fileStruct.Ressyasyubetsu.shift();
            this.fileStruct.Dia.shift();
            this.fileStruct.DispProp.shift();
            this.stations = new Array(this.fileStruct.Eki.length);
            this.trainTypes = new Array(this.fileStruct.Ressyasyubetsu.length);
            this.diagrams = new Array(this.fileStruct.Dia.length);
            resolve();
        }).then(() => {
            /**
             * Next, analyze in parallel based on the line number processed earlier.
             */
            Promise.all([
                new Promise((resolve, reject) => {
                    // for root (Basic information such as file information.)
                    let fileTypeLine = DataSet.split(lines[0]);
                    if (fileTypeLine[0] == 'FileType') {
                        this.fileType = fileTypeLine[1];
                    }
                    else {
                        reject(1);
                        return;
                    }
                    let fileTypeAppCommentLine = DataSet.split(lines[this.fileStruct.DispProp[this.fileStruct.DispProp.length - 1].end + 1]);
                    if (fileTypeAppCommentLine[0] == 'FileTypeAppComment') {
                        this.fileTypeAppComment = fileTypeAppCommentLine[1];
                    }
                    else {
                        reject(2);
                        return;
                    }
                    resolve();
                }),
                new Promise((resolve, _) => {
                    // for station info
                    let promises = [];
                    for (let _i = 0; _i < this.fileStruct.Eki.length; _i++) {
                        promises.push(new Promise((_resolve, _reject) => {
                            let i = _i;
                            let st = new Station();
                            for (let j = this.fileStruct.Eki[i].start; j < this.fileStruct.Eki[i].end; j++) {
                                let lineArr = DataSet.split(lines[j]);
                                switch (lineArr[0]) {
                                    case 'Ekimei':
                                        st.name = lineArr[1];
                                        break;
                                    case 'Ekijikokukeisiki':
                                        st.timeType = Station.timeTypeToInt(lineArr[1]);
                                        break;
                                    case 'Ekikibo':
                                        st.scale = Station.scaleToInt(lineArr[1]);
                                        break;
                                    case 'Kyoukaisen':
                                        st.boundary = true;
                                        break;
                                    case 'DiagramRessyajouhouHyoujiKudari':
                                        st.trainInfoDown = Station.trainInfoToInt(lineArr[1]);
                                        break;
                                    case 'DiagramRessyajouhouHyoujiNobori':
                                        st.trainInfoUp = Station.trainInfoToInt(lineArr[1]);
                                        break;
                                }
                            }
                            this.stations[i] = st;
                            _resolve();
                        }));
                    }
                    Promise.all(promises).then(resolve);
                }),
                new Promise((resolve, _) => {
                    // for train type
                    let promises = [];
                    for (let _i = 0; _i < this.fileStruct.Ressyasyubetsu.length; _i++) {
                        promises.push(new Promise((_resolve, _reject) => {
                            let i = _i;
                            let tr = new TrainType();
                            for (let j = this.fileStruct.Ressyasyubetsu[i]
                                .start; j < this.fileStruct.Ressyasyubetsu[i].end; j++) {
                                let lineArr = DataSet.split(lines[j]);
                                switch (lineArr[0]) {
                                    case 'Syubetsumei':
                                        tr.name = lineArr[1];
                                        break;
                                    case 'Ryakusyou':
                                        tr.shortname = lineArr[1];
                                        break;
                                    case 'JikokuhyouMojiColor':
                                        let trainColor = new Color();
                                        trainColor.setFromABGR(lineArr[1]);
                                        tr.trainColor = trainColor;
                                        break;
                                    case 'JikokuhyouMojiIndex':
                                        tr.fontIdx = Number.parseInt(lineArr[1]);
                                        break;
                                    case 'DiagramSenColor':
                                        let lineColor = new Color();
                                        lineColor.setFromABGR(lineArr[1]);
                                        tr.lineColor = lineColor;
                                        break;
                                    case 'DiagramSenStyle':
                                        tr.lineType = TrainType.lineStyleToInt(lineArr[1]);
                                        break;
                                    case 'DiagramSenIsBold':
                                        tr.lineWeight = 2;
                                        break;
                                    case 'StopMarkDrawType':
                                        tr.shoudDrawStopMark = true;
                                        break;
                                }
                            }
                            this.trainTypes[i] = tr;
                            _resolve();
                        }));
                    }
                    Promise.all(promises).then(resolve);
                }),
                new Promise((resolve, _) => {
                    // for diagram
                    let promises = [];
                    for (let _i = 0; _i < this.fileStruct.Dia.length; _i++) {
                        promises.push(new Promise((_resolve, _reject) => {
                            let i = _i;
                            let dia = new Diagram();
                            dia.downStreaks = new Array(this.fileStruct.Dia[i].Kudari.length);
                            dia.upStreaks = new Array(this.fileStruct.Dia[i].Nobori.length);
                            let diaPromises = [];
                            for (let _j = 0; _j < this.fileStruct.Dia[i].Kudari.length; _j++) {
                                diaPromises.push(new Promise((__resolve, __reject) => {
                                    let j = _j;
                                    let st = new Streak();
                                    for (let k = this.fileStruct.Dia[i]
                                        .Kudari[j].start; k <
                                        this.fileStruct.Dia[i].Kudari[j]
                                            .end; k++) {
                                        let lineArr = DataSet.split(lines[k]);
                                        switch (lineArr[0]) {
                                            case 'Syubetsu':
                                                st.typeIdx = Number.parseInt(lineArr[1]);
                                                break;
                                            case 'RessyaBangou':
                                                st.operationNum =
                                                    lineArr[1];
                                                break;
                                            case 'Ressyamei':
                                                st.name = lineArr[1];
                                                break;
                                            case 'Gousuu':
                                                st.no = lineArr[1];
                                                break;
                                            case 'EkiJikoku':
                                                let stHandlingsStrArr = lineArr[1].split(',');
                                                let stHandlings = new Array(stHandlingsStrArr.length);
                                                for (let n = 0; n <
                                                    stHandlingsStrArr.length; n++) {
                                                    let stStr = stHandlingsStrArr[n];
                                                    let sth = new StHandling();
                                                    if (stStr !== '') {
                                                        const homeAndTimes = stStr.split(';');
                                                        sth.type = Number.parseInt(homeAndTimes[0]);
                                                        // when station time exists
                                                        if (homeAndTimes[1] !==
                                                            undefined) {
                                                            const arrAndDep = homeAndTimes[1].split('/');
                                                            if (arrAndDep[1] ===
                                                                undefined) {
                                                                sth.arrival.isNull = true;
                                                                sth.departure.isNull = false;
                                                                sth.departure.setTime(arrAndDep[0]);
                                                            }
                                                            else if (arrAndDep[1] ===
                                                                '') {
                                                                sth.arrival.isNull = false;
                                                                sth.arrival.setTime(arrAndDep[0]);
                                                                sth.departure.isNull = true;
                                                            }
                                                            else {
                                                                sth.departure.isNull = false;
                                                                sth.departure.setTime(arrAndDep[0]);
                                                                sth.arrival.isNull = false;
                                                                sth.arrival.setTime(arrAndDep[1]);
                                                            }
                                                        }
                                                    }
                                                    stHandlings[n] = sth;
                                                }
                                                st.stHandlings = stHandlings;
                                                break;
                                            case 'Bikou':
                                                st.comment = lineArr[1];
                                                break;
                                        }
                                    }
                                    dia.downStreaks[j] = st;
                                    __resolve();
                                }));
                            }
                            for (let _j = 0; _j < this.fileStruct.Dia[i].Nobori.length; _j++) {
                                diaPromises.push(new Promise((__resolve, __reject) => {
                                    let j = _j;
                                    let st = new Streak();
                                    for (let k = this.fileStruct.Dia[i]
                                        .Nobori[j].start; k <
                                        this.fileStruct.Dia[i].Nobori[j]
                                            .end; k++) {
                                        let lineArr = DataSet.split(lines[k]);
                                        switch (lineArr[0]) {
                                            case 'Syubetsu':
                                                st.typeIdx = Number.parseInt(lineArr[1]);
                                                break;
                                            case 'RessyaBangou':
                                                st.operationNum =
                                                    lineArr[1];
                                                break;
                                            case 'Ressyamei':
                                                st.name = lineArr[1];
                                                break;
                                            case 'Gousuu':
                                                st.no = lineArr[1];
                                                break;
                                            case 'EkiJikoku':
                                                let stHandlingsStrArr = lineArr[1].split(',');
                                                let stHandlings = new Array(stHandlingsStrArr.length);
                                                for (let n = 0; n <
                                                    stHandlingsStrArr.length; n++) {
                                                    let stStr = stHandlingsStrArr[n];
                                                    let sth = new StHandling();
                                                    if (stStr !== '') {
                                                        const homeAndTimes = stStr.split(';');
                                                        sth.type = Number.parseInt(homeAndTimes[0]);
                                                        var arrival = new Time();
                                                        var departure = new Time();
                                                        // when station time exists
                                                        if (homeAndTimes[1] !==
                                                            undefined) {
                                                            const arrAndDep = homeAndTimes[1].split('/');
                                                            if (arrAndDep[1] ===
                                                                undefined) {
                                                                arrival.isNull = true;
                                                                departure.setTime(arrAndDep[0]);
                                                            }
                                                            else if (arrAndDep[1] ===
                                                                '') {
                                                                arrival.setTime(arrAndDep[0]);
                                                                departure.isNull = true;
                                                            }
                                                            else {
                                                                departure.setTime(arrAndDep[0]);
                                                                arrival.setTime(arrAndDep[1]);
                                                            }
                                                        }
                                                        else {
                                                            arrival.isNull = true;
                                                            departure.isNull = true;
                                                        }
                                                        sth.arrival = arrival;
                                                        sth.departure = departure;
                                                    }
                                                    stHandlings[n] = sth;
                                                }
                                                st.stHandlings = stHandlings;
                                                break;
                                            case 'Bikou':
                                                st.comment = lineArr[1];
                                                break;
                                        }
                                    }
                                    dia.upStreaks[j] = st;
                                    __resolve();
                                }));
                            }
                            this.diagrams[i] = dia;
                            _resolve();
                        }));
                    }
                    Promise.all(promises).then(resolve);
                }),
            ])
                .then(() => {
                let endTime = new Date().getTime();
                console.log("loading time:" + (endTime - this.loadingStartTime));
            })
                .catch(() => console.log('ERROR'));
            // // for Rosen
            // for (let i = 0; i < this.fileStruct.Rosen.length; i++) {
            //     for (let j = this.fileStruct.Rosen[i].start; j < this.fileStruct.Rosen[i].end; j++) {
            //     }
            // }
        });
    }
    setValue(command, value) {
        switch (command) {
            case "FileType":
                this.fileType = value;
                break;
            case "FileTypeAppComment":
                this.fileTypeAppComment = value;
                break;
            case "Rosenmei":
                this.name = value;
                break;
            case "KudariDiaAlias":
                //下り時刻表名をこれで置き換える
                break;
            case "NoboriDiaAlias":
                //上り時刻表名をこれで置き換える
                break;
            case "KitenJikoku":
                //todo
                //ダイヤグラム起点時刻
                break;
            case "DiagramDgrYZahyouKyoriDefault":
                break;
            case "Comment":
                //コメント読み書き
                //todo
                break;
            case "JikokuhyouFont":
                break;
            case "JikokuhyouVFont":
                break;
            case "DiaEkimeiFont":
                break;
            case "DiaJikokuFont":
                break;
            case "DiaRessyaFont":
                break;
            case "CommentFont":
                break;
            case "DiaMojiColor":
                break;
            case "DiaHaikeiColor":
                break;
            case "DiaRessyaColor":
                break;
            case "DiaJikuColor":
                break;
            case "JikokuhyouBackColor":
                break;
            case "StdOpeTimeLowerColor":
                break;
            case "StdOpeTimeHigherColor":
                break;
            case "StdOpeTimeUndefColor":
                break;
            case "StdOpeTimeIllegalColor":
                break;
            case "EkimeiLength":
                break;
            case "JikokuhyouRessyaWidth":
                break;
            case "AnySecondIncDec1":
                break;
            case "AnySecondIncDec2":
                break;
            case "DisplayRessyamei":
                break;
            case "DisplayOuterTerminalEkimeiOriginSide":
                break;
            case "DisplayOuterTerminalEkimeiTerminalSide":
                break;
            case "DiagramDisplayOuterTerminal":
                break;
        }
    }
}
exports.DataSet = DataSet;
/**
 * A class that constitutes a facility
 * that can be treated as a station on the operation of a train,
 * such as a station such as a station or a signal field.
 */
class Station {
    constructor() {
        /**
         * 駅名
         *
         * station's name
         *
         * @type {string}
         */
        this._name = '';
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
        this._timeType = 0;
        /**
         * 駅規模
         *
         * station scale
         *
         * @type {number}
         */
        this._scale = 0;
        /**
         * 下りダイヤグラム列車情報
         *
         * train-information's (for downward direction) display format
         *
         * @type {number}
         */
        this._trainInfoDown = 0;
        /**
         * 上りダイヤグラム列車情報
         *
         * train-information's (for up direction) display format
         *
         * @type {number}
         */
        this._trainInfoUp = 0;
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
        this._boundary = false;
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
        this._additionalOption = 0;
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
        this._shouldShowLineNumberDown = false;
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
        this._shouldShowLineNumberUp = false;
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
        this._shouldShowLines = false;
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
         */
        this._tracks = new Array();
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
        this._mainLineDown = 0;
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
        this._mainLineUp = 0;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get timeType() {
        return this._timeType;
    }
    set timeType(v) {
        this._timeType = v;
    }
    get scale() {
        return this._scale;
    }
    set scale(v) {
        this._scale = v;
    }
    get trainInfoDown() {
        return this._trainInfoDown;
    }
    set trainInfoDown(v) {
        this._trainInfoDown = v;
    }
    get trainInfoUp() {
        return this._trainInfoUp;
    }
    set trainInfoUp(v) {
        this._trainInfoUp = v;
    }
    get boundary() {
        return this._boundary;
    }
    set boundary(v) {
        this._boundary = v;
    }
    get additionalOption() {
        return this._additionalOption;
    }
    set additionalOption(v) {
        this._additionalOption = v;
    }
    get shouldShowLineNumberDown() {
        return this._shouldShowLineNumberDown;
    }
    set shouldShowLineNumberDown(v) {
        this._shouldShowLineNumberDown = v;
    }
    get shouldShowLineNumberUp() {
        return this._shouldShowLineNumberUp;
    }
    set shouldShowLineNumberUp(v) {
        this._shouldShowLineNumberUp = v;
    }
    get shouldShowLines() {
        return this._shouldShowLines;
    }
    set shouldShowLines(v) {
        this._shouldShowLines = v;
    }
    get tracks() {
        return this._tracks;
    }
    set tracks(v) {
        this._tracks = v;
    }
    get mainLineDown() {
        return this._mainLineDown;
    }
    set mainLineDown(v) {
        this._mainLineDown = v;
    }
    get mainLineUp() {
        return this._mainLineUp;
    }
    set mainLineUp(v) {
        this._mainLineUp = v;
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
    static timeTypeToInt(value) {
        switch (value) {
            case 'Jikokukeisiki_Hatsuchaku':
                return 10;
            case 'Jikokukeisiki_KudariChaku':
                return 20;
            case 'Jikokukeisiki_NoboriChaku':
                return 30;
            default:
                return 0;
        }
    }
    /**
     * A method of converting the integer value of the station time to the string value of OuDia format.
     *
     * @return {string} station time type value (OuDia format string)
     */
    parseTimeType() {
        switch (this.timeType) {
            case 10:
                return 'Jikokukeisiki_Hatsuchaku';
            case 20:
                return 'Jikokukeisiki_KudariChaku';
            case 30:
                return 'Jikokukeisiki_NoboriChaku';
            default:
                return 'Jikokukeisiki_Hatsu';
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
    static scaleToInt(value) {
        switch (value) {
            case 'Ekikibo_Syuyou':
                return 10;
            default:
                return 0;
        }
    }
    /**
     * A method of converting the integer value of the station size to the string value of OuDia format.
     *
     * @todo Consider the value in the case of a normal station.
     *
     * @return {string} station size value (OuDia format string)
     */
    parseScale() {
        switch (this.scale) {
            case 10:
                return 'Ekikibo_Syuyou';
            // case 0:
            default:
                return 'Ekikibo_Ippan';
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
    static trainInfoToInt(value) {
        switch (value) {
            case 'DiagramRessyajouhouHyouji_Anytime':
                return 20;
            case 'DiagramRessyajouhouHyouji_Not':
                return 0;
            default:
                return 10;
        }
    }
    /**
     * oudiaファイルの１行を用いて情報を追加します
     * oudia ファイルは=でキーと値が結ばれている
     *
     * @param command key of the line of oudia file
     * @param value   value of the line of oudia file
     */
    setValue(command, value) {
        switch (command) {
            case "Ekimei":
                this.name = value;
                break;
            case "Ekijikokukeisiki":
                this.timeType = Station.timeTypeToInt(value);
                break;
            case "Ekikibo":
                this.scale = Station.scaleToInt(value);
                break;
            case "DiagramRessyajouhouHyoujiKudari":
                this.trainInfoDown = Station.trainInfoToInt(value);
                break;
            case "DiagramRessyajouhouHyoujiNobori":
                this.trainInfoUp = Station.trainInfoToInt(value);
                break;
            case "DownMain":
                this.mainLineDown = parseInt(value);
                break;
            case "UpMain":
                this.mainLineUp = parseInt(value);
                break;
            case "LoopOriginEkiIndex":
                //todo
                break;
            case "BrunchCoreEkiIndex":
                //todo
                //分岐駅の扱いがoudとoud2ndで別なので要調整
                break;
            case "JikokuhyouTrackDisplayKudari":
                this.shouldShowLineNumberDown = (value == "1");
                break;
            case "JikokuhyouTrackDisplayNobori":
                this.shouldShowLineNumberUp = (value == "1");
                break;
            case "DiagramTrackDisplay":
                this.shouldShowLines = (value == "1");
                break;
            case "NextEkiDistance":
                //todo
                break;
        }
    }
}
exports.Station = Station;
/**
 * A class of Track in Station
 * Sometimes, this is called platform
 *
 * oudia2ndのEkiTrack2Contに対応
 */
class Track {
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get shortName() {
        return this._shortName;
    }
    set shortName(v) {
        this._shortName = v;
    }
    /**
     * oudiaファイルの１行を用いて情報を追加する
     */
    setValue(command, value) {
        switch (command) {
            case "TrackName":
                this.name = value;
                break;
            case "TrackRyakusyou":
                this.shortName = value;
                break;
        }
    }
}
exports.Track = Track;
/**
 * A class constituting the train type included in this route.
 */
class TrainType {
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get shortname() {
        return this._shortname;
    }
    set shortname(v) {
        this._shortname = v;
    }
    get trainColor() {
        return this._trainColor;
    }
    set trainColor(v) {
        this._trainColor = v;
    }
    get fontIdx() {
        return this._fontIdx;
    }
    set fontIdx(v) {
        this._fontIdx = v;
    }
    get lineColor() {
        return this._lineColor;
    }
    set lineColor(v) {
        this._lineColor = v;
    }
    get lineType() {
        return this._lineType;
    }
    set lineType(v) {
        this._lineType = v;
    }
    get lineWeight() {
        return this._lineWeight;
    }
    set lineWeight(v) {
        this._lineWeight = v;
    }
    get shoudDrawStopMark() {
        return this._shoudDrawStopMark;
    }
    set shoudDrawStopMark(v) {
        this._shoudDrawStopMark = v;
    }
    constructor() {
        this._name = '';
        this._shortname = '';
        this._trainColor = new Color();
        this._fontIdx = 0;
        this._lineColor = new Color();
        this._lineType = 0;
        this._lineWeight = 0;
        this._shoudDrawStopMark = false;
    }
    /**
     * A static method to convert OuDia value of train line style (in the diagram view) to numeric parameter.
     *
     * @param {string} str
     * @return {number}
     */
    static lineStyleToInt(str) {
        switch (str) {
            case 'SenStyle_Tensen':
                return 10;
            case 'SenStyle_Hasen':
                return 20;
            default:
                return 0;
        }
    }
    /**
     * command valueのセットを用いて情報を追加します
     * @param command   key of oudia file style
     * @param value     value of oudia file style
     */
    setValue(command, value) {
        switch (command) {
            case "Syubetsumei":
                this.name = value;
                break;
            case "Ryakusyou":
                this.shortname = value;
                break;
            case "JikokuhyouMojiColor":
                this.trainColor.setFromABGR(value);
                break;
            case "JikokuhyouFontIndex":
                this.fontIdx = parseInt(value);
                break;
            case "JikokuhyouBackColor":
                //todo backColorが未実装
                //this.backColor.setFromABGR(value);
                break;
            case "DiagramSenColor":
                this.lineColor.setFromABGR(value);
                break;
            case "DiagramSenStyle":
                this.lineType = TrainType.lineStyleToInt(value);
                break;
            case "DiagramSenIsBold":
                if (value == "1") {
                    this.lineWeight = 2;
                }
                else {
                    this.lineWeight = 0;
                }
                break;
            case "StopMarkDrawType":
                this.shoudDrawStopMark = (value == "EStopMarkDrawType_DrawOnStop");
                break;
            case "ParentSyubetsuIndex":
                //todo
                //no proparty of parent TrainType
                break;
        }
    }
}
exports.TrainType = TrainType;
class Diagram {
    constructor() {
        /**
         * ダイヤグラム名
         */
        this._name = '';
        /**
         * 下り運用
         *
         * Train operation in the downward direction
         */
        this._downStreaks = new Array();
        /**
         * 上り運用
         *
         * Train operation in the up direction
         */
        this._upStreaks = new Array();
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get downStreaks() {
        return this._downStreaks;
    }
    set downStreaks(v) {
        this._downStreaks = v;
    }
    get upStreaks() {
        return this._upStreaks;
    }
    set upStreaks(v) {
        this._upStreaks = v;
    }
    setValue(command, value) {
        switch (command) {
            case "DiaName":
                this.name = value;
                break;
            case "MainBackColorIndex":
                //todo
                //背景色未実装
                break;
            case "SubBackColorIndex":
                //todo
                //副背景未実装
                break;
            case "BackPatternIndex":
                //todo
                //背景パターン未実装
                break;
        }
    }
}
exports.Diagram = Diagram;
/**
 * Class that implements train operation called "streak".
 */
class Streak {
    constructor() {
        /**
         * 運用番号
         *
         * Train operation number
         *
         * @type {string}
         */
        this._operationNum = '';
        /**
         * 列車種別を格納する配列のindex
         *
         * Index of array storing train type (`Array<TrainType>`)
         *
         * @type {number}
         */
        this._typeIdx = 0;
        /**
         * 列車名
         *
         * train name
         *
         * @type {string}
         */
        this._name = '';
        /**
         * 行き先駅の配列Index
         *
         * Destination index of `Array<Station>`
         *
         * @type {number}
         */
        this._destIdx = 0;
        /**
         * 各駅の発着を格納する配列
         *
         * An array storing the arrival and departure handling of each station.
         *
         * @type {Array<StHandling>}
         */
        this._stHandlings = new Array();
        /**
         * 備考情報
         *
         * additional comment
         *
         * @type {string}
         */
        this._comment = '';
    }
    get operationNum() {
        return this._operationNum;
    }
    set operationNum(v) {
        this._operationNum = v;
    }
    get typeIdx() {
        return this._typeIdx;
    }
    set typeIdx(v) {
        this._typeIdx = v;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        this._name = v;
    }
    get no() {
        return this._no;
    }
    set no(v) {
        this._no = v;
    }
    get destIdx() {
        return this._destIdx;
    }
    set destIdx(v) {
        this._destIdx = v;
    }
    get stHandlings() {
        return this._stHandlings;
    }
    set stHandlings(v) {
        this._stHandlings = v;
    }
    get comment() {
        return this._comment;
    }
    set comment(v) {
        this._comment = v;
    }
    setValue(command, value) {
        switch (command) {
            case "Syubetsu":
                this.typeIdx = parseInt(value);
                break;
            case "Ressyabangou":
                this.operationNum = value;
                break;
            case "Ressyamei":
                this.name = value;
                break;
            case "Gousuu":
                this.no = value;
                break;
            case "EkiJikoku":
                let timeList = value.split(",");
                for (let i = 0; i < timeList.length; i++) {
                    let mStHanding = new StHandling();
                    this.stHandlings.push(mStHanding);
                    if (timeList[i].indexOf(";") != -1) {
                        mStHanding.type = parseInt(timeList[i].split(";")[0]);
                        let mTimeList = timeList[i].split(";")[1].split("/");
                        if (mTimeList.length == 2) {
                            mStHanding.arrival.setTime(mTimeList[0]);
                            if (mTimeList[1].length != 0) {
                                mStHanding.departure.setTime(mTimeList[1]);
                            }
                        }
                        else {
                            mStHanding.departure.setTime(mTimeList[0]);
                        }
                    }
                    else {
                        mStHanding.type = parseInt(timeList[i]);
                    }
                }
                break;
            case "RessyaTrack":
                let trackList = value.split(",");
                for (let i = 0; i < trackList.length; i++) {
                    if (trackList[i].length == 0) {
                        continue;
                    }
                    let mStHanding = this.stHandlings[i];
                    let a = trackList[i].split(";");
                    mStHanding.track = parseInt(a[0]);
                    if (a.length >= 2) {
                        let b = a[1].split("/");
                        switch (b[0]) {
                            case "0":
                                break;
                            case "1":
                                mStHanding.endpointWork.worktype = 10;
                                mStHanding.endpointWork.track = parseInt(b[1].split("$")[0]);
                                mStHanding.endpointWork.arrival.setTime(b[1].split("$")[1]);
                                mStHanding.endpointWork.departure.setTime(b[2]);
                                break;
                            case "2":
                                mStHanding.endpointWork.worktype = 20;
                                mStHanding.endpointWork.operationNum = b[1];
                                break;
                            case "3":
                                mStHanding.endpointWork.worktype = 30;
                                //todo
                                b[1].split("$")[0]; //first last station index
                                b[1].split("$")[1]; //first last station time
                                mStHanding.endpointWork.operationNum = b[2];
                                break;
                        }
                    }
                }
                break;
            case "Bikou":
                this, command = value;
                break;
        }
    }
}
exports.Streak = Streak;
/**
 * A class to implement how to handle stations on rail operation.
 */
class StHandling {
    constructor() {
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
        this._type = 0;
        /**
         * 到着時刻
         *
         * arrival time
         *
         * @type {Time}
         */
        this._arrival = new Time();
        /**
         * 発車時刻
         *
         * departure time
         *
         * @type {Time}
         */
        this._departure = new Time();
        /**
         * 発着番線
         *
         * Arrival and departure track number
         *
         * @type {number}
         */
        this._track = 0;
        this._endpointWork = new EndpointWork();
        this.type = 0;
        this.arrival = new Time();
        this.departure = new Time();
    }
    get type() {
        return this._type;
    }
    set type(v) {
        this._type = v;
    }
    get arrival() {
        return this._arrival;
    }
    set arrival(v) {
        this._arrival = v;
    }
    get departure() {
        return this._departure;
    }
    set departure(v) {
        this._departure = v;
    }
    get track() {
        return this._track;
    }
    set track(v) {
        this._track = v;
    }
    get endpointWork() {
        return this._endpointWork;
    }
    set endpointWork(v) {
        this._endpointWork = v;
    }
}
exports.StHandling = StHandling;
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
