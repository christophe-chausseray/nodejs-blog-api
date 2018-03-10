class CreateArticle {
  /**
   * @param {string} slug
   * @param {string} title
   * @param {string} description
   * @param {string} body
   */
  constructor(
    slug,
    title,
    description,
    body,
  ) {
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.body = body;
  }
}

module.exports = CreateArticle;
