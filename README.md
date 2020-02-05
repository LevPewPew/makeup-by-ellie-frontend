<!-- delete this before submit -->

R10	A link (URL) to your deployed website - DONE

R11	A link to your GitHub repository (repo) - DONE

Ensure the repo is accessible by your educators! - DONE

R12	The contents of your README.md as submitted for Real World App - Part A - DONE

Documentation: PRG1006-2.2 Employ and utilise project management methodology - DONE

Documentation: PRG1006-2.3 Employ and utilise task delegation methodology - DONE

Documentation: PRG1006-7.1 Development testing - Evidence of extensive user-testing of development site

Documentation: PRG1006-7.2 Production testing

<!-- delete this before submit -->

# Makeup by Ellie

## A business website for Ellie Tseriotis, a freelance makeup artist

### By Martyna Krawczyk, Pankaj Pawar and Levente Toth

# Purpose
This MERN stack website is for the Makeup by Ellie business, a freelance makeup artistry business. It provides a place for potential clients to view what services the business provides, past work done, and a way to contact the makeup artist, Ellie, in a streamlined formal process so as to cut down on back and forth unclear communication that can arise from emails and social media messaging.

# Functionality / Features
## User side

* Several pages
  + Home
  + Services
  + Portfolio
  + FAQs
  + Contact
* Responsive
* Dynamic Contact Form (Changes based on the requirements of the customer, with some fields being hidden or revealed as required)
* Database for gallery images, testimonials, services as well as client contact / requirements information
* Cloud storage (AWS)
* Admin dashboard with CRUD features for gallery images, testimonials and services

# Target audience
As a makeup artist, knowing particular target audience is about offering services to a specific group of clients based on your previous experience, education and overall skill set as a makeup artist.

The target audience is a diverse group of people, including:

- Brides to be
- People of all ages, looking for a makeup artist around their locality
- A group of people, requiring a cost-effective makeup session for a particular function (like wedding event)
- Business owner, who can gather initial customer requirements and contact details through the application

# Tech Stack:
The technology stack is a set of tools and frameworks that are used in the development of a software product. In web development, the technology stack consists of a very specific set of components that work together to create a functioning web application.

The project is implemented using the MERN stack (MongoDb, Express, React, NodeJS), and are used in either  frontend or backend development. Each technology and how it fits in the stack, is detailed below:

## Front End/Client Side
React - React is a javascript library which allows us to create front-end/client side applications, utilising the below to produce a working and styled user interface (UI):
- HTML/JSX
- CSS/SASS
- JavaScript

## Back End/Server Side
- NodeJS - A runtime environment, which is part of MERN stack to allow javascript code to be executed without a browser
- Express - Web Server for processing browser requests. It is a framework built on top of NodeJS
- MongoDB - Database for storing application specific data. A NoSQL database that uses documents to store application related data
- macOS - Operating system in which the development is done

# Data Flow Diagram
![DFD](docs/data_flow_diagram.png)

# Application Architecture Diagram
![AAD](docs/application_architecture.png)

# User Stories
## Personas
Jen. Jen is a young girl with a casual job who would like dress up for a night out with her friends. She is still studying so doesn't have much disposable income.

Claire. Claire is a corporate professional is a part of a big immediate and extended family. She is going to get married soon and wants the wedding to be the most special of special days.

Sam. Sam is an aspiring fashion photographer. Her makeup skills aren't that great but she needs her models to look absolutely perfect and so their makeup needs to match the art direction or clothing style of a shoot.

Ellie is a busy make-up artist, working professionally for a large make up retailer and running a freelance makeup business on the side. She lives and breathes her work and therefore has little time to spend on the administrative elements of her freelance business.

## Stories
As Jen or Sam, I want to know quickly and easily without contacting a business owner what the prices of a service are, so that I can save lots of time and easily compare against other businesses pricing.

As Claire, I want to be able to see lots of quality bridal work in a makeup artists portfolio, so that nothing is left to chance on my big day.

