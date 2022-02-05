# **CHANGELOG**

<br>

<br>

<br>

<br>

<br>

### VERSIONS:

<br>

|  \#ID | VER                  | DATE       | QTY | NOTE |
| ----: | :------------------- | ---------- | :-: | :--: |
|  #012 | **[v1.8.2](#1.8.0)** | 2021-12-04 | 16+ | YES  |
| \#011 | **[v0.1.8](#0.1.8)** | 2021-12-03 | 10  |  NO  |
| \#010 | **[v0.1.7](#0.1.7)** | 2021-12-01 | 61  | YES  |
| \#009 | **[v0.1.6](#0.1.6)** | 2021-11-30 | 25  | YES  |
| \#008 | **[v0.1.5](#0.1.5)** | 2021-11-29 |  6  |  NO  |
| \#007 | **[v0.1.4](#0.1.4)** | 2021-11-28 | 16  |  NO  |
| \#006 | **[v0.1.3](#0.1.3)** | 2021-11-28 |  3  |  NO  |
| \#005 | **[v0.1.2](#0.1.2)** | 2021-11-27 |  7  |  NO  |
| \#004 | **[v0.1.1](#0.1.1)** | 2021-11-27 |  2  |  NO  |
| \#003 | **[v0.1.0](#0.1.0)** | 2021-11-27 |  6  |  NO  |
| \#002 | **[v0.0.3](#0.0.3)** | 2021-11-26 |  2  |  NO  |
| \#001 | **[v0.0.2](#0.0.2)** | 2021-11-26 |  1  |  NO  |

<br>

###### &bull; **`+` = Plus Sign –** _"A plus sign in qty means at-least, but possibly more."_

###### &bull; **`#ID` = Change Identifier –** _"A Unique identifier thats assigned to each change."_

###### &bull; **`QTY` = Number of Changes –** _"Tracks number of changes that were logged for the given version."_

###### &bull; **`NOTE` = Number of Changes –** _"Additional note added to the log."_

<br>

<br>

---

## <a id="0.1.8"></a> **0.1.8** (2021-12-03)

### FIXED
1. **FIXED** Version Release **`v0.1.8`**

### REMOVED
1. **REMOVED** **_`res/docs`_** directory & all files contained within it.

### ADDED
1. **ADDED** Markdown Image & Example to **_`README.md`_**


#### NOTE:

First off, VERSIONING will change with this project. In the past I have always sought to use the system **"0.X.Y"** where **X** is the major versions, and **Y** represents the minor versions that are of the major. So in other words 0.2.5 would be the 5th minor release of the 2nd Version, or more accurately (but also more confusing), you should say, `0.2.5` is the 5th minor version of the 2nd version. And the version would simply be `0.2.5`, however; though enticing to using on simple projects, the system is no good, and all three numbers should be in use.

I screwed up the last release, and because the released version was `0.1.8`, V.S. Code will not let me create a `0.1.8.1`, however; had I released the version as 1.8.0, I easily could have released 1.8.1. So starting now, versioning will switch to that system.

Further more this version contains content that was suppose to be included in the last release but was not, and it removes some things that were released, but were mistakes, and at this point can be considered bug removals.

The details on this whole mistake are kind of shady, if this were a major project, and used by at least one large company, or another project of decent size, I would put in the grueling work of describing exactly what happened, how it happened, what exactly happened to what (down to an itemized list) ect... But, this is a small theme I am maintaining on the side, and I don't think anyone cares, nor is it likely that anyone will ever read this but me.

**IMPORTANT:** This version officially replaces `0.1.8`, though I cannot, nor do I want, to remove `0.1.8` from history, However, this release will take on the version number that is the equivalent to `0.1.8` but in the correct format, which is `1.8.0`. This also contains content that was said to be included in `0.1.8` but wasn't.

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

<br>

---

## <a id="0.1.8"></a> **0.1.8** (2021-12-03)

---

### CHANGED

1. **CHANGED** Icons to be orange #FF7400, amazingly I only dropped the color from `#FFA000` `#FF7500` and the color is totally different in this theme.
2. **CHANGED** **_`sideBarSectionHeader.background`_** to `#001025` which is very close to the std color of the status bar.
3. **CHANGED** CHANGED the terminal foreground colors (or ANSI colors) so that the are not so bright when they are made to be bold/emphasized
4. **CHANGED** BracketPair Highlighting Colors to Violet, Caribbean & Capri.

