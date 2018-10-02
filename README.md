# StarWarsApp

This sample Angular application displays a list of SW characters and the movies they have appeared in.  Movie information is provided by the [Star Wars sample api](https://swapi.co/).  

## Development server

After cloning the repo and running `npm install` run `ng serve --open` for a dev server. Your browser will open to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Design

The app consists of two main components, characters and movies.  Characters displays buttons for 4 characters which are read from a json file.  Upon clicking a character an endpoint is called to retrieve information about that character. This includes a list of urls, each of which provides information about a movie the character featured in.  Next, the app navigates to the movies component with a route resolver that calls all the movie endpoints and ensures the navigation does not occur until all endpoints have returned data.  Clicking Obi-wan Kenobi intentionally fails to demonstrate error handling.

## Hosting and CI/CD
This app is [hosted](http://www.mattssampleapps.com) by nginx on an Amazon EC2 linux instance.  Normally s3 would be sufficient for a static website but EC2 was used to demonstrate a CodePipeline leveraging CodeDeploy as well as CodeBuild.  Upon commit to the master branch of the [SampleAngularApp](https://github.com/MatthewBacalakis/SampleAngularApp) repo CodeBuild runs unit tests and if all pass  deploys the artifacts to an s3 bucket.  CodeDeploy then updates the EC2 instance hosting the application with these artifacts.  




