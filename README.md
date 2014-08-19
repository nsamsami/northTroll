pingpong-site
=============

This is the place for the pingpong website. It provides a home for marketing and links to examples.

Careful!
========

Currently, the html and css files have been generated using HAML and SaSS (with Bourbon mixins). There is nothing installed in this repo that does that for you, and relies on a desktop app like CodeKit.

Setup
=====

**Step 1:** Clone or fork this repository

```
$ git clone git@github.com:keenlabs/pingpong.git
$ cd pingpong
```

**Step 2:** Install dependencies

```
$ bundle install
```

If you don't have the `bundle` command, first `gem install bundler`.

**Step 3:** Start
```
$ bundle exec rackup
```
