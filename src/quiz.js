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

Quiz.prototype.add = function(number) {
  if (number.constructor == Array) {
    for(var i = 0; i < number.length; i ++) {
        if (typeof(number[i])==="number") {
          this.numList.push(number[i]);
        } else {
          this.trash.push(number[i]);
        }
    }
  } else {
      if (typeof(number)==="number") {
          this.numList.push(number);
      } else {
          this.trash.push(number);
      }
  }
};

Quiz.prototype.numbers = function(){
  return this.numList.toString();
};

Quiz.prototype.count = function(number) {
  var count = 0
  for(var i = 0; i< this.numList.length, i++) {


  }
};

var quiz = new Quiz();

