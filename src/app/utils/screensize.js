export function getScreenSize(req) {
  const userAgent = req.headers["user-agent"];
  const isMobile = /Mobile/i.test(userAgent);
  const isTablet = /Tablet/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  if (isMobile) {
    return "mobile";
  } else if (isTablet) {
    return "tablet";
  } else {
    return "desktop";
  }
}
