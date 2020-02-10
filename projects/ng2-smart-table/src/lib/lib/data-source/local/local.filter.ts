export function filterValues(value: string, search: string) {
  return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}

export class LocalFilter {

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : filterValues;

    return data.filter((el) => {
      const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
      return filter.call(null, value, search);
    });
  }
}
