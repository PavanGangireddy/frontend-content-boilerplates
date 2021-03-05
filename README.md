<div style="text-align:center">
    <h1>Project Title</h1>
</div>

The goal of this project is to quickly get you off the ground with `React`
concepts.

## Instructions

**Read these instructions carefully. Understand exactly what is expected
_before_ starting this project.**

### Commits

Commit your code regularly and meaningfully. This helps you and any
collaborators in case you ever need to return to old code for any number of
reasons.

### Description

In this project you'll take this crypto currency tracker app and build two
custom hooks that, when composed together, will allow users to set and persist a
dark mode preference.[TODO: 1. Add Description specific to project]

TODO: 2.Add gif of the project

## Project Set Up

- Checkout the project to your computer using `git clone [TODO: 3.Add URL here]`
- CD into the project root directory `cd TODO: 4.Add folder name here`
- Download dependencies by running `npm install`
- Start up the app using `npm start`

Once the set up is complete, you should see the application up and running at
`localhost:3000`.

## Project Completion Instructions

Please open the project files locally and start making changes by following the
instructions. Read through the comments and you should be able to write up the
solution.

If you have any confusion you can refer to the solution in the learning portal.
[TODO: 5.Add learning portal url solution here]

### Design Files

Use the below reference images and try to achieve the design as close as
possible.

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/responsive-website/portfolio-footer-section-xs-v1.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://nkb-backend-media-static-tenxiitian.s3.ap-south-1.amazonaws.com/tenxiitian_prod/programs/Tech+Programs/frontend-content/ccbp/coding-practice-questions/responsive-website/portfolio-footer-section-md-v1.png)

<!-- Sample 1 Project Completion Instructions for app with single route Start -->

### Add Functionality

- Your todo list should display a list of todos, an input field, a submit button
- Be sure to use the given files for building out these components.
- <App /> will hold all the data needed for this project. It will also be the
  container for your Todo Components. All of your application data will be
  stored here on <App />. All of your handler functions should live here on
  <App />.
- <TodoList /> receives your Todos array and iterates over the list generating a
  new <Todo /> for each element in the array.
- <Todo /> is a component that takes in the todo data and displays the task to
  the screen.
- <TodoForm> will hold your input field and your Add Todo button.
- Your input field should take in user input, and allow a user to press Enter or
  click on the Submit Button to add a todo to your list.
- Once a todo is submitted, the Todo List should re-render and show the added
  todo.
- Add the functionality to toggle your todo's completed flag from false to true.
- Once a todo is completed, be sure to demonstrate to the user that the todo is
  completed by adding a line-through style property if the completed flag is
  true.

<!-- Sample 1 Project Completion Instructions for app with single route Start End -->

<!-- Sample 2 Project Completion Instructions with multiple routes Start -->

### Routes Files

Once you are done your application will have two routes:

- [ ] [Screenshot of route '/'](https://tk-assets.lambdaschool.com/b9ced241-681f-432a-9047-ef2ba7e34946_first-route.png)
- [ ] [Screenshot of route '/movies/:id'](https://tk-assets.lambdaschool.com/06f9f448-2804-4b4a-9408-41904af96a4e_second-route.png)

### Set up Routes

- [ ] Wrap your app with the router.
- [ ] Inside your App file add two routes.
  - [ ] one route for `/` that loads the `MovieList` component. This component
        will need the movies injected into it via props.
  - [ ] one route that will take an `id` parameter after`/movies/` (ex:
        `/movies/2`, `/movies/3` where the id is dynamic). This route should
        load the `Movie` component.

### Add Functionality

- [ ] When a user clicks on the movie card inside `MovieList` they should be
      taken to `/movies/{id of clicked movie here}` to see the details of the
      selected movie.
- [ ] You will need to modify line 7 of `Movie.js` to get the id of the selected
      movie from the URL.
- [ ] Add functionality so the `Home` button on the `SavedList` component
      navigates back to home.
- [ ] You should now be able to navigate back and forth between the list of
      movies and the detailed view of a single movie.

<!-- Sample 2 Project Completion Instructions with multiple routes End -->

### Running the tests & Checking the report

- Run the tests using `npm test`. Read the output and play around with it. The
  tests are there to help you reach the final version
- However sometimes you can accomplish the task and the tests still fail if you
  implement things differently than the given solution.
- Submit the solution after you have reached the final version
- Check the report generated here TODO: Need to improvise this section

## Resources

- Use the images given in the `public/img` folder for backgrounds
- CSS Colors used:
  - #5a7184
  - #959ead
  - #19232d
  - #eef0f2
- API - `https://apis.ccbp.in/numbers-fact` - TODO: Deploy Add swagger spec url
  if needed TODO: 6.Add Project Completion instructions, Resources - specific to
  the Project

### Project Comment Guide

Most comments in the project files start with one of the below signs. This is to
help you understand what you should do to the code immediately following these
comments.

🏆 - **Trophy** - Describes the overall goal of the exercise. You can find this
at the top of the exercise file.

💡 - **Light Bulb** - General information regarding the code immediately
following this comment. You might find it throughout the code. No action is
required on your part, just read them.

✏️ - **Pencil** - You are supposed to edit the code immediately following this
comment. It is followed by a description of the change that you need to do.

🧭 - **Compass** - When the description of change is not enough, the compass
will give you more direction. You will find it alongside the pencil when more
elaborate instruction is deemed necessary.

🚨 - **Alarm** - This means danger. Read the comment carefully. Usually, it's
used to say you shouldn't change the code immediately following this. It will
create havoc.

### Tips to Keep in Mind (TODO: 7.Add Tips if any specific to this project)

- All components you implement should go in the `src/components` directory.
- Dont change the component names as those are the files being imported into the
  tests.
- The Icons used in this section are Font Awesome Icons. Find them here.
- Want to quickly review some of the concepts you’ve been learning? Take a look
  at the Cheat Sheets.
- Install the
  [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
  (Chrome (recommended))

### [FAQ](https://gist.github.com/PavanGangireddy/f36bbb8e69dd54d921b464fe2601ab1a)

TODO: 8.Update this FAQ's gist with s3 url. try to get from server if possible

## Issues

If you are facing any issues while setting up environment, feel free to open a
issue in the learning portal.[TODO: 9.Add respective learning portal discussion
link or think how to solve this]
