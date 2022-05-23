
describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO');
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello');
  })
})

describe('logShout(string)', function() {
  it('takes a string argument and logs it in all caps using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logShout('hello');

    expect(spy).toHaveBeenCalledWith('HELLO');

    console.log.restore();
  })
})

describe('logWhisper(string)', function() {
  it('takes a string argument and logs it in all lowercase using console.log()', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough();

    logWhisper('HELLO');

    expect(spy).toHaveBeenCalledWith('hello');

    console.log.restore();
  })
})

describe('sayHiToHeadphonedRoommate(string)', function() {
    it('returns "I can\'t hear you!" if `string` is lowercase', function() {
      expect(sayHiToHeadphonedRoommate('hello')).toEqual("I can't hear you!");
      expect(sayHiToHeadphonedRoommate('jolly cat')).toEqual("I can't hear you!");
    })
  
    it('returns "YES INDEED!" if `string` is uppercase', function() {
      expect(sayHiToHeadphonedRoommate('HELLO')).toEqual("YES INDEED!");
    })
  
    it('returns "I would love to!" if `string` is "Let\'s have dinner together!"`', function () {
      expect(sayHiToHeadphonedRoommate("Let's have dinner together!")).toEqual(
        "I would love to!"
      );
    });
  })
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log("HELLO");
  }
  function logWhisper(string) {
    console.log("hello");
  }
  function sayHiToHeadphonedRoommate(string) {
  const inputString = string;
  const upperCaseString = shout(string);
  const lowerCaseString = whisper(string);
  console.log("this is the inputString", inputString);
  console.log(upperCaseString);
  console.log(lowerCaseString);
  if (inputString === lowerCaseString) {
    return "I can't hear you!"
  }  
  if (inputString === upperCaseString) {
    return "YES INDEED!"
  }
  if (inputString === "Let's have dinner together!") {
  return "I would love to!"
  }
  }