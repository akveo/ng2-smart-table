export class LocalFilter {

  protected static FILTER = (value: string, search: string) => {
    return value.includes(search);
  };

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    let filter: Function = customFilter ? customFilter : this.FILTER;

    return data.filter((el) => {
      return filter.call(null, el[field].toString().toLowerCase(), search.toString().toLowerCase());
    });
  }
}
