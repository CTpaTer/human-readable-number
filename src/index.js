module.exports = function toReadable (number) {
    let units = ['','one','two','three','four', 'five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let tens = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

  if (number === 0) {
    return 'zero';
  }
  if (number <= 19) {
    return units[number];
  }
  if (number < 100) {
    return (`${tens[String(number)[0]]} ${units[String(number)[1]]}`).trim();
  }
  if (String(number)[1] === '1') {
    return (`${units[String(number)[0]]} hundred ${units[String(number)[1] + String(number)[2]]}`);
  }
    return (`${units[String(number)[0]]} hundred ${tens[String(number)[1]]} ${units[String(number)[2]]}`).replace(/  /g, ' ').trim();
  
}
