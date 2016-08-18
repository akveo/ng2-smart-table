export const deepExtend = (out, ...sources): Object => {
  out = out || {};

  for (let i = 0; i < sources.length; i++) {
    var obj = sources[i];
    if (!obj) {
      continue;
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          out[key] = deepExtend(out[key], obj[key]);
        }
        else {
          out[key] = obj[key];
        }
      }
    }
  }
  return out;
};

export class Deferred {

  promise: Promise<any>;
  
  resolve: any;
  reject: any;
  
  constructor () {
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    })
  }
}