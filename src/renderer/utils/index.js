// https://github.com/handsontable/handsontable/blob/bb6871349289add4f4692ebe6627c408b6bce251/src/helpers/data.js#L53
export function fillSheetData(rows = 8, columns = 16, data = '00') {
  const eeproms = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];

    for (let i = 0; i < columns; i += 1) {
      row.push(data);
    }
    eeproms.push(row);
  }

  return eeproms;
}

export function test() {}
