# **How to run the app locally**

>**First**, run these commands in terminal:
## _Step 1:_

```sh
git clone [repository-url]
```

## _Step 2:_

```sh
cd [local-repository]
```

## _Step 3:_
- install VS Code or other preffered IDE

>install following frameworks and packages, and DB:
- Node.js + React.js
- Python 3.8 + Django
- Cypress
- PostgreSQL

<br />

# **For back-end, carry out the following steps:**

## _Step 1:_
>create and start a a virtual environment:
```sh
virtualenv env --no-site-packages
```
```
source env/bin/activate
```

## _Step 2:_
>Install the project dependencies:

```sh
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
pip install django-cors-headers
```

## _Step 3:_
>create a postgres db with the following settings:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "text",
        "USER": "postgres",
        "PASSWORD": "postgres",
        "HOST": "127.0.0.1",
        "PORT": "5432",
    }
}
```

## _Step 4:_
>Run these commands in terminal:

```sh
python manage.py migrate

python manage.py createsuperuser        # create admin account

python manage.py makemigrations server  # makemigrations for the app

python manage.py migrate                # run again

python manage.py runserver              # start the development server
```

## _Step 5:_
>open `localhost:8000` on your browser to view the app

<br />

# **For front-end, carry out the following steps:**

## _Step 1:_
>Check `package.json` file and ensure scripts are notated as below:

```json
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test:cov": "npm test -- --coverage --watchAll=false",
    "test:debug": "react-scripts --inspect-brk test --runInBand",
    "eject": "react-scripts eject"
  },
```

## _Step 2:_
>Delete the `node_modules` folder and any 'lock' files, such as 
`yarn.lock` or `package-lock.json` if present.

## _Step 3:_
>Run these commands in terminal:
```sh
npm install
```

>**_Optional:_**
In case of issues shown after `npm install`, run the below to automatically fix the issues:

```sh
npm audit fix
```

_Alternatively, use the below to see the errors:_

```sh
npm audit
```

## _Step 4:_

```sh
npm start
```

## _Step 5:_
>open `localhost:3000` on your browser to view the app