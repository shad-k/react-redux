// Generates a random ID. Ideally should be done on a server.
export default () => {
  return (
    "_" +
    Math.random()
      .toString(36)
      .substr(2, 9)
  );
};
