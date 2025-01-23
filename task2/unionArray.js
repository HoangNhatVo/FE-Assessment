function unionArray(ranges) {
  if (!ranges.length) return [];
  //sort array from smallest to largest startPx
  const sortedArray = [...ranges].sort((a, b) => a.startPx - b.startPx);

  //iterate sortedArray 
  const results = [sortedArray[0]];
  for (let i = 1; i < sortedArray.length; i++) {
    const lastItem = results[results.length - 1];
    const currentItem = sortedArray[i];
    //if overlapping
    if (currentItem.startPx <= lastItem.endPx) {
      // check which endPx is larger
      lastItem.endPx = Math.max(lastItem.endPx, currentItem.endPx);
    } else {
      // if not overlapping add the current item to the result
      results.push(currentItem);
    }
  }

  return results;
}

