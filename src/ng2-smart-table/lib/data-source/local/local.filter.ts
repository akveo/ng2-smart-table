export class LocalFilter {

  protected static FILTER = (value: string, search: any) => {
    if (typeof search === 'string') {
      return value.toString().toLowerCase().includes(search.toString().toLowerCase());
    } else {
      if (search.hasOwnProperty('beginEpoc') && search.hasOwnProperty('endEpoc')) {
        const time = new Date(value).getTime() / 1000;
        return search.beginEpoc < time && search.endEpoc > time;
      }
    }
  }

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : this.FILTER;

    return data.filter((el) => {
      const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
      return filter.call(null, value, search);
    });
  }
}
