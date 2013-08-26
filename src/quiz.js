//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var quiz = {};


  var numbersArray = [];
  var trash = [];

  quiz.add = function(number) {
    if (typeof number === "number") {
      numbersArray.push(number);
    }else {
      trash.push(number);
    };
  };

  quiz.numbers = function() {
    return numbersArray;
  };

  quiz.trash = function(){
    return trash;
  };

  quiz.count = function(array, item){
    var count = 0;
    for(var i=0;i<array.length;i++){
    if(array[i] === item)
       count++;
   };
  };

var newQuiz = new Quiz();


