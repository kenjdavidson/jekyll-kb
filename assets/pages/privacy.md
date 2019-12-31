---
layout: page
title: Privacy Policy
permalink: /privacy/
privacy: true
---

Sample privacy page, for more information on requirements and best practices see the following references:

- [https://en.wikipedia.org/wiki/Privacy_policy](https://en.wikipedia.org/wiki/Privacy_policy)
- [https://www.termsfeed.com/blog/sample-privacy-policy-template/](https://www.termsfeed.com/blog/sample-privacy-policy-template/)

If you wish to build a basic privacy policy, there are a number of options available:

- [https://digital.com/blog/best-privacy-policy-generators/](https://digital.com/blog/best-privacy-policy-generators/)

### Configuration

To enable the privacy page you must supply a page with the appropriate front matter:

{% highlight markdown %}
---
title: Privacy Policy
permalink: /privacy/
privacy: true
---
{% endhighlight %}

as well as the configuration within `theme.yml`:

{% highlight yml %}
privacy: true
{% endhighlight %}