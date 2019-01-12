export class LocalFilter {

  protected static FILTER = (value: string, search: string) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
  }

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : this.FILTER;

    return data.filter((el) => {
      let parts = field.split(".");
      let prop = el;
      for (var i = 0; i < parts.length && typeof prop !== 'undefined'; i++) {
        prop = prop[parts[i]];
      }
      return filter.call(null, prop, search);
    });
  }
}
