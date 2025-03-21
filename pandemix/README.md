# Pandemix - Historical Disease Analysis

Pandemix is a React-based web application designed to explore historical disease data. It fetches information from Wikipedia's API, allowing users to search for diseases, view summaries in a list format, and dive into detailed views of specific diseases. This project is built as part of Option 5: Historical Disease Data Analysis.

## Features
- **Search Functionality**: Use the search bar to find diseases by name.
- **Disease List**: Browse a grid of disease cards with summaries and images (where available).
- **Detailed Views**: Click "Learn More" on a disease card to see detailed historical data.
- **Responsive Design**: Styled with CSS for a clean, user-friendly experience across devices.
- **State Management**: Utilizes React Context API for managing disease data globally.
- **Custom Hooks**: Fetches and manages data efficiently with a custom `useDiseaseData` hook.

## Project Structure
/historical-disease-analysis │ ├── /public │ ├── index.html # Main HTML template │ └── /assets │ └── logo.png # Project logo │ ├── /src │ ├── /api │ │ └── wikipediaApi.js # Wikipedia API calls │ ├── /components │ │ ├── Header.js # Navbar component │ │ ├── DiseaseList.js # List of disease cards │ │ ├── DiseaseCard.js # Individual disease card │ │ ├── SearchBar.js # Search input │ │ └── DiseaseDetails.js # Detailed disease view │ ├── /context │ │ └── DiseaseContext.js # Context for state management │ ├── /hooks │ │ └── useDiseaseData.js # Custom hook for data fetching │ ├── /pages │ │ ├── HomePage.js # Landing page │ │ └── DiseasePage.js # Disease detail page │ ├── /styles │ │ ├── App.css # Global styles │ │ ├── Header.css # Header styles │ │ ├── DiseaseList.css # Disease list styles │ │ └── DiseaseCard.css # Disease card styles │ ├── App.js # Main app with routing │ ├── index.js # Entry point │ ├── .gitignore # Git ignore file ├── package.json # Dependencies and scripts ├── README.md # This file └── package-lock.json # Dependency lock file
## Prerequisites
- Node.js (v14 or higher recommended)
- npm (or yarn, if preferred)

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone 
   cd historical-disease-analysis
	2	Install Dependencies: npm install
	3	 This installs required packages, including react, react-dom, and react-router-dom.
	4	Add a Logo (Optional):
	◦	Place a logo.png file in /public/assets/ for the header. If omitted, the app will still run but without a logo.
	5	Run the Application: npm start
	6	 The app will launch at http://localhost:3000 in your browser.
	7	Build for Production (Optional): npm run build
	8	 This creates an optimized build in the /build folder.
Usage
	•	On the homepage (/), use the search bar to find diseases (e.g., “Black Death”, “Spanish Flu”).
	•	Browse the resulting list of disease cards.
	•	Click “Learn More” on any card to view detailed information at /disease/:id.
Dependencies
	•	react: Core library for building the UI.
	•	react-dom: Renders React components to the DOM.
	•	react-router-dom: Handles client-side routing between pages.
Notes
	•	The app currently uses Wikipedia’s API for data. You may need to handle rate limits or expand to other APIs for more robust data.
	•	Styling is minimal and can be enhanced with additional CSS or a library like Tailwind CSS.
	•	Images in disease cards depend on available Wikipedia data; not all diseases will have images.
Future Improvements
	•	Add pagination to the disease list for large search results.
	•	Integrate a more comprehensive disease database (e.g., WHO or CDC data).
	•	Implement unit tests with Jest for components and hooks.
	•	Enhance accessibility (e.g., ARIA labels, keyboard navigation).
Contributing
Feel free to fork this repository, submit issues, or create pull requests with improvements!
License
This project is unlicensed and free to use for educational purposes.
---

