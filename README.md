## **SUGGESTED CONFIGURATIONS**

<br>

_Visual Studio Code_ includes a wide array of really awesome features, some p therefore, its important that we are aware of them, and that we configure them in a way that they are useful to us. To provide users who have **_Developer's Dojo_** equipped as their color theme with the best experience possible, I've included a version of **_Dev-dojo_** that comes with a special feature highlighting. The features are documented below as a list of **Features Suggestions**. The list only contains 5 suggestions, but each suggestion includes a suggested configuration for a setting that customizes a feature, which I have added unique highlighting for. Color themes  list itself is short, each suggestion is rather detailed, and each one includes a suggested setting configured a certain way, as well as custom highlighting configured for the feature that is being suggested. I hope you check them out, and please email me with any feed back you might have. I have spent much time custom styling the listed features, as well as documenting them, so I think most will find them very helpful.

<br>

<br>

<br>

<br>


---
### Suggestion 1: &nbsp; Whitespace Rendering
---

**Feature:** &nbsp;&nbsp; Whitespace Rendering
**Setting:** &nbsp;&nbsp;  **_`editor.renderWhitespace`_**
**Suggested Value:** **_`"trailing"`_**
**Description:** _By default, editor.renderWhitespace is configured to display leading whitespace whenever text with leading whitespace is selected._

<br>

### Suggestion


Trailing Whitespace is bad, leading whitespace is necessary. As developers, we want our code indented, which requires leading tabs, or spaces, however; whitespace, as far as I know, is always a bad thing when it is trailing at the end of lines of code. Consequently, I suggest that you reconfigure VS Code to render trailing whitespace instead. I highlighted the whitespace in such a way that it renders a faint transparent red, which couples the configuration. The faint red is non-intrusive to the rest of the editors aesthetics, while still being visible enough to see when your looking specifically for them. The red color suggests that the dots are a problem that should be removed.


###### _Reconfigure this feature by adding the settings shown in the snippet below to the editor's settings.json file. The settings are set to their recommended values, but try playing around with the settings, see if you can find a custom configuration that you personally like._


```JSON
/// @file settings.json

{
    "editor.renderWhitespace": "trailing", // sets which whitespace to render
    "workbench.colorCustomizations": {
        "editorWhitespace.foreground": "#90090990" // Changes the color
    }
}
```


###### Other values to try
- _"selection" (default)_
- _"trailing" (suggested)_
- _"boundary"_
- _"all"_
- _"none"_




<br>




<br>




<br>




---------------------------------------------
### **Suggestion 02: &nbsp; Multiple Rulers**
---------------------------------------------

**Feature:** &nbsp;&nbsp; Editor Line-length Rulers
**Setting:** &nbsp;&nbsp;  **_`editor.rulers`_**
**Suggested Value:** **_`[20, 40, 60, 80, 80, 80, 80]`_**
**Description:** _I only ever see developers equip a single ruler for line length, but any number can be added to the editor._

<br>

### Suggestion

I generally use three very dim transparent rulers, and one semi-opaque ruler that gets placed at the character number where the code will wrap (**_e.g._** _if code wraps at 80 characters, I place a bright line at the 80 character mark in the editor._). I have never seen another theme implement rulers how I have done in **_Developer's Dojo_**. I make the rulers transparent, so the can be placed at arbitrary points so you can always have a rough idea of how many characters your writing in a line. If you place more than one ruler at the same character number (**_e.g.**_ like if you were to add the following array of values to the setting, `[1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 20]), you would end up with three really bright lines at the front of the editor, and one very faint vertical line that striped down at the 20th character in the editor. Try it out. It's actually quite whimsical to play with.


**Description**




<br>



<br>



<br>

---

### **Suggestion 03: Empty...**

---

**Setting ID:** "Empty..."
**Suggested Val:** "Empty..."
