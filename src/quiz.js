//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

var Quiz = function() {

	var values = [];
	var bad_inputs = [];

	return {

		add: function(input) {
			//input is a number
			if(typeof(input)==='number') {
				values.push(input);
			// input is an array
			} else if(input.length && typeof(input) != 'string') {
				var i=0, max=input.length;
				for(i; i < max; i+=1) {
					this.add(input[i]);
				}
			// input is a non-number
			} else {
				bad_inputs.push(input);
			}
		},

		numbers: function() {
			var copy = [], i = 0, max = values.length;
			for(i; i < max; i+=1) {
				copy.push(values[i]);
			}
			return copy;
		},

		trash: function() {
			var trash_copy = [], i = 0, max = bad_inputs.length;
			for(i; i < max; i+=1) {
				trash_copy.push(bad_inputs[i]);
			}
			return trash_copy;
		},

		count: function(match) {
			if(typeof(match) === 'number'){
				var i = 0, max = values.length, count = 0;
				for(i; i < max; i+=1) {
					if(values[i] === match) {count+=1;}
				}
				return count;
			}
			return false;
		},

		rotate: function(times) {
			var i = 0; max = times; array = this.numbers();
			for(i; i < max; i+=1) {
				array.push(array.shift());
			}
			return array;
		},

		evenNumbers: function() {
			var i = 0, max = values.length, even = [];
			for(i; i < max; i += 1) {
				if(values[i] % 2 === 0 && even.indexOf(values[i]) === -1) {
					even.push(values[i]);
				}
			}
			return even;
		}
	};
};