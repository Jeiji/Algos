function convert( str ){
  let newHrs = '',
      min = '',
      sec = '',
      newStr = '';


  //Loop through, parsing each section of time into the vars.
  for (let i = 0; i < str.length; i++) {

    //For first two chars:
    if ( i < 2 ) {
      newHrs += str[i];
    }else if ( i > 2 && i < 5  ) {
      min += str[i];
    }
    else if ( i > 5 && i < 8  ) {
      sec += str[i];
    }


  }

  newHrs = parseInt( newHrs );


  //Check the period differential. If it's 'post', add 12 to the newHrs.
  if ( str[str.length - 2] == 'P' && newHrs < 12 ) {
    newHrs += 12;
  }else if ( str[str.length - 2] == 'A' && newHrs == 12 ) {
    newHrs = '00';
  }

  // Add a '0' if the number is less than ten.
  if ( newHrs < 10 && newHrs != '00' ) {
    newHrs = '0' + newHrs;
  }


  //Compile new time.
  console.log(`${ newHrs }:${ min }:${ sec }`);

}

convert( "11:45:23PM" );
