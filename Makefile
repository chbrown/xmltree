BIN := node_modules/.bin
DTS := virtual-dom/virtual-dom

all: build/bundle.js site.css
type_declarations: $(DTS:%=type_declarations/DefinitelyTyped/%.d.ts)

type_declarations/DefinitelyTyped/%:
	mkdir -p $(@D)
	curl -s https://raw.githubusercontent.com/chbrown/DefinitelyTyped/master/$* > $@

%.js: %.ts type_declarations $(BIN)/tsc
	$(BIN)/tsc -m commonjs -t ES5 $<

$(BIN)/browserify $(BIN)/tsc:
	npm install

build/bundle.js: app.js $(BIN)/browserify
	mkdir -p $(@D)
	$(BIN)/browserify $< -o $@
