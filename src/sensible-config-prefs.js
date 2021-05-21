// Copyright 2021 Oliver Smith, Martijn Braam
// SPDX-License-Identifier: GPL-3.0-or-later

// Enable android-style pinch-to-zoom
pref('dom.w3c.touch_events.enabled', true);
pref('apz.allow_zooming', true);
pref('apz.allow_double_tap_zooming', true);

// Empty new tab page: faster, less distractions
pref('browser.newtabpage.enabled', false);

// Select the entire URL with one click
pref('browser.urlbar.clickSelectsAll', true);
