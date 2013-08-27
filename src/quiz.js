//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// create a quiz object

var Quiz = function(){
  var numbers = [];
  var trash = [];
  var count = 0;

  var quiz = {};

  quiz.add = function(num) {
    if (Array.isArray(num)) {
      for (var i = 0; i < num.length; i++) {
        quiz.add(num[i]);
      }
    } else {
      if (!isNaN(parseFloat(num)) && isFinite(num)) {
        numbers.push(num);
      } else {
        trash.push(num);
      }
    }
  }

  quiz.numbers = function() {
    return numbers.slice(0);
  }

  quiz.count = function(num) {
    count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] == num) { count++ }
    }
    return count;
  }

  quiz.countEvens = function() {
    count = 0;
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) { count++ }
    }
    return count;
  }

  quiz.rotate = function(num) {
    var tail = numbers.splice(0, num);
    numbers = numbers.concat(tail);
  }

  quiz.trash = function() {
    return trash;
  }

  return quiz;
}