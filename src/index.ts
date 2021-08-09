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
 * under the MIT License.
 *
 * @author up-tri
 * @version 1.3.0
 */

import { Oud2JSON } from '@route-builders/oud-to-json';

import { Color } from './models/Color';
import { Diagram } from './models/Diagram';
import { Station } from './models/Station';
import { StHandling } from './models/StHandling';
import { Streak } from './models/Streak';
// import { Time } from './models/Time';
import { TrainType } from './models/TrainType';

/**
 * A class with a data structure such as OuDia file.
 *
 * @author up-tri
 * @since 1.0
 */
export class O_O {
  /**
   * filetype
   */
  private _fileType: string = '';
  public get fileType(): string {
    return this._fileType;
  }
  public set fileType(v: string) {
    this._fileType = v;
  }

  private _fileTypeAppComment: string = '';
  public get fileTypeAppComment(): string {
    return this._fileTypeAppComment;
  }
  public set fileTypeAppComment(v: string) {
    this._fileTypeAppComment = v;
  }

  /**
   * A string of route name.
   */
  private _name: string = '';
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  /**
   * A string of route color.
   * This field needs to be stored as 6-digit HEX color (eg. "#0033ff" ).
   */
  private _color: Color = new Color();
  public get color(): Color {
    return this._color;
  }
  public set color(v: Color) {
    this._color = v;
  }
  /**
   * A collection of all the station information included in this route.
   */
  private _stations: Array<Station> = new Array<Station>();
  public get stations(): Array<Station> {
    return this._stations;
  }
  public set stations(v: Array<Station>) {
    this._stations = v;
  }
  /**
   * A collection of all the train type information included in this route.
   */
  private _trainTypes: Array<TrainType> = new Array<TrainType>();
  public get trainTypes(): Array<TrainType> {
    return this._trainTypes;
  }
  public set trainTypes(v: Array<TrainType>) {
    this._trainTypes = v;
  }
  /**
   * A collection of all the diagram included in this route.
   */
  private _diagrams: Array<Diagram> = new Array<Diagram>();
  public get diagrams(): Array<Diagram> {
    return this._diagrams;
  }
  public set diagrams(v: Array<Diagram>) {
    this._diagrams = v;
  }

  // private dataNameLength: number = 0
  // private stationNameLength: number = 0
  // private timeTableWidth: number = 0
  // private diagramStartTime: number = 0
  // private stationSpacing: number = 0

  /**
   * A method to parse and store data derived from lines array of OuDia file's text.
   *
   * @param {Array<string>} lines rows array of OuDia file
   * @return {Promise<any>} file struct object or null
   */
  public fromOud(lines: Array<string>): O_O {
    const parser = new Oud2JSON(lines);
    const json = JSON.parse(parser.parse());
    const root = json['Rosen'][0];

    // conf
    this.fileType = json['FileType'];
    this.name = root['Rosenmei'];

    // station
    this.stations = root.Eki.map((stationJSON: any) => {
      const station = new Station();
      station.name = stationJSON.Ekimei;
      station.timeType = Station.timeTypeToInt(stationJSON.Ekijikokukeisiki);
      station.scale = Station.scaleToInt(stationJSON.Ekikibo);
      station.trainInfoDown = Station.trainInfoToInt(stationJSON.DiagramRessyajouhouHyoujiKudari);
      station.trainInfoUp = Station.trainInfoToInt(stationJSON.DiagramRessyajouhouHyoujiNobori);
      return station;
    });

    this.trainTypes = root.Ressyasyubetsu.map((typeJSON: any) => {
      const trainType = new TrainType();
      trainType.name = typeJSON.Syubetsumei;
      trainType.shortname = typeJSON.Ryakusyou;
      trainType.trainColor = new Color();
      trainType.trainColor.setFromABGR(typeJSON.JikokuhyouMojiColor);
      trainType.fontIdx = parseInt(typeJSON.JikokuhyouFontIndex);
      trainType.lineColor = new Color();
      trainType.lineColor.setFromABGR(typeJSON.DiagramSenColor);
      trainType.lineType = TrainType.lineStyleToInt(typeJSON.DiagramSenStyle);
      if (typeJSON['StopMarkDrawType']) {
        trainType.shoudDrawStopMark = true;
      }
      return trainType;
    });

    function __parseStreaks(NoboriOrKudari: any): Streak[] {
      return NoboriOrKudari.Ressya.map((t: any) => {
        const streak = new Streak();
        streak.typeIdx = parseInt(t.Syubetsu);
        streak.name = t.Ressyamei;
        streak.operationNum = t.Ressyabangou;
        if (t['Bikou']) {
          streak.comment = t.Bikou;
        }
        if (t['Gousuu']) {
          streak.no = t.Gousuu;
        }
        streak.stHandlings = t.EkiJikoku.split(',').map((handling: string) => {
          const stHandling = new StHandling();
          if (handling !== '') {
            const homeAndTimes = handling.split(';');
            if (homeAndTimes[0]) {
              stHandling.type = parseInt(homeAndTimes[0]);
              // when station time exists
              if (homeAndTimes[1] !== undefined) {
                const arrAndDep = homeAndTimes[1].split('/');
                if (arrAndDep[0]) {
                  if (arrAndDep[1] === undefined) {
                    stHandling.arrival.setTime(null);
                    stHandling.departure.setTime(arrAndDep[0]);
                  } else if (arrAndDep[1] === '') {
                    stHandling.arrival.setTime(arrAndDep[0]);
                    stHandling.departure.setTime(null);
                  } else {
                    stHandling.departure.setTime(arrAndDep[0]);
                    stHandling.arrival.setTime(arrAndDep[1]);
                  }
                }
              }
            }
          }
          return stHandling;
        });
        return streak;
      });
    }

    this.diagrams = root.Dia.map((diaJSON: any) => {
      const dia = new Diagram();
      dia.name = diaJSON.DiaName;
      dia.downStreaks = __parseStreaks(diaJSON.Kudari[0]);
      dia.upStreaks = __parseStreaks(diaJSON.Nobori[0]);
      return dia;
    });

    return this;
  }

  public toJSON() {
    return {
      fileType: this.fileType,
      fileTypeAppComment: this.fileTypeAppComment,
      name: this.name,
      // color: this.color,
      stations: this.stations,
      trainTypes: this.trainTypes,
      diagrams: this.diagrams,
    };
  }
}
