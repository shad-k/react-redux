export const urlFormatter = url => {
  const urlRegex = /http(s)?:\/\//;
  if (urlRegex.test(url)) {
    return url;
  } else {
    return `https://${url}`;
  }
};
