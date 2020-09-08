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
### Linux
```sh
virtualenv env --no-site-packages
```
```
source env/bin/activate
```
### Windows 
```console
py -m venv afm
```
```console
afm\Scripts\activate.bat
```

## _Step 2:_
>Install the project dependencies:

```sh
pip install djangorestframework
pip install markdown       # Markdown support for the browsable API.
pip install django-filter  # Filtering support
pip install django-cors-headers
pip install django-rest-auth
pip install django-allauth
pip install psycopg2
pip install django_nose
```

## _Step 3:_
>create a postgres db with the following settings:

```python
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "afm_db",
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
{
  "name": "app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@popperjs/core": "^2.4.2",
    "all": "0.0.0",
    "axios": "^0.19.2",
    "bootstrap": "^4.5.0",
    "font-awesome": "^4.7.0",
    "http-proxy-middleware": "^1.0.4",
    "jquery": "^3.5.1",
    "popper.js": "^1.16.1",
    "react": "^16.13.1",
    "react-bootstrap": "^1.0.1",
    "react-cookie": "^4.0.3",
    "react-dom": "^16.13.1",
    "react-icons": "^3.10.0",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "^3.4.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "test:cov": "npm test -- --coverage --watchAll=false",
    "test:debug": "react-scripts --inspect-brk test --runInBand",
    "eject": "react-scripts eject",
    "cy:run": "cypress run"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "cypress": "^4.10.0"
  }
}
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

# Useful learning resources

### _Django:_

> Official docs: https://docs.djangoproject.com/en/3.1/

### _Django REST framework:_

> Official docs: https://www.django-rest-framework.org/

### _React.js:_

> Official docs: https://reactjs.org/

> Building React Authentication: https://medium.com/better-programming/building-basic-react-authentication-e20a574d5e71

### _Redux.js:_

> Official docs: https://redux.js.org/

### _PostgreSQL:_

> Official docs: https://www.postgresql.org/docs/12/index.html

> Video tutorial: https://www.youtube.com/watch?v=BLH3s5eTL4Y

### _Django & React.js:_

> Video tutorial: https://www.youtube.com/watch?v=uZgRbnIsgrA&t=2040s

> Video tutorial: https://www.youtube.com/watch?v=w-QJiQwlZzU&t=2109s

> Video tutorial: https://www.youtube.com/watch?v=BxzO2M7QcZw


# Debugging

## _If the following error arises (Windows specific error):_ 

`[WinError 10053] An established connection was aborted by the software in your host machine`
> More info on error: https://stackoverflow.com/questions/51562067/connectionabortederror-winerror-10053-an-established-connection-was-aborted-b

> Run this command in cmd
```console
cmd.exe /c chcp 1252
```

# Using Git:

## _Working on my first Git project:_
```sh
# [Step 1] Cloning a specific branch:
git clone --single-branch --branch <branchname> <remote-repo>    
# e.g., git clone --single-branch --branch feat-AH_Auth git@github.com:CodexWorks/autonomous-fleet.git

# [Step 2] Checking the status of your files:
git status
## should output something along these lines:
#---| On branch <branchname>
#---| Your branch is up-to-date with 'origin/<branchname>'.
#---| nothing to commit, working directory clean
```

## _When you want to update local branch to origin state, without commiting changes:_
> You need this when one of your team mates pushed some changes to origin that created merging conflicts.
```sh
# [Step 1] Stashes your commits, cleans working directory; At this point, you can switch branches and do work elsewhere; your changes are stored on your stack:
git stash

# [Step 2] Updates local repo to origin's state:
git pull

# [Step 3] Applies the most recent stash to current local repo state:
git stash apply

## Additional useful commands:
git branch -a                # Lists all available branches.

git checkout <branchName>    # Switches branch to <branchName>.

stash list                   # Lists the stashes you’ve stored.

git stash apply stash@{n}    # ...where n is the stash's index from stash list; applies that specific stash to current local repo state.

git status                   # Shows tracked and untracked paths in the working tree
```

## _Tracking/staging files, and adding your own commits:_
> You need this after you do great work, and you want to push it to the remote repo.
```sh
# [Step 1] Checking the working tree:
git status
## should output something along these lines:
#---| On branch <branchname>
#---| Your branch is up-to-date with 'origin/<branchname>'.
#---| Untracked files:
#---| (use "git add <file>..." to include in what will be committed)
#---|
#---| <yourModifiedFile>
#---|
#---| nothing added to commit but untracked files present (use "git add" to track)

# [Step 2] Staging a change:
git add <yourModifiedFile>
## should output something along these lines:
#---| On branch <branchname>
#---| Your branch is up-to-date with 'origin/<branchname>'.
#---| Changes to be committed:
#---| (use "git reset HEAD <file>..." to unstage)
#---|
#---| modified:    <yourModifiedFile>

# [Step 3] Commiting a straged file:
git commit -m 'My first commit'
## should output something along these lines:
#---| On branch <branchname>
#---| Your branch is up-to-date with 'origin/<branchname>'.
#---| Changes to be committed:
#---| (use "git reset HEAD <file>..." to unstage)
#---|
#---| modified:    <yourModifiedFile>
```
