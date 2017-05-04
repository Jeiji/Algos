function nearYear( entry ){

  if ( entry === undefined ) {
    return `Yeah... let's just put a double digit number in, okay?`
  }

  if (  entry.toString() == '0' || parseInt( entry ) == 0 ) {
    entry = 00;
  }else if ( typeof( parseInt( entry ) ) != 'number' || !parseInt( entry ) || entry.toString().length !== 2 ) {
    console.log(entry.toString());
    return `Yeah... let's just put a double digit number in, okay?`
  }

  entry = parseInt( entry )

  const thisYear = new Date().getFullYear().toString();
  let thisYearShort = parseInt(thisYear[2]+thisYear[3]);
  const nextEntryIteration = thisYear - thisYearShort + entry;
  const priorEntryIteration = thisYear - 100 - thisYearShort + entry;

  if ( thisYear - 50 == priorEntryIteration ) {
    return `${ nextEntryIteration } and ${ priorEntryIteration } are equidistant from ${ thisYear }`
  }

  return Math.min( Math.abs( thisYear - nextEntryIteration ) , Math.abs ( thisYear - priorEntryIteration ) ) == Math.abs( thisYear - nextEntryIteration ) ? nextEntryIteration : priorEntryIteration;

};

console.log(nearYear( 59 ));
