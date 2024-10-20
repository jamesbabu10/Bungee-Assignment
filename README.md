# Movie Search Application

## Introduction
This Movie Search Application is a React-based web app that allows users to search for movies using the OMDB API. Users can search by title, filter by year, and navigate through paginated results.

## Technologies Used
- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- OMDB API

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Setting Up and Running the Application Locally

1. Clone the repository:
   ```
   git clone https://github.com/jamesbabu10/Bungee-Assignment.git

   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory and add your OMDB API key:
   ```
   API_KEY=your_api_OMDB_key_here
   BASE_URL=omdb_base_url - http://www.omdbapi.com/
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to view the application.

## Obtaining and Configuring the API Key

1. Visit the [OMDB API website](http://www.omdbapi.com/apikey.aspx) and request a free API key.
2. Once you receive your API key via email, add it to the `.env` file as shown in step 3 of the setup instructions.

## Data Source and Assumptions

- This application uses the OMDB API to fetch movie data.
- The free tier of the OMDB API has some limitations:
  - It returns a maximum of 10 results per page.
  - It has a daily request limit.
- The application assumes that the API will return data in the expected format. Error handling is implemented to manage cases where the API might not respond as expected.

## Features

- Search for movies by title
- Filter results by year
- Paginated results
- Responsive design for various screen sizes

