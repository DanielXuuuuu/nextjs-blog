function importAll(r) {
  return r.keys().map((fileName) => ({
    link: fileName.substr(1).replace(/.mdx$/, ""),
    module: r(fileName)
  }));
}

export function getAllPosts() {
  return importAll(
    require.context("../pages/posts/", true, /\.mdx$/)
  );
}
