let id = 0;
// Generates a random ID. Ideally should be done on a server.
export default () => {
  return `_user_${id++}`;
};
