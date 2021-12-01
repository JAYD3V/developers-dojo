# **CHANGELOG**

<br>

### **VERSION LIST CONTENTS**

<br>

|  #  | VERSION              |    DATE    | QTY |
| :-: | :------------------- | :--------: | --: |
| #9  | **[v0.1.6](#0.1.6)** | 2021-11-30 | x25 |
| #8  | **[v0.1.5](#0.1.5)** | 2021-11-29 |  x6 |
| #7  | **[v0.1.4](#0.1.4)** | 2021-11-28 | x16 |
| #6  | **[v0.1.3](#0.1.3)** | 2021-11-28 |  x3 |
| #5  | **[v0.1.2](#0.1.2)** | 2021-11-27 |  X7 |
| #4  | **[v0.1.1](#0.1.1)** | 2021-11-27 |  X2 |
| #3  | **[v0.1.0](#0.1.0)** | 2021-11-27 |  X6 |
| #2  | **[v0.0.3](#0.0.3)** | 2021-11-26 |  X2 |
| #1  | **[v0.0.2](#0.0.2)** | 2021-11-26 |  X1 |

<br>
<br>

---

## **UNPUBLISHED**

---

<br><br>
<br><br>

---

## <a id="0.1.6"></a> **0.1.6** (2021-11-30)

---

### **CHANGED**

1. **CHANGED** "input.background" from a pure black, `"#000000"`, to a red smokey: `#0E0A08`. You can't see the redness, but it makes it pop against the blue, with out being so black. The pure blacks create to much contrast, so I will be attempting to alter all pure black theme-property values.
2. **CHANGED** Set about 70% of the Symbol-Icons that show up in places like the suggestions widget, and breadcrumbs (under the editor-tabs) to the color `#32EEC4`, and set the rest to `#FFB000`. In truth I just split them up in a pseudo-random fashion. When the theme is more complete I will take more time to be selective.
3. **CHANGED** Bg-clr of the Status-bar to #004488
4. **CHANGED** Bg-clr of all badges to #004488
5. **CHANGED** Badges Fg-clr to #32EEC4
6. **CHANGED** Status-bar fg-clr to #E8ECFF
7. **CHANGED** `icon.foreground` to `#FFB000`
8. **CHANGED** `foldingControl.foreground` to `#FFB000`
9. **CHANGED** `debugIcon.pauseForeground` to `#E8EE51` its 1pt of blue off, incase its decided that the yellow isn't working as an accent highlighting color, then the pause button well remain yellow, if I refactor the color #FFB000.
10. **CHANGED** the color of tab.activeBackground `#0A2855`
11. **CHANGED** the color of tab.activeBorder `#0A2855`
12. **CHANGED** the color of tab.unfocusedActiveBackground `#0A2855`
13. **CHANGED** the color of tab.unfocusedActiveBorder `#0A2855`
14. **CHANGED** the color of SideBar Background `#0A2855`
15. **CHANGED** the color of `sideBarSectionHeader.background` `#0D111A`
16. **CHANGED** the color of `sideBarSectionHeader.border` `##EEFF8840`
17. **CHANGED** the color of `activityBar.background` to `#080E1F` so that the property matches with tabs-group bg, activity-bar, panels & inactive-tabs.
18. **CHANGED** the color of `editorGroupHeader.tabsBackground` to `#080E1F` so that the property matches with tabs-group bg, activity-bar, panels & inactive-tabs.
19. **CHANGED** the color of `panel.background` to `#080E1F` so that the property matches with tabs-group bg, activity-bar, panels & inactive-tabs.
20. **CHANGED** the color of `tab.inactiveBackground` to `#080E1F` so that the property matches with tabs-group bg, activity-bar, panels & inactive-tabs.
21. **CHANGED** Source/Version Control for Modified/Added/Untracked (not staged) to `#70E020`. This was sort of a fix, because somehow modified & added were not the colors that they were being documented as. Fortunately no documentation on them was made public, so this is the color that modified will be for the time being.
21. **CHANGED** Source/Version Control for Modified/Added (staged) to `#F59030`. Changed the color so the orange is not so saturated.


##### note: Because CHANGED #10 - CHANGED #14 was a color refactor, and **CHANGED** #7 - **CHANGED** 9 was also a color refactor, there are properties that changed that I am unaware of, which is why I recolored the properties using a refactor. To get the full list of everything that changed refer to the repository GitHub history Commit ID \#

