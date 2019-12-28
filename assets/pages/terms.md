---
title: Terms and Conditions
permalink: /terms/
terms: true
---

Sample terms and conditions page, for more information on requirements and best practices see the following references:

- [https://en.wikipedia.org/wiki/Terms_of_service](https://en.wikipedia.org/wiki/Terms_of_service)

If you wish to build a basic terms and conditions page, there are a number of options available:

- [https://www.privacypolicies.com/terms-conditions-generator/](https://www.privacypolicies.com/terms-conditions-generator/)

### Configuration

To enable the terms and conditions page you must supply a page with the appropriate front matter:

{% highlight markdown %}
---
title: Terms and Conditions
permalink: /terms/
terms: true
---
{% endhighlight %}

as well as the configuration within `theme.yml`:

{% highlight yml %}
terms: true
{% endhighlight %}