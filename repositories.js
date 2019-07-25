/**
 * Repositories Objects
 */
const path = require("path");

const {
  WAVE_SECRET,
  TURTLE_SECRET,
  SHELL_SECRET,
  ANCHOR_SECRET,
  HOOKS_SECRET,
  PRE_REGISTRATION_SECRET,
} = process.env;

module.exports = [
  {
    path: path.resolve(__dirname, "../Waves"),
    secret: WAVE_SECRET,
    needToBuild: true,
  },
  {
    path: path.resolve(__dirname, "../Turtle"),
    secret: TURTLE_SECRET,
    needToBuild: true,
  },
  {
    path: path.resolve(__dirname, "../Shell"),
    secret: SHELL_SECRET,
    needToBuild: true,
  },
  {
    path: path.resolve(__dirname, "../Anchor"),
    secret: ANCHOR_SECRET,
    needToBuild: true,
  },
  {
    path: path.resolve(__dirname),
    secret: HOOKS_SECRET,
    needToBuild: false,
  },
  {
    path: path.resolve(__dirname, "../Shell-Pre-registration-2019"),
    secret: PRE_REGISTRATION_SECRET,
    needToBuild: false,
  },
];
