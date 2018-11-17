# Lesser2Greater

A simple Firefox/Chrome extension that redirects LessWrong links to GreaterWrong.

## To install:

### Firefox
* Download the latest [release](https://github.com/quanticle/lesser2greater/releases)
* Launch Firefox
* Hit `Ctrl-O` and open the downloaded `xpi` file

### Chrome
* Go to the [download link](https://chrome.google.com/webstore/detail/algkabaplemhhpegejhmpmkhpofgpbgg/)
* Click "Add To Chrome"

## Development Setup:
* Go to the [Mozilla Add-ons site](https://addons.mozilla.org)
* Create a new developer account
* Get an API issuer and a key from the [manage API keys UI](https://addons.mozilla.org/en-US/developers/addon/api/key/)
* Set up [npm](https://nodejs.org/en/)
* Clone this repo
* `npm install -g web-ext`
* To build a development version of the extension:
  * `web-ext build`
  * This will create a new directory: `web-ext-artifacts`, with a `zip` version of the extension
  * To install the dev version of the add-on:
    * Uninstall lesser2greater, if installed
    * Go to `about:debugging#addons`
    * Click the `Load Temporary Add-on` button
    * Load the zip file
* To build a release version of the extension
  * Run `web-ext sign --api-key=$JWT_ISSUER --api-secret=$JWT_SECRET`
  * This will create a release version of the extension as an `xpi` file under `web-ext-artifacts`
  * Tag a release in Github and upload the release `xpi` file
