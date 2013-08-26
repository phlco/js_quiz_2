//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

function Quiz() {
  var nums = [];
  var that = this;

  this.add = function(num) {
    if (typeof num === "number") {
      that.nums.push(num);
    }
    else if (num instanceof Array) {
      for (var i = 0; i < num.length; i += 1) {
        if (typeof num[i] === "number") {
          that.nums.push(num[i]);
        }
      }
    }
  };

  this.numbers = function() {
    return that.nums;
  };
}