### **ADDED**

1. **ADDED** `semanticTokenColors` object to the `developers-dojo-vscode-theme.json` file. The plan was to use Semantic-tokens with out having that object, most people don't seem to use it, however, syntactically its far better than the simple tokenColors property.
2. **ADDED** `semanticHighlighting` property to the `developers-dojo-vscode-theme.json` file, and set it to true. Now it will automatically set semanticHighlighting to true for anyone who uses the default VS Code configuration `{ "editor.semanticHighlighting.enabled": true }`
3. **ADDED** `semanticTokenColors` property `"namespace": {...}`, changed namespace from caribbean greenish color, to the standard palette purple color.
4. **ADDED** `semanticTokenColors` property `"memberOperatorOverload": {...}`, changed namespace from caribbean greenish color, to the standard palette purple color.

<br>

<br>

<br>

<br>

---

## <a id="0.1.5"></a> **0.1.5** (2021-11-29)

---

### **ADDED**

1. **ADDED** Highlighting for **_Doxygen_** inline-documentation (JavaDoc style) comments.
2. **ADDED** the new `"tokenColor":{}` property scope: `comment.block storage.type.class`.
3. **ADDED** the new `"tokenColor":{}` property scope: `comment.block variable.parameter`.
4. **ADDED** a new section to `README.md`: _"Configuration Suggestions"_.
5. **ADDED** new _"Configuration Suggestions"_ for `editorRuler`.
6. **ADDED** Added a new _"Configuration Suggestion"_ to `README.md`: **"Programming Fonts"**
7. **ADDED** Added a new _"Configuration Suggestion"_ to `README.md`: **"Custom Char-limit Ruler"**

### **CHANGED**

