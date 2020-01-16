import { cloneDeep } from 'lodash';
/**
 * Extending object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
export const deepExtend = function (...objects) {
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    const target = arguments[0];
    // convert arguments to array and cut off target object
    const args = Array.prototype.slice.call(arguments, 1);
    let val, src;
    args.forEach((obj) => {
        // skip argument if it is array or isn't object
        if (typeof obj !== 'object' || Array.isArray(obj)) {
            return;
        }
        Object.keys(obj).forEach(function (key) {
            src = target[key]; // source value
            val = obj[key]; // new value
            // recursion prevention
            if (val === target) {
                return;
                /**
                 * if new value isn't object then just overwrite by new value
                 * instead of extending.
                 */
            }
            else if (typeof val !== 'object' || val === null) {
                target[key] = val;
                return;
                // just clone arrays (and recursive clone objects inside)
            }
            else if (Array.isArray(val)) {
                target[key] = cloneDeep(val);
                return;
                // overwrite by new value if source isn't object or array
            }
            else if (typeof src !== 'object' || src === null || Array.isArray(src)) {
                target[key] = deepExtend({}, val);
                return;
                // source value and new value is objects both, extending...
            }
            else {
                target[key] = deepExtend(src, val);
                return;
            }
        });
    });
    return target;
};
export class Deferred {
    constructor() {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
}
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object = {}, name, defaultValue) {
    const keys = name.split('.');
    // clone the object
    let level = deepExtend({}, object);
    keys.forEach((k) => {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRW5DOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLFVBQVMsR0FBRyxPQUFtQjtJQUN2RCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtRQUM1RCxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtRQUN4QixPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNyQjtJQUVELE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUU1Qix1REFBdUQ7SUFDdkQsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV0RCxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUM7SUFFYixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7UUFDeEIsK0NBQStDO1FBQy9DLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxHQUFHO1lBQ3BDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxlQUFlO1lBQ2xDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxZQUFZO1lBRTVCLHVCQUF1QjtZQUN2QixJQUFJLEdBQUcsS0FBSyxNQUFNLEVBQUU7Z0JBQ2xCLE9BQU87Z0JBRVA7OzttQkFHRzthQUNKO2lCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xELE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7Z0JBQ2xCLE9BQU87Z0JBRVAseURBQXlEO2FBQzFEO2lCQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTztnQkFFUCx5REFBeUQ7YUFDMUQ7aUJBQU0sSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLElBQUksR0FBRyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN4RSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsT0FBTztnQkFFUCwyREFBMkQ7YUFDNUQ7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87YUFDUjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUM7QUFFRixNQUFNLE9BQU8sUUFBUTtJQU9uQjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEVBQUU7WUFDN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0Y7QUFFRCx5RUFBeUU7QUFDekUsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsSUFBWSxFQUFFLFlBQWtCO0lBQzdFLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsbUJBQW1CO0lBQ25CLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1FBQ2pCLElBQUksS0FBSyxJQUFJLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsRUFBRTtZQUM1QyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLE9BQU8sS0FBSyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFDN0QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG4vKipcclxuICogRXh0ZW5kaW5nIG9iamVjdCB0aGF0IGVudGVyZWQgaW4gZmlyc3QgYXJndW1lbnQuXHJcbiAqXHJcbiAqIFJldHVybnMgZXh0ZW5kZWQgb2JqZWN0IG9yIGZhbHNlIGlmIGhhdmUgbm8gdGFyZ2V0IG9iamVjdCBvciBpbmNvcnJlY3QgdHlwZS5cclxuICpcclxuICogSWYgeW91IHdpc2ggdG8gY2xvbmUgc291cmNlIG9iamVjdCAod2l0aG91dCBtb2RpZnkgaXQpLCBqdXN0IHVzZSBlbXB0eSBuZXdcclxuICogb2JqZWN0IGFzIGZpcnN0IGFyZ3VtZW50LCBsaWtlIHRoaXM6XHJcbiAqICAgZGVlcEV4dGVuZCh7fSwgeW91ck9ial8xLCBbeW91ck9ial9OXSk7XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGVlcEV4dGVuZCA9IGZ1bmN0aW9uKC4uLm9iamVjdHM6IEFycmF5PGFueT4pOiBhbnkge1xyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMSB8fCB0eXBlb2YgYXJndW1lbnRzWzBdICE9PSAnb2JqZWN0Jykge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7XHJcbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdGFyZ2V0ID0gYXJndW1lbnRzWzBdO1xyXG5cclxuICAvLyBjb252ZXJ0IGFyZ3VtZW50cyB0byBhcnJheSBhbmQgY3V0IG9mZiB0YXJnZXQgb2JqZWN0XHJcbiAgY29uc3QgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XHJcblxyXG4gIGxldCB2YWwsIHNyYztcclxuXHJcbiAgYXJncy5mb3JFYWNoKChvYmo6IGFueSkgPT4ge1xyXG4gICAgLy8gc2tpcCBhcmd1bWVudCBpZiBpdCBpcyBhcnJheSBvciBpc24ndCBvYmplY3RcclxuICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JyB8fCBBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgIHNyYyA9IHRhcmdldFtrZXldOyAvLyBzb3VyY2UgdmFsdWVcclxuICAgICAgdmFsID0gb2JqW2tleV07IC8vIG5ldyB2YWx1ZVxyXG5cclxuICAgICAgLy8gcmVjdXJzaW9uIHByZXZlbnRpb25cclxuICAgICAgaWYgKHZhbCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBpZiBuZXcgdmFsdWUgaXNuJ3Qgb2JqZWN0IHRoZW4ganVzdCBvdmVyd3JpdGUgYnkgbmV3IHZhbHVlXHJcbiAgICAgICAgICogaW5zdGVhZCBvZiBleHRlbmRpbmcuXHJcbiAgICAgICAgICovXHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHZhbCAhPT0gJ29iamVjdCcgfHwgdmFsID09PSBudWxsKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBqdXN0IGNsb25lIGFycmF5cyAoYW5kIHJlY3Vyc2l2ZSBjbG9uZSBvYmplY3RzIGluc2lkZSlcclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IGNsb25lRGVlcCh2YWwpO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZSBpZiBzb3VyY2UgaXNuJ3Qgb2JqZWN0IG9yIGFycmF5XHJcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHNyYyAhPT0gJ29iamVjdCcgfHwgc3JjID09PSBudWxsIHx8IEFycmF5LmlzQXJyYXkoc3JjKSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gZGVlcEV4dGVuZCh7fSwgdmFsKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIHNvdXJjZSB2YWx1ZSBhbmQgbmV3IHZhbHVlIGlzIG9iamVjdHMgYm90aCwgZXh0ZW5kaW5nLi4uXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBkZWVwRXh0ZW5kKHNyYywgdmFsKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmVycmVkIHtcclxuXHJcbiAgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG5cclxuICByZXNvbHZlOiBhbnk7XHJcbiAgcmVqZWN0OiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZ2V0RGVlcEZyb21PYmplY3Qoe3Jlc3VsdDoge2RhdGE6IDF9fSwgJ3Jlc3VsdC5kYXRhJywgMik7IC8vIHJldHVybnMgMVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVlcEZyb21PYmplY3Qob2JqZWN0ID0ge30sIG5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KSB7XHJcbiAgY29uc3Qga2V5cyA9IG5hbWUuc3BsaXQoJy4nKTtcclxuICAvLyBjbG9uZSB0aGUgb2JqZWN0XHJcbiAgbGV0IGxldmVsID0gZGVlcEV4dGVuZCh7fSwgb2JqZWN0KTtcclxuICBrZXlzLmZvckVhY2goKGspID0+IHtcclxuICAgIGlmIChsZXZlbCAmJiB0eXBlb2YgbGV2ZWxba10gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGxldmVsID0gbGV2ZWxba107XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiB0eXBlb2YgbGV2ZWwgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdFZhbHVlIDogbGV2ZWw7XHJcbn1cclxuIl19