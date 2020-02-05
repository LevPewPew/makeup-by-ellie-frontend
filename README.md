<!-- delete this before submit -->

R10	A link (URL) to your deployed website

R11	A link to your GitHub repository (repo)

Ensure the repo is accessible by your educators!
R12	The contents of your README.md as submitted for Real World App - Part A

Documentation: PRG1006-2.2 Employ and utilise project management methodology

Documentation: PRG1006-2.3 Employ and utilise task delegation methodology

Documentation: PRG1006-7.1 Development testing

Documentation: PRG1006-7.2 Production testing

<!-- delete this before submit -->

# Makeup by Ellie

## A business website for Ellie Tseriotis, a freelance makeup artist

### By Martyna Krawczyk, Pankaj Pawar and Levente Toth

## Deployment

### Frontend

#### Deployed website

https://makeupbyellie.netlify.com

#### Custom Domain Name of frontend

![Deployment](docs/frontend-deploy-cli.png)

#### Environment variables

![Deployment](docs/frontend-env.png)

### Deployed Backend

![Deployment](docs/backend-deploy-cli.png)

#### Environment variables

![Deployment](docs/backend-heroku-dashboard.png)
![Deployment](docs/backend-heroku-env.png)

## Source Control

https://github.com/LevPewPew/makeup-by-ellie-frontend

https://github.com/LevPewPew/makeup-by-ellie-backend

## Project Management and Task Delegation

### Kanban board

A Kanban board was used for agile project management and task delegation with a common lane setup as described here:
https://www.atlassian.com/agile/tutorials/how-to-do-kanban-with-jira-software

We also added two additional lanes, "Info to Know" and "Credentials and ENV". These lanes provide a common source of truth for general information we all need to be aware of, without the need to use yet another app such as Google Sheets, or having to wade through Slack conversation history.

Tasks delegated as seen by avatar icons, chosen by strengths and weaknesses of team members and project/team conditions. Difficulty of each task placed into card title. Task delegation worked well so as to ensure we didn't accidentally do any overlapping work by checking who has picked up what card.

![Project Management](docs/Trello-1.png)

Completed tasks marked with link to github commit that merges the relevent branch into master.

![Project Management](docs/Trello-2.png)
![Project Management](docs/Trello-3.png)

When a task is complete, if a Github Pull Request has been made that includes that task, we used labels to indicate that so that we would be aware of what needs an approval before being merged. This was useful as it can be easy to miss a Github notification, where as we were constantly looking at and using our Kanban board. We also had a label to indicate a branch that covers a task has been merged, so that we could pull the latest changes and use them.

![Project Management](docs/Trello-4.png)

### General processes

### Packages used
  
  ## Testing-library/react, version: 9.4.0
  The React Testing Library is used for testing React components. It includes utility functions on top of react-dom and react-dom/test-utils, in order to guide better testing practices. It is designed to run tests which resemble the way that software is used 
  We have used this library's render and fireEvent methods to test that the navbar links render the appropriate page, for example. 

  ## testing-library/jest-dom, version: 5.0.2
  Jest is used for unit tests of logic and components and not the dom, running tests in the node environment instead of the browser in order to run tests at speed and avoid unreliable results. The library includes a set of custom jest matchers which are used to provide the expected results, such as toBe, or toEqual, making tests clear to read and maintain.
  We have used this library in our unit tests including our Service.test file for example, to ensure that our dummyData has been rendered to the screen.

  ## Axios, version: 0.19.1
  Axios is a library that helps to make http requests to external resources.  
  We have used this library to make GET and POST requests to our external database collections within Mongo Atlas DB and Amazon.  The website makes multiple GET requests from the root file App.jsx, to access and data from the portfolio, services, contact and faq collections, as well as POST requests to handle form submissions for posts and updates to data.

  ## Axios-mock-adapter, version: 1.17.0
  With Axios-mock-adapter in place, any GET request made to the database within our test code will be intercepted, and instead of actually making a request to the API, it is going to return the data we put into the dummyData. Without the Axios Mock Adapter, the test would run slow, could potentially be unreliable and can result in a network error that may crash the test.

  ## Fix-image-rotation, version: 2.0.0
  The Fix Image Rotation package rotates images based on their EXIF value (the image metadata which identifies the image orientation), to ensure that all images uploaded by the client are rendering in the right direction.  This package has been implemented with the Dropzone library as described below.

  ## Lodash, version: 4.17.15
  Lodash works with javascript, making it easier to iterate through arrays, objects and strings by utilising lodash methods and functions.

  ## React-dropzone, version: 10.2.1
  The Dropzone library is used to create a drag-and-drop box (with the added ability to click and select files) for file uploads.  This website uses dropzone for image uploads across the services and portfolio admin dashboard.

  ## React-icons: 3.9.0
  React Icons are an icon library which we have used to render an instagram icon in the navbar which links to the external instagram url.
  
  ## React-loading, version: 2.0.3
  React Loading is a library of loading animations being utilised site-wide, to display a loading bubbles animation whilst the user waits for the page to render data.

  ## React-masonry-component, version: 6.2.1
  The React Masonry Component library contains the required responsive styling to render a masonry-style portfolio grid.
  
  ## Redux, version: 7.1.3
  Redux is a 'state container' which the website uses with React to enable the storage of data that has been retrieved, as well as storage of state. This website utilises the store at the root level in order to make the store data available to child components site-wide. The respective reducers change state in the store response to any actions taken, enabling faster website performance and therefore a better user experience.

  ## Redux-form, version: 8.2.6
  Redux Form is a form library which works with redux store, enabling easier creation of forms which enable instant validation, easy control of the input value formatting, conditional functionality including the ability to enable, disable, show or hide components given the state, handle dynamic inputs

  ## React-router-dom, version: 5.1.2
  React Router Dom is a package containing dom binders which handle routing dynamic requests.  This website utilises React Router Dom to set the page url routes for the website.

  ## React-scripts, version: 3.3.0
  React Scripts is a set of scripts set up during the create react app process which includes development elements, enabling developers to run their app without needing to configure the development environment.

  ## react-widgets": "^4.4.11"
  React Widgets are a library of reusable components made for React.  This website utilises a dropdown field within the redux forms.
  
  ## Xxhashjs, version: 0.2.2
  xxHashjs is a hashing package containing an algorithm which has been utilised in this website to hash file names of uploaded images.

  ## Node-sass, version: 4.13.1
  Node Sass is used to compile scss to css in a react project, enabling scss to be used in a create-react-app.

  ## React-dom, version: 16.12.0
  This package is the 'entry-point' to the DOM enabling efficient management of DOM elements in a web page by utilising the built in methods.

  #Hooks?
  
  # I'm pretty sure we don't need these anymore TBC once we run depcheck
  react-bootstrap": "^1.0.0-beta.16"
  bootstrap": "^4.4.1"
  fortawesome/fontawesome-free": "^5.12.0"
  @fortawesome/fontawesome-svg-core": "^1.2.26"
  @fortawesome/free-solid-svg-icons": "^5.12.0"
  @fortawesome/react-fontawesome": "^0.1.8"
  filterizr": "^2.2.3"
  yup": "^0.28.0"
  formik": "^2.1.2"
  react-infinite-scroller": "^1.2.4"
  Testing-library/user-event": "^8.0.3" 

