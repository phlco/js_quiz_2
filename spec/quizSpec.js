//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

// Create a new quiz object
var quiz = new Quiz();

// We can add numbers to it
// quiz.add(5)
// quiz.add(3)

describe('the Quiz prototype', function() {

  it('can have a number added to it', function() {
    quiz.add(5);
    expect(quiz.nums[quiz.nums.length - 1]).toEqual(5);
  });

// We can see the numbers we've added
// quiz.numbers() => [5, 3]

  it('can show the numbers it contains', function() {
    expect(quiz.numbers() instanceof Array).toBe(true);
  });

// We can only add numbers
// quiz.add("7")
// quiz.numbers() => [5, 3]

  it('does not add non-number input', function() {
    quiz.add("7");
    expect(typeof quiz.numbers()[quiz.numbers().length - 1]).toEqual("number");
  });

// Or arrays of numbers
// quiz.add([4, 2, true, 9])
// quiz.numbers() => [5, 3, 4, 2, 9]

  it('adds number elements from an array', function() {
    quiz.add([4, 2, true, 9]);
    expect(quiz.numbers()).toEqual([5, 4, 2, 9]);
  });

// We can't access the array directly
// quiz = new Quiz();
// quiz.add([1, 2, 3])
// quiz.numbers().push(5)
// quiz.numbers() => [1, 2, 3]

  describe('function numbers()', function() {

    it('does not allow direct access to the nums array', function() {
      var l = quiz.numbers().length;
      quiz.numbers().push(5);
      expect(quiz.numbers().length).toEqual(l);
    });

  });

// Trash returns anything we've tried to add that's not a number.
// quiz.add(["7", true])
// quiz.trash() => ["7", true]

// Returns the number of occurences of a specified number
// quiz.numbers() => [5, 3, 4, 3]
// quiz.count(3) => 2

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

});