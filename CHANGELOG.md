# **CHANGELOG**

<br>

### **VERSION LIST:**

<br>

|  #  | VERSION              |    DATE    | QTY |
| :-: | :------------------- | :--------: | --: |
| 7.  | **[v0.1.4](#0.1.4)** | 2021-11-28 | x14 |
| 6.  | **[v0.1.3](#0.1.3)** | 2021-11-28 |  x5 |
| 5.  | **[v0.1.2](#0.1.2)** | 2021-00-00 |  X0 |
| 4.  | **[v0.1.1](#0.1.1)** | 2021-00-00 |  X0 |
| 3.  | **[v0.1.0](#0.1.0)** | 2021-00-00 |  X0 |
| 2.  | **[v0.0.3](#0.0.3)** | 2021-00-00 |  X0 |
| 1.  | **[v0.0.2](#0.0.2)** | 2021-00-00 |  X0 |

###### **NOTE:**

###### (v0.0.0) -&- (v0.0.1) were the version number during development. All commits

###### for the versions (v0.0.0) -&- (v0.0.1) no longer exist, there repository has been

###### deleted. Developer's Dojo began with a fresh GitHub repository on **`2021-11-26`**.

<br>
<br>
<br>
<br>
<br>

<a id="0.1.4"></a>

## **0.1.4** (2021-11-28)

---

### **CHANGED**

1. Changed the color of a all "Tag-names" (or `"entity.name.tags"`) TO (HTML, YAML, etc...) to the color "Capri" (or `#15BEEE`).
2. Changed the color of the "Scroll-bars" bg-clr from green to blue.
3. Changed the color of the "Scroll-bars" "onHover" bg-clr from green to `#FFAC10`
4. Changed the General Icon color (`icon.foreground`) from yellow to orange since the original bg-clrs for the editor, sidebar, panels & activity bar all changed, the color `#FFAC10` is more harmonic than the original `#FF6010`. This change may include some properties not listed here. To see the exact changes you can view the "Version History" in the project repository, and the Commit ID that includes the changes listed for `v0.1.4` is list in the **_Info Section_** below.
5. Changed Activity-bar's bg-clr so that it is closer to a true black than a blue.
6. Changed Activity-bar's fg-clr so that it matches the BG Color that it was changed to
7. Changed Activity-bar's Inactive fg-clr so that it matches the activityBar bg-clr, which was also changed _(@see #6 of v0.1.4)._
8. Changed `menu.border` to `#205AA0`.
9. Changed `editorWidget.border` to `#205AA0`
10. Changed `editorGroup.border` to `#102C5C`
11. Changed `activityBar.border` to `#102C5C`
12. Changed `sideBar.border` to `#102C5C`
13. Changed `tabs.border` to `#102C5C`
14. Changed `titleBar.border` to `#003060`

### **FIXED**

1. Fixed the Menu-BG so that it is no longer set with its opacity at less than 100%. It looked kind of cool so I left it, but it wasn't ever suppose to have been set to 92% Opacity. Now the menu-bg is 100% opaque `#061730`.
2. Changed "editorWidget.background" so that it is no longer set with its opacity at less than 100% `#061730`.

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

1. Changed the image header in `README.md` so that the information it contains is now correct

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

1. Changed the background color of the editor's panels, inactive-tabs, and the activitybar. The color is similar, a little less blue, it appears more black, and is lighter than the previous color, which also appeared to be almost black, but defiantly had more of a blue tone and was darker.
2. Changed the color of the `panelTitle.inactiveForeground` from a pastel dark green to a semi-visible grey
3. Changed the color of the `panelTitle.activeForeground` from a very saturated green, to a saturated white

<br>
<br>
<br>

<a id="0.1.1"></a>

## **0.1.1** (2021-11-27)

---

### CHANGED

1. Changed the color of the terminal to be darker
2. Changed the ANSI Colors of the terminal to be more saturated, and to contrast better

<br>
<br>
<br>

<a id="0.1.0"></a>

## **0.1.0** (2021-11-27)

---

### ADDED

1. Markdown syntax highlighting.
2. Changed the terminal border so it is no longer red.
3. Bumped the version to v0.1.0, since the first publication was a flop.
4. Changed Snippet/Emmet highlight bg so that its semi-transparent, and black.

### FIXED

1. Rewrote the README.md document in a way that's supported by _V.S. Code's_ extension preview (I had HTML tags in the _`README.md`_ file that the extension readme preview did not support).
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
