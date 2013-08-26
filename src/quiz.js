//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

function Quiz(){
  var numbers = [];
  this.numbers = function(){
    return numbers.slice();
  };
  this.trash = [];
  this.add = function(number){
    if (typeof(number) === 'number') {
      numbers.push(number);
    } else if (typeof(number) === 'object') {
      for (i=0; i<number.length; i++) {
        if (typeof(number[i]) === 'number') {
          numbers.push(number[i]);
        } else {
          this.trash.push(number[i]);
        }
      }
    } else {
      this.trash.push(number);
    }
  };
  this.count = function(number){
    a = 0;
    for (k=0; k<numbers.length; k++) {
      if (numbers[k] === number) {
        a++;
      }
    }
    return a;
  };
  this.rotate = function(number){
    for (i=0; i<number; i++) {
      var num = numbers[0];
      numbers.shift();
      numbers.push(num);
    }
  };
  this.countEvens = function(){
    var c = 0;
    for (i=0; i<numbers.length; i++) {
      if (numbers[i]%2 === 0) {
        c++;
      }
    }
    return c;
  };
}