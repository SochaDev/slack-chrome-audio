# Audio support in Slack for Chrome users

This is a simple Chrome plugin that adds HTML5 `audio` support to your team's 
Slack instance. To trigger playing of a clip just type `:play my-clip:` in to 
Slack's input field.

You'll want to make a few URL tweaks to get it working locally:

* `manifest.json` - Change the `content_scripts.matches` array item to your team's 
Slack subdomain.
* `observer.js` - Change the `url_audio` var to whatever hosted audio source your 
team wants to set up. For radness, you'll probably also want to upload the 
`push-it.mp3` clip to that host.

Then just visit `chrome://extensions`, check off "Developer mode" then "Load 
unpacked extension...". For ease of distribution to your team, you might also 
consider packing up the extension and adding it to the Chrome web store.

Enjoy!

## Known issues

This is just a for-funsies project - its definitely not gonna work for users 
not using Chrome/Chromium to access your Slack instance. PRs are welcome, though 
-- let's finally give Slack the full-blown audio support it deserves!

