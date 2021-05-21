# sensible-config-firefox

A fork of [mobile-config-firefox](https://gitlab.com/postmarketOS/mobile-config-firefox/) which removes mobile specific features making it suitable for desktop computers, laptops and laptops with touch screen.

## Changes from default firefox configuration

* Enable zooming with fingers

* Disable Firefox studies
* Disable Telemetry
* Set DuckDuckGo as default search engine

* Empty "new tab" page
* No default bookmarks from Firefox
* Disable First Run Page
* Disable Post Update Page
* Disable "User Messaging" (What's new, Extension/Feature Recommendations, Urlbar Interventions)
* Disable Pocket

## Changes from mobile-config-firefox

* Remove Mobile user agent
* Do not disable search suggestions
* Remove custom start page
* Remove layout customizations

## How to install and use

```
# make install
```

After restarting firefox, configuration should be applied.
If you are experiencing issues with touch input (scrolling selects text), launch firefox with the `MOZ_USE_XINPUT2=yes` variable set.

upstream: [mobile-config-firefox](https://gitlab.com/postmarketOS/mobile-config-firefox/)
