self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/yanx-studio(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(\\/?index|\\/?index\\.json|\\/?index(?:\\.rsc|\\.segments\\/.+\\.segment\\.rsc)))?[\\/#\\?]?$",
    "originalSource": "/"
  },
  {
    "regexp": "^\\/yanx-studio(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/(en|es))(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/(en|es)/:path*"
  },
  {
    "regexp": "^\\/yanx-studio(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!_next|_vercel|.*[.]).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!_next|_vercel|.*[.]).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()