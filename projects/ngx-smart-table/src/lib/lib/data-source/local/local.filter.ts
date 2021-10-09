export function filterValues(value: string, search: string) {
  return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}

export class LocalFilter {

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : filterValues;

    return data.filter((el) => {
      //const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
      //return filter.call(null, value, search, el);
      let parts = field.split(".");
      let prop = el;
      for (var i = 0; i < parts.length && typeof prop !== 'undefined'; i++) {
        prop = prop[parts[i]];
      }
      return filter.call(null, prop, search);
    });
  }
}
