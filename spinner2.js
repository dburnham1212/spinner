const spinner = () => {
  let spinnerChars = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];// list of characters to print
  let spinTimer = 100;
  let spinIncrement = 200;
  for (const char of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, spinTimer);
    spinTimer += spinIncrement;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, spinTimer);
};

spinner();