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

// Create a new quiz object
// var quiz = new Quiz()

  var new_quiz = Object.create(quiz);

  it("should start with a default name from its prototype", function() {
    expect(new_quiz.name).toBe("new quiz");
  });

  it("should take a new name when assigned", function() {
    new_quiz.setName("new quiz 2");
    expect(new_quiz.name).toBe("new quiz 2");
  });

// We can add numbers to it
// quiz.add(5)
// quiz.add(3)

  it("set a static number", function() {
    expect(new_quiz.numbers).toEqual([0]);
  });

  it("add numbers", function() {
    new_quiz.addNumber(5);
    new_quiz.addNumber(3);
    expect(new_quiz.numbers).toEqual([0, 5, 3]);
  });


});

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