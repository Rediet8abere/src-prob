
function capitalizeFirst(str) {
  // capitalize first letter of a word
  const newStr = str.charAt(0).toUpperCase() + str.slice(1)
  return newStr
}

console.log(capitalizeFirst('hello'))


function allCaps(str) {
  return str.toUpperCase()
}

console.log(allCaps('hello'))


function capitalizeWords(str) {
  const strList = str.split(' ')
  let newStr = ''
  for (let i=0; i < strList.length; i++) {
    newStr += capitalizeFirst(strList[i]) + ' '
  }
  return newStr
}

console.log(capitalizeWords('we do all things right'))

function capitalizeHeadLine(str) {
  const prop = new Set(['the', 'in', 'a', 'an', 'and', 'but', 'for', 'at', 'by', 'from'])
  const strList = str.split(' ')
  let newStr = ''

  for (let i=0; i < strList.length; i++) {
    if (prop.has(strList[i])) {
      newStr += strList[i] + ' '
    } else {
      newStr += capitalizeFirst(strList[i]) + ' '
    }

  }
  return newStr
}

console.log(capitalizeHeadLine('we do all things in the name of god by the will of people'))


function removeExtraSpace(str){
  const strTri = str.trim()
  const strList = strTri.split(' ')
  let newStr = ''
  for (let i=0; i < strList.length; i++) {
    if (strList[i] != '') {
      newStr += strList[i] + ' '
    } else {
      newStr += strList[i]
    }
  }
  return newStr

}

console.log(removeExtraSpace("   Hello    world!   "))


function kebobCase(str) {
  const strTri = str.trim()
  const strList = strTri.split(" ")
  return strList.join('-')
}

console.log(kebobCase(" Hello world "))

function snakeCase(str) {
  const strTri = str.trim()
  const strList = strTri.split(" ")
  return strList.join('_')
}

console.log(snakeCase(" what the heck "))


function camelCase(str) {
  const strTri = str.trim()
  const strList = strTri.split(" ")
  let newStr = ''
  for (let i=0; i<strList.length; i++) {
    if (i==0) {
      newStr += strList[i].toLowerCase()
    } else {
      newStr += capitalizeFirst(strList[0])
    }
  }
  return newStr
}

console.log(camelCase('Camel Case'))


function shift(str, num) {
  let newStr = str.slice(num) + str.slice(0, num)
  return newStr
}

console.log(shift('hello world', 2))


function makeHashTag(str) {
  const strTri = capitalizeWords(str.trim())
  const strList = strTri.split(" ")

  return '#' + strList.join('')
}

console.log(makeHashTag('go for it'))

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

console.log(isEmpty(''))
console.log(isEmpty('\n'))
console.log(isEmpty('\t'))
console.log(isEmpty('\r'))
console.log(isEmpty('hello 123'))
