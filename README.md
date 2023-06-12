## To start dev mode immediately

### clone the repository

Then, in the project directory, you should run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser.

## IMPORTANT

This is the Front-end part of application. To get all the features of the app please make sure that
you run the backend part. You can find it by
[the link](https://github.com/YarPetru/superheroes-back)

---

## Main project stack

### [React](https://react.dev/)

using create-react-app

### [React-Redux](https://react-redux.js.org/)

as a state manager using [Redux Toolkit](https://redux-toolkit.js.org/)

### [React-router-dom](https://reactrouter.com/en/main) latest version

for simple navigation

### [Tailwind](https://tailwindcss.com/)

for styling w/o using off-the-shelf components

## Additional libraries

#### [Formik](https://formik.org/) with [yup](https://www.npmjs.com/package/yup) validation

#### [Axios](https://axios-http.com/docs/intro) for queries

#### [React Toastify](https://www.npmjs.com/package/react-toastify) both for better UX

#### [React icons](https://www.npmjs.com/package/react-icons)

#### [Classnames](https://www.npmjs.com/package/classnames)

#### and others (see the package.json file)

## Briefly about the App

### IMPORTANT

This is Front-end part of application. To get all the features of the app please use the
[backend part of the link](https://github.com/YarPetru/superheroes-back)

The application allows you to work with Superheroes data using CRUD operations of the superhero
model.

### HomePage

When the app starts, 5 superheroes are displayed, buttons to switch between pages, and a button to
add a hero. Also you can use buttons to jump on the first or tha last pages. Pagination is
implemented with 5 items per page.

Also on this page, you can immediately delete a Superhero. When you hover over the card, you will
see a bin button.

Clicking on the "i" will take you to the DetailsPage.

### DetailsPage

Here, you can also open the superhero edit form by clicking on any button with pencil icon.

If an item of information is missing in the database, it will not appear on the card to avoid
displaying blank fields.

Regarding images, the application allows adding, deleting, and setting a Main image for a superhero
from the available ones in the database.

To add an image, you can do so through editing the superhero's information. In the opened form,
without modifying other fields (if not necessary), simply add the image URL and click the Edit
button. The images are stored in an array (each image represented as a URL).

In the DetailedCard, you can view all the images by scrolling through the Carousel component (if the
hero has more than one image available). If the hero has only one image, the Carousel control
buttons are disabled. However, once you add more images, the buttons will appear.

Additionally, in the DetailedCard, you can delete current image or set it as the Main image. To do
so, click the Chevron button at the top of the image, which opens a backdrop with the "Set as Main"
and "Delete" buttons. By clicking on either of them, you can delete or set the current image as the
Main one. For superheroes without an added image, a default image will be automatically shown.

To return to the Heroes List, click on the title in the header or Close button on the card.
