## To start dev mode immediately

### clone the repository

Then, in the project directory, you should run:

### `yarn`

Installs all the dependencies

### `yarn start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it
in the browser.

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

As for the images, at this point it is possible to save, remove, and change images of a superhero as
a URL. Images are store in array, so in DetaledCard you can see all of them by clicking on Carousel
buttons. To create a superhero without a picture, simply leave the relevant form field blank. For
superheroes without an added image, the default image will automatically be shown.

Also on this page, you can immediately delete a Superhero. When you hover over the card, you will
see a bin button.

Clicking on the "i" will take you to the DetailsPage.

### DetailsPage

Here, you can also open the superhero edit form by clicking on any button with pencil icon.

If an item of information is missing in the database, it will not appear on the card to avoid
displaying blank fields.

To return to the Heroes List, click on the title in the header or Close button on the card.
