# Change Log
All notable changes to this project will be documented in this file.

## 1.6.0 (2017-07-15)

### Implemented enhancements
- Clear selected and input value when `dataSourceChange` emits

### Fixed bugs
- Cannot read property 'dataSourceChange' of undefined #279
- RemoteData search - dropdown list not showing after first http request error (e.g. no Internet connection) #131

## 1.5.4 (2017-07-14)

### Implemented enhancements
- Add `dataSourceChange` to `CompleterData` to detect changes in the data source 

## 1.5.3 (2017-07-14)

### Implemented enhancements
- Add a blur() method? #217

### Fixed bugs
- Dropdown is not opened when using backspace after a value is selected #261
- On text paste the search doesn't get triggered #265
- "flase" should be "false" on line 202 @ ng2-completer/demo/native-cmp.html #271
- Demo not working on Android Chrome 59 #270

## 1.5.2 (2017-06-16)

### Fixed bugs
- ng build --prod error: #245

## 1.5.1 (2017-06-14)

### Fixed bugs
- Dropdown doesn't open when typing one character #255
- Scroll issues

## 1.5.0 (2017-06-09)

### Implemented enhancements
- Add strict null check to tsconfig.json #201
- performance improvements
- prevent flickering when not using `textSearching`
- add `setDisabledState` to component

### Fixed bugs
- prevent esc key from bubbling up when dropdown is open
- autofocus causing an error
- AOT build issue with `onFocus`
- searching the same term twice causes different results #216
- minimum search length behavior weird. #232

## 1.4.0 (2017-04-22)

### Implemented enhancements
- Events for when dropdown is opened and closed and property to interrogate current state #146
- openOnFocus - automatically open the dropdown and perform search when the input gets focus
- Setting `ngModel` now triggers search
- Search doesn't open the dropdown only focus or open via API will do that
- Add option for preselected value #191
- Support for `datasource` changes
- Add `autoHighlight` option that will auto highlight the best matching result
- Feature request: option to hide the drop-down if there are no results found #189
- feature proposal: keyUp output event #186
- how to empty search box? #114

### Fixed bugs
- Completer doesn't close when the field is cleared #194
- Setting overrideSuggested = true gives different behavior when selecting with mouse or tab/keyboard #200

## 1.3.1 (2017-04-06)

### Fixed bugs
- onselect gives setImmediate is not defined #187

## 1.3.0 (2017-03-31)

### Implemented enhancements
- Please add `focus` event along with `blur` one #175
- Demo redo
- No link to Github in demo #133
- added focus() method to completer component #152
- Add inputId property to ng2-completer component (analogy to existing inputName property) #128

### Fixed bugs
- Relax peer dependencies to support Angular 4.0 #184
- ng2-completer closes when scrollbar is clicked on IE browser #158

## 1.2.1 (2017-03-18)

### Fixed bugs
- Can't bind to 'selected' since it isn't a known property of 'ng2-completer'. #155
- Autofocus does not work. #150

## 1.2.0 (2017-02-26)

### Implemented enhancements
- Replaced the source URL of remote formatter because of Google API limits
- Replace `dataService` with `datasource` and accept Array or URL string as input for `datasource`. Note: `dataService` will be depreacated in future releases

### Fixed bugs
- Since last commit searchFields does not behave as stated in the docs #144
- Fixed ionic build
- Fix material design demo
- Fix demo of remote URL formatter

## 1.1.0 (2017-02-10)

### Implemented enhancements
- searchFields and titleField are mandatory #100

### Fixed bugs
- (selected) not called when text is highlighted and then deleted #121
- Clicking in a pre-filled ng2-completer with [overrideSuggested]="true", then immediately clicking another element clears the ngModel to a blank string #122
- required not working when intializing ngModel with a value #126
- First item is selected on enter #134

## 1.0.0 (2017-01-21)

### Implemented enhancements
- Input box doesn't have a type! #73
- new ctr-input property 'fillHighlighted' that controls setting of input value when item is highlighted #123 (by @mdudek)
- Cannot access entered text when not selected from list #72
- ng2-completer input autofocus? #125
- Set `max-height` of dropdown in demo

### Fixed bugs
- ngModelChange doesn't work #97
- Material design dropdown pushes everything down #115

### Breaking changes
- NgModel now reflects the vlue of the input. to get only selected values use `selected` event

## 0.4.0
### Implemented enhancements
- reorder of the folder structure
- Apply class to child input for styling purposes #40
- Annoying flickering when clearing data #82
- Open dropdown programmatically. #84

### Fixed bugs
- Problem with OnPush change detection strategy #69
- AutoMatch doesn't remove binded value if nothing match (angucomplete-alt does) #101

## 0.3.3
### Fixed bugs
- Why version 0.3.2 requires @angular/*@2.2.4? #103
- Build with @angular version 2.3.1 to fix issue with metadata version

## 0.3.2
### Fixed bugs
- Form is submitted when we select an option from dropdown using enter key #52

## 0.3.0
### Implemented enhancements
- Change deployment method now using ngc and rollup for the package and webpack for dev and demo
- AOT support #60

### Fixed bugs
- TS5023 Build:Unknown compiler option 'forceConsistentCasingInFileName' #74
- .completer-selected-row is missing in the description #78
- originalObject is null for CompleterService in version 0.2.3 #81

## 0.2.3
### Implemented enhancements
- Clear selection when search changes #45

### Fixed bugs:
- fix for overrideSuggested

## 0.2.2 
### Implemented enhancements
- Added support for async local data

### Fixed bugs
- Not able to capture blur event #50
- textSearching not display in first search #55

## 0.2.1 (2016-10-05)
### Implemented enhancements
- Added material2 component to demo

### Fixed bugs
- Mouse click doesn't select the item, Enter Key does! #46


## 0.2.0 (2016-10-04)
This is a rewrite of the completer component using directives that implement most of the functionality.
### Implemented enhancements
- Support for custom HTML and CSS #13 #21

### Fixed bugs
- Bump version dependency to angular 2.0.0 #39