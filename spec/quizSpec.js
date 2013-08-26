//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)


describe('a quiz', function() {

  it('is about JavaScript and testing with Jasmine', function() {
    expect(QUIZ_TOPICS).toContain('jasmine');
    expect(QUIZ_TOPICS).toContain('javascript');
  });

});

describe('add function', function() {

	var quiz;

	beforeEach(function(){
		quiz = new Quiz();
	});
	// We can add numbers to it
	it('should be able to add numbers to the quiz"s numbers array', function() {
		quiz.add(5);
		quiz.add(3);
		// We can see the numbers we've added
		expect(quiz.numbers()).toEqual([5,3]);
	});

	// We can only add numbers
	it('should not add non-numbers', function() {
		quiz.add(5);
		quiz.add(3);
		quiz.add("7");
		expect(quiz.numbers()).toEqual([5,3]);
	});

	// Or arrays of numbers
	it('should be able to add arrays of numbers', function() {
		quiz.add([7,6,true,10]);
		expect(quiz.numbers()).toEqual([7,6,10]);
	});

	// We can't access the array directly
	it('should not return it"s values', function() {
		expect(quiz.values).toBeUndefined();
	});

	it('should not allow to push into the returned numbers array', function() {
		quiz.add([7,6,10]);
		quiz.numbers().push(11);
		expect(quiz.numbers()).toEqual([7,6,10]);
	});
});

describe('trash function', function(){

	// Trash returns anything we've tried to add that's not a number.
	it('should return all non-number values passed to add function',function() {
		var quiz = new Quiz();
		quiz.add([10,true,'hello',false,42]);
		expect(quiz.trash()).toEqual([true,'hello',false]);
	});

});


describe('count', function() {
	// Returns the number of occurences of a specified number
	it('should return the number of times a specified number has been input', function() {
		var quiz = new Quiz();
		quiz.add([2,3,3,5,3,6,7,3,2,3]);
		expect(quiz.count(3)).toEqual(5);
	});

	it('should return false if a a non-numbrer is input', function() {
		var quiz = new Quiz();
		quiz.add([2,3,3,5,3,6,7,3,2,3]);
		expect(quiz.count('a')).toBe(false);
	});
});


describe('rotate', function() {

	// Takes a specified length of an array starting from the left and moves it to
	// the tail end
	it('should rotate the arry the specified number of times', function() {
		var quiz = new Quiz();
		quiz.add([2,3,4,5,6,7]);
		expect(quiz.rotate(2)).toEqual([4,5,6,7,2,3]);
	});

	// Doesn't rotate negatively
	it('should not rotate an array if a negative number is passed', function() {
		var quiz = new Quiz();
		quiz.add([2,3,4]);
		expect(quiz.rotate(-3)).toEqual([2,3,4]);
	});
});


describe('countEven', function() {

});