# Strava Bulk Edit

A Chrome extension to edit multiple Strava activities at once.

The extension adds a title to the activity filter panel, and an update panel
below the activity panel. It will go through all filtered activities and
update then one by one.

![screenshot](src/images/screenshot-1280x800-google-chrome-1.png)

## Official Releases

- [Google Chrome Extension](https://chrome.google.com/webstore/detail/strava-bulk-edit/mkbkebdegldokaipfgficlleheeejfjg)

## Usage

1. Visit the [My Activities page on Strava.com](https://www.strava.com/athlete/training).
2. Use the filters to select the activities you want to edit.
3. Choose the privacy setting to apply to the selected activities.
4. Click the "Update activities" button.

A loading screen will appear while the extension is updating the
activities on the background. The loading screen will close once the activities
have been updated.

### Updating fields

Not all filtered activities have the fields available in the update panel. The
extension will just update the fields that are available for each individual
activity.

The gear lists might show legacy gear, because the extension copies the gear
values from the filter. Legacy gear will not be updated when you choose it in
the update panel, because it is not available in the activities.

#### Known issue

It is not possible to update the Run type field at the moment. This seams to be
an issue on the side of Strava. The code is available in the extension, but it
is disabled for now.

## Roadmap

There are a few enhancements I like te make in the future. These are added as
[issues in the repository](https://github.com/MGHollander/strava-bulk-edit).

## Feedback

Please feel free to give feedback, share ideas or report bugs. Email me
at marc [at] mghollander [dot] nl
or [add an issue](https://github.com/MGHollander/strava-bulk-edit/issues).

## Donate


I work on this widget in my free time, but you can support me by making 
a donation (or buy me a beer) via https://paypal.me/mghollander.

## Credits

Inspired by https://github.com/jm-shi/Strava-Bulk-Editing
