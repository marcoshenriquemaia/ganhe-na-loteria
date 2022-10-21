import { gameList } from "../../data/default/index.js"
import { STO } from "../../gameRules/mock/storage.js"
import setDefaultStorage from "../setDefaultStorage/index.js"

let secI = ''

const polluteLocalStorage = () => {
    for (let i = 0; i < 30; i++) {
        localStorage.setItem(`loteria_user${i}`, localStorage.getItem(STO))
    }
}

export const sec =  (i) => {
    polluteLocalStorage()

    // const user = {
    //     character: {
    //       level: 1,
    //       multi: 1,
    //       money: 10,
    //       ticketDiscount: 0
    //     },
    //     gameSelected: gameList[0],
    //     gameList,
    // }

    
    // for (let i = 0; i < 30; i++) {
    //     localStorage.setItem(STO, JSON.stringify(user))
    // }
    // if (!!secI && (localStorage.getItem(STO) !== secI || JSON.stringify(user) !== localStorage.getItem(STO))) {
    //     setDefaultStorage()
    // }

    // secI = i
}

!function() {
    function detectDevTool(allow) {
      if(isNaN(+allow)) allow = 100;
      var start = +new Date(); // Validation of built-in Object tamper prevention.
      debugger;
      var end = +new Date(); // Validates too.
      if(isNaN(start) || isNaN(end) || end - start > allow) {
        setDefaultStorage()
        window.location.reload();
      }
    }
    if(window.attachEvent) {
      if (document.readyState === "complete" || document.readyState === "interactive") {
          detectDevTool();
        window.attachEvent('onresize', detectDevTool);
        window.attachEvent('onmousemove', detectDevTool);
        window.attachEvent('onfocus', detectDevTool);
        window.attachEvent('onblur', detectDevTool);
        setInterval(detectDevTool, 100);
      } else {
          setTimeout(argument.callee, 0);
      }
    } else {
      window.addEventListener('load', detectDevTool);
      window.addEventListener('resize', detectDevTool);
      window.addEventListener('mousemove', detectDevTool);
      window.addEventListener('focus', detectDevTool);
      window.addEventListener('blur', detectDevTool);
      setInterval(detectDevTool, 100);

    }
  }();