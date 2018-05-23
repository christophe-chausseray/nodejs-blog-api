import Joi from 'joi';

class Article {
  private slug: string;
  private title: string;
  private description: string;
  private body: string;

  private constructor(slug: string, title: string, description: string, body: string) {
    Article.validate(slug, title, description, body);

    this.slug = slug;
    this.title = title;
    this.description = description;
    this.body = body;
  }

  /**
   * Make the object validation.
   */
  private static validate(slug: string, title: string, description: string, body: string): void {
    Joi.assert({
      slug,
      title,
      description,
      body,
    }, Joi.object().keys({
      slug: Joi.string().regex(/^[a-z0-9-]+$/).required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      body: Joi.string().required(),
    }));
  }

  /**
   * Create an article object.
   */
  public static create(slug: string, title: string, description: string, body: string): Article {
    return new Article(slug, title, description, body);
  }
}

export default Article;
