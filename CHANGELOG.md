# **CHANGELOG**

<br>

### **VERSION LIST:**

<br>

|  #  | VERSION              |    DATE    | QTY |
| :-: | :------------------- | :--------: | --: |
| 8.  | **[v0.1.5](#0.1.5)** | 2021-11-29 |  x6 |
| 7.  | **[v0.1.4](#0.1.4)** | 2021-11-28 | x16 |
| 6.  | **[v0.1.3](#0.1.3)** | 2021-11-28 |  x3 |
| 5.  | **[v0.1.2](#0.1.2)** | 2021-00-00 |  X7 |
| 4.  | **[v0.1.1](#0.1.1)** | 2021-00-00 |  X2 |
| 3.  | **[v0.1.0](#0.1.0)** | 2021-00-00 |  X6 |
| 2.  | **[v0.0.3](#0.0.3)** | 2021-00-00 |  X2 |
| 1.  | **[v0.0.2](#0.0.2)** | 2021-00-00 |  X1 |

<br>
<br>
<br>
<br>
<br>
<br>

---

## **UNPUBLISHED**

---

<br><br>
<br><br>
<br><br>
<br><br>

<a id="0.1.5"></a>

## **0.1.5** (2021-11-29)

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

1. **CHANGED** the way that lists, and hovering over menu's & lists highlights. Now hovering over list & menu items, highlights the item bg-color just the same as if it were selected, which hopefully communicates better what happens when you click on a certain item. Anything hovered over that isn't a selectable item from a menu or list, will not have the same bg-highlight-color, which is #003090.
2. **CHANGED** the _'list active selection bg-color'_ to #10EEC4. This will hopefully help to communicate once something is selected. The way it works, is a blue bg appears when an item is selectable via a right-click of the mouse-btn, if the item is clicked, to show that the item has successfully been activated, a Caribbean-green `focusBorder` will highlight the item.

### **FIXED**

1. FIXED CARIBBEAN BLUE/GREEN COLOR SO THAT IT DISPLAYS BETTER. it was `#2CC4A4` but now it is, `#27C7A2` so that it contrast better when placed next to capri colored functions.
2. Fixed the incorrect coloring of classes, namespaces, _'special lexically-scoped object name'_ **_`THIS`_** (or **_`this`_**). It was set to `#2CC0C0`, but it was suppose to be the CARIBBEAN values in the documentation.

<br>
<br>
<br>
<br>

<a id="0.1.4"></a>

## **0.1.4** (2021-11-28)

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

1. Fixed the Menu-BG so that it is no longer set with its opacity at less than 100%. It looked kind of cool so I left it, but it wasn't ever suppose to have been set to 92% Opacity. Now the menu-bg is 100% opaque `#061730`.
2. **CHANGED** "editorWidget.background" so that it is no longer set with its opacity at less than 100% `#061730`.

### **INFO**

-   A. `Commit ID: 751d04327a04967478f36e0f07277b6c139235f3

<br>
<br>
<br>

<a id="0.1.3"></a>

## **0.1.3** (2021-11-28)

---

### REMOVED

1. Removed `./res/developers-dojo-vscode-theme-organized-by-group.json`. This file's purpose is for development reference and should have never been included in the production version of the theme.
2. Removed `./res/documented-color-palettes.jsonc`. This file's purpose is for development reference and should have never been included in the production version of the theme.

### CHANGED

1. **CHANGED** the image header in `README.md` so that the information it contains is now correct

<br>
<br>
<br>

<a id="0.1.2"></a>

## **0.1.2** (2021-11-28)

---

### FIXED

1. Fixed the terminal so its not so dark. v0.1.1 set it at a pure black, which was a mistake. This version fixes that.
2. Fixed the _`editorGroupHeader.border`_ property so that the area above it looks as if it sits above the text editor, as it is suppose to look.
3. Fixed _`editorGroupHeader.tabsBorder`_ property so that it isn't so saturated. Borders should not pop-out at the user as the _header-tabsBorder_ was.
4. Fixed the color of the `panelTitle.activeBorder` so that it isn't as saturated.

### CHANGED

1. **CHANGED** the background color of the editor's panels, inactive-tabs, and the activitybar. The color is similar, a little less blue, it appears more black, and is lighter than the previous color, which also appeared to be almost black, but defiantly had more of a blue tone and was darker.
2. **CHANGED** the color of the `panelTitle.inactiveForeground` from a pastel dark green to a semi-visible grey
3. **CHANGED** the color of the `panelTitle.activeForeground` from a very saturated green, to a saturated white

<br>
<br>
<br>

<a id="0.1.1"></a>

## **0.1.1** (2021-11-27)

---

### CHANGED

1. **CHANGED** the color of the terminal to be darker
2. **CHANGED** the ANSI Colors of the terminal to be more saturated, and to contrast better

<br>
<br>
<br>

<a id="0.1.0"></a>

## **0.1.0** (2021-11-27)

---

### ADDED

1. Markdown syntax highlighting.
2. **CHANGED** the terminal border so it is no longer red.
3. Bumped the version to v0.1.0, since the first publication was a flop.
4. **CHANGED** Snippet/Emmet highlight bg so that its semi-transparent, and black.

### FIXED

1. Rewrote the _`README.md`_ document in a way that's supported by _V.S. Code's_ extension preview (I had HTML tags in the _`README.md`_ file that the extension readme preview did not support).
2. Fixed Snippet/Emmet highlighting bg-clr. Before the change, any text auto-inserted by a snippet &/or emmet was not visible as the highlighting-bg was the same color as the text.

<br>
<br>
<br>

<a id="0.0.3"></a>

## **0.0.3** (2021-11-27)

---

### REMOVED

-   Unpublished Extension v0.0.2: `v0.0.2`** had an incorrect filename, as a
    result, when users attempted to to equip \***`Developer's Dojo`\*\*\*, the theme
    caused an error, and failed to render.

### FIXED

-   Corrected _`package.json`_

<br>
<br>
<br>

<a id="0.0.2"></a></a>

## **0.0.2** (2021-11-26)

---

### ADDED:

-   Published Extension

<br>

---

<!----------| END_OF_CHANGELOG |-------->
