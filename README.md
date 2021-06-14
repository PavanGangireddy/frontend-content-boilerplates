## Netflix Clone

### Project Description

In this project, you are going to be building a Netflix clone. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a `class component`, displaying that data, using `component lifecycle` methods, `routing` concepts, `authentication`, `authorization`, and adding responsiveness to the website.

This is an individual assessment. All work must be your own. You will also be given feedback by code reviewers after your project submission.

### List Of Features

<details>
<summary>Click to view the list of Features</summary>

- **Login Route**
    - Users should be able to login to their account by entering a valid username and password
- Users should be able to navigate to Home, popular, account routes using links in Navbar.
- When the data is being fetched then the Loading view should be displayed to the user.
- Users should be able to view the website responsively in mobile view, tablet view as well.
- **Home Route** 
    - Users should be able to see Random Netflix Originals movie title and movie poster with its details.
    - Users should be able to see Netflix Originals,Trending now movies, Top Rated Collections
    - The collections should be horizontally scrollable.
    - Users should be able to see the footer as shown in figma
    - Users should be able to see Home with highlighted text in Navbar.
- **Specific Movie details Route**
    - When users click a movie in a particular collection, it should open a new page with respective movie details.
    - Users should be able to see similar movies sections as shown in the figma screens.
- **Search Functionality**
    - Users should be able to search for movie titles.
    - Users should be able to browse search results using pagination buttons.
    - When the user provides the movie name which is not in the database then the No results view should be displayed.
    - When the users click a movie, it should open a new page with respective movie details.
- **Popular Movies Route**
    - Users should be able to select and view popular movies using the Popular link in the navbar in a separate page.
    - Users can browse popular movies using pagination buttons.
    - When users click a movie, it should open a new page with respective movie details.
    - Users should be able to see the footer as shown in figma.
    - Users should be able to see Popular with highlighted text in Navbar.
- **Account Route**
    - Users should be able to select and view basic account details using the Profile Icon in the navbar in a separate page.
    - Users should be able to logout from accounts page.
    - When the users enter invalid route in the URL then the  Lost your Way view should be displayed.
</details>

### Stretch Goals


If you complete the main features of the project you can try out the below features as well. 


**Note:** Just a reminder the stretch goals are just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry.


<details>
<summary>Click to view the list of Stretch Goals</summary>

- **TV Shows Route**
    - Users should be able to select and view TV shows using the TV Shows link in the navbar in a separate page.
    - TV Shows should have genre filter.
    - Users can browse TV shows using pagination buttons.
    - Users should be able to search for TV Shows as well.
- **Multiple Profiles Functionality**
    - User should be able to add multiple profiles.
    - User should be able to manage profile functionality.
- **Animation Functionality**
    - When a user hover particular movie then it should show about more details of a title with scaled animation.
- **Backend Implementation**
    - As we are already familiar with nodejs, implement all the APIs used in this project using node js.

</details>

### UI References

<IndexList>
    <IndexItem href="UIPrerequisites">
        UI Prerequisites
    </IndexItem>
