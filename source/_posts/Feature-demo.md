---
title: MD feature demo
date: 2021-07-01 11:15:41
updated: 2020-07-01 11:15:41
categories:
  - foo
  - bar
  - [test, toast]
---

# This is a feature demo for the markdown format.
## It's fairly decent
### Oh now it's shrinking
#### AAAAAA sleep paralysis or whateveer
##### Heading level 214
###### Discrimination against smaller texts

Alternative selector
====================
Well you don't see it
----------------------

I really like using Markdown.

I think I'll use it to format all of my documents from now on.

This is the first line.
And this is the second line.

(To create a line break, end a line with two or more spaces, and then type return. HTML <br\> also works.)

I just love **bold text**

Italicized text is the *cat's meow*

This text is ***really important***

> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
>>
>>> Oh yeah

And here's some more quoteses

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
    >
    >  *Everything* is going according to **plan**.

1. First item
2. Second item
3. Third item
4. Fourth item

* First item
* Second item
* Third item
* Fourth item

- First item
- Second item
- Third item
  - Indented item
  - Indented item
- Fourth item

- 1968\. A great year!
- I think 1969 was second best.

*   This is the first list item.
*   Here's the second list item.

    I need to add another paragraph below the second list item.

*   And here's the third list item.


1.  Open the file.
2.  Find the following code block on line 21:

        <html>
          <head>
            <title>Test</title>
          </head>

3.  Update the title to match the name of your website.

At the command prompt, type `nano`.
``Use `code` in your Markdown file.``

Try to put a blank line before...

---

...and after a horizontal rule.

My favorite search engine is [DuckDuckGo](https://duckduckgo.com "The best search engine for privacy").
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

# OCTOPRESS THEFT
## It's fairly meh

{% blockquote %}
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque hendrerit lacus ut purus iaculis feugiat. Sed nec tempor elit, quis aliquam neque. Curabitur sed diam eget dolor fermentum semper at eu lorem.
{% endblockquote %}

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}


{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

{% codeblock lang:objc %}
[rectangle setX: 10 y: 10 width: 20 height: 20];
{% endcodeblock %}

{% codeblock _.compact http://underscorejs.org/#compact Underscore.js %}
_.compact([0, 1, false, 2, '', 3]);
=> [1, 2, 3]
{% endcodeblock %}

{% pullquote [class] %}
content
{% endpullquote %}

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}

{% codeblock [title] [lang:language] [url] [link text] [additional options] %}
code snippet
{% endcodeblock %}


# IMAGE HERE
## It's fairly crappy

{% img [class] /img/escapables.png '"title text" "alt text"' %}

# Codespam?
No absolutely not.

# Video Link
{% youtube dQw4w9WgXcQ %}

#In any case
https://hexo.io/docs/tag-plugins
https://www.markdownguide.org/basic-syntax
