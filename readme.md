# YelpCamp

YelpCamp is a full-stack web application for discovering and reviewing campgrounds. Users can create, view, edit, and delete campgrounds, add reviews, upload images, and see campground locations on a map.

## ✨ Features

*   **User Authentication:** Secure user registration, login, and logout using Passport.js.
*   **CRUD Operations:**
    *   Create new campgrounds with details like title, location, price, description, and images.
    *   View individual campground details.
    *   Edit existing campgrounds (only by the author).
    *   Delete campgrounds (only by the author).
*   **Reviews:**
    *   Add reviews to campgrounds (only by logged-in users).
    *   Delete reviews (only by the review author).
*   **Image Uploads:** Upload multiple images for campgrounds using Multer and Cloudinary.
*   **Map Integration:** Display campground locations on an interactive map using Mapbox.
*   **Flash Messages:** Provide user feedback for successful operations or errors.
*   **Responsive Design:** Built with Bootstrap 5 for a mobile-first, responsive user interface.

## 🚀 Technologies Used

**Backend:**
*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **MongoDB:** NoSQL database for storing data.
*   **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js.
*   **Passport.js:** Authentication middleware for Node.js.
    *   `passport-local`: Local username/password strategy.
    *   `passport-local-mongoose`: Mongoose plugin for Passport-Local.
*   **Connect-Flash:** Middleware for storing flash messages in the session.
*   **Express-Session:** Session middleware for Express.
*   **Joi:** Schema description language and data validator for JavaScript.
*   **Multer:** Middleware for handling `multipart/form-data` (file uploads).
*   **Cloudinary:** Cloud-based image and video management service.
*   **Dotenv:** Loads environment variables from a `.env` file.

**Frontend:**
*   **EJS (Embedded JavaScript):** Templating engine for dynamic HTML.
*   **Bootstrap 5:** CSS framework for responsive design.
*   **Mapbox GL JS:** JavaScript library for interactive maps.
*   **Custom CSS:** For specific styling (e.g., stars for reviews).
*   **Client-side Validation:** Bootstrap's built-in form validation.

## 🛠️ Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

*   **Node.js** (LTS version recommended)
*   **npm** (comes with Node.js)
*   **MongoDB** (running locally or accessible via a cloud service like MongoDB Atlas)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/yelp-camp.git
    cd yelp-camp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory of the project and add the following:

    ```
    DB_URL=mongodb://localhost:27017/yelp-camp
    SECRET=your_secret_session_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    MAPBOX_TOKEN=your_mapbox_access_token
    ```
    *   Replace `your_secret_session_key` with a strong, random string.
    *   Obtain your Cloudinary credentials from your Cloudinary dashboard.
    *   Obtain your Mapbox Public Access Token from your Mapbox account.

4.  **Run the application:**
    ```bash
    npm start
    ```
    The application will be accessible at `http://localhost:3000`.

## 💡 Usage

1.  **Register:** Create a new user account.
2.  **Login:** Log in with your registered credentials.
3.  **View Campgrounds:** Browse existing campgrounds on the homepage.
4.  **Create New Campground:** Click "New Campground" to add your own.
5.  **Edit/Delete Campground:** On a campground's detail page, if you are the author, you will see options to edit or delete.
6.  **Add Review:** On a campground's detail page, logged-in users can submit reviews.

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue.

## 📄 License

This project is licensed under the MIT License.