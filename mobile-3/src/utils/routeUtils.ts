export const getRoutePath = (routeName: string): string => {
  if (routeName === "index") return "/";
  if (routeName.endsWith("/index")) {
    return "/" + routeName.replace("/index", "");
  }
  return "/" + routeName;
};
