let __BOXID__ = "__kwb_msg_box__";
var __msg_box_inst__ = null;

export default class KwbMsgBox {
  constructor() {
    var capElm = document.createElement("div");
    var msgElm = document.createElement("div");
    var frmElm = document.createElement("div");
    frmElm.style.position = "absolute";
    frmElm.style.display = "none";
    frmElm.style.flexDirection = "column";
    frmElm.style.margin = "0px";
    frmElm.style.padding = "0px";
    frmElm.style.width = "80%";
    //--------------------------
    capElm.style.padding = "8px 8px 0px 8px";
    capElm.style.color = "#fff";
    capElm.style.fontSize = "1rem";
    capElm.style.fontWeight = "bold";
    capElm.style.textAlign = "center";
    capElm.style.backgroundColor = "#a00";
    capElm.style.borderTopLeftRadius = "8px";
    capElm.style.borderTopRightRadius = "8px";
    capElm.style.border = "4px solid #a00";
    //--------------------------
    msgElm.style.paddng = "4px 8px 8px 8px";
    msgElm.style.border = "4px solid #a00";
    msgElm.style.backgroundColor = "#fff";
    msgElm.style.fontSize = "0.8rem";
    msgElm.style.fontWeight = "normal";
    msgElm.style.textAlign = "left";

    frmElm.appendChild(capElm);
    frmElm.appendChild(msgElm);

    document.body.append(frmElm);
  }

  static msg(type, cap, msg) {
    if (__msg_box_inst__ == null) {
      __msg_box_inst__ = new KwbMsgBox();
    }
  }
}
