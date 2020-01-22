---
chapter: 
  title: Getting Started
  index: 1.2
title: Authoring
layout: default
---

## Writing Content

Currently the them only supports documents, but eventually I'd like to build it out to provide blog posts as well - to allow for adding changes and release information based on a timeline.  Documents are a collection under the `_docs` folder, which are configured with the defaults:

{% highlight yml %}
collections:
  docs:
    permalink: /:path/
    output: true
{% endhighlight %}

The front matter required (ish) for each document is:

{% highlight yml %}
---
chapter: 
  title: Getting Started
  index: 1.1
title: Installation
layout: default
---
{% endhighlight %}

where the `chapter` object works with the `menu.yml` configuration file to provide the site navigation.  At a high level the entry should match:

{% highlight yml %}
- title: Getting Started
  links:
  - doc: getting-started/installation.md
  - doc: getting-started/cheetsheet.md
{% endhighlight %}

more details on the navigation can be found on the [/configuration/navigation]({{ '/configuration/navigation' | relative_url }}) page.
