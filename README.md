# instagram-search
AngularJS web app to search pictures from instagram

## Requirements

1. Form validates that user supplied text input
2. When a user clicks submit, the text field in the form is cleared and text appears that indicates Instagram is being queried.
3. The app should query the Instagram API and search for recent pictures tagged with the term the user has supplied in the form.
4. When the API results return, the app should tell the user how many results were returned, and display the photos (if any).
5. You should be able to navigate to the original photo on Instagram by clicking on any one of the images that appear.
6. Your app must use at least one animation. It's up to you to decide where to put this.
7. In case your calls to the server fail for some reason, the app should somehow alert the user.
8. Users should be able to submit another search after one has completed.

## To-do
- Add animation for status and error messages
- Add more contents when user scrolls down to the bottom
- Add informative overlay when user hovers over an image
- Possibly implement $location and $routeProvider for sharing URL
