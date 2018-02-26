class CreateArticle {
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
