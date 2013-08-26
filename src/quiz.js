//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var Quiz = {
  array: [],
  rejectedArray: [],
  add: function (num) {
    var i;
    if( Object.prototype.toString.call(num) === '[object Array]' ) {
      var that = this;
      for (i = 0; i < num.length; i++) {
        if (typeof(num[i]) == "number") {
          that.array.push(num[i]);
        } else {
          that.rejectedArray.push(num[i]);
        }
      }
    } else if (typeof(num) == "number") {
      this.array.push(num);
    } else {
      this.rejectedArray.push(num);
    }
    return this.array;
  },
  numbers: function () {
    return this.array;
  },
  trash: function () {
    return this.rejectedArray;
  },
  // count: function (num) {
  //   if array.contains(num) {
  //   }
  // },
  reset: function () {
    this.array = [];
    this.rejectedArray = [];
  }
};

if (typeof Object.create !== 'function') {
  Object.create = function(o) {
    var F = function() {};
    F.prototype = o;
    return new F();
  };
}