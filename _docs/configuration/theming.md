---
chapter: 
  title: Configuration
  index: 2.1
title: Theming
layout: default
---

Theming is done using [bootswatch](https://bootswatch.com/) by configuring the properties within the `_data/theme.yml` file:

{% highlight yml %}
# Configure Bootswatch theme
# Leave this empty will use the bootstrap default theme
bootswatch: 
  theme: yeti
  navbar: navbar-dark bg-primary 
{% endhighlight %}

The default theme (is pretty obviously) [yeti](https://bootswatch.com/yeti/).  The `navbar` item provides a method for configuring the navbar colors - each theme has three possible navbar configurations based on primary/dark/light configurations.

![Yeti](https://bootswatch.com/yeti/thumbnail.png){:.img-fluid}

## Customization

New themes or current themes can be modified by downloading and editing the `_variables.scss` files supplied with the theme.  An example of this (for yeti) can be found at [Yeti variables](https://bootswatch.com/4/yeti/_variables.scss) or within the project `_sass/bootswatch/yeti/_variables.scss`.


