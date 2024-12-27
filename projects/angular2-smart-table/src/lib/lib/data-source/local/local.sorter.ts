export function defaultObjectComparator(direction: number, left: any, right: any): number {
  if (left == null && right == null) {
    return 0;
  }
  // only one of them can be null now
  if (left == null || left < right!) {
    return -1 * direction;
  }
  if (right == null || right < left) {
    return direction;
  }
  // none of them can be null now, and they must be equal
  return 0;
}

export function defaultNumberComparator(direction: number, left: number | null, right: number | null): number {
  // the default comparator already does what we want, so this function is merely a type-safe alias
  return defaultObjectComparator(direction, left, right);
}

export function defaultStringComparator(direction: number, left: string | null, right: string | null): number {
  if (left == null && right == null) {
    return 0;
  } else if (left == null) {
    return -1 * direction;
  } else if (right == null) {
    return direction;
  } else {
    return left.localeCompare(right) * direction;
  }
}

/**
 * Compares two values with special treatment for numbers and strings.
 *
 * The rule is: if both values are of type number (or null), they are compared as if they were numbers.
 * If both values are either null, undefined or typeof string, they are compared as strings using the current locale.
 * Otherwise, they are compared using their natural ordering.
 *
 * Null values are considered less than any non-null element. Null and undefined are considered equal.
 *
 * @param direction 1 for ascending and -1 for descending (other values are not allowed)
 * @param left the left value
 * @param right the right value
 */
export function defaultComparator(direction: any, left: any, right: any) {
  const leftIsNumeric = left == null || (!isNaN(parseFloat(left)) && !isNaN(left - 0));
  const rightIsNumeric = right == null || (!isNaN(parseFloat(right)) && !isNaN(right - 0));
  const leftIsString = left == null || (typeof left === 'string');
  const rightIsString = right == null || (typeof right === 'string');
  if (leftIsNumeric && rightIsNumeric) {
    return defaultNumberComparator(direction, Number(left), Number(right));
  } else if (leftIsString && rightIsString) {
    return defaultStringComparator(direction, left, right);
  } else {
    return defaultObjectComparator(direction, left, right);
  }
}
