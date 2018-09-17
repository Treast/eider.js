const Eider = require('./eider');

let eider = new Eider(50, 40);

setInterval(() => {
  eider.advance();
}, 300);

eider.start();
