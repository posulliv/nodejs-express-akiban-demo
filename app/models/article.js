
/**
 * Module dependencies.
 */

var jugglingdb = require('jugglingdb')
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , Schema = jugglingdb.Schema
  , User = require('./user')

var schema = new Schema('akiban', config.akibandb);

/**
 * Article Schema
 */

var Article = schema.define('Article', {
  title     : {type : String, default : '', trim : true},
  body      : {type : String, default : '', trim : true},
  user_id   : {type : Number},
  createdAt : {type : Date, default : Date.now},
})
Article.belongsTo(User, {as: 'user', foreignKey: 'user_id'});

/**
 * Methods
 */

/**
 * Save article
 *
 * @param {Function} cb
 * @api private
 */
Article.prototype.uploadAndSave = function (cb) {
  this.save(cb);
}

  /**
   * Add comment
   *
   * @param {User} user
   * @param {Object} comment
   * @param {Function} cb
   * @api private
   */

Article.prototype.addComment = function (user, comment, cb) {
  this.comments.push({
    body: comment.body,
    user: user._id
  })

  this.save(cb)
}

/**
 * Statics
 */

/**
 * Find article by id
 *
 * @param {ObjectId} id
 * @param {Function} cb
 * @api private
 */
Article.load = function (id, cb) {
  this.find(id, cb);
}

/**
 * List articles
 *
 * @param {Object} options
 * @param {Function} cb
 * @api private
 */
Article.list = function (options, cb) {
  var criteria = options.criteria || {}

  Article.all(criteria)
    .exec(cb);

}

module.exports = schema.models.Article;
