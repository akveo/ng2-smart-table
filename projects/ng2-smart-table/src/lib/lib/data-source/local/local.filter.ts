export function filterValues(value: string, search: string) {
  return value.toString().toLowerCase().includes(search.toString().toLowerCase());
}

export class LocalFilter {

  /*
  new Logic start
  */
  


  protected static FILTER = (value: string, search: string) => {
    return value.toString().toLowerCase().includes(search.toString().toLowerCase());
  }

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : this.FILTER;

    return data.filter((el) => {
      // Holds the data
      let data: any = el;

      // Split the property string
      const propertyList: string[] = field.split(".");

      // Access inner properties
      for(const property of propertyList) {
        data = data[property];
      }

      const value = typeof data === 'undefined' || data === null ? '' : data;
      return filter.call(null, value, search);
    });
  }

  /*
    new logic end
  */

  /*
  Original Start
  

  static filter(data: Array<any>, field: string, search: string, customFilter?: Function): Array<any> {
    const filter: Function = customFilter ? customFilter : filterValues;

    return data.filter((el) => {
      const value = typeof el[field] === 'undefined' || el[field] === null ? '' : el[field];
      return filter.call(null, value, search);
      //return filter.call(null, el, search);
    });
  }
  
  /*
  Original end
  */
}
