class EditArticle {
  public slug: string;
  public params: any;

  constructor(
    slug: string,
    params: any,
  ) {
    this.slug = slug;
    this.params = params;
  }
}

export default EditArticle;
