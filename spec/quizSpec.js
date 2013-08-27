//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)

// The first question's tests are written.
// See quiz.js for more details

describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

describe("Quiz", function() {
  var quiz;

  beforeEach(function() {
    quiz = new Quiz();
  });

  it("is an object", function() {
    expect(typeof quiz).toBe("object");
  });

  it(".add takes numbers or arrays", function() {
    spyOn(quiz, "add");
    quiz.add(5);
    quiz.add([1, "dog"]);
    expect(quiz.add).toHaveBeenCalledWith(5);
    expect(quiz.add).toHaveBeenCalledWith([1, "dog"]);
  });

  it("doesn't give us access to it's internal numbers array", function() {
    quiz.add(5);
    quiz.numbers().push(4);
    var type = typeof quiz.numbers;
    expect(type).not.toBe("Array")
    expect(quiz.numbers()).not.toEqual([5, 4]);
  });

  it("stores non numbers in the trash", function() {
    quiz.add(5);
    quiz.add(NaN);
    quiz.add([1, "dog"]);
    var trash = quiz.trash();
    expect(trash).toContain("dog");
    expect(trash).not.toContain(1, 5);
  });

  it(".countEvens counts even numbers", function() {
    quiz.add([1, 2, 3, 4, 5]);
    var evens = quiz.countEvens();
    expect(evens).toEqual(2);
    expect(evens).not.toEqual(3);
  });

  it(".count(n) counts occurences of a specific number", function() {
    quiz.add([1, 2, 1, 4, 5]);
    var countOnes = quiz.count(1);
    var countTwos = quiz.count(2);
    expect(countOnes).toEqual(2);
    expect(countTwos).not.toEqual(2);
  });

  it(".rotate(n) moves a specified number of items from the left to the tail end", function() {
    quiz.add([1, 2, 3, 4, 5]);
    pre_rotate = quiz.numbers();
    quiz.rotate(2);
    post_rotate = quiz.numbers();
    expect(pre_rotate).not.toEqual(post_rotate);
    expect(post_rotate).toEqual([3, 4, 5, 1, 2]);
  });

  it("only has the following methods available", function() {
    quiz = new Quiz();
    expect(Object.keys(quiz).toString()).toEqual("add,numbers,count,countEvens,rotate,trash");
    expect(Object.keys(quiz).toString()).not.toEqual("add,numbers,count,countEvens,rotate,trash,array")
  });

});