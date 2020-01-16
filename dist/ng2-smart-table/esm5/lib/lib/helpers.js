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
export var deepExtend = function () {
    var objects = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        objects[_i] = arguments[_i];
    }
    if (arguments.length < 1 || typeof arguments[0] !== 'object') {
        return false;
    }
    if (arguments.length < 2) {
        return arguments[0];
    }
    var target = arguments[0];
    // convert arguments to array and cut off target object
    var args = Array.prototype.slice.call(arguments, 1);
    var val, src;
    args.forEach(function (obj) {
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
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
export { Deferred };
// getDeepFromObject({result: {data: 1}}, 'result.data', 2); // returns 1
export function getDeepFromObject(object, name, defaultValue) {
    if (object === void 0) { object = {}; }
    var keys = name.split('.');
    // clone the object
    var level = deepExtend({}, object);
    keys.forEach(function (k) {
        if (level && typeof level[k] !== 'undefined') {
            level = level[k];
        }
    });
    return typeof level === 'undefined' ? defaultValue : level;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1zbWFydC10YWJsZS8iLCJzb3VyY2VzIjpbImxpYi9saWIvaGVscGVycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sUUFBUSxDQUFDO0FBRW5DOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLElBQU0sVUFBVSxHQUFHO0lBQVMsaUJBQXNCO1NBQXRCLFVBQXNCLEVBQXRCLHFCQUFzQixFQUF0QixJQUFzQjtRQUF0Qiw0QkFBc0I7O0lBQ3ZELElBQUksU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO1FBQzVELE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFFRCxJQUFJLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JCO0lBRUQsSUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTVCLHVEQUF1RDtJQUN2RCxJQUFNLElBQUksR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRELElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUViLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFRO1FBQ3BCLCtDQUErQztRQUMvQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pELE9BQU87U0FDUjtRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRztZQUNwQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsZUFBZTtZQUNsQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWTtZQUU1Qix1QkFBdUI7WUFDdkIsSUFBSSxHQUFHLEtBQUssTUFBTSxFQUFFO2dCQUNsQixPQUFPO2dCQUVQOzs7bUJBR0c7YUFDSjtpQkFBTSxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixPQUFPO2dCQUVQLHlEQUF5RDthQUMxRDtpQkFBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdCLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU87Z0JBRVAseURBQXlEO2FBQzFEO2lCQUFNLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxJQUFJLEdBQUcsS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLE9BQU87Z0JBRVAsMkRBQTJEO2FBQzVEO2lCQUFNO2dCQUNMLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNuQyxPQUFPO2FBQ1I7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBRUY7SUFPRTtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3pDLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDLEFBYkQsSUFhQzs7QUFFRCx5RUFBeUU7QUFDekUsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQVcsRUFBRSxJQUFZLEVBQUUsWUFBa0I7SUFBN0MsdUJBQUEsRUFBQSxXQUFXO0lBQzNDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsbUJBQW1CO0lBQ25CLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLENBQUM7UUFDYixJQUFJLEtBQUssSUFBSSxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLEVBQUU7WUFDNUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FBQyxDQUFDO0lBRUgsT0FBTyxPQUFPLEtBQUssS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQzdELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xyXG5cclxuLyoqXHJcbiAqIEV4dGVuZGluZyBvYmplY3QgdGhhdCBlbnRlcmVkIGluIGZpcnN0IGFyZ3VtZW50LlxyXG4gKlxyXG4gKiBSZXR1cm5zIGV4dGVuZGVkIG9iamVjdCBvciBmYWxzZSBpZiBoYXZlIG5vIHRhcmdldCBvYmplY3Qgb3IgaW5jb3JyZWN0IHR5cGUuXHJcbiAqXHJcbiAqIElmIHlvdSB3aXNoIHRvIGNsb25lIHNvdXJjZSBvYmplY3QgKHdpdGhvdXQgbW9kaWZ5IGl0KSwganVzdCB1c2UgZW1wdHkgbmV3XHJcbiAqIG9iamVjdCBhcyBmaXJzdCBhcmd1bWVudCwgbGlrZSB0aGlzOlxyXG4gKiAgIGRlZXBFeHRlbmQoe30sIHlvdXJPYmpfMSwgW3lvdXJPYmpfTl0pO1xyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlZXBFeHRlbmQgPSBmdW5jdGlvbiguLi5vYmplY3RzOiBBcnJheTxhbnk+KTogYW55IHtcclxuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDEgfHwgdHlwZW9mIGFyZ3VtZW50c1swXSAhPT0gJ29iamVjdCcpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xyXG4gICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHRhcmdldCA9IGFyZ3VtZW50c1swXTtcclxuXHJcbiAgLy8gY29udmVydCBhcmd1bWVudHMgdG8gYXJyYXkgYW5kIGN1dCBvZmYgdGFyZ2V0IG9iamVjdFxyXG4gIGNvbnN0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xyXG5cclxuICBsZXQgdmFsLCBzcmM7XHJcblxyXG4gIGFyZ3MuZm9yRWFjaCgob2JqOiBhbnkpID0+IHtcclxuICAgIC8vIHNraXAgYXJndW1lbnQgaWYgaXQgaXMgYXJyYXkgb3IgaXNuJ3Qgb2JqZWN0XHJcbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgQXJyYXkuaXNBcnJheShvYmopKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBPYmplY3Qua2V5cyhvYmopLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICBzcmMgPSB0YXJnZXRba2V5XTsgLy8gc291cmNlIHZhbHVlXHJcbiAgICAgIHZhbCA9IG9ialtrZXldOyAvLyBuZXcgdmFsdWVcclxuXHJcbiAgICAgIC8vIHJlY3Vyc2lvbiBwcmV2ZW50aW9uXHJcbiAgICAgIGlmICh2YWwgPT09IHRhcmdldCkge1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogaWYgbmV3IHZhbHVlIGlzbid0IG9iamVjdCB0aGVuIGp1c3Qgb3ZlcndyaXRlIGJ5IG5ldyB2YWx1ZVxyXG4gICAgICAgICAqIGluc3RlYWQgb2YgZXh0ZW5kaW5nLlxyXG4gICAgICAgICAqL1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IHZhbCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xyXG4gICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8ganVzdCBjbG9uZSBhcnJheXMgKGFuZCByZWN1cnNpdmUgY2xvbmUgb2JqZWN0cyBpbnNpZGUpXHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBjbG9uZURlZXAodmFsKTtcclxuICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIC8vIG92ZXJ3cml0ZSBieSBuZXcgdmFsdWUgaWYgc291cmNlIGlzbid0IG9iamVjdCBvciBhcnJheVxyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcmMgIT09ICdvYmplY3QnIHx8IHNyYyA9PT0gbnVsbCB8fCBBcnJheS5pc0FycmF5KHNyYykpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IGRlZXBFeHRlbmQoe30sIHZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBzb3VyY2UgdmFsdWUgYW5kIG5ldyB2YWx1ZSBpcyBvYmplY3RzIGJvdGgsIGV4dGVuZGluZy4uLlxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gZGVlcEV4dGVuZChzcmMsIHZhbCk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIHRhcmdldDtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZlcnJlZCB7XHJcblxyXG4gIHByb21pc2U6IFByb21pc2U8YW55PjtcclxuXHJcbiAgcmVzb2x2ZTogYW55O1xyXG4gIHJlamVjdDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGdldERlZXBGcm9tT2JqZWN0KHtyZXN1bHQ6IHtkYXRhOiAxfX0sICdyZXN1bHQuZGF0YScsIDIpOyAvLyByZXR1cm5zIDFcclxuZXhwb3J0IGZ1bmN0aW9uIGdldERlZXBGcm9tT2JqZWN0KG9iamVjdCA9IHt9LCBuYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSkge1xyXG4gIGNvbnN0IGtleXMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgLy8gY2xvbmUgdGhlIG9iamVjdFxyXG4gIGxldCBsZXZlbCA9IGRlZXBFeHRlbmQoe30sIG9iamVjdCk7XHJcbiAga2V5cy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICBpZiAobGV2ZWwgJiYgdHlwZW9mIGxldmVsW2tdICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBsZXZlbCA9IGxldmVsW2tdO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gdHlwZW9mIGxldmVsID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRWYWx1ZSA6IGxldmVsO1xyXG59XHJcbiJdfQ==