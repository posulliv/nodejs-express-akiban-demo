
/**
 * Module dependencies.
 */

var jugglingdb = require('jugglingdb')
  , Schema = jugglingdb.Schema
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , crypto = require('crypto')
  , _ = require('underscore')
  , Article = require('./article')


var schema = new Schema('akiban', config.akibandb);

/**
 * User Schema
 */

var User = schema.define('User', {
  name:            String,
  email:           String,
  username:        String,
  provider:        String,
  hashed_password: String,
  salt:            String
});

User.registerProperty('password');

User.setter.password = function(password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(password);
}

User.getter.password = function() {
  return this._password;
}

/**
 * Validations
 */

var validatePresenceOf = function (value) {
  return value && value.length
}

/**
 * Pre-save hook
 */

User.beforeSave = function(next) {
  if (!this.isNewRecord) return next()

  if (!validatePresenceOf(this.password))
    next(new Error('Invalid password'))
  else
    next()
}

/**
 * Methods
 */

/**
 * Authenticate - check if the passwords are the same
 *
 * @param {String} plainText
 * @return {Boolean}
 * @api public
 */
User.prototype.authenticate = function(plainText) {
  return this.encryptPassword(plainText) === this.hashed_password;
}

/**
 * Make salt
 *
 * @return {String}
 * @api public
 */
User.prototype.makeSalt = function() {
  return Math.round((new Date().valueOf() * Math.random())) + '';
}

/**
 * Encrypt password
 *
 * @param {String} password
 * @return {String}
 * @api public
 */
User.prototype.encryptPassword = function(password) {
  if (!password) return '';
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
}

//schema.automigrate();
module.exports = schema.models.User;
