class CreateArticle {
  public slug: string;
  public title: string;
  public description: string;
  public body: string;

  constructor(
    slug: string,
    title: string,
    description: string,
    body: string,
  ) {
    this.slug = slug;
    this.title = title;
    this.description = description;
    this.body = body;
  }
}

export default CreateArticle;
