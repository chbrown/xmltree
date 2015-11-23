BIN := node_modules/.bin

all: react.js virtual-dom.js demo/react/build/bundle.js demo/virtual-dom/build/bundle.js

$(BIN)/webpack $(BIN)/tsc:
	npm install

%.js: %.ts $(BIN)/tsc
	$(BIN)/tsc -d

%.js: %.tsx $(BIN)/tsc
	$(BIN)/tsc -d

demo/react/build/bundle.js: demo/react/webpack.config.js demo/react/app.jsx $(BIN)/webpack
	mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<

demo/virtual-dom/build/bundle.js: demo/virtual-dom/webpack.config.js demo/virtual-dom/app.js $(BIN)/webpack
	mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<
