# CHANGELOG

This document lists the changes introduced by this fork.

## Version 3.5.0

* Upgrade to Angular 19
* Add new `filter.debounceTime` setting
* Fix broken backwards compatibility with rxjs ^6.5.3
* Remove dependency to `@angular/forms`

## Version 3.4.0

* Add new column setting `isRowHeading`
* Add `scope` attribute to column and row headings to support screen readers

## Version 3.3.0

* Add Angular 18 support
* Add information about the new custom renderer initialization to the migration guide

## Version 3.2.0

* Add Angular 17 support
* Add `hideTagList` setting to hide the tag list when columns are hidden
* The `sortDirection` column setting can now be applied to more than one column

## Version 3.1.1

* Fix security bypass not applied to save and cancel button contents when configured

## Version 3.1.0

* Add new setting `valueCreateFunction`
* Fix a critical issue with the inner state of an edited cell
* The `strict` setting for `list` default filters is no longer overriding a custom provided filter function
* Fix that the default sort direction for all columns is `asc` instead of "no sort"

## Version 3.0.0

* Upgrade to Angular 16
* Add proper typing to all settings
* Improve signatures of `valuePrepareFunction`, and `filterFunction`
* Add `valueStoreFunction` as counter-part of the `valuePrepareFunction`
* Change how filters are configured:
  * Add `removeFilter()` method
  * Change `setFilter()` to always remove all existing filters, first
  * Change filters to not automatically ignore empty strings
  * Remove `andOperator` parameter from `setFilter()` and `addFilter()`
* Fix inconsistent return types between `DataSource` methods and their `LocalDataSource` implementations
* Change custom renderer initialization and remove `ViewCell` interface
* Remove ng2-completer
* Remove angular2-multiselect-dropdown
* Remove date filter type
* Remove partially broken `selectRow` function
* Remove deprecated settings
* Remove undocumented settings

**Note:** With Angular 16 several breaking changes were introduced, which forced us to also introduce breaking changes
plus we cannot guarantee anymore, that the software is working with Angular 15 and below. This is why we decided to
have a hard cut by introducing a new major release that is only compatible with Angular 16 onwards.
If you want to stick with Angular 14 or Angular 15, please use version 2.10.0.

## Version 2.10.1

* Hotfix: `DataSet.select()` no longer throws an error when using a negative index to deselect all rows

## Version 2.10.0

* Add `sanitizer`, `hiddenWhen`, and `disabledWhen` to `CustomAction` settings
* The `title` attribute in `CustomAction` is now deprecated in favor of `customButtonContent`

## Version 2.9.0

* Add `resizedWidth` property to `Column` which will contain the new declared width of a resized column
* Remove the resizer control from the last column of a table
* Fix the missing action column when the "expand" action was the only enabled action
* Fix the "select all" checkbox being automatically checked when the table contains no data
* Fix the outdated documentation for the emitted events

## Version 2.8.1

* Fixes a regression where `pager.display=false` resulted in showing only 10
  items per page (the default) instead of what was configured in `pager.perPage`.
  Please note that by a previous bug, the `pager.perPage` setting was entirely
  ignored in this situation. I.e. after applying this bugfix, you might need to
  set a proper value for `pager.perPage` in your application.

## Version 2.8.0

* Declare compatibility with Angular 15
* Add new config parameter `strict` for dropdown filters.
  When this is set to `true`, the dropdown will really work like a selection
  instead of a set of predefined search queries. For backwards compatibility,
  the default of this value is `false`.
* Add proper typing for DataSourceChangeEvent
* Add new selection mode `multi_filtered` where the "select all" checkbox selects only
  the elements that match the current filter instead of all elements in the data source
* Add some DataSource methods regarding "select all" to the documentation
* Add settings for conditionally hiding or disabling action buttons
* Remove undocumented 'all' option for `perPage` because that is incompatible with `number`
* Deprecates `expandedRowComponent` and `expand.expandRowButtonContent`
  and adds `expand.component` and `expand.buttonContent` as alternatives
* Fixes that only one sorting parameter is included in a ServerDataSource query
* Fixes that types in data-source.ts were not part of public API
* Fixes several incorrect links to the sources of the demo examples
* Fixes wrong documentation about the available filter types
* Fixes wrong documentation about `valuePrepareFunction` and `filterFunction`.

