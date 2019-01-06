export function triggerEvent(element, event) {
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
}
