
/**
 * Module dependencies.
 */

var jugglingdb = require('jugglingdb')
  , async = require('async')
  , Schema = jugglingdb.Schema
  , env = process.env.NODE_ENV || 'development'
  , config = require('../../config/config')[env]
  , _ = require('underscore')
  , Article = require('../models/article')

var schema = new Schema('akiban', config.akibandb);

/**
 * Find article by id
 */

exports.article = function(req, res, next, id){

  Article.find(id, function (err, article) {
    if (err) return next(err)
    if (!article) return next(new Error('Failed to load article ' + id))
    req.article = article
    next()
  })
}

/**
 * New article
 */

exports.new = function(req, res){
  res.render('articles/new', {
    title: 'New Article',
    article: new Article({})
  })
}

/**
 * Create an article
 */

exports.create = function (req, res) {
  var article = new Article(req.body);
  article.user_id = req.user.id;

  article.uploadAndSave(function (err) {
    if (err) {
      res.render('articles/new', {
        title: 'New Article',
        article: article,
        errors: err.errors
      })
    }
    else {
      res.redirect('/articles/'+article._id)
    }
  })
}

/**
 * Edit an article
 */

exports.edit = function (req, res) {
  res.render('articles/edit', {
    title: 'Edit '+req.article.title,
    article: req.article
  })
}

/**
 * Update article
 */

exports.update = function(req, res){
  var article = req.article
  article = _.extend(article, req.body)

  article.uploadAndSave(function(err) {
    if (err) {
      res.render('articles/edit', {
        title: 'Edit Article',
        article: article,
        errors: err.errors
      })
    }
    else {
      res.redirect('/articles/' + article._id)
    }
  })
}

/**
 * View an article
 */

exports.show = function(req, res){
  req.article.user(function(err, user) {
    res.render('articles/show', {
      title: req.article.title,
      article: req.article,
      username: user.name
    })
  });
}

/**
 * Delete an article
 */

exports.destroy = function(req, res){
  var article = req.article
  article.remove(function(err){
    // req.flash('notice', 'Deleted successfully')
    res.redirect('/articles')
  })
}

/**
 * List of Articles
 */

exports.index = function(req, res){
  var page = req.param('page') > 0 ? req.param('page') : 0
  var perPage = 15
  var options = {
    perPage: perPage,
    page: page
  }

  Article.all(function(err, articles) {
    if (err) return res.render('500')
    Article.count(function (err, count) {
      res.render('articles/index', {
        title: 'List of Articles',
        articles: articles,
        page: page,
        pages: count / perPage
      })
    })
  })
}
