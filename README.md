# hometask-project-set-up

### Project Instalation
First clone GIT repository using `git clone` command.
Once it is done open your project in your prefered IDE and open the terminal.
Run `yarn install` command to install all project dependencies.

### Test run
To run the tests use `yarn test` command. Make sure your *package.json* file has the following entry:
```json
  "scripts": {
    "test": "jest"
  }
```
otherwise you will have to use `yarn jest` command to execute the tests.
  
**If everything is fine you should see tests report in the terminal.**