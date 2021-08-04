// if answer is defined as variable, it will be visible only inside this util module

globalThis.answer = 42;

exports.config = {
  port: process.env.PORT || 8000,
};
