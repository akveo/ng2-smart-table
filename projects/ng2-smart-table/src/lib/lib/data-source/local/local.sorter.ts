export function compareValues(direction: any, a: any, b: any) {
  if (a < b) {
    return -1 * direction;
  }
  if (a > b) {
    return direction;
  }
  return 0;
}

export class LocalSorter {

  static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any> {

    const dir: number = (direction === 'asc') ? 1 : -1;
    const compare: Function = customCompare ? customCompare : compareValues;

    return data.sort((a, b) => {
      return compare.call(null, dir, a[field], b[field]);
    });
  }
}