## Version 2.7.1

* Fixes surprising exception when table is empty.

## Version 2.7.0

* Revert commit baffdd5591761e967957ad71cbe22a4196b32615 because of
  an incorrect implementation of `count()` in the `ServerDataSource`
* Adds more documentation for the `doEmit` flag of various methods.
* Fixes emission of a deselect event when a row is selected but not expanded.
* Fixes most issues with row selection and add strong types for the selection events.

## Version 2.6.0

* Adds (editCancel) and (createCancel) events
* Add settings to bypass the Angular sanitizer (e.g. when svg content shall be displayed)
* Fixes type confusion for (edit) and (delete) events and adds proper types to all editing events
* Fixes that pressing escape in the Create Row renders this row dysfunctional
* Fixes inline create row missing placeholder cell if multi-select column is present
* Fixes missing margin between create and cancel button in head form row
* Fixes sorting bug where strings that only start with a number were interpreted as numbers

## Version 2.5.0

* Add new column settings `classHeader` and `classContent`
* Deprecates column setting `class` (remains as alias for `classHeader`)
* Reworks sorting methods - now multi-sort is also possible
* Strongly typed sorting and filtering config for data sources
* Fixes missing documentation for `getSort` and `getFilter` methods
* Fixes missing documentation for `pager.perPageSelect`
* Fixes missing member in interface for `Pager.perPageSelect`
* Adds setting `pager.perPageSelectLabel` to be able to configure the displayed label
* Fixes inconsistent margins in the pagination section
* Fixes `perPageSelect` moving the left when the page selection is hidden
* Fixes a bug in internal `getSetting` function that caused the function to return wrong results when a nested setting was left undefined
* Fixes missing `renderComponent` in the interface of `CustomAction`
* Adds missing documentation for `CustomAction`
* Fixes missing initialization in editors of type 'list' or 'completer'
* Fixes use of deprecated symbols

## Version 2.4.1

* Include Angular 14 as peer dependency

## Version 2.4.0

* Adds `getFilteredAndSorted()` to the interface of `DataSource`
* Fixes `getFilteredAndSorted()` and `getAll()` of `ServerDataSource`
* Fixes inconsistent `DataSource.count()` implementations
* Fixes "Expand" button not having a `margin-right`
* Fixes multi-select column having an undefined width
* Fixes wrong colspan for `noDataMessage` and expanded rows when the table has a multi-select column

## Version 2.3.1

* Fixes regression: `filter: false` in a column setting did not work anymore

## Version 2.3.0

* Fixes a regression where selected rows stick to the top of the table after sorting
* Fixes a bug where invoking `empty()` on a data source does not result in refreshing the table

## Version 2.2.1

* Fixes duplicate rows when the row is already selected
* Updates dependencies

## Version 2.2

* Finally, the project got more maintainers!

## Version 2.1

* Angular 13 support (thanks [stephanrau](https://github.com/stephanrauh))
* Fixes default filter function not working when column contains null values (issue #32)
* Fixes default sort function producing invalid results when column contains null values (issue #34)
* Default sort function can now recognize numbers and strings
* Fixes spelling error regarding `sortDirection` setting (issue #36)
* Add compatibility for deprecated settings keys (issue #30)

## Version 2.0

* Added hide/show row
* Added Expandable Row (thanks [Samir](https://github.com/mominsamir))
* Added Column resizing (thanks [dreswgfuse](https://github.com/dreswgfuse))
* Added Multi Select for a column (thanks [thangluu93](https://github.com/thangluu93))
* Added type to Settings object
* Added Column resizing (thanks [dreswgfuse](https://github.com/dreswgfuse))
* Added custom action render component (thanks [bacali95](https://github.com/bacali95))
* Added Column sorting/filtering to nested objects (thanks [TejinderEvry](https://github.com/TejinderEvry))
* Added row data to custom component render (thanks [marchrius](https://github.com/marchrius))
* Include row data when invoking filterFunction (thanks [darrenhollick](https://github.com/darrenhollick))
* Ability to select a row programmatically (thanks [NicolaLC](https://github.com/NicolaLC))
