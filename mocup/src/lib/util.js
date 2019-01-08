/**
 * DOMイベント発火関数
 * パラメータelementに対し、eventで指定したイベントを発火させる。
 * @param {Object} element
 * @param {string} event
 */
export function triggerEvent(element, event) {
  window.setTimeout(
    (element, event) => {
      if (document.createEvent) {
        // IE以外
        var evtInst = document.createEvent("HTMLEvents");
        evtInst.initEvent(event, true, true); // event type, bubbling, cancelable
        return element.dispatchEvent(evtInst);
      } else {
        // IE
        var evtIeInst = document.createEventObject();
        return element.fireEvent("on" + event, evtIeInst);
      }
    },
    10,
    element,
    event
  );
}

export class AppTime {
  constructor() {
    this.time = new Date();
  }

  get dateStr() {
    var ret = this.time.getFullYear();
    ret += "/" + (this.time.getMonth() + 1);
    ret += "/" + this.time.getDate();
    return ret;
  }

  get timeStr() {
    var ret = this.time.getHours();
    ret += ":" + this.time.getMinutes();
    return ret;
  }
}
