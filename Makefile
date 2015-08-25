BIN := node_modules/.bin
DTS := virtual-dom/virtual-dom react/react react/react-addons

all: demo/react/build/bundle.js demo/virtual-dom/build/bundle.js
type_declarations: $(DTS:%=type_declarations/DefinitelyTyped/%.d.ts)

type_declarations/DefinitelyTyped/%:
	mkdir -p $(@D)
	curl -s https://raw.githubusercontent.com/chbrown/DefinitelyTyped/master/$* > $@

%.js: %.ts type_declarations $(BIN)/tsc
	$(BIN)/tsc -m commonjs -t ES5 $<

$(BIN)/webpack $(BIN)/tsc:
	npm install

demo/react/build/bundle.js: demo/react/webpack.config.js demo/react/app.jsx $(BIN)/webpack
	mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<

demo/virtual-dom/build/bundle.js: demo/virtual-dom/webpack.config.js demo/virtual-dom/app.js $(BIN)/webpack
	mkdir -p $(@D)
	NODE_ENV=production $(BIN)/webpack --config $<