5. **CHANGED** _Capri Syntax Highlighting Color_ to `#0CC4F0`
6. **CHANGED** _Orange Syntax Highlighting Color_ to `#FF4E20`
7. **CHANGED** `constant.language`, `constant.numeric`, `constant.character.escaped` & `variable.language` to #70C640"
8. **CHANGED** `namespace` to ##CC64FF & `"fontstyle": "bold underline"`

### ADDED

1. **ADDED** Support for Markdown element _`meta.separator.markdown`_ (Highlighted in the theme as `"meta.separator"`). Set color @ `#D8A42D` & `"fontStyle": bold`
2. **ADDED** Support for semantic token _`variable.local`_ set to the color `#BCBEC8`. This semantic token makes it so that custom types are that are used as a variable highlight as a variable, rather than an object. This color change helps to convey better what the programmer who wrote the program intended the program to be structured like, and how the program is supposed to be read by anyone attempting to interpret the code. The language that is of main concern here is C/CPP/Objective-C. Its likely that this property be made language specific in the future.

<br>

<br>

<br>
<br>

<br>

<br>

<br>

---

## <a id="0.1.7"></a> **0.1.7** (2021-12-01)

---

### **CHANGED**

1. **CHANGED** the color of `activityBar.activeBorder` to `#14EC90`.
2. **CHANGED** the color of `activityBarBadge.foreground` to `#14EC90`.
3. **CHANGED** the color of `badge.foreground` to `#14EC90`.
4. **CHANGED** the color of `breadcrumb.activeSelectionForeground` to `#14EC90`.
5. **CHANGED** the color of `breadcrumb.focusForeground` to `#14EC90`.
6. **CHANGED** the color of `debugIcon.continueForeground` to `#14EC90`.
7. **CHANGED** the color of `debugIcon.startForeground` to `#14EC90`.
8. **CHANGED** the color of `editorGutter.foldingControlForeground` to `#14EC90`.
9. **CHANGED** the color of `inputOption.activeBorder` to `#14EC90`.
10. **CHANGED** the color of `list.activeSelectionIconForeground` to `#14EC90`.
11. **CHANGED** the color of `list.focusForeground` to `#14EC90`.
12. **CHANGED** the color of `list.hoverForeground` to `#14EC90`.
13. **CHANGED** the color of `list.inactiveSelectionIconForeground` to `#14EC90`.
14. **CHANGED** the color of `tab.activeBorderTop` to `#14EC90`.
15. **CHANGED** the color of `tab.unfocusedActiveBorderTop` to `#14EC90`.
16. **CHANGED** the color of `window.activeBorder` to `#14EC90`.
17. **CHANGED** the color of `extensionBadge.remoteForeground` to `#14EC90`.
18. **CHANGED** the color of `list.filterMatchBorder` to `#14EC90`.
19. **CHANGED** the color of `symbolIcon.arrayForeground` to `#14EC90`.
20. **CHANGED** the color of `symbolIcon.booleanForeground` to `#14EC90`.
21. **CHANGED** the color of `editorCursor.foreground` to `#14EC90`.
22. **CHANGED** the color of `editorInfo.foreground` to `#14EC90`.
23. **CHANGED** the color of `editorInlayHint.foreground` to `#14EC90`.
24. **CHANGED** the color of `editorInlayHint.parameterForeground` to `#14EC90`.
25. **CHANGED** the color of `editorInlayHint.typeForeground` to `#14EC90`.
26. **CHANGED** the color of `editorLightBulb.foreground` to `#14EC90`.
27. **CHANGED** the color of `editorLightBulbAutoFix.foreground` to `#14EC90`.
28. **CHANGED** the color of `editorLineNumber.activeForeground` to `#14EC90`.
29. **CHANGED** the color of `editorOverviewRuler.infoForeground` to `#14EC90`.
30. **CHANGED** the color of `symbolIcon.colorForeground` to `#14EC90`.
31. **CHANGED** the color of `symbolIcon.constantForeground` to `#14EC90`.
32. **CHANGED** the color of `symbolIcon.constructorForeground` to `#14EC90`.
33. **CHANGED** the color of `symbolIcon.fileForeground` to `#14EC90`.
34. **CHANGED** the color of `symbolIcon.folderForeground` to `#14EC90`.
35. **CHANGED** the color of `symbolIcon.functionForeground` to `#14EC90`.
36. **CHANGED** the color of `symbolIcon.keyForeground` to `#14EC90`.
37. **CHANGED** the color of `symbolIcon.keywordForeground` to `#14EC90`.
38. **CHANGED** the color of `symbolIcon.methodForeground` to `#14EC90`.
39. **CHANGED** the color of `symbolIcon.moduleForeground` to `#14EC90`.
40. **CHANGED** the color of `symbolIcon.namespaceForeground` to `#14EC90`.
41. **CHANGED** the color of `symbolIcon.nullForeground` to `#14EC90`.
42. **CHANGED** the color of `symbolIcon.numberForeground` to `#14EC90`.
43. **CHANGED** the color of `symbolIcon.objectForeground` to `#14EC90`.
44. **CHANGED** the color of `symbolIcon.operatorForeground` to `#14EC90`.
45. **CHANGED** the color of `symbolIcon.packageForeground` to `#14EC90`.
46. **CHANGED** the color of `symbolIcon.propertyForeground` to `#14EC90`.
47. **CHANGED** the color of `symbolIcon.referenceForeground` to `#14EC90`.
48. **CHANGED** the color of `symbolIcon.snippetForeground` to `#14EC90`.
49. **CHANGED** the color of `symbolIcon.stringForeground` to `#14EC90`.
50. **CHANGED** the color of `symbolIcon.structForeground` to `#14EC90`.
51. **CHANGED** the color of `symbolIcon.textForeground` to `#14EC90`.
52. **CHANGED** the color of `symbolIcon.typeParameterForeground` to `#14EC90`.
53. **CHANGED** the color of `symbolIcon.unitForeground` to `#14EC90`.
54. **CHANGED** the color of `terminalCursor.foreground` to `#14EC90`.
55. **CHANGED** the color of `textPreformat.foreground` to `#14EC90`.
56. **CHANGED** the color of `banner.iconForeground` to `#14EC90`.
57. **CHANGED** the color of `charts.blue` to `#14EC90`.
58. **CHANGED** the color of `debugConsole.infoForeground` to `#14EC90`.
59. **CHANGED** the color of `editorMarkerNavigationInfo.background` to `#14EC90`.
60. **CHANGED** the color of `notificationsInfoIcon.foreground` to `#14EC90`.

