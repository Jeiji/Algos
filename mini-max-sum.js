function stairs( r ){
  // Keep track of min and max sums.
  let minSum ,
      maxSum,
      sum = 0;

  // Loop through array, neglecting the current index. This gives us 4 numbers to add.
  for ( i = 0; i < r.length; i++ ) {

    // Start a second loop adding all the numbers, ignoring the index of i.
    for ( j = 0; j < r.length; j++ ) {

      // Ignore r[i].
      if ( j != i ) {
        sum += r[j];
      }
    }

    // When done adding that round up, compare to min and max.
    if ( sum < minSum || !minSum ) {
      minSum = sum;
    }
    if ( sum > maxSum || !maxSum ) {
      maxSum = sum;
    }
    sum = 0;
  }

  console.log(minSum);
  console.log(maxSum);

}

stairs( [ 1 , 2 , 3 , 4 , 5 ] );
