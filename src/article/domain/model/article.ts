import Joi from "joi";

class Article {
  /**
   * Create an article object.
   */
  public static create(slug: string, title: string, description: string, body: string): Article {
    return new Article(slug, title, description, body);
  }

  /**
   * Make the object validation.
   */
  private static validate(slug: string, title: string, description: string, body: string): void {
    Joi.assert(
      {
        slug,
        title,
        description,
        body,
      },
      Joi.object().keys({
        slug: Joi.string()
          .regex(/^[a-z0-9-]+$/)
          .required(),
        title: Joi.string().required(),
        description: Joi.string().required(),
        body: Joi.string().required(),
      }),
    );
  }

  public readonly slug: string;
  public readonly title: string;
  public readonly description: string;
  public readonly body: string;

  private constructor(slug: string, title: string, description: string, body: string) {
    Article.validate(slug, title, description, body);

    this.slug = slug;
    this.title = title;
    this.description = description;
    this.body = body;
  }
}

export default Article;
