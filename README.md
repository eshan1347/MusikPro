# MusikPro

## Introduction

MusikPro is a full-stack web application developed to manage and display information about songs retrieved from the Spotify API. It consists of two main components:

Musik: Backend server developed using Java Spring Boot, which acts as a REST API for connecting to a MongoDB database. It provides endpoints for fetching and storing song details.

musik-client: Frontend developed using React, which provides a user interface for interacting with the Musik backend. It displays song information retrieved from the backend and allows users to perform various actions.

## Features

- Fetch and display song details from the Spotify API.
- Store song details in a MongoDB database.
- Display Spotify URL, YouTube link, download link, lyric link, artist link, and album link for each song.

## Getting-Started

To get started with MusikPro, follow these steps:

1. Clone the repository: `git clone https://github.com/eshan1347/MusikPro`
2. Navigate to the project directory: `cd MusikPro`
3. Launch the Backend Server (Musik): Navigate to the Musik directory and run the Spring Boot application using Maven:
   - `cd Musik && mvn spring-boot:run`
4. Run the Frontend (musik-client): Navigate to the musik-client directory and install dependencies using npm or yarn:
   - `cd musik-client && npm install`
5. Start the frontend:
   - `npm start`
6. Access MusikPro in your web browser at `http://localhost:3000`.

## Technologies Used

- **Frontend**: React.js, Axios
- **Backend**: SpringBoot , Java, Maven
- **Database**: MongoDB
- **Other**: Spotify Web API

## Contributing

Contributions are welcome! If you'd like to contribute to CollabCode, please fork the repository, make your changes, and submit a pull request. Make sure to follow the existing code style and conventions.
