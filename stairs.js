function stairs( n ){
  let stairCase = '' ,
      chk = n-1;

  // Select row.
  for (let i = 0; i < n; i++) {

    // Create row. Print when done.
    for ( let j = 0; j < n ; j++ ) {

      // Print '#'s past the checker's value in the array.
      if ( j >= chk ) {
        stairCase += '#'
      }else {
        stairCase += ' '
      }
    }
    console.log(stairCase);

    //Clear blueprint.
    stairCase = '';

    // Bring checker closer to front with each row.
    chk -= 1;
  }

}

stairs( 6 );
