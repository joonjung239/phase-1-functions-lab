function distanceFromHqInBlocks(location) {
console.log ('location', location)
    if (location > 42){
    return location - 42
}
return 42 - location
  }

  function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    if (location > 42) {
return (location - 42)*264
    }
return (42-location)*264

  }

  function distanceTravelledInFeet(start, destination) {
    if (start > destination){
        return (start - destination)*264
    }
    else (start < destination) 
        return (destination - start)*264
    
  }

  function calculatesFarePrice(start, destination){
      const distance = distanceTravelledInFeet (start, destination)
      if (distance <= 400) {
          return 0
      }
      else if (distance > 400 && distance <= 2000){
          return .02 * (distance - 400)
      }
      else if (distance > 2000 && distance < 2500){
          return 25
      }
      else {
          return "cannot travel that far"
      }
      
  }