<br>

### **FIXED**

1. Fixed some spelling & grammar mistakes in README.md, although many more mistakes exist.

<br>

### **_NOTES:_**

-   ##### _"This change was about unifying the caribbean/blue-green colors into a single color."_

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

---

## <a id="0.1.6"></a> **0.1.6** (2021-11-30)

---

### **CHANGED**

1. **CHANGED** "input.background" from a pure black, `"#000000"`, to a red smokey: `#0E0A08`. You can't see the redness, but it makes it pop against the blue, with out being so black. The pure blacks create to much contrast, so I will be attempting to alter all pure black theme-property values.
2. **CHANGED** Set about 70% of the Symbol-Icons that show up in places like the suggestions widget, and breadcrumbs (under the editor-tabs) to the color `#32EEC4`, and set the rest to `#FFB000`. In truth I just split them up in a pseudo-random fashion. When the theme is more complete I will take more time to be selective.
3. **CHANGED** Bg-clr of the Status-bar to [#004488](https://github.com/W3Dojo/developers-dojo/issues/004488)
4. **CHANGED** Bg-clr of all badges to [#004488](https://github.com/W3Dojo/developers-dojo/issues/004488)
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
22. **CHANGED** Source/Version Control for Modified/Added (staged) to `#F59030`. Changed the color so the orange is not so saturated.

<br>

### **ADDED**

1. **ADDED** `semanticTokenColors` object to the `developers-dojo-vscode-theme.json` file. The plan was to use Semantic-tokens with out having that object, most people don't seem to use it, however, syntactically its far better than the simple tokenColors property.
2. **ADDED** `semanticHighlighting` property to the `developers-dojo-vscode-theme.json` file, and set it to true. Now it will automatically set semanticHighlighting to true for anyone who uses the default VS Code configuration `{ "editor.semanticHighlighting.enabled": true }`
3. **ADDED** `semanticTokenColors` property `"namespace": {...}`, changed namespace from caribbean greenish color, to the standard palette purple color.
4. **ADDED** `semanticTokenColors` property `"memberOperatorOverload": {...}`, changed namespace from caribbean greenish color, to the standard palette purple color.

<br>

<br>

#### **_NOTES:_**

-   ##### _"This change was made to better harmonize the colors that are seen reoccurring through out the theme. The two colors of focus were #0A2855 & #FFB000, which are new colors that if you read up top, many colors were changed to, though the old colors were both in the same ball park (they were dark blue & yellow before). The colors were slightly changed because they create better color harmonies."_

<br>

<br>

<br>

<br>

<br>

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

<br>

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
4. **CHANGED** the General Icon color (`icon.foreground`) from yellow to orange since the original bg-clrs for the editor, sidebar, panels & activity bar all CHANGED, the color `#FFAC10` is more harmonic than the original `#FF6010`.
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

<br>

<br>

### **_NOTES:_**

-   ##### _"This change may include some properties not listed here. To see the exact changes you can view the "Version History" in the project repository, and the Commit ID that includes the changes listed for `v0.1.4` is list in the NOTE below."_
-   **COMMIT ID:** **`751d04327a04967478f36e0f07277b6c139235f3`**

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

---

## <a id="0.1.3"></a> **0.1.3** (2021-11-28)

---

### **REMOVED**

1. **REMOVED** `./res/developers-dojo-vscode-theme-organized-by-group.json`. This file's purpose is for development reference and should have never been included in the production version of the theme.
2. **REMOVED** `./res/documented-color-palettes.jsonc`. This file's purpose is for development reference and should have never been included in the production version of the theme.

### **CHANGED**

1. **CHANGED** the image header in `README.md` so that the information it contains is now correct

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

## <br>

## <a id="0.1.2"></a> **0.1.2** (2021-11-28)

---

### **FIXED**

1. **FIXED** the terminal so its not so dark. v0.1.1 set it at a pure black, which was a mistake. This version fixes that.
2. **FIXED** the _`editorGroupHeader.border`_ property so that the area above it looks as if it sits above the text editor, as it is suppose to look.
3. **FIXED** _`editorGroupHeader.tabsBorder`_ property so that it isn't so saturated. Borders should not pop-out at the user as the _header-tabsBorder_ was.
4. **FIXED** the color of the `panelTitle.activeBorder` so that it isn't as saturated.

### **CHANGED**

1. **CHANGED** the background color of the editor's panels, inactive-tabs, and the activitybar. The color is similar, a little less blue, it appears more black, and is lighter than the previous color, which also appeared to be almost black, but defiantly had more of a blue tone and was darker.
2. **CHANGED** the color of the `panelTitle.inactiveForeground` from a pastel dark green to a semi-visible grey
3. **CHANGED** the color of the `panelTitle.activeForeground` from a very saturated green, to a saturated white

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

---

## <a id="0.1.1"></a> **0.1.1** (2021-11-27)

---

### **CHANGED**

1. **CHANGED** the color of the terminal to be darker
2. **CHANGED** the ANSI Colors of the terminal to be more saturated, and to contrast better

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

---

## <a id="0.1.0"></a> **0.1.0** (2021-11-27)

---

### **ADDED**

1. Markdown syntax highlighting.
2. **CHANGED** the terminal border so it is no longer red.
3. Bumped the version to v0.1.0, since the first publication was a flop.
4. **CHANGED** Snippet/Emmet highlight bg so that its semi-transparent, and black.

### **FIXED**

1. Rewrote the _`README.md`_ document in a way that's supported by _V.S. Code's_ extension preview (I had HTML tags in the _`README.md`_ file that the extension readme preview did not support).
2. **FIXED** Snippet/Emmet highlighting bg-clr. Before the change, any text auto-inserted by a snippet &/or emmet was not visible as the highlighting-bg was the same color as the text.

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

<br>

---

## <a id="0.0.3"></a> **0.0.3** (2021-11-27)

---

### **REMOVED**

-   Unpublished Extension v0.0.2: `v0.0.2`** had an incorrect filename, as a
    result, when users attempted to to equip \***`Developer's Dojo`\*\*\*, the theme
    caused an error, and failed to render.

### **FIXED**

-   Corrected _`package.json`_

<br>

<br>

<br>

<br>

<br>

<br>

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
