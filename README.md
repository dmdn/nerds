# Project Description

# Technical task
+ Site name: Nёrds
+ Domain: place the site layout on the GitHub Pages service
+ PSD mockup and technical requirements from the HTML Academy courses

[Mockup "Nёrds" PSD](https://drive.google.com/file/d/0B_FuLrEepxSsbkZvTXhsYTIyM3c/view?usp=sharing)

![screenshot index](https://cloud.githubusercontent.com/assets/19373990/25434851/a29e1780-2a96-11e7-831f-5e93f9d0aedb.jpg)
![screenshot catalog](https://cloud.githubusercontent.com/assets/19373990/25434850/a28579f0-2a96-11e7-9b34-67460bab6bbf.jpg)

## General specifications
+ Writing standards: HTML5, CSS3, progressive improvement.
+ Grid: defined in the layout.
+ Adaptability of layout: no.
+ Used frameworks: no.
+ Cross-browser compatibility: IE10 +, Chrome, Firefox, Opera, Safari.
+ Typography: partially defined in the layout (other - at the discretion of the developer).
+ Used fonts: Roboto (available at http://google.com/fonts).

With the layout, styleguide.psd is provided, which contains the state of the elements of the interface. At any discrepancies with the layouts, it must have the highest priority.

With the mockup provided with an icon font, you need to use it in the mockup. Names of mockup with icons correspond to CSS-classes of icons.

### Explanations
+ The iconic font is generated at http://fontello.com - you can download the generator config file (symbols-nerds / config.json file) to http://fontello.com and see all the classes and symbols of the icons, and symbols-nerds / demo .html contains a demonstration and an example of connecting icons to a page.
+ In layouts, there are hidden layers with pop-up windows. Such layers in the block of Photoshop layers are highlighted in blue.
+ Layouts are gradually put in order, you do not have to immediately fulfill all the requirements.

### Wishes to block behavior
**All Layouts:**
+ The content area is centered and there can not already be a breadboard width.
+ A logo is a link to the main page.
+ Map unit - sufficient implementation - a normal image.
+ Map block - implementation if desired - interactive map (Google or Yandex maps), the height of the map is constant, the width is adjusted to the width of the viewport (but not already the content width of the layout), a marker is placed on the map, the center of the map corresponds to the center of the block in the layout.
+ Block of the card: by clicking on the "write us" button, a modal window appears with the form of sending the message (see the folder "write us" in nerds-index.psd)

**nerds-index.psd:**
+ Slider under the main navigation: the slide change is instantaneous, without intermediate transitions.

**nerds-catalog.psd:**
+ Block "Cost" ("Стоимость") - when you hover over any of the markers, the pointer cursor: pointer appears, moving markers are not necessary, the price should not change.
+ Filter (blocks "Grid" ("Сетка"), "Features" ("Особенности")) to make with the form, the button "Show" ("Показать") is responsible for sending the form, with JavaScript turned off, a transition to a separate page should be performed (there is no need to make a separate page).
+ Item card: the product name is a link, click on it opens a modal window with a demonstration of the goods (no layout, no modal window).
+ The quantity of goods in the right block can be any, it should not break the page.

## In addition to the technical assignment:
+ Markers of the price filter (catalog.html) are mobile and when they move, the price changes using [jQuery UI](http://jqueryui.com).
