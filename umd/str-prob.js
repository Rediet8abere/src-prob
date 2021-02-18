(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['str-prob'] = {}));
}(this, (function (exports) { 'use strict';

  function capitalizeFirst(str) {
    // capitalize first letter of a word
    const newStr = str.charAt(0).toUpperCase() + str.slice(1);
    return newStr
  }

  String.prototype.capitalizeFirst = function() {
    return capitalizeFirst(this)
  };

  console.log(capitalizeFirst('hello'));
  console.log('hello there'.capitalizeFirst());

  function allCaps(str) {
    return str.toUpperCase()
  }

  String.prototype.allCaps = function() {
    return allCaps(this)
  };

  console.log(allCaps('hello'));
  console.log('hello there'.allCaps());


  function capitalizeWords(str) {
    const strList = str.split(' ');
    let newStr = '';
    for (let i=0; i < strList.length; i++) {
      newStr += capitalizeFirst(strList[i]) + ' ';
    }
    return newStr.trim()
  }


  String.prototype.capitalizeWords = function() {
    return capitalizeWords(this)
  };


  console.log(capitalizeWords('we do all things right'));
  console.log('In this world we do all things right'.capitalizeWords());


  function capitalizeHeadLine(str) {
    const prop = new Set(['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from']);
    const strList = str.split(' ');
    let newStr = '';

    for (let i=0; i < strList.length; i++) {
      if (prop.has(strList[i])) {
        newStr += strList[i] + ' ';
      } else {
        newStr += capitalizeFirst(strList[i]) + ' ';
      }

    }
    return newStr.trim()
  }

  String.prototype.capitalizeHeadLine = function() {
    return capitalizeHeadLine(this)
  };

  console.log(capitalizeHeadLine('we do all things in the name of god by the will of people'));
  console.log('In this world we do all things right'.capitalizeHeadLine());

  function removeExtraSpace(str){
    const strTri = str.trim();
    const strList = strTri.split(' ');
    let newStr = '';
    for (let i=0; i < strList.length; i++) {
      if (strList[i] != '') {
        newStr += strList[i] + ' ';
      } else {
        newStr += strList[i];
      }
    }
    return newStr.trim()

  }

  String.prototype.removeExtraSpace = function() {
    return removeExtraSpace(this)
  };

  console.log(removeExtraSpace("   Hello    world!   "));
  console.log("   Hello    world!   ".removeExtraSpace());




  function kebobCase(str) {
    const strTri = str.trim();
    const strList = strTri.split(" ");
    return strList.join('-')
  }

  String.prototype.kebobCase = function() {
    return kebobCase(this)
  };

  console.log(kebobCase(" Hello world "));
  console.log(" Hello world ".kebobCase());


  function snakeCase(str) {
    const strTri = str.trim();
    const strList = strTri.split(" ");
    return strList.join('_')
  }

  String.prototype.snakeCase = function() {
    return snakeCase(this)
  };

  console.log(snakeCase(" what the heck "));
  console.log(" what the heck ".snakeCase());


  function camelCase(str) {
    const strTri = str.trim();
    const strList = strTri.split(" ");
    let newStr = '';
    for (let i=0; i<strList.length; i++) {
      if (i==0) {
        newStr += strList[i].toLowerCase();
      } else {
        newStr += capitalizeFirst(strList[i]);
      }
    }
    return newStr
  }

  String.prototype.camelCase = function() {
    return camelCase(this)
  };

  console.log(camelCase('Camel Case'));
  console.log('what the heck'.camelCase());


  function shift(str, num) {
    let newStr = str.slice(num) + str.slice(0, num);
    return newStr
  }

  String.prototype.shift = function() {
    return shift(this)
  };



  console.log(shift('hello world', 2));
  console.log('Camel Case'.shift());


  function makeHashTag(str) {
    const strTri = capitalizeWords(str.trim());
    const strList = strTri.split(" ");

    return '#' + strList.join('')
  }

  String.prototype.makeHashTag = function() {
    return makeHashTag(this)
  };

  console.log(makeHashTag('go for it'));
  console.log('go for it'.makeHashTag());

  function isEmpty(str) {
    if (str.match(/[a-z]/i)) {
      return false
    } else if (str.match(/[A-Z]/i)) {
      return false
    } else if (str.match(/[0-9]/i)) {
      return false
    }
    return true
  }

  String.prototype.isEmpty = function() {
    return isEmpty(this)
  };

  console.log(isEmpty(''));
  console.log(isEmpty('\n'));
  console.log(isEmpty('\t'));
  console.log(isEmpty('\r'));
  console.log(isEmpty('hello 123'));
  console.log('hello 123'.isEmpty());

  exports.allCaps = allCaps;
  exports.camelCase = camelCase;
  exports.capitalizeFirst = capitalizeFirst;
  exports.capitalizeHeadLine = capitalizeHeadLine;
  exports.capitalizeWords = capitalizeWords;
  exports.isEmpty = isEmpty;
  exports.kebobCase = kebobCase;
  exports.makeHashTag = makeHashTag;
  exports.removeExtraSpace = removeExtraSpace;
  exports.shift = shift;
  exports.snakeCase = snakeCase;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
