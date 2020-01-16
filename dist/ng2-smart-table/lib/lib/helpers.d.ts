/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export declare const deepExtend: (...objects: any[]) => any;
export declare class Deferred {
    promise: Promise<any>;
    resolve: any;
    reject: any;
    constructor();
}
export declare function getDeepFromObject(object: {}, name: string, defaultValue?: any): any;
