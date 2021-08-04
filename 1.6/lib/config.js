console.log(
  "inside config module =================================================================="
);
console.log(module);
console.log(
  "outside config module =================================================================="
);

exports.db_config = {
  connectionPoolLimit: 3,
};
