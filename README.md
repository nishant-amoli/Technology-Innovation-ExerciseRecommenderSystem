## Technology Innovation - Exercise Recommender Application

This repository contains the prototype of the web application for the final group project of CSCI 4193/5193 - Technology Innovation (Sec 1) - 2020 Fall. The application provides a user to set up a health goal and recommend exercises to achieve their goals based on their routine and work out preferences.

## Authors: Group 1 - Optimus Tech

### Amoli, Nishant (B00835717)

### Doguparthi, Sneha Jayavardhini (B00846995)

### Jiang, Xingyu (B00713234)

### Patel, Tejas (B0084629)

## Technology Stack

Angular, Bootstrap, Visual Studio Code, Git (Git Flow branching strategy), CI/CD

## Web Application URLs

    1) Dev URL: https://dev-exercise-recommender-sys.herokuapp.com/
    2) Prod URL: https://prod-exercise-recommender-sys.herokuapp.com/

### Prerequisites

- [Angular](https://angular.io/) - Typescript framework for web, mobile web, native mobile and native desktop applications.
- [Bootstrap](https://getbootstrap.com/) - An HTML, CSS and JS framework to build responsive web pages.

## Angular app setup

To build this web application, Angluar has been used. Following are the steps for the installation of these modules:

Step 1) Installation of Angular CLI using the command:
**_npm install -g @angular/cli_**
Step 2) In order to create, build, and run a new project following commands can be used:
**_ng new my-first-project_**
**_cd my-first-project_**
**_ng serve_**

### Set Up this application

You may follow the below steps if you want to run this web application locally.

Step 1) Clone the below repository to get the application code on local machine.
***https://github.com/nishant-amoli/Technology-Innovation-ExerciseRecommenderSystem.git***

Step 2) Run the following command to Install the dependencies in the local node*modules folder.
\*\*\_npm install*\*\*

Step 3) Run the following command to start the angular application
**_ng serve_**

## Running the application

Step 1) Open the web browser from desktop or mobile.

Step 2) Open the link of the deployed application provided under the deployment section in this document. Alternativly, you can run the application locally as described in the previous section.

### Setting up as a new user

1. Visit the landing page of the web application and click on "Sign Up" button.
2. Inputs the required details: First Name, Last Name, Email, and valid Password (minimum 8 characters with one upper case, one lower case and a number).
3. Click on the Sign Up button.
4. After the registration, you will be redirected to the survey page where you will be reqired to fill in the necessary details such as age, gender, metabolism type, height, weight, BMI, etc.
5. After filling out the survey form, click on "Save" button.
6. You will be redirected to the user dashboard which will contain the daily exercise plan based on the survey.

### Coming back as an existing user

1. Visit the landing page of the web application and click on "Log In" button.
2. Input your credentials that are email and password.
3. Click on the Log In button.

### Signing in as an admin

1. Visit the landing page of the web application and click on "Log In" button.
2. Input the predefined admin credentials: email- admin@exercise.com password: admin1234
3. Click on the Log In button.

### Adding a new exercise (Admin only)

1. Visit the landing page of the web application and login with the admin's credentials.
2. Click on "Admin" link on the application header. You will be redirected to the admin management page.
3. In order to create a new exercise, click on "Create Exercise" link on the navigation bar. Input the name, type of the exercise (gym,yoga,etc), and the description. Then click on "Create" button.

### Editing an existing exercise (Admin only)

1. Visit the landing page of the web application and login with the admin's credentials.
2. Click on "Admin" link on the application header. You will be redirected to the admin management page.
3. In order to edit any pre-existing exercise, click on "Edit" button on the specific exercise card.
4. Input the new information and then click on "Edit" button.

### Deleting an existing exercise (Admin only)

1. Visit the landing page of the web application and login with the admin's credentials.
2. Click on "Admin" link on the application header. You will be redirected to the admin management page.
3. In order to delete any pre-existing exercise, click on "Delete" button on the specific exercise card.

### Managing the advertisements (Admin only)

1. Visit the landing page of the web application and login with the admin's credentials.
2. Click on "Admin" link on the application header. You will be redirected to the admin management page.
3. In order to delete pre-existing advertisements, click on "Advertisements" link on the navigation bar. Click on "Delete" button on the specific advertisement.

### Adding a new advertisement (Admin only)

1. Visit the landing page of the web application and login with the admin's credentials.
2. Click on "Admin" link on the application header. You will be redirected to the admin management page.
3. In order to add a new advertisement, click on "Create advertisement" link on the navigation bar. Input the name, access link, and cost of the product. Then click on "Create" button.

## Deployment

**Link to the repository:** ***https://github.com/nishant-amoli/Technology-Innovation-ExerciseRecommenderSystem***
**Link to the deployed application (dev environment):** ***https://dev-exercise-recommender-sys.herokuapp.com/***
**Link to the deployed application (dev environment):** ***https://prod-exercise-recommender-sys.herokuapp.com/***

## Acknowledgments

- O. Svestka, “Fancy Bootstrap 4 About us template - HTML&amp;CSS Snippet,” Bootstrapious, 13-May-2019. [Online]. Available: https://bootstrapious.com/p/about-us-page. [Accessed: 08-Dec-2020].
- “Bootstrap Tabs,” TutorialRepublic. [Online]. Available: https://www.tutorialrepublic.com/twitter-bootstrap-tutorial/bootstrap-tabs.php. [Accessed: 08-Dec-2020].
