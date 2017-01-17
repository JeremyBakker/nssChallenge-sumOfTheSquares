/* What is the difference between the sum of the squares of the first ten natural numbers, and the square of the sum of the first ten natural numbers? */

/********************/
/* First Iteration */
/********************/

/* Declare Variables to Hold Data */
var sumSquares = 0;
var squareSums = 0;

/* Start a For Loop to Iterate through the numbers, 1-10 */
for (i = 1; i <= 10; i++) {
	/* Square each number, 1-10, and add them together */
	sumSquares += Math.pow(i, 2);
}

/* Start a Loop to iterature through the numbers, 1-10 */
for (i = 0; i < 10; i++){
	/* Add together the numbers, 1-10 */
	squareSums += (i + 1)
}
/* Square the sum */
squareSums = Math.pow(squareSums, 2);
 
/* Determine the different between sumSquares and squareSum */
var difference = sumSquares - squareSums;
console.log(difference);



/********************/
/* Second Iteration */
/********************/

function diff() {

	var limit = 10;
	var i = 0;
	var j = 0;
	var x = 0
	var y = 0

	while (i <= limit) {
		x += Math.pow(i, 2);
		i++;
	};
		
	while (j <= limit) {
		y += j;
		j++;
	}
	y = Math.pow(y, 2)

	console.log(x - y);
};

diff();


