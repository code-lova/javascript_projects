
# Image Search Application

This is a simple Image Search Application built with JavaScript, HTML, and CSS. It allows users to search for images using a keyword and displays relevant images from an external API.


## Features

- Search: Users can enter a keyword in the search bar and press the "Search" button to find relevant images.
- Image Display: The application fetches and displays a grid of images related to the search query.
- Responsive Design: The application is designed to work seamlessly on various screen sizes, making it accessible on both desktop and mobile devices.



## Tech Stack

**Client:** Javascript, HTML5, CSS3

**Server:** External API


## Usage/Examples
- Clone the repository to your local machine.
```
git clone https://github.com/your-username/image-search-app.git
```
- Open the index.html file in your web browser.
- Enter a keyword in the search bar and click the "Search" button.
- Explore the displayed images related to your search.




## Screenshots

![App Screenshot](https://i.imgur.com/Bkdb94g.png)

![App Screenshot](https://i.imgur.com/Go4LjwN.png)



## API Integration


The application uses the Image Search API to fetch image data. You can replace this API with any other image search API that you prefer. Simply update the API endpoint in the JavaScript file (script.js) to integrate a different API.

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Search Query 

```http
https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page num`      | `string` | **Required**. page of item to fetch |
| `query data`      | `string` | **Required**. query of item to be fetch |
| `client_id`      | `string` | **Required**. API access Key |



## Contributing

Contributions are always welcome!

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Your contributions are highly appreciated!

Please adhere to this project's `code of conduct`.


## Authors

- [@code-lova](https://www.github.com/code-lova)

