# party.com

# Installation Guide

Here is the step-by-step instructions to set up this project on your local machine. For that you need the follow the steps mentioned in `Backend Installation` and `Frontend Installation` below. 


## Backend Installation
In the terminal change your path to root directory of this project. After that run below instructions one-by-one. I assume that you have already installed Python and pip.
1. `pip install virtualenv`.
2. `virtualenv myenv`, where `myenv` is the name you want to give to your virtual environment.
3. `myenv\scripts\activate` on Windows or `source myenv/bin/activate` on macOS or Linux, to activate the virtual environment.
4. `pip install django`, install Django.
5. `pip install djangorestframework` install Django Rest Framework.
6. `pip install django-cors-headers`, install Django CORS Headers.
7. `pip install Pillow`, install Pillow for Image handling.
8. `cd backend`, change the directory to backend folder from project's root folder.
9. `python manage.py runserver`, run the django development server.

## Frontend Installation
In the terminal change your path to root directory of this project. After that run below instructions one-by-one.
1. `cd frontend`.
2. `npm install`.

So, after doing above steps you can access the website from the url `localhost:3000` in your local system.

## Modifying Database Model
If you make any changes to the models of the database in backend folder, then run below instructions to update your table.
1. run `python manage.py makemigrations`
2. run `python manage.py migrate`


