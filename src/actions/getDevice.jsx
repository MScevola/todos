export const getUserAgent = () => window.navigator.mockUserAgent || window.navigator.userAgent;

export const isMobile = () => {
  const userAgent = getUserAgent();
  if (
    userAgent.match(
      /Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i,
    )
  ) {
    return true;
  }

  return false;
};

export const hashVars = () => {
  const $_GET = [];

  if (document.location.toString().indexOf('?') !== -1) {
    const query = document.location
      .toString()
      .replace(/^.*?\?/, '')
      .replace(/#.*$/, '')
      .split('&');

    query.forEach((elem) => {
      const aux = decodeURIComponent(elem).split('=');
      $_GET[aux[0]] = aux[1];
    });
  }

  return $_GET;
};
