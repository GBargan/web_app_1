# Web App
## Description
The Web App is following the description made by the assignment. At the center of the screen there are two buttons **Get Another Quote** and **Show Previous Quote**. The first button activates the python script working with the OpenAI API and will make a quote appear below the buttons, each time the quote being different. The second button will either show or hide the previous quotes created during the current session. When the button will be pressed the first time the previous generated quotes will be shown just below the current code and when pressed again the list of quotes will dissapear. Moreover if the list of quotes is quite long, a scrollbar will appear with the purpose of making the page not too overwhelmed with text. 

## Technologies Used
The Web App is done using for the frontend part React and CSS that can be found in the respective files **src/App.css** and **src/App.js**. For the backend of the Web App, Python was used mainly for the OpenAI API integration and the backend server for the python script itself (the code can be found in **llm_api.py** and **run_app_backend.py**). The styling of the page and the responsive layout was done with the use of CSS. Also to fetch a new quote without refreshing the page a library that can be used with React was used, more specifically **axios**, which is an open-source, AJAX application programming interface wrapper. This library and React actually helps with changing the certain parts of the Web Page without the need to refresh the page itself, in this case fetching a new quote without refreshing the page. Moreover, with the use of React the quotes are saved in the frontend and taken from the memory of the current session.

## How to Set Up and run the Project
To set up the project there may be the need to install one or more dependencies from the following list:
### React
``` bash
npm install react
```
### React-Dom
``` bash
npm install react-dom
```
### Axios
``` bash
npm install axios
```
### Flask
``` bash
pip install -r flask
```

### Flask-cors
``` bash
pip install -r flask-cors
```

### Jsonify
``` bash
pip install -r jsonify
```

### OpenAI
``` bash
pip install openai
```

After the dependencies above are correctly installed and functional the next steps are required to run the project itself. 
Open two terminals and in the first one and run the command ```bash python run_app_backend.py ``` and afterwards in the second terminal run the command ```bash npm start ```. This step will make the project launch in a browser. **NOTE**: Be sure to respect the order of the commands and don't forget to change the name of the environment variable(can be found in the **llm_api.py** file on line 6) for the API_key for the LLM. 