1. **CHANGED** the way that lists, and hovering over menu's & lists highlights. Now hovering over list & menu items, highlights the item bg-color just the same as if it were selected, which hopefully communicates better what happens when you click on a certain item. Anything hovered over that isn't a selectable item from a menu or list, will not have the same bg-highlight-color, which is [#003090](https://github.com/W3Dojo/developers-dojo/issues/003090).
2. **CHANGED** the _'list active selection bg-color'_ to #10EEC4. This will hopefully help to communicate once something is selected. The way it works, is a blue bg appears when an item is selectable via a right-click of the mouse-btn, if the item is clicked, to show that the item has successfully been activated, a Caribbean-green `focusBorder` will highlight the item.

### **FIXED**

1. **FIXED** CARIBBEAN BLUE/GREEN COLOR SO THAT IT DISPLAYS BETTER. it was `#2CC4A4` but now it is, `#27C7A2` so that it contrast better when placed next to capri colored functions.
2. **FIXED** the incorrect coloring of classes, namespaces, _'special lexically-scoped object name'_ **_`THIS`_** (or **_`this`_**). It was set to `#2CC0C0`, but it was suppose to be the CARIBBEAN values in the documentation.

<br>
<br>
<br>
<br>

---

## <a id="0.1.4"></a> **0.1.4** (2021-11-28)

---

### **CHANGED**

1. **CHANGED** the color of a all "Tag-names" (or `"entity.name.tags"`) TO (HTML, YAML, etc...) to the color "Capri" (or `#15BEEE`).
2. **CHANGED** the color of the "Scroll-bars" bg-clr from green to blue.
3. **CHANGED** the color of the "Scroll-bars" "onHover" bg-clr from green to `#FFAC10`
4. **CHANGED** the General Icon color (`icon.foreground`) from yellow to orange since the original bg-clrs for the editor, sidebar, panels & activity bar all CHANGED, the color `#FFAC10` is more harmonic than the original `#FF6010`. This change may include some properties not listed here. To see the exact changes you can view the "Version History" in the project repository, and the Commit ID that includes the changes listed for `v0.1.4` is list in the **_Info Section_** below.
5. **CHANGED** Activity-bar's bg-clr so that it is closer to a true black than a blue.
6. **CHANGED** Activity-bar's fg-clr so that it matches the BG Color that it was CHANGED to
7. **CHANGED** Activity-bar's Inactive fg-clr so that it matches the activityBar bg-clr, which was also CHANGED _(@see [#6](https://github.com/W3Dojo/developers-dojo/issues/6) of v0.1.4)._
8. **CHANGED** `menu.border` to `#205AA0`.
9. **CHANGED** `editorWidget.border` to `#205AA0`
10. **CHANGED** `editorGroup.border` to `#102C5C`
11. **CHANGED** `activityBar.border` to `#102C5C`
12. **CHANGED** `sideBar.border` to `#102C5C`
13. **CHANGED** `tabs.border` to `#102C5C`
14. **CHANGED** `titleBar.border` to `#003060`

### **FIXED**

1. **FIXED** the Menu-BG so that it is no longer set with its opacity at less than 100%. It looked kind of cool so I left it, but it wasn't ever suppose to have been set to 92% Opacity. Now the menu-bg is 100% opaque `#061730`.
2. **CHANGED** "editorWidget.background" so that it is no longer set with its opacity at less than 100% `#061730`.

### **INFO**

- A. `Commit ID: 751d04327a04967478f36e0f07277b6c139235f3

<br>
<br>
<br>

---

## <a id="0.1.3"></a> **0.1.3** (2021-11-28)

---

### REMOVED

1. **REMOVED** `./res/developers-dojo-vscode-theme-organized-by-group.json`. This file's purpose is for development reference and should have never been included in the production version of the theme.
2. **REMOVED** `./res/documented-color-palettes.jsonc`. This file's purpose is for development reference and should have never been included in the production version of the theme.

### CHANGED

1. **CHANGED** the image header in `README.md` so that the information it contains is now correct

<br>
<br>
<br>

---

## <a id="0.1.2"></a> **0.1.2** (2021-11-28)

---

### FIXED

1. **FIXED** the terminal so its not so dark. v0.1.1 set it at a pure black, which was a mistake. This version fixes that.
2. **FIXED** the _`editorGroupHeader.border`_ property so that the area above it looks as if it sits above the text editor, as it is suppose to look.
3. **FIXED** _`editorGroupHeader.tabsBorder`_ property so that it isn't so saturated. Borders should not pop-out at the user as the _header-tabsBorder_ was.
4. **FIXED** the color of the `panelTitle.activeBorder` so that it isn't as saturated.

### CHANGED

1. **CHANGED** the background color of the editor's panels, inactive-tabs, and the activitybar. The color is similar, a little less blue, it appears more black, and is lighter than the previous color, which also appeared to be almost black, but defiantly had more of a blue tone and was darker.
2. **CHANGED** the color of the `panelTitle.inactiveForeground` from a pastel dark green to a semi-visible grey
3. **CHANGED** the color of the `panelTitle.activeForeground` from a very saturated green, to a saturated white

<br>
<br>
<br>

---

## <a id="0.1.1"></a> **0.1.1** (2021-11-27)

---

### CHANGED

1. **CHANGED** the color of the terminal to be darker
2. **CHANGED** the ANSI Colors of the terminal to be more saturated, and to contrast better

<br>
<br>
<br>

---

## <a id="0.1.0"></a> **0.1.0** (2021-11-27)

---

### ADDED

1. Markdown syntax highlighting.
2. **CHANGED** the terminal border so it is no longer red.
3. Bumped the version to v0.1.0, since the first publication was a flop.
4. **CHANGED** Snippet/Emmet highlight bg so that its semi-transparent, and black.

### FIXED

1. Rewrote the _`README.md`_ document in a way that's supported by _V.S. Code's_ extension preview (I had HTML tags in the _`README.md`_ file that the extension readme preview did not support).
2. **FIXED** Snippet/Emmet highlighting bg-clr. Before the change, any text auto-inserted by a snippet &/or emmet was not visible as the highlighting-bg was the same color as the text.

<br>
<br>
<br>

---

## <a id="0.0.3"></a> **0.0.3** (2021-11-27)

---

### REMOVED

- Unpublished Extension v0.0.2: `v0.0.2`** had an incorrect filename, as a
  result, when users attempted to to equip \***`Developer's Dojo`\*\*\*, the theme
  caused an error, and failed to render.

### FIXED

- Corrected _`package.json`_

<br>
<br>
<br>

---

## <a id="0.0.2"></a> **0.0.2** (2021-11-26)

---

### **ADDED**

1. **ADDED** New repository https://github.com/W3Dojo/developers-dojo.git
2. **ADDED** Base Extension as the start to the Developers-dojo theme. Added it to the Repository, as well.
3. **ADDED** Developers Dojo to the Visual Studio Marketplace

<br>

---

<!----------| END_OF_CHANGELOG |-------->
