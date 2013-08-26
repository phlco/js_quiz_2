//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

function Quiz() {
  this.numList = [];
  this.trash = [];
}

Quiz.prototype.add = function(num) {
  if (num.constructor == Number) {
    this.numList.push(num);
  } else if (num.constructor == Array) {
    for (i = 0; i < num.length; i++) {
      if (num[i].constructor == Number) {
        this.numList.push(num[i]);
      } else {
        this.trash.push(num[i]);
      }
    }
  } else {
    this.trash.push(num);
  }
};

Quiz.prototype.numbers = function() {
  return this.numList;
};

Quiz.prototype.count = function(num) {
  var countTotal = 0;
  for (i = 0; i < this.numList.length; i++) {
    if (this.numList[i] === num) {
      countTotal++;
    }
  }
  return countTotal;
};

Quiz.prototype.rotate = function(num) {

};

var quiz = new Quiz();
quiz.add(5);
quiz.add(3);
quiz.numbers();
quiz.add("7");
quiz.numbers();
quiz.add([4, 2, true, 9]);
quiz.numbers();


// We can't access the array directly
// quiz = new Quiz();
// quiz.add([1, 2, 3]);
// quiz.numbers().push(5);
// quiz.numbers();

// Takes a specified length of an array starting from the left and moves it to
// the tail end
// quiz = new Quiz()
// quiz.add([1, 2, 3, 4, 5])
// quiz.numbers() => [1, 2, 3, 4, 5]
// quiz.rotate(2)
// quiz.numbers() => [3, 4, 5, 1, 2]

// Prints out the number of even numbers in the array.
// quiz.numbers() => [1, 2, 3, 4, 5]
// quiz.countEvent() => 2