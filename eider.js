class Eider {
  constructor(steps = 100, length = 20, options = {}) {
    this.currentStep = 0;
    this.steps = steps;

    this.length = length;
    this.options = options;

    this.setDefaults();
  }

  /**
   * [#####>-----] 20/100
   */
  setDefaults() {
    this.options.startChar = this.options.startChar || '[';
    this.options.endChar = this.options.endChar || ']';
    this.options.doneChar = this.options.doneChar || '#';
    this.options.currentChar = this.options.currentChar || '>';
    this.options.undoneChar = this.options.undoneChar || '-';
    this.options.count = this.options.count || true;
    this.options.percentage = this.options.percentage || true;
  }

  advance(steps = 1) {
    this.currentStep += steps;
    if (this.currentStep > this.steps) this.currentStep = this.steps;
  }

  start() {
    this.setupInterval();
  }

  stop() {
    clearInterval(this.interval);
  }

  print(line) {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(line);
  }

  buildLine() {
    let line = this.options.startChar;

    let percentage = Math.round((this.currentStep / this.steps) * this.length);

    for (let i = 0; i < this.length; i++) {
      if (i == percentage) {
        line += this.options.currentChar;
      } else if (i < percentage) {
        line += this.options.doneChar;
      } else {
        line += this.options.undoneChar;
      }
    }

    line += this.options.endChar;

    if (this.options.count) {
      line += ' ' + this.currentStep + '/' + this.steps;
    }

    if (this.options.percentage) {
      let percent = Math.round((this.currentStep * 100) / this.steps);
      line += ' (' + percent + '%)';
    }

    return line;
  }

  setupInterval() {
    this.interval = setInterval(() => {
      let line = this.buildLine();
      this.print(line);
    }, 200);
  }
}

module.exports = Eider;
