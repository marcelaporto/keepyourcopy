# Steps to create a Chrome Extension

An extension is a zipped bundle of files—HTML, CSS, JavaScript, images, and anything else you need—that adds functionality to the Google Chrome browser. Extensions can interact with web pages or servers using content scripts or cross-origin XMLHttpRequests.

1. The very first thing we'll need to create is a manifest file named manifest.json

It contains properties like your extension's name, description, version number and so on. At a high level, we will use it to declare to Chrome what the extension is going to do, and what permissions it requires in order to do those things.

Eg.
`{
  "manifest_version": 2,

  "name": "Getting started example",
  "description": "This extension shows a Google Image search result for the current page",
  "version": "1.0",

  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html"
  },
  "permissions": [
    "activeTab",
    "https://ajax.googleapis.com/"
  ]
}`

Use browser actions to put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can also have a tooltip, a badge, and a popup. Choose a browser action when the extension is relevant to most pages.
  - Popup: If a browser action has a popup, the popup appears when the user clicks the icon. The popup can contain any HTML contents that you like, and it's automatically sized to fit its contents. To add a popup to your browser action, create an HTML file with the popup's contents. Specify the HTML file in the default_popup field of browser_action in the manifest, or call the browserAction.setPopup method.

[More about manifest file format](https://developer.chrome.com/extensions/manifest)

2. Browser Action: icon, popup and title

Icon: a 19px-square PNG file.
Popup: will be rendered inside the popup window that's created in response to a user's click on the browser action. It's a standard HTML file, just like you're used to from web development, giving you more or less free reign over what the popup displays
Title: What appears when you hover through the icon - String.

3. The actual logic: Javascript file

* [chrome APIs](https://developer.chrome.com/extensions/api_index)

4. Load those files into Chrome

  1. Visit chrome://extensions in your browser (or open up the Chrome menu by clicking the icon to the far right of the Omnibox:  The menu's icon is three horizontal bars. and select Extensions under the Tools menu to get to the same place).
  2. Ensure that the Developer mode checkbox in the top right-hand corner is checked.
  3. Click Load unpacked extension… to pop up a file-selection dialog.
  4. Navigate to the directory in which your extension files live, and select it.

Extensions that you download from the Chrome Web Store are packaged up as .crx files, which is great for distribution, but not so great for development.

**Overview: in your repo, you should have: 01 JSON file (manifest), 01 PNG file (icon), 01 HTML file (popup), 01 JS file (logic)**


<div>Icons made by <a href="http://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
