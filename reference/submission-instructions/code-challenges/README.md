# Code Challenges

## Work in a proper `data-structures-and-algorightms` repository

> Template: <https://github.com/codefellows/data-structures-and-algorithms>

Each Day, you will will have a new code challenge, based on a particular "Data Structure" which is designed to test your understanding of that data structure.

- Arrays
- Linked Lists
- Stacks
- Queues
- Trees
- Hash Tables
- Graphs

Your work should be completed within the `challenges` folder nested beneath a folder named for the data structure itself.

File naming rules and folder structures are given to you in every challenge.

Your repository must be connected to GitHub Actions, running tests on every push

The final structure should resemble this as you complete the course

```bash
  data-structures-and-algorithms
  |
  ├── code-challenges
  │  └── 301 Code Challenges Here ...
  │  └── challenge-01.test.js
  │  └── challenge-02.test.js
  │  └── ...
  |
  ├── javascript
  │   └── linked-lists
  │       └── linked-list.js
  │       └── __tests__
  │           └── linked-list.test.js
  │           └── challenge-01-remove-duplicates.test.js
  │   └── binary-search-trees
  │       └── index.js
  │       └── __tests__
  │           └── bst.test.js
  │   └── ... [Each Data Structure Gets it's own folder]
  │   └── challenges
  │       └── [Each Day's Code Challenge here, in their own folder]
  │       └── remove-duplicates
  │           └── remove-duplicates.js
  │           └── README.md
  │           └── __tests__
  │               └── remove-duplicates.test.js
  ├── node_modules
  |
  ├── .github
  │   └── workflows
  │       └── javascript-tests.yml
  │
  ├── .eslintrc.json
  ├── .gitignore
  ├── package-lock.json
  ├── package.json
  └── README.md
```

### Challenge Execution and Testing

- Each day, create a new challenge folder as directed for the data structure
- Your challenge implementation must include a proper README along with any images of your whiteboard
- As you implement the challenge and your tests, you should be able to use your base implementation
  - i.e.

    ```javascript
    const LinkedList = require('../linked-list.js');
    const list = new LinkedList();
    // ...
    ```

- Run your test from the root of the `data-structures-and-algorithms` repository, as follows
  - Run All Tests: `npm test`
  - Run All Tests For One Data Structure: `npm test linked-lists`
  - Run a specific test: `npm test fizzbuzz`

### Continuous Integration Testing

The repository contains a folder named `.github` which contains a configuration file that will automatically execute all of your tests when you check in your code to GitHub.

You can see the results of your tests online in the "Actions" tab of your repository on GitHub

> NOTE: This will be the source of your grades as well.

## A complete code challenge assignment includes:

- Proper file, folder names, according to the assignment
- Tests, visibly running/passing through GitHub Actions
- A unique branch name for each code challenge (i.e. `challenge-01`)
- A pull request for that branch, formatted with the checklist template
- A README.md file that describes your work, conforming to the requirements

## Grading Notes

Your grade is based on:

- Code Quality
  - Your grader will be reviewing your Pull Request and leaving notes inline
- Test Coverage
  - Your tests must assert completion and operation of the feature tasks
  - Your tests must cover a high percentage of your code
- README
  - A Well Written README, which includes all sections in the template
  - An image of your whiteboard

## Canvas Submission

- Submit a link to the README.md from your assignment branch in Canvas
