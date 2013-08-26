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

describe("Object", function() {
  it("should have a create method to duplicate an object", function() {
    var quiz = Object.create(Quiz);
    expect(quiz).toEqual(Quiz);
  });
});

describe('Quiz object', function() {

  var quiz = Object.create(Quiz);

  it('adds numbers', function () {
    expect(quiz.add(5)).toEqual([5]);
    expect(quiz.add(3)).toEqual([5, 3]);
  });

  it('returns numbers', function () {
    expect(quiz.numbers()).toEqual([5, 3]);
  });

  it('adds only numbers', function () {
    expect(quiz.add("7")).toEqual([5,3]);
  });

  it('also adds arrays of numbers', function () {
    expect(quiz.add([4, 2, true, 9])).toEqual([5, 3, 4, 2, 9]);
  });

  it('returns anything passed in that was not a number', function () {
    expect(quiz.trash()).toEqual(["7", true]);
  });

  it('returns the number of occurences of a specified number', function () {
    quiz.reset();
    quiz.add([5, 3, 4, 3]);
    expect(quiz.count(3)).toEqual(2);
  });

});

// Create a new quiz object
// var quiz = new Quiz()

// We can add numbers to it
// quiz.add(5)
// quiz.add(3)

// We can see the numbers we've added
// quiz.numbers() => [5, 3]

// We can only add numbers
// quiz.add("7")
// quiz.numbers() => [5, 3]

// Or arrays of numbers
// quiz.add([4, 2, true, 9])
// quiz.numbers() => [5, 3, 4, 2, 9]

// We can't access the array directly
// quiz = new Quiz();
// quiz.add([1, 2, 3])
// quiz.numbers().push(5)
// quiz.numbers() => [1, 2, 3]

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