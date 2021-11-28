[![Developers-Dojo-Preveiw.png](https://i.postimg.cc/fL8RJnFg/Developers-Dojo-Preveiw.png)](https://postimg.cc/ZBySMgJr)

<br>

## __ABOUT:__

#### __Developer's Dojo__ is based on the theory that highlighting a documents syntax in such a way that is consistent across the entire theme, and with colors that work with each other, will greatly improve readability. To help explain my point, take a look at the image below. The image has 4 lines of code in it. What line, or lines, is the most readable to you? 

<br>

##### __HINT:__ _"This is an arbitrary exercise, no right or wrong answer exist."_

<br>

[![Sample.png](https://i.postimg.cc/7hNdxwWf/Sample.png)](https://postimg.cc/fSJBCnZN)

I asked this to as many people as I could, which unfortunately was not as many as I would of liked, but twitter did help. And all though the results are far from being _'real-science-quality'_ they do point at a trend. Most people felt that the last _foobar_
variable the most readable line of code, two people said that none of them were less or more readable, but that 4 was the most appealing to look at. A few people, including myself thought that the first string was the most readable. As I hinted in the start of the exercise, the results are arbitrary, if you like pink, and feel pink was more readable, then for you, that is true. 

So I interpreted the data as meaning, colors that or closer together on the color spectrum make for a more readable line of code, and I personally believe that this concept scales to the size of the entire document, _so in-other-words;_ when a document is full of bright differentiating colors, the document is actually hindering readability more than it is helping it. A theme has more important purposes than readability — like being able to quickly scan a document for the parameter, or class-member you are working with (thats just one case many others exist) — but readability is what causes me problems when I work, as the longer the day goes the worst my eyesight gets, and I have better than 20/20, but I also spend 16-20 hours at a clip on the computer. Anyhow, if you look at the palette in the image above, you'll see that there is a range of colors, so its possible to separate the different syntaxes within a given programming/markup language, however the colors I choose flow, one into the next, and I even tried to make the groups meet.

My goal is to custom implement syntax highlighting into every language I know, including any 3rd party grammars made available to the languages via the Visual Studio Marketplace. So far I have customized JavaScript, C++, Makefile, JSON, YAML, BASH, and a few others. In the next few days I will of compiled a list that I will post at the bottom of the document. Lastly, I want to touch on one more thing while I am rambling on a bout custom highlighting a theme on a per-language basis. VSCode supports languages, and language-features, in a few different ways, some of those methods include parsers, some include language-servers, but one thing that is pretty much required for VSCode to support a language is a TextMate grammar, and thats because its how vscode knows what to highlight, and where to highlight it at, which is useful for features that extend far beyond themes, though themes are probably the most notable feature gained from them. TextMate Grammars are really well defined, they can come in an XML format, or a JSON format. They offer a means to add very precise, and unique syntax highlighting, however there full potential is rarely ever taken advantage of. I want to add custom highlighting for every language, instead of adding a bunch of generalized token selectors, because thats how a theme gains an edge, and its something most themes don't do, but when a theme does custom highlight I personally find it very noticeable. Anyway, as I said, I will post a list below in the next few days of all the languages I have added custom support for.