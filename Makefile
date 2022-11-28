install:
	npm ci

local-install:
	npm install
	sudo npm link

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint :
	npx eslint .
