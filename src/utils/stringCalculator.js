// String calculator function
export function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  
    let delimiter = /,|\n/; // Default delimiter: comma or newline
  
    // Check for custom delimiter
    if (numbers.startsWith("//")) {
      const delimiterEndIndex = numbers.indexOf("\n");
      delimiter = new RegExp(numbers.slice(2, delimiterEndIndex));
      numbers = numbers.slice(delimiterEndIndex + 1); // Remove delimiter part
    }
  
    const numArray = numbers.split(delimiter).map(Number);
  
    // Check for negative numbers and throw error
    const negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
    }
  
    // Calculate the sum
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  