import {CustomEase} from '../plugins/CustomEase';

export function closest(el, selector) {
    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] === 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

    var parent;

    // traverse parents
    while (el) {
        parent = el.parentElement;
        if (parent && parent[matchesFn](selector)) {
            return parent;
        }
        el = parent;
    }

    return null;
}

export function cubicBezier(bezier){
    return CustomEase.create("custom", "M0,0,C"+bezier+",1,1");
}

export function isTouchDevice() {
  return (
    !!(typeof window !== 'undefined' &&
      ('ontouchstart' in window ||
        (window.DocumentTouch &&
          typeof document !== 'undefined' &&
          document instanceof window.DocumentTouch))) ||
    !!(typeof navigator !== 'undefined' &&
      (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
  );
}