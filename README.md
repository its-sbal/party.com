# party.com

# Django Installation Guide

This guide provides step-by-step instructions to set up a Django project on your local machine. It assumes that you have already installed Python and pip.

## Virtual Environment

A virtual environment is a way to isolate Python packages installed for a specific project. This ensures that different projects have different dependencies and do not interfere with each other.

1. Install `virtualenv` by running `pip install virtualenv`.
2. Create a new virtual environment by running `virtualenv myenv`, where `myenv` is the name you want to give to your virtual environment.
3. Activate the virtual environment by running `myenv\scripts\activate` on Windows or `source myenv/bin/activate` on macOS or Linux.

## Django

1. Install Django by running `pip install django`.
2. Create a new Django project by running `django-admin startproject backend`.
3. Change the directory to the project folder by running `cd backend`.
4. Run the Django development server by running `python manage.py runserver`.
5. To terminate the running server, press `CTRL + C`.
6. Create a new Django app by running `python manage.py startapp base`.
7. Open `settings.py` inside the `backend` folder and go to the `INSTALLED_APPS` list.
8. Add `'base.apps.BaseConfig'` to the list at the bottom.

## Django Rest Framework

Django Rest Framework is a powerful and flexible toolkit for building Web APIs.

1. Install Django Rest Framework by running `pip install djangorestframework`.
2. Open `settings.py` inside the `backend` folder and go to the `INSTALLED_APPS` list.
3. Add `'rest_framework'` to the list at the bottom.

## Django CORS Headers

1. Install Django CORS Headers by running `pip install django-cors-headers`.
2. Follow the instructions provided in this link [https://pypi.org/project/django-cors-headers/] to configure the library.
3. Install Pillow by running `pip install Pillow`.
2. Pillow is required for the `ImageField` in Django database.

That's it! You have successfully installed all the necessary resources to start building a Django project.
