var uppercase = "HELLO!"

var lowercase = "hello!"

var mixedCase = "Hi there!"

function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log('HELLO')
}

function logWhisper(string) {
  console.log("hello")
}

function sayHiToGrandma(hello) {
  return('I can\'t hear you!')
}

function sayHiToGrandma(HELLO) {
  return("YES INDEED!")
}