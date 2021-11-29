# __CHANGELOG__

VERSION LIST:

1. __[0.1.4](#0.1.4)__
1. __[0.1.3](#0.1.3)__
1. __[0.1.2](#0.1.2)__
1. __[0.1.1](#0.1.1)__
1. __[0.1.0](#0.1.0)__
1. __[0.0.3](#0.0.3)__
1. __[0.0.2](#0.0.2)__
1. __0.0.1__ (_unpublished_)

[1.1.1](#1.1.1)

<br>
<br>
<br>

<a id="0.1.4"></a>

## __0.1.4__ (2021-11-28)
--------------------------------------------------------------------------------
### CHANGED:
1. Changed the color of a all "Tag-names" (or `"entity.name.tags"`) TO (HTML, YAML, etc...) to the color "Capri" (or `#15BEEE`).
2. Changed the color of the "Scroll-bars" bg-clr from green to blue.
3. Changed the color of the "Scroll-bars" "onHover" bg-clr from green to `#FFAC10`
4. Changed the General Icon color (`icon.foreground`) from yellow to orange since the original bg-clrs for the editor, sidebar, panels & activity bar all changed, the color `#FFAC10` is more harmonic than the original `#FF6010`. This change may include some properties not listed here. To see the exact changes you can view the "Version History" in the project repository, and the Commit ID that includes the changes listed for `v0.1.4` is list in the **_Info Section_** below.

### INFO:
- `Commit ID: 751d04327a04967478f36e0f07277b6c139235f3
<!-- END: (0.1.4 | "2021-11-28") -->

<br>
<br>
<br>



<a id="0.1.3"></a>

## __0.1.3__ (2021-11-28)
--------------------------------------------------------------------------------
### REMOVED
1. Removed `./res/developers-dojo-vscode-theme-organized-by-group.json`. This file's purpose is for development reference and should have never been included in the production version of the theme.
2. Removed `./res/documented-color-palettes.jsonc`. This file's purpose is for development reference and should have never been included in the production version of the theme.

### CHANGED
1. Changed the image header in `README.md` so that the information it contains is now correct
<!-- END: (0.1.3 | "2021-11-28") -->

<br>
<br>
<br>


<a id="0.1.2"></a>

## __0.1.2__ (2021-11-28)
--------------------------------------------------------------------------------
### FIXED
1. Fixed the terminal so its not so dark. v0.1.1 set it at a pure black, which was a mistake. This version fixes that.
2. Fixed the _`editorGroupHeader.border`_ property so that the area above it looks as if it sits above the text editor, as it is suppose to look.
3. Fixed _`editorGroupHeader.tabsBorder`_ property so that it isn't so saturated. Borders should not pop-out at the user as the _header-tabsBorder_ was.
4. Fixed the color of the `panelTitle.activeBorder` so that it isn't as saturated.

### CHANGED
1. Changed the background color of the editor's panels, inactive-tabs, and the activitybar. The color is similar, a little less blue, it appears more black, and is lighter than the previous color, which also appeared to be almost black, but defiantly had more of a blue tone and was darker.
2. Changed the color of the `panelTitle.inactiveForeground` from a pastel dark green to a semi-visible grey
3. Changed the color of the `panelTitle.activeForeground` from a very saturated green, to a saturated white
<!-- END: (0.1.2 | "2021-11-28") -->

<br>
<br>
<br>



<a id="0.1.1"></a>

## __0.1.1__ (2021-11-27)
--------------------------------------------------------------------------------
### CHANGED
1. Changed the color of the terminal to be darker
2. Changed the ANSI Colors of the terminal to be more saturated, and to contrast better
<!-- END: (0.1.1 | "2021-11-27") -->

<br>
<br>
<br>



<a id="0.1.0"></a>

## __0.1.0__ (2021-11-27)
--------------------------------------------------------------------------------
### ADDED
1. Markdown syntax highlighting.
2. Changed the terminal border so it is no longer red.
3. Bumped the version to v0.1.0, since the first publication was a flop.
4. Changed Snippet/Emmet highlight bg so that its semi-transparent, and black.

### FIXED
1. Rewrote the README.md document in a way that's supported by _V.S. Code's_ extension preview (I had HTML tags in the _`README.md`_ file that the extension readme preview did not support).
2. Fixed Snippet/Emmet highlighting bg-clr. Before the change, any text auto-inserted by a snippet &/or emmet was not visible as the highlighting-bg was the same color as the text.
<!-- END: (0.1.0 | "2021-11-27") -->

<br>
<br>
<br>



<a id="0.0.3"></a>

## __0.0.3__ (2021-11-27)
--------------------------------------------------------------------------------
### REMOVED
- Unpublished Extension v0.0.2: `v0.0.2`** had an incorrect filename, as a
  result, when users attempted to to equip \***`Developer's Dojo`\*\*\*, the theme
  caused an error, and failed to render.

### FIXED
- Corrected _`package.json`_
<!-- END: (0.0.3 | "2021-11-27") -->

<br>
<br>
<br>



<a id="0.0.2"></a></a>

## __0.0.2__ (2021-11-26)
--------------------------------------------------------------------------------
### ADDED:
- Published Extension
<!----------| END_OF_CHANGELOG |-------->

<br>

--------------------------------------------------------------------------------