---
title: Installation
layout: default
---

The theme can be used with a number of different installation types, feel free to let me know if there are any issues or if any of them can be improved upon. 

## Github Pages

As mentioned, this theme is being used with Github Pages and will therefore only really be tested while using the `remote_theme` plugin.  To get started, following the [quick start](https://jekyllrb.com/docs/) docs:

{% highlight shell %}
$ gem install jekyll bundler
$ jekyll new myblog
$ cd myblog
$ echo $'\n\nremote_theme: @kenjdavidson/jekyll-kb' > _config.yml
$ bundle exec jekyll serve
{% endhighlight %}

Browse to http://localhost:4000

## Clone / Fork

