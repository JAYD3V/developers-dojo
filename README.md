# **SUGGESTED CONFIGURATIONS**

<br>

## _PRO vrs STD_

**PRO** = _professional_ & **STD** = _standard_

The difference between pro, and std, has to do with customizations I made to specific features in the pro version. Honestly, I named it pro because it sounded cool. There is not a better theme between the two versions, **STD** & **PRO**, its up to each individual to decide which is a better fit for him/her. To help users make the decision, Ill briefly explain what pro is.

## _**PRO**_

_I have found that the best way to describe what PRO offers, that STD doesn't, is by informing the users (you), that PRO helps developers further configure and customize VSCode. Pro helps its user obtain a truly unique experience, where STD is for those you don't want to spend more time configuring more stuff._

IMO, projects require way to much configuration. I view myself as a developer who works during a time, when over-configuration is a major problem that needs a solution. The problem isn't the ability to customize projects, Dev Envs, Desktops, Compilers, Debuggers, tasks, Shell, OS, etc... etc... etc... the problem is that it takes way too long to configure all of those things. Which is why I offer, both a pro version, and std version.

**To continue with the STD version, just equip it.**

**To continue with the PRO version, continue reading... ... ...**

---

<br>

<br>

<br>

<br>

<br>


<br>

<br>

<br>

<br>

## **PRO Continued...**

---

_Visual Studio Code_ includes a wide array of really awesome features, and several of the features can be styled by the colorToken properties used to create a theme. I have included a few suggestions below. I don't feel that these are neccessary be any means. Their purpose is to inform users who equip developer's dojo, of the enhancements I made to the pro version of the theme.

<br>

<br>

<br>

<br>



### **Suggestion 1: &nbsp; Whitespace Rendering**

---

**Feature:** &nbsp;&nbsp; Whitespace Rendering
**Setting:** &nbsp;&nbsp;  **_`editor.renderWhitespace`_**
**Suggested Value:** **_`"trailing"`_**

---

By default, editor.renderWhitespace is configured to display leading whitespace whenever text with leading whitespace is selected. Trailing Whitespace is bad, leading whitespace is necessary. As developers, we want our code indented, which requires leading tabs, or spaces, however; whitespace, as far as I know, is always a bad thing when it is trailing at the end of lines of code. Consequently, I suggest that you reconfigure VS Code to render trailing whitespace instead. I highlighted the whitespace in such a way that it renders a faint transparent red, which couples the configuration. The faint red is non-intrusive to the rest of the editors aesthetics, while still being visible enough to see when your looking specifically for them. The red color suggests that the dots are a problem that should be removed.


<br>


##### _**Reconfigure this feature by adding the settings shown in the snippet below to the editor's settings.json file.**_


```JSON
{
    "editor.renderWhitespace": "trailing",
    "workbench.colorCustomizations": {
        "editorWhitespace.foreground": "#90090990" // Dots Color
    }
}
```


##### **_"trailing" is the suggested value, but the features can be customized by using any of the following:_**

- ##### **trailing** _(suggested)_
- ##### **selection** _(default)_
- ##### **boundary**
- ##### **none**
- ##### **all**









<br>

<br>

<br>

---
## **Suggestion 02: &nbsp; Multiple Rulers**


<br>

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
