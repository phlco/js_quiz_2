//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

function Quiz() {
  // that = this;
  this.numbers_array = [];
  this.trash_array = [];
  this.add = function(num) {
    var temp_array = [];
    if (typeof(num) === 'object') {
      for (var x = 0; x < num.length; x++) {
        temp_array.push(num[x]);
      }
    } else {
      temp_array.push(num);
    }

    for (var y = 0; y < temp_array.length; y++ ) {
      if (typeof(temp_array[y]) === 'number') {
        this.numbers_array.push(temp_array[y]);
      } else {
        this.trash_array.push(temp_array[y]);
      }
    }
  };
  this.numbers = function() {
    return this.numbers_array.toString();
  };
  this.trash = function() {
    return this.trash_array.toString();
  };
  this.rotate = function(num) {
    for (var z = 0; z < num; z++) {
      var temp_var;
      temp_var = this.numbers_array.shift();
      this.numbers_array.push(temp_var);
    }
  };
  this.countEven = function() {
    var temp_array = [];
    for (var i = 0; i < this.numbers_array.length; i++) {
      if (this.numbers_array[i] % 2 === 0) {
        temp_array.push(this.numbers_array[i]);
      }
    }
    return temp_array.length;
  };
}








