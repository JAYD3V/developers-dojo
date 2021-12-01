<br>

[![Dev-Dojo-Hdr.png](https://i.postimg.cc/7h080yfn/Dev-Dojo-Hdr.png)](https://postimg.cc/V0fVPp9J)

<br><br>

> ---
>
> ###### **2021–11–28**
>
> #### **Announcement:**
>
> ##### &nbsp; &nbsp; &nbsp; &nbsp; If you are viewing this theme, I am glad that your here reading this. Currently this theme is under rapid development. If you check the changelog you will see lots of activity. I probably shouldn't have published it when I did, but its a done deal now, and for the most part, the theme is ready to use. I plan on posting an image for every language I custom highlight below. It is currently <strong><em>(2021-11-28)</em></strong> just to give you a time frame, if you do decide to view the `CHANGELOG` do view the <em><strong>CHANGELOG</strong></em></p>
>
> ---

<br>

<br>

<br>

## THE COLORS THAT MAKEUP THIS THEME

---

<br>

#### _Developer's Dojo_ is based on the theory that highlighting a documents syntax in such a way that is consistent across the entire theme, and with colors that work with each other, will greatly improve readability. To help explain my point, take a look at the image below. The image has 4 lines of code in it. What line, or lines, is the most readable to you?

<br>
<br>

###### **HINT: This is an arbitrary exercise, no right or wrong answer exist**

[![Sample.png](https://i.postimg.cc/7hNdxwWf/Sample.png)](https://postimg.cc/fSJBCnZN)

<br>

<br>

I asked this to as many people as I could, which unfortunately was not as many as I would of liked, but twitter did help. And all though the results are far from being _'real-science-quality'_ they do point at a trend. Most people felt that the last _foobar_
variable the most readable line of code, two people said that none of them were less or more readable, but that 4 was the most appealing to look at. A few people, including myself thought that the first string was the most readable. As I hinted in the start of the exercise, the results are arbitrary, if you like pink, and feel pink was more readable, then for you, that is true.

I interpreted the data as meaning, colors that or closer together on the color spectrum make for a more readable line of code, and I personally believe that this concept scales to the size of the entire document, _so in-other-words;_ when a document is full of bright differentiating colors, the document is actually hindering readability more than it is helping it. A theme has more important purposes than readability — like being able to quickly scan a document for the parameter, or class-member you are working with (thats just one case many others exist) — but readability is what causes me problems when I work, as the longer the day goes the worst my eyesight gets, and I have better than 20/20, but I also spend 16-20 hours at a clip on the computer. Anyhow, if you look at the palette in the image above, you'll see that there is a range of colors, so its possible to separate the different syntaxes within a given programming/markup language, however the colors I choose flow, one into the next, and I even tried to make the groups meet.

<br>

<br>

<br>

<br>

### Image of C++

---

[![Dev-Dojo-Cpp.png](https://i.postimg.cc/3R0J1fzs/Dev-Dojo-Cpp.png)](https://postimg.cc/XG3b7LjL)

---

<br>

<br>

<br>

### Image of a Makefile

---

[![Dev-Dojo-Makefile.png](https://i.postimg.cc/g0T2vbty/Dev-Dojo-Makefile.png)](https://postimg.cc/v15ysksD)

---

<br>

<br>

<br>

<br>

## CONFIGURING YOUR DEVELOPMENT ENVIRONMENT

---

When I was new to VS Code (3 years ago) I knew very little about it. In-fact I remember when I first tried using it, I thought, _"There's not much to do than right a script, but I can't even run it..."_. I was certainly out of touch with contemporary development, and have grown by some major leaps since then.

Obviously, no mater what experience you have with VSCode, this theme can be used, however; for a long time now, I have wanted to create not just a theme, but a theme with a README.md document that goes above and beyond. A document that covers many different areas, and goes over the different configurations, and settings that can be implemented in VSCode. Anyways, this is the start of that. Includes in this extensions, is a theme that I have worked on for sometime now, its still young, but its coming along nicely. Also included is documentation on different configurations that can be included for setting up your development environment. As stated above, the theme is young, and is in rapid development, bare with me, as you'll see in the CHANGELOG, I have been adding updates almost daily.

<br><br>
<br><br>

## **V.S. Code Configuration Tips & Suggestions**

---

<br>

|  #  | SUGGESTION                                  |
| :-: | :------------------------------------------ |
| #1  | [LINE LENGTH RULER](#cnf-sug-01)            |
| #2  | [FONT FAMILY](#cnf-sug-02)                  |
| #3  | [BRACKET PAIRS & INDENT GUIDES](#cnf-sug-03) |
| #4  | More coming soon...                         |

<br><br>
<br><br>
<br><br>
<br><br>

---

### <a id="cnf-sug-01"></a> CUSTOM LINE LENGTH RULER

---

<br>

-   **Setting Configured**: _`"editor.rulers"`_

<br>

-   **Suggested:**
    -   The VSCode property `editorRuler.foreground` is theme setting that's set in the theme you have equipped (unless it's being overridden by a `settings.json` file).
    -   The VSCode Setting `editor.rulers` places rulers that are highlighted using the color set by `editorRuler.foreground`.
    -   The _Developer's Dojo_ theme implements the `editorRuler.foreground` property at approx. 8% to 9% opacity, consequently; any editor that equips **Developer's Dojo** can configure some nifty rules inside of there `"./.vscode/settings.json"` file. The more rulers that are put on the same line, the more luminescent the ruler gets, take the snippet below for example. The snippet configures rulers to get steadily brighter as the get further away from the start of the line.

<br>

```
   {
       "editor.rulers": [20, 40, 40, 60, 60, 60, 60,
                         80, 80, 80, 80, 80, 80, 80]
   }
```

<br>
<br>
<br>

### <a id="cnf-sug-02"></a> FONT FAMILY

---

<br>

-   **Settings 2 be Configured**
    -   _`editor.fontFamily`_
    -   _`editor.fontLigatures`_
    -   _`editor.fontSize`_
    -   _`editor.lineHeight`_
    -   _`editor.fontWeight`_
    -   _`editor.suggestFontSize`_
    -   _`editor.inlayHints.fontSize`_

<br>

-   **Suggested:**
    -   I highly suggest, probably more than anything else, that if you are not using a programming font (a font specially designed for using programming languages), that you start using one like RN. There really isn't much reason not to, because the best ones are all 100% Free.
    -   **The 3 top programming fonts IMO are as follows:**
        1. _Cascadia Code / Cascadia Mono_
        2. _JetBrains Mono_
        3. _Fira Code / Fira Mono_
    -   Ill cover how to start using Cascadia Code here, since IMO, Cascadia Code is the best programming font ever developed. It's absolutely gorgeous. Best of all, It was developed by Microsoft, for _Microsoft development environments_. There are two links below for downloading Cascadia Code.
    -   First off **_Cascadia Code_** needs to be specially configured to use its most prominent features, therefore, I have included below the links to download the font
        and the suggested configuration to use.

<br>

##### **Cascadia Code Direct Download Link:**

-   ##### **_[CLICK HERE TO DOWNLOAD CASCADIA CODE](https://github.om/microsoft/cascadia-code/archive/refs/tags/v2110.31.zip)_**

##### **Cascadia Code Downloads Page:**

-   [https://github.com/microsoft/cascadia-code/releases](https://github.com/microsoft/cascadia-code/releases)

<br>

-   **Configuration:**

    -   Before you configure your editor, install **Cascadia Code**, then close all instances of **_VS Code_** that you currently have open. Once no VS Code has been completely closed, you can reopen the editor. FYI, `"Developer: Reload Window"` isn't enough to satisfy whatever it is that needs a reset.
    -   Now open your user-scoped `settings.json` file (not the GUI settings menu, but the actual **JSON** file), and not the _settings file_ in `./.vscode/settings.json`, but the global `settings.json` file (or vscode refers to it as the user `settings.json` file).
    -   Once in your user `settings.json` file, set the editors font-properties, like so:

        <br>

    ###### **!IMPORTANT:** Aside from setting the font-family property correctly, the most important setting to get right is the _`editor.fontLigatures`_ setting. This adds ligature support & activates the awesome cursive italics.

    ```
    /* @file 'settings.json'

       NOTE: If some of the properties show a warning check to
             see if you created doubles of the same properties.
             If you did, delete the old properties and use the
             new. */

    {
        "editor.fontFamily": "'Cascadia Code', Consolas, monospace",
        "editor.fontLigatures": "'ss01'",
        "editor.fontSize": 12.5,
        "editor.lineHeight": 21,
        "editor.fontWeight": "400",
    }
    ```

<br>
<br>
<br>

### <a id="cnf-sug-03"></a> BRACKET PAIR HIGHLIGHTING & INDENT GUIDES

---

<br>

##### NOTE: So I would never suggest a 3rd party extension in a README document. The reason I mention this, is because the feature that **SUGGESTION #3** covers, is one that was only made available by 3rd party extensions until just recently (a month or two before authoring this in Nov of 2021).

<br>

-   **Settings 2 be Configured**
    1. `editor.bracketPairColorization.enabled`
    2. `editor.guides.bracketPairs`
    3. `editor.guides.highlightActiveBracketPair`
    4. `editor.guides.highlightActiveIndentation`

<br><br>

-   **Suggested:**

    -   Using only a hand full of settings, you can amazing achieve quite a bit of customization using the Bracket-pairs Highlighting Feature. Really its actually two features in one, right? I'm sure some of you reading this realize that, but if your newer all of the available configurations may be a bit overwhelming. You have indent-guide highlighting, which places indent guides in your editor, and you have the bracket pair highlighting which highlights brackets that complete a block (or in many OOP languages, **_"a closure"_**).

    -   Below I will show you my configuration, add some comments, but you are going to have to play with the settings to see what works for you. The hard part at first is knowing which settings are available for making changes to the specific feature, and that much I can do for. Playing with it is the harder part, but its also the fun part.

<br><br>

-   **Configuration:**
    - **`editor.bracketPairColorization.enabled` —** _Enables the BracketPair Highlighting Feature._
    - **`editor.guides.bracketPairs` —** _Enables the multicolor scheme to highlight the indent guides. The indent-guides can be colored by two different theme settings, this determines which one colors the indent guides. One is mono-chromatic, and the other is poly-chromatic. (single-color, many-colors)_
    - **`editor.guides.highlightActiveBracketPair` —** _Colors Brackets at all times_ (see Cpp image, look at the braces & parenthesis).
    - **`editor.guides.highlightActiveIndentation` —** Highlights the active indent guide. If `editor.guides.bracketPairs` is turned off, it will take the value of the default indent guide color, which is set by the tokenColors property: `editorIndentGuide.activeBackground`, and in this theme it is set to: `#2bb444`
    - **`editor.guides.indentation` —**

```
    // Your settings.json file

    {
        // (#1) BRACKET PAIR HIGHLIGHTING CONFIGURATION:
        "editor.bracketPairColorization.enabled": true,
        "editor.guides.bracketPairs": "active",
        "editor.guides.highlightActiveBracketPair": true,

        // (#2) INDENTATION GUIDES CONFIGURATION:
        "editor.guides.highlightActiveIndentation": true,
        "editor.guides.indentation": false
    }
```

- **ADVANCED CONFIGURATION:**
    - Below are the `tokenColor` properties that affect the editor features configured by the settings covered in the Bracket-pair Highlighting Configuration suggestion above. The properties values are set to the same values as what they are set to in the **Developer's Dojo**, theme.
    - The block below is formatted to be configurable in any VS-Code `settings.json` file, either your user `settings.json` file, your WSL `settings.json` file, or your workspace `.../.vscode/settings.json` file. Simply **Copy & Paste**.



```
    "editor.tokenColorCustomizations": {
        "editorIndentGuide.background": "#000A20",
        "editorIndentGuide.activeBackground": "#2bb444",
        "editorBracketHighlight.foreground1": "#00ccb0",
        "editorBracketHighlight.foreground2": "#14b4ff",
        "editorBracketHighlight.foreground3": "#aa7cff",
        "editorBracketHighlight.foreground4": "#00ccb0",
        "editorBracketHighlight.foreground5": "#14b4ff",
        "editorBracketHighlight.foreground6": "#aa7cff",

    /***********************************************************************
      "Personally I prefer the following to not be colored, but we all
      have our preferences, which is why I am showing you this"
     ***********************************************************************/
        //"editorBracketPairGuide.activeBackground1": "#00000000",
        //"editorBracketPairGuide.activeBackground2": "#00000000",
        //"editorBracketPairGuide.activeBackground3": "#00000000",
        //"editorBracketPairGuide.activeBackground4": "#00000000",
        //"editorBracketPairGuide.activeBackground5": "#00000000",
        //"editorBracketPairGuide.activeBackground6": "#00000000",
        //"editorBracketPairGuide.background1": "#00000000",
        //"editorBracketPairGuide.background2": "#00000000",
        //"editorBracketPairGuide.background3": "#00000000",
        //"editorBracketPairGuide.background4": "#00000000",
        //"editorBracketPairGuide.background5": "#00000000",
        //"editorBracketPairGuide.background6": "#00000000",
    },
```