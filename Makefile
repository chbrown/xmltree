BIN := node_modules/.bin
TYPESCRIPT := $(shell jq -r '.files[]' tsconfig.json | grep -Fv .d.ts)
TYPESCRIPT_BASENAMES := $(basename $(TYPESCRIPT))
JAVASCRIPT := $(TYPESCRIPT_BASENAMES:%=%.js)
DEMO_BUNDLES := demo/react/build/bundle.js demo/virtual-dom/build/bundle.js

all: $(TYPESCRIPT_BASENAMES:%=%.js) .npmignore .gitignore $(DEMO_BUNDLES)

$(BIN)/webpack $(BIN)/tsc:
	npm install

.npmignore: tsconfig.json
	echo demo/ Makefile tsconfig.json $(TYPESCRIPT) | tr ' ' '\n' > $@

.gitignore: tsconfig.json
	echo $(JAVASCRIPT) $(TYPESCRIPT_BASENAMES:%=%.d.ts) | tr ' ' '\n' > $@

%.js: %.ts $(BIN)/tsc
	$(BIN)/tsc -d

%.js: %.tsx $(BIN)/tsc
	$(BIN)/tsc -d

demo/react/build/bundle.js: demo/react/webpack.config.js demo/react/app.jsx react.js $(BIN)/webpack
	@mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<

demo/virtual-dom/build/bundle.js: demo/virtual-dom/webpack.config.js demo/virtual-dom/app.js virtual-dom.js $(BIN)/webpack
	@mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<