</IndexList>
- [Netflix Figma](https://www.figma.com/file/tPdVlj0p5PESmymNkHYVgk/Netflix_Clone)

### API References

<IndexList>
    <IndexItem href="APIPrerequisites">
        API Prerequisites
    </IndexItem>
</IndexList>
- **Note:-** Use the values in the APIs as shown below
    - Use your TMDB API Key (v3 auth) in place of `API_KEY`.
    - Use respective movie id in place of `MOVIE_ID`.
    - Use respective page number in place of  `PAGE_NUMBER`.

### APIs

<details>
<summary>Click to view the list of APIs.</summary>
- **Login**
    - Get Request Token
        ```javascript
            https://api.themoviedb.org/3/authentication/token/new?api_key={API_KEY}
        ```
        - [Reference](https://developers.themoviedb.org/3/authentication/create-request-token)
    - Login using TMDb Username and Password
        ```javascript
            https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key={API_KEY}
        ```
        - Sample Request Object
            ```json
                {
                    username:rahul,
                    password:ccbp123,
                    request_token:1234abcd5678
                }
            ```
        - [Reference](https://developers.themoviedb.org/3/authentication/validate-request-token)
- **Home Route**
    - Get Trending Movies
        ```javascript
            https://api.themoviedb.org/3/trending/all/week?api_key={API_KEY}
        ```
        - [Reference](https://developers.themoviedb.org/3/trending/get-trending)
    - Get Top Rated Movies
        ```javascript
            https://api.themoviedb.org/3/movie/top_rated?api_key={API_KEY}&language=en-US
        ```
        - [Reference](https://developers.themoviedb.org/3/movies/get-top-rated-movies)
    - Get Netflix Originals
        ```javascript
            https://api.themoviedb.org/3/discover/tv?api_key={API_KEY}
        ```
        - [Reference](https://developers.themoviedb.org/3/discover/movie-discover)
- **Specific Movie Details Route**
    - Get Movie Details
        ```javascript
            https://api.themoviedb.org/3/movie/{MOVIE_ID}?api_key={API_KEY}&language=en-US
        ```
        - [Reference](https://developers.themoviedb.org/3/movies/get-movie-details)
    - Get Similar Movies
        ```javascript
            https://api.themoviedb.org/3/movie/{MOVIE_ID}/similar?api_key={API_KEY}&language=en-US&page={PAGE_NUMBER}
        ```
        - [Reference](https://developers.themoviedb.org/3/movies/get-similar-movies)
- **Search Movies**
    - Get Search Movies
        ```javascript
            https://api.themoviedb.org/3/search/movie?api_key={API_KEY}&language=en-US&query=Fast&page={PAGE_NUMBER}
        ```
        - [Reference](https://developers.themoviedb.org/3/search/search-movies)
- **Popular Movies Route**
    - Get Popular Movies
        ```javascript
            https://api.themoviedb.org/3/movie/popular?api_key={API_KEY}&language=en-US&page={PAGE_NUMBER}
        ```
        - [Reference](https://developers.themoviedb.org/3/movies/get-popular-movies)

</details>

#### **Note:**

- Use the below prefix to access movie images or poster images from the keys - `backdrop_path` or `poster_path` in the API response

    ```javascript
https://image.tmdb.org/t/p/original/{backdrop_path}
    ```
     ```javascript
https://image.tmdb.org/t/p/original/{poster_path}
        ```
    - Usage [Reference](https://developers.themoviedb.org/3/configuration/get-api-configuration)    

### Implementation Instructions

#### Project set up instructions
- Download dependencies by running **npm install**
- Start up the app using **npm start**

#### Third party packages to be used to achieve the design or functionality
- **React Slick**
    - React Slick [Documentation](https://react-slick.neostack.com/docs/get-started)
    - React Slick implementation [CodeSandbox](https://w7z4v.csb.app/)

<Section id="UIPrerequisites">
### UI Prerequisites
- **What is Figma?**
    - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the [website](https://www.figma.com/).
- **Create a Free account in Figma**
    - Kindly follow the instructions as shown in [this](https://www.youtube.com/watch?v=hrHL2VLMl7g&t=37s) video to create a Free Figma account.
- **How to Check CSS in Figma?**
    - Kindly follow the instructions as shown in [this](https://www.youtube.com/watch?v=B242nuM3y2s) video to check CSS in the Figma screen.
- **Export Images in Figma screen**
    - Kindly follow the instructions as shown in [this](https://www.youtube.com/watch?v=NpzL1MONwaw) video to export images from the Figma screen.
    - Check [this](https://help.trydesignlab.com/hc/en-us/articles/360011010634-How-do-I-export-images-and-PDFs-from-Sketch-or-Figma-in-my-short-course-) reference docs to export images in Figma screen.
</Section>

<Section id="APIPrerequisites">
### API Prerequisites

- **What is TMDb?**
    - TMDb has an open API allowing people freely access the information programmatically. TMDb offers a powerful API service that is free to use as long as you properly attribute us as the source of the data and/or images you use. [Website](https://www.themoviedb.org/).
- **Create a Free account in TMDb**
    - Kindly follow the instructions as shown in [this](https://www.youtube.com/watch?v=mbImkkJFxBs) video to create the TMDb Account to use the APIs.
- **How to Check CSS in Figma?**
    - Kindly follow the instructions as shown in [this](https://www.youtube.com/watch?v=B242nuM3y2s) video to check CSS in the Figma screen.
- **API Key**
    - After creating your free TMDb account. You can see your API Key (v3 auth) in [this](https://www.themoviedb.org/settings/api).
    - After everything is successfully done, you should have an API key similar to `521a30043599bb08p45f4d9ff35fbad8`. This will be used to make further API requests.
</Section>


> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - Don't change the component folder names as those are the files being
>   imported into the tests.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a
>   look at the Cheat Sheets.
