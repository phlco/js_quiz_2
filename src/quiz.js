//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

function Quiz(){
  this.numbers = [];
  this.trash = [];
  this.add = function(number){
    if (typeof(number) === 'number') {
      this.numbers.push(number);
    } else if (typeof(number) === 'object') {
      for (i=0; i<number.length; i++) {
        if (typeof(number[i]) === 'number') {
          this.numbers.push(number[i]);
        } else {
          this.trash.push(number[i]);
        }
      }
    } else {
      this.trash.push(number);
    }
  };
  this.count = function(number){
    i = 0;
    for (k=0; k<this.numbers.length; k++) {
      if (this.numbers[k] === number) {
        i++;
      }
    }
    return i;
  };
  this.rotate = function(number){
    for (i=0; i<number; i++) {
      var num = this.numbers[0];
      this.numbers.shift();
      this.numbers.push(num);
    }
  };
  this.countEvens = function(){
    k = 0;
    for (i=0; i<this.numbers.length; i++) {
      if (this.numbers[i]%2 === 0) {
        k++;
      }
    }
    return k;
  };
}