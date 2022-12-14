# Daily Retros


## Thursday 10/13/22
- Today we created:
    - File structures
    - iteration 1 requirements
    - Completed day 2 deliverables, and submitted these to Leta and Scott.


### Challenges:
- Hunter: organization, but once we figured out the file organization it became much clearer.
- Dani: My understanding of how our actual HTML elements should be organized in React. Also, understanding how styling in CSS differs from vanilla JS -the fact that we're creating different CSS files.

### Wins
- Hunter: Figuring out the data flow; understanding the component architectural flow. 

- Dani: Getting a better understanding on the component architectural flow, as well.


## Friday 10/14/22
- Today we created:
    - rendering part of our movie details layout
    - along with styling


### Challenges:
- Hunter: CSS styling the movie details.
- Dani: trying to figure out our component architecture for the movie details view, specifically trying to figure out whether this component should be a class component or functional component. Another thing, trying to figure out where our fetch calls for our movie details could live in; whether up in `App.js` or down with `MovieInfo.js`

### Wins
- Hunter: We made the `MovieInfo` component along with the CSS!

- Dani: Knocking out the `MovieInfo` component and CSS along with it.




## Saturday 10/15/22
- Today we created:
    - finished our fetch calls for rendering all movies to display
    - our fetch calls for rendering a single movie's details
    - We got our pop up to display 
    
- To Do:
    - We still need to position our movie details pop up over all of the movies
    - we still need to create a close pop up feature as well. 


### Challenges:
- Hunter: The entire process behind getting the ID from the `Card.js` we are clicking on to go onto our fetch call found in `App.js`. Also figuring out hooks. understanding conditional rendering.
- Dani: Challenge was figuring out how to pass along the id of the `Card` component, but it was also coming to the solution of using ES6 arrow functions to access our "this.state". Another thing was trying to figure out how to use hooks to display our pop up feature, which we didn't use in the end, but could perhaps implement it in the future.

### Wins
- Hunter: Getting the data into our pop up!

- Dani: Understanding the flow of prop process - data down and action up. Also, getting our individual movie data to render on the pop up component. Another was getting to witness our fetch calls working properly!




## Monday 10/17/22
- Today we created:
    - Cypress testing for Dashboard, Navbar and MovieInfo
    
- To Do:
    - CSS
    - Accessibility - Add alt attributes to every picture
    - write up tests for routing, including:
         - Home page redirect
         - clicking on a movie: `card` --> `MovieInfo` 


### Challenges:
- Hunter: Cypress testing in general.
- Dani: Challenge was understanding how the chai/mocha bundles work with Cypress. The syntax is just different from regular chai usage, for example. Preparing myself for intercepts and then testing for react-routers.

### Wins
- Hunter: figuring out the syntax for finding elements, specifically accessing classes.

- Dani: Understanding how to access child components and finding elements. Good stuff, Hunter, that was awesome!



## Tuesday 10/18/22
- Today we created:
    - We started react routing for our application. 
    
- To Do:
    - Finish Routing for MovieInfo


### Challenges:
- Hunter:Challenge was that Routing was a difficult concept to understand. 
- Dani: Challenge was understanding NavLinks. 

### Wins
- Hunter: Getting a game plan for how to attack react router, and feeling that I understood and felt confident about it. 

- Dani: Getting a game plan for how to attack react router, and feeling that I understood and felt confident about it. 



## Wednesday 10/19/22
- Today we created:
    - We finished react routing for our application. 
    
- To Do:
    - CSS styling and Cypress testing


### Challenges:
- Hunter:Challenge was getting all the parts we need to make react router work properly.  
- Dani: Challenge was understanding the match object and switches 

### Wins
- Hunter: figuring out react routing was a huge win for me. 

- Dani: Figuring out that we needed to change our movie details from a functional component to a class component. Getting the routes working with react router. 



## Thursday 10/20/22
- Today we created:
    - We fixed how some of our data was being displayed.
    - We styled our application to look more like our comp.  
    
- To Do:
    - Finish Cypress Testing 


### Challenges:
- Hunter:Challenge was understanding how a click can be tested using cypress. 
- Dani: Challenge was cypress: understanding how to navigate a webpage with routing.

### Wins
- Hunter: Finally getting some styling done to our application. 
- Dani: Getting our application style cleaner and closer to our comps.


## Friday 10/21/22
- Today we created:
    -We started on importing the videos with react player and a fetch call.  
    
- To Do:
    - Finish Importing videos. 
    - Be able to organize our movie data according by genre


### Challenges:
- Hunter:Challenge was understanding how a React-Player works. 
- Dani: Challenge was conceptualizing how to run nested fetch requests to our movies data. One of the biggest challenges is running into asynchronous issues, mainly setting state multiple times and re-rendering our app.

### Wins
- Hunter: I was able to get a video to render on the page. 
- Dani: Having understood the blueprint/challenges ahead to running multiple fetches.


## Saturday 10/22/22
- Today we:
    - worked on using the multiple videos that were coming in the fetch call.  
    - successfully integrated `Swiper` and `react-player` to our `MovieDetails.js` component
    
- To Do:
    - Finish Importing videos, using `Swiper`
    - build a work around with taking in vimeo videos as well.
    - code out the fetch calls, organize/sort the movie objects by genre. 


### Challenges:
- Hunter:Challenge was understanding how to make a movie detail page render multiple movies and how we were going to navigate them. 
- Dani: Running into problems with building an asynchronous fetch call design! Another challenge being that all of the fetch calls (for individual movie details) will need to update the previous state of every movie object to fill in the extra movie details. 

### Wins
- Hunter: Learning React Swiper. 
- Dani: Getting a running `componentDidMount()` to build our state to hold all movie objects, but now with the extra detailed data.

## Sunday 10/23/22
- Today we:
    - Made our page fully responsive!
    - upgraded our error handling

- To Do:
    - Finish Importing videos.
    - Refactor Cypress testing  
    - Finish listing all movies by genres


### Challenges:
- Hunter: Not understanding what was happening asynchronously with out fetch calls, and now knowing how to fix the problems we were receiving.
- Dani: Feeling like our `componentDidMount()` is loaded with too many fetch calls. We are setting state constantly which is causing our data to pass down the wrong data to our components, and thus making it render the wrong information (or console logging errors). Asynchronous is the name of the game and I just feel like I do not yet have the right amount of understanding to troubleshoot this. I noticed the data that `App.js` was fetching and settingState to was passing down the wrong data, because of asynchronous issues, because I tried running a `reduce()` iterator on the movie data and it wasn't able to read the property of genres. This was all due to the wrong information getting passed down. `App.js` was passing down the original movie data without the added extra details, that an individualMovie data fetch would retrieve. So, this caused us to reconsider how we are actually setting state.

### Wins
- Hunter: Getting our CSS to be completely responsive.
- Dani: Win was understanding the problems we faced with running asynchronous calls and using this as a leverage to build on that knowledge. Also, a big win was getting our page to be fully responsive and achieving a 100% accessibility score.


## Monday 10/24/22
- Today we:
    - Completed our Cypress testing, including:
        - Video container for our trailer videos
        - testing for our error handling pages

- To Do:
    - Finish Importing videos.
    - Refactor Cypress testing  
    - Finish listing all movies by genres


### Challenges:
- Hunter: Trying to get the cypress testing for the play button on the YouTube video. 
- Dani: Trying to get some sort of test to check the user functionality of playing a video inside the trailers container. Also, testing for navigating the Swiper arrows  

### Wins
- Hunter: Finishing our project to a good state!!!!!
- Dani: Feeling proud of our application and finishing strong!