all:

install: src/policies.json src/sensible-config-prefs.js
	install -D -m 644 src/policies.json $(DESTDIR)/etc/firefox/policies/policies.json
	install -D -m 644 src/sensible-config-prefs.js $(DESTDIR)$(PREFIX)/lib/firefox/defaults/pref/sensible-config-prefs.js

.PHONY: all install
