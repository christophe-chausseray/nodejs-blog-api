class EditArticle {
  public slug: string;
  public params: {};

  constructor(slug: string, params: {}) {
    this.slug = slug;
    this.params = params;
  }
}

export default EditArticle;
