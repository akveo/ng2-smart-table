export class LocalSorter {

  protected static COMPARE = (direction, a, b) => {
    if (a < b) {
      return -1 * direction;
    }
    if (a > b) {
      return direction;
    }
    return 0;
  };

  static sort(data: Array<any>, field: string, direction: string, customCompare?: Function): Array<any> {

    let dir: number = (direction === 'asc') ? 1 : -1;
    let compare: Function = customCompare ? customCompare : this.COMPARE;

    return data.sort((a, b) => {
      return compare.call(null, dir, a[field], b[field]);
    });
  }
}
