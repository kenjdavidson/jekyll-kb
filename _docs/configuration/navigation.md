---
chapter: 
  title: Configuration
  index: 2.2
title: Navigation
layout: default
---

Chances are the navigation isn't done as well as it probably could be, but for the time being it works (although it requires more typing than I'd like).  Currenly working on a updating the configuration so that the front matter for `chapter` is used.  With that said, for the time being the current configuration requires:

## Menu Configuration

`_data/menu.yml` is used to configure the order and links - supporting a single extra level of drop downs (collapsing).  The following sample is from this page:

{% highlight yml %}
- title: Getting Started
  links:
  - doc: getting-started/installation.md
  - doc: getting-started/cheetsheet.md
- title: configuration
  links:
  - doc: configuration/theming.md
  - doc: configuration/navigation.md  
  - doc: configuration/social-yml.md     
- title: Hierarchy Menus
  links:
  - title: Getting Started
    links:
    - doc: getting-started/installation.md
    - doc: getting-started/cheetsheet.md
  - title: Configuration
    links:
    - doc: configuration/theming.md
    - doc: configuration/navigation.md  
    - doc: configuration/social-yml.md  
- title: External Links
  links:
  - title: Bootstrap
    href: https://getbootstrap.com/
  - title: Bootswatch
    href: https://bootswatch.com/
  - title: Font Awesome
    href: https://fontawesome.com/
  - title: ScrollMagic
    href: http://scrollmagic.io/
  - title: MMenu Light
    href: https://mmenujs.com/
{% endhighlight %}

## Front Matter

Each document should contain the following front matter:

{% highlight yml %}
---
chapter: 
  title: Configuration
  index: 2.2
title: Navigation
layout: default
---
{% endhighlight %}

where the `chapter` object is solely used for (half) sorting at the moment, which means that it is required.  Once the menu configuration has been fully migrated there should be no need for `_data/menu.yml` any longer, and it should all be configurable here.