As Sam, I want to see a large and varied collection of editorial work a makeup artist has done, so that I know her standard of work is up to mine and to know she is capable of executing certain techniques or styles I am after.

As Jen or Claire, I want some guidance about exactly what things I should be asking about or considering when inquiring about booking a service, so that I can have a better idea upfront about what to expect and ensure the makeup artist has everything about me that they need to know.

As Ellie, I want my professionalism to be expressed on my website so that I am seen as a leader in my field.

As Ellie, I would like all new enquiries to submit the contact form so that I have all of my client's information before I contact them for a booking, saving me from having to ask additional questions and therefore, the booking admin.

As Ellie, I would like my portfolio to be current by being able to add new images directly to the site.

As Ellie, I would like to be able to publish me testimonials directly to the website so that prospective clients can see my past customers' feedback.

As Ellie, I would like my instagram feeds to be published to my website so that prospective clients can see that I'm active in my work.

As Ellie, I would like to amend the Services list to add/edit/delete services and/or prices as my business changes.

# Wireframes
![Homepage](docs/home.png)
![Services](docs/services.png)
![Portfolio](docs/portfolio.png)
![FAQ](docs/faq.png)
![Contact](docs/contact.png)
![Admin Login](docs/admin_login.png)
![Admin Add Content](docs/admin_add_content.png)
![Admin View Content](docs/admin_view_content.png)
![Terms and Conditions](docs/terms_conditions.png)
![Privacy Policy](docs/privacy_policy.png)
## Wireframes - Prototype
The above wireframes have been used to create a prototype to assist in highlighting the relationships between each page, and to enable the client to see how the site will perform.
https://www.figma.com/proto/GXFgKroKtluFNoofxl7lPE/Feel-the-MERN?node-id=29%3A584&scaling=contain

# Trello Project Management Boards
![Board 1](docs/trello_1.png)
![Board 2](docs/trello_2.png)
![Board 3](docs/trello_3.png)
![Board 4](docs/trello_4.png)


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

![Project Management](docs/Trello-5.png)

Completed tasks marked with link to github commit that merges the relevant branch into master.

![Project Management](docs/Trello-6.png)
![Project Management](docs/Trello-7.png)

When a task is complete, if a Github Pull Request has been made that includes that task, we used labels to indicate that so that we would be aware of what needs an approval before being merged. This was useful as it can be easy to miss a Github notification, where as we were constantly looking at and using our Kanban board. We also had a label to indicate a branch that covers a task has been merged, so that we could pull the latest changes and use them.

![Project Management](docs/Trello-8.png)

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

  ## Yarn clean
  Yarn clean was used to remove unused js files within dependent libraries.

# Testing
  Both development testing as well as production testing has been recorded on the respective tabs in the below Google Sheet:
  https://docs.google.com/spreadsheets/d/1bdjo3juClD3FP0EAukDG6XudPqAOK2Vc7sK3Fj_M8-g/edit?usp=sharing
  As can be seen, almost all tests have returned a pass, leaving the Update functionality (the failed tests) to future development updates.

  ## Production testing - developers
  The developer team have tested the deployed website, ensuring that all database collections are rendering to the respective pages, admin functionality is only available to the logged in user, and the CRUD functionality for admin is fully functioning. Please use the below link to access a screenshot with some of the expected behaviours:
  https://drive.google.com/file/d/1rA82qlumb0TdIesi9gyxa_ECIGvU3Hn6/view?usp=sharing
  
  ## Production testing - client
  The client was asked to visit the deployed website at https://www.makeupbyellie.netlify.com to test the website, and fill in the table, under the User column to comment on any discrepancies from our results.  They completed the requested tests and sent an email with their findings. To view the email sent back by the client, please click the below link:
  https://drive.google.com/file/d/1A26MZEpKGgeom_bmrxlzjl582Q5vAIrE/view?usp=sharing

  ## Development testing 
  The below link highlights some of the development tests completed:
  https://drive.google.com/file/d/16w348VooCssp0kgiq3Z2oyEgm0Lws263/view?usp=sharing
  
  
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

  
