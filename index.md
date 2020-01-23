---
layout: default
title: What is Jekyll KB
---

A Jekyll theme which is a combined borrow from [Gitbook](https://www.gitbook.com) and [Jekyll Doc Theme](https://github.com/aksakalli/jekyll-doc-theme) providing more of the things I like from them both to use with my own projects - and obviously your own projects if you see fit.  I'm pretty much only using this for my Github projects and therefore will only really be testing this with the [Github Pages](https://pages.github.com/) implementation of [Jekyll](https://jekyllrb.com/).

## Jekyll

> Jekyll is a static site generator. You give it text written in your 
> favorite markup language and it uses layouts to create a static website. 
> You can tweak how you want the site URLs to look like, what data gets displayed 
> on the site, and more.

## Contribution

I wanted the theme to be as manageable as possible, for that reason I chose to use NPM versions of all libraries.  If cloning or forking the theme for your own use or contribution, the project can get up and running fairly easily:

{% highlight shell %}
$ git clone git@github.com:kenjdavidson/jekyll-kb.git .
$ bundle install
$ npm install
$ bundle exec jekyll serve
{% endhighlight %}

Although the libraries are already packaged in their respective directories:

* /_sass
* /assets/css
* /assets/js

there versions can be updated easily through NPM.  There is a `postinstall` script which will run the `Gruntfile` which will copy.  If adding any CSS or JS libraries you should update `Gruntfile` accordingly.

## Libraries

The theme uses a number of common (and maybe not so common) libraries:

### Bootstrap/Bootswatch

The theme uses the scss implementation of [Bootstrap](https://getbootstrap.com/) and [Bootswatch](https://bootswatch.com/) to provide the primary theming - chosen to provide what I believe the most comfortable options for modification.  Bootstrap also provides a number of Javascript features that are common across most web projects.

### Fontawesome 5 Free

Icons are provided using [Fontawesome](https://fontawesome.com/start).  The available free includes are:

* Font Awesome Free
* Font Awesome Brands

### Scrollmagic

I've recently been playing with [Scrollmagic](https://scrollmagic.io/) in a number of projects and figured that it would be a good addition to the standard theme.  It's not being used to its full potential, but it is available for usage using the [GSAP](https://greensock.com/scrollmagic/) plugin.

### Mmenu

To provide this with basic drawer functionality, but allow extending documents to build a more pimped out navigation, I've included the [Mmenu-light](https://mmenujs.com/mmenu-light/) library in the theme. 

### Base16Scss

Which is configured to work with both :

{% highlight markdown %}
{% raw %}
{% highlight java %}
public class Person {}
{% endhighlight%}
{% endraw %}
{% endhighlight %}

and 

{% raw %}
```java
public class Person {}
```
{% endraw %}