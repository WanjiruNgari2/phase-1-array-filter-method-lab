const driver = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driver, name) {
    return driver.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
    


//2.fuzzymatch
beforeEach(function () {
    drivers.length = 0;

    drivers.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  });
function fuzzyMatch(drivers, letters) {
 return drivers.filter(drivers  => drivers.toLowerCase().startsWith(letters.toLowerCase('Sa'))); 
 }



 //3.matchingname
   function matchName(drivers, name) {
      return drivers.filter(driver => driver.name === name);

   }