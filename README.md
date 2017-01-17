# Biorad Web Development course

In this course we will learn how to develop applications for the web. We will learn how to create a web server application using Django and
we will also cover how to develop frontend applications using Angular 2.0. All the demo files including the lecture summaries are available in this repository.  

## Day 1

#### HTML

We will start by examining web history and the HTTP protocol. We will then learn about the HTML language. The files for this lesson are located at the **html** folder. 
We will learn about the following topics: 
- HTML document structure
- HTML general syntax
- common attributes
- head
- body
- Text Tags
- Table
- Div
- Links
- Layout with Div - Student exercise
- Image tags
- Loading js script
- loading css
- Forms
- Student Exercise add a Form in our document


#### CSS & SCSS

Styling our page, the files are located at the folder **css-scss**
we will cover the following topics:
- General CSS syntax
- CSS in the HTML head
- CSS as an external file
- Splitting our css to multiple files
- Selectors
- !important
- Responsive styling media queries
- Student exercise create a twitter login form
- SCSS variables
- SCSS nesting styles
- SCSS Mixins
- Partials
- Inheritance

#### Bootstrap

Files in this lesson are located at the folder **bootstrap-intro**
We will cover the following topics:
- Grid
- Forms
- Alerts
- font-awesome
- bootstrap templates

#### Bootstrap Templates

In this lesson we will see how it feels to work with templates, 
What is the misconception about working with designers and we will try to use bootstrap template to create a todo application.
For 1 hour you will have to create as much as you can from the following tasks: 
- Install the needed css styles of the template
- Create a left sidebar with links to the following pages: Register page, Login page, Create Todo page, Todo list page with the components from the template
- The left sidebar should have an avatar
 - create a top bar with an avatar and a welcome like the tempalte

## Day 2

#### JS, ES6 & TypeScript

files in this lesson are located at the folder **js-es6-typescript**
In this lesson we will cover the following topics: 
- What is webpack
- working with ES6 & Typescript with webpack
- Variable declaration
- JS Types
- Arrays
- Dictionaries
- Conditions
- Loops
- Lambda functions
- Class declaration
- Promise
- XMLHttpObject
- Student Ex. Create a Task model and a TaskService, the task model will represent a task and the service will have CRUD functions to the task in our server
- Inheritance
- Interface
- TypeAnnotation

## Day 3

#### Python

Files in this lesson are located at the folder **Python** Demo
We will cover the following topics:
- Variables
- Lists
- Dictionary
- Indentation
- Operators
- Strings
- Conditions
- Loops
- Functions
- Classes
- Inheritance

#### Django Introduction

In this lesson we will cover django architecture and demonstrate it using a simple hello world application.
The files in this lesson are located at the folder **django-introduction
we will cover the following topics:
- Django Architecture
- Virtualenv
- Project and Apps
- Urls
- Database & Models
- Template 
- Student Ex. Create a Django project and Django app with a url that displays an hello world message from a template

## Day 4

#### Django Templates

In this lesson we will learn about Django Templating Engine. Files in this lesson are located at the folder **django-templates**

- inject variables to template
- Inheritance
- include
- conditions
- loops
- filters
- custom filter
- CSRF
- custom tags
- summary student ex.: 
    1. create an django project
    2. create a django app called **todo**
    3. modify the urls that in the route /todo/ our todo urls will be served
    4. create a urls file for the todo app
    5. in the urls file create a route for the root
    6. this route should render a template
    7. our template has a form with csrf token
    8. our template has a search form that will add a get param to the url
    9. our template will have a for loop to display a list of tasks
    10. pass the list of tasks from the views in the todo app
    11. each todo task will contain a title and a description and a date
    12. a single item in the for loop is displayed with a custom tag created in the todo app
    
    
#### Django models

Files in this lesson are located at the folder **django-models**
In this lesson we learned about Django models that map to a database tables. 
We learned about connection between tables and how we can make migrations and migrate when we are changing our models

Student exercise
- Create tables for your todo application
- create a model for author with first name and last name
- create a table for Task that hold the title description datetime and author of the task (author can write many tasks)
- run make migration and migrate


## Day 5

#### Django URLS

In this lesson we will learn about the proper way to construct urls and how we pass params
from the url to our view
Code from this lesson is located in the folder **django-urls**

#### Django Static Files

In this lesson we will learn how to properly serve static files in our django app.
Files in this lesson are located at the folder **django-static**

#### Django Rest Framework

In this lesson we will learn how to build a REST server using django rest framework
Files in this lesson are located at the folder: **django-rest-framework**
Topics of this lesson:
- Serializers
- Student ex. Build serializers for your todo models
- Views
- Testing your api
- Student ex. Complete your todo rest application

## Day 6

#### Django Admin

In this lesson we will learn about the Django Admin application 
The files in this lesson are located at the folder **django-admin**

#### Django Forms

In this lesson we will learn how Django can help us build forms and create validation and action for those forms
files in this lesson are located at the folder **django-forms


#### Angular2 Architecture

In this lesson we will learn about angular architecture and we will cover the architecture blocks while creating a complex hello world application
Files in this lesson are located at the folder **django-angular2-architecture**

Topics we will cover:
- Module
- Component
- Template
- Directive
- Service

Student ex. 
Create hello world application using angular2 and django

## Day 7

**** Ng2 Template

In this lesson we will learn about Angular2 Templating engine. Files of this lesson are located at the folder **django-angular2-template**
Topics we will cover:
- Interpolation
- Binding
- communicating with components



Student exercise: 

- seperate template in a different file using webpack
- create a file called task.model.ts this file exports a class called Task which has public properties for:
    title, description, group, when : Date, id: number
- In your app.component.ts create a public array of Task
- populate your array with data
- in your template you should have a form to enter a new task
- below the form you should have a list to display all the task
- when submiting the form a new task is added.

## Day 8

#### Angular Forms

Files in this lesson are located at the folder **angular-forms** topics in this lesson:
- including bootstrap and font-awesome
- design our form
- validation classes
- ngForm
- ngModel
- ngSubmit

Student exercise 
add validation to the form you created in the previous exercise.

#### RXJS

Files in this lesson are located at the folder **rxjs-demo** topics of the lesson are:
- What is the ReactiveX library
- Reminder about Promises
- 