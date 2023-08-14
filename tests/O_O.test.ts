import * as fs from 'fs';
import * as path from 'path';
import { O_O } from './../src';

describe('O_O', () => {
  test('check getter value should return default values of the initialized instance.', () => {
    const oo = new O_O();

    // TODO: 未実装
    // expect(oo.color.HEX()).toEqual('#000');

    expect(oo.diagrams).toEqual([]);
    expect(oo.fileType).toEqual('');
    expect(oo.fileTypeAppComment).toEqual('');
    expect(oo.name).toEqual('');
    expect(oo.stations).toEqual([]);
    expect(oo.trainTypes).toEqual([]);
  });

  describe('O_O#toJSON', () => {
    test('the initialized instance should return init json structure.', () => {
      const oo = new O_O();
      expect(oo.toJSON()).toEqual({
        fileType: '',
        fileTypeAppComment: '',
        name: '',
        stations: [],
        trainTypes: [],
        diagrams: [],
      });
    });
  });

  describe('O_O#fromOud', () => {
    // read sample data
    const oudFileLines = fs
      .readFileSync(path.join(__dirname, './resources/fukutoshin_tokyu_toyoko_minatomirai_130421.oud'), 'utf8')
      .split('\n');

    test('should complete to parse valid data.', () => {
      const oo = new O_O();
      oo.fromOud(oudFileLines);

      // TODO: 未実装
      // expect(oo.color.HEX()).toEqual('#000');

      expect(oo.diagrams.length).toEqual(2);
      expect(oo.fileType).toEqual('OuDia.1.02');

      expect(oo.fileTypeAppComment).toEqual('OuDia Ver. 1.02.02');

      expect(oo.name).toEqual('東急東横線(13/04/21)');
      expect(oo.stations.length).toEqual(41);
      expect(oo.trainTypes.length).toEqual(5);
    });

    test('should complete to parse valid data.', () => {
      const oo = new O_O();
      oo.fromOud(oudFileLines);

      // TODO: 未実装
      // expect(oo.color.HEX()).toEqual('#000');

      expect(oo.diagrams.length).toEqual(2);
      expect(oo.fileType).toEqual('OuDia.1.02');

      expect(oo.fileTypeAppComment).toEqual('OuDia Ver. 1.02.02');

      expect(oo.name).toEqual('東急東横線(13/04/21)');
      expect(oo.stations.length).toEqual(41);
      expect(oo.trainTypes.length).toEqual(5);
    });

    // FIXME: bug
    // test('should complete to parse invalid data.', () => {});
  });
});

describe('O_O#stations', () => {
  // read sample data
  const ekiPatterns = fs.readFileSync(path.join(__dirname, './resources/mock/eki_patterns.oud'), 'utf8').split('\n');

  test('should complete to parse valid stations.', () => {
    const oo = new O_O();
    oo.fromOud(ekiPatterns);

    expect(oo.stations.length).toEqual(5);
    expect(oo.stations[0]!.toJSON()).toEqual({
      name: 'eki_normal__starting_terminal',
      timeType: 30,
      scale: 0,
      trainInfoDown: 10,
      trainInfoUp: 10,
      boundary: false,
      additionalOption: 0,
      shouldShowLineNumberDown: false,
      shouldShowLineNumberUp: false,
      shouldShowLines: false,
      lines: [],
      mainLineDown: 0,
      mainLineUp: 0,
    });
    expect(oo.stations[1]!.toJSON().name).toEqual('eki_normal__dep_only');
    expect(oo.stations[1]!.toJSON().timeType).toEqual(0);

    expect(oo.stations[2]!.toJSON().name).toEqual('eki_core__dep_only');
    expect(oo.stations[2]!.toJSON().scale).toEqual(10);

    expect(oo.stations[3]!.toJSON().name).toEqual('eki_normal__dep_and_arrv');
    expect(oo.stations[3]!.toJSON().timeType).toEqual(10);

    expect(oo.stations[4]!.toJSON().name).toEqual('eki_normal_last_terminal');
    expect(oo.stations[4]!.toJSON().timeType).toEqual(20);
  });
});

describe('O_O#trainTypes', () => {
  // read sample data
  const ekiPatterns = fs.readFileSync(path.join(__dirname, './resources/mock/ressya_patterns.oud'), 'utf8').split('\n');

  test('should complete to parse valid trainTypes.', () => {
    const oo = new O_O();
    oo.fromOud(ekiPatterns);

    expect(oo.trainTypes.length).toEqual(6);
    expect(oo.trainTypes[0]!.toJSON()).toEqual({
      name: 'traintype_solid',
      trainColor: { r: 0, g: 0, b: 0 },
      fontIdx: 0,
      lineColor: { r: 0, g: 0, b: 0 },
      lineType: 0,
      lineWeight: 0,
      // FIXME: bug
      shoudDrawStopMark: true,
    });

    expect(oo.trainTypes[1]!.toJSON().name).toEqual('traintype_solid__text_red__line_blue');
    expect(oo.trainTypes[1]!.toJSON().trainColor).toEqual({ r: 255, g: 0, b: 0 });
    expect(oo.trainTypes[1]!.toJSON().lineColor).toEqual({ r: 0, g: 0, b: 255 });

    expect(oo.trainTypes[2]!.toJSON().name).toEqual('traintype_dashed');
    expect(oo.trainTypes[2]!.toJSON().lineType).toEqual(20);

    expect(oo.trainTypes[3]!.toJSON().name).toEqual('traintype_dotted');
    expect(oo.trainTypes[3]!.toJSON().lineType).toEqual(10);

    expect(oo.trainTypes[4]!.toJSON().name).toEqual('traintype_drawstopmark');
    expect(oo.trainTypes[4]!.toJSON().shoudDrawStopMark).toEqual(true);

    expect(oo.trainTypes[5]!.toJSON().name).toEqual('traintype_solid__withalias');
    expect(oo.trainTypes[5]!.toJSON().shortname).toEqual('alias name');
  });
});

describe('O_O#trainTypes', () => {
  // read sample data
  const ekiPatterns = fs.readFileSync(path.join(__dirname, './resources/mock/eki_patterns.oud'), 'utf8').split('\n');

  test('should complete to parse valid trainTypes.', () => {
    const oo = new O_O();
    oo.fromOud(ekiPatterns);

    expect(oo.diagrams.length).toEqual(1);
    expect(oo.diagrams[0]!.downStreaks.length).toEqual(1);

    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().operationNum).toEqual('');
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().typeIdx).toEqual(0);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().name).toEqual('');
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().destIdx).toEqual(0);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().comment).toEqual('');

    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings.length).toEqual(5);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[0]).toEqual({
      // FIXME: bug
      type: 1,

      arrival: -1,
      departure: 18000,
      track: 0,
    });

    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[1]!.departure).toEqual(18060);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[2]!.departure).toEqual(18120);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[3]!.departure).toEqual(18240);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[4]!.departure).toEqual(-1);

    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[1]!.arrival).toEqual(-1);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[2]!.arrival).toEqual(-1);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[3]!.arrival).toEqual(18180);
    expect(oo.diagrams[0]!.downStreaks[0]!.toJSON().stHandlings[4]!.arrival).toEqual(18300);
  });
});
