//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];


function Quiz(){
  this.numbers = [],
  this.trash = [],
  this.add = function(input){
    if (typeof input === 'number' || input instanceof Array) {
      this.numbers.push(input);
      this.flatten(this.numbers);
      return this.numbers
    } else {
      this.trash.push(input);
    }
  },
  this.count = function(){
    console.log(this.numbers.length);
  },
  this.flatten = function(array) {
    var result = [], self = arguments.callee;
    array.forEach(function(item) {
      Array.prototype.push.apply(
        result,
        Array.isArray(item) ? self(item) : [item]
        );
    });
    return result;
  };
}