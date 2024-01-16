# Webshop Miniprojekt

In this project, we aim to build a small webshop step by step, focusing on the representation of a dataset.

## Initialization

Download the project files via GitHub (`CTRL-SHIFT-P` and then `Git:Clone`).
To start the project, open a terminal in VSCode (`CTRL+SHIFT+P` and then `Terminal: Create new Terminal`). In this terminal, you can execute the following commands:

```
npm install
npm run dev
```

This should install all required libraries and start a web server (similar to LiveServer).

## Usage

If you have just completed the above step, you may not need to execute it again. However, if you continue working on the project, you need to restart the server each time. Simply open a terminal and execute the following command:

```
npm run dev
```


Then, open a web browser with the URL [`http://localhost:5173`](http://localhost:5173).

## Tasks

You are to build a small webshop step by step in this project. Follow the tasks below. Remember to commit regularly and provide detailed commit messages.

### Task 1

Find the data for the webshop in the file `public/level-01.json`.

- Examine the data.
- What fields are present in the data?
- Change the title and description of an article.
- Add a new article.
- Can an article exist without a description?

### Task 2

Examine the files `index.html` and `src/main.js`.

- Try to make sense of the code for yourself. This should be intuitive.
- Explain to another person what you have understood.
- Add comments to the parts you understood.

### Task 3

Examine the file `src/main.js`. Try to understand unknown parts of the code. Formulate your comments.

### Task 4 (Optional)

Modify the code so that articles without a description are also displayed, showing "No description".

### Task 5

Switch to the dataset `public/level-02.json`.

- Examine the data.
- What is different from before?
- Display the price on the webpage.

### Task 6

Switch to the dataset `public/level-03.json`.

- Examine the data.
- What is different from before?
- If an article has a discounted price, display only that in green on the webpage.

### Task 7

Copy the file `public/level-03.json` to the file `public/level-04.json`.

- Add a stock quantity for all articles.
- If the stock is below 5, mark the element orange.
- If the stock is below 2, mark the element red.
- If the stock is 0, indicate that creatively.

### Task 8

Create the new file `public/level-05.json`. You can use the file `public/level-04.json` as a template or choose an earlier one.

- Add a rating for all articles.
- Add comments for some articles.
- Display the comments on the webpage.

### Task 9

Create a global variable `const G = {}` in the file `src/main.js`.

- Add the field `from` to `G` with the value 0.
- Add the field `to` to `G` with the value 5.
- Display only articles with the index between `G.from` and `G.to`.

### Task 10 (Optional)

Create 2 buttons on the webpage with "next" and "back". The buttons should each modify the variable `G` to display the next page.

### Task 11

Search the internet for another dataset in JSON format. It does not necessarily have to be data for a webshop.

- Copy the dataset to `public/level-06.json`.
- Examine the dataset.
- Display this dataset on your webpage.
