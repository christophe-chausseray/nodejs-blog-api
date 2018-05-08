const Joi = require('joi');

class Article {
  constructor(slug, title, description, body) {
    Article.validate(slug, title, description, body);

    this.slug = slug;
    this.title = title;
    this.description = description;
    this.body = body;
  }

  static create(slug, title, description, body) {
    return new Article(slug, title, description, body);
  }

  static validate(slug, title, description, body) {
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
}

module.exports = Article;
