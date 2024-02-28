# NYTimes Citation Extractor

## Overview
The NYTimes Citation Extractor is a JavaScript script designed to enhance the user experience when reading NYTimes articles. It extracts and formats essential information such as the author(s), date, and title, presenting it in a Chicago citation format in the console. This makes it easier for users to reference and use the information.

## Usage
1. Navigate to a NYTimes article, for example: [Ukraine-Russia Conflict Article](https://www.nytimes.com/2023/04/19/world/europe/ukraine-russia-donbas-propaganda.html).
2. Open the browser console.
3. Click the provided button, and the Chicago citation for the article's author(s), date, and title will be displayed in the console.

## How It Works
1. The script is intended to work specifically on NYTimes articles.
2. Without the script, the author(s), date, and title are scattered around the page.
3. With the script, a click of the button triggers the extraction and display of this information in the console.
4. The code relies on the following:
   - Utilizing `.onclick` to allow users to control when the information is displayed.
   - Implementing the `Map()` function to remove commas from the existing array and place them in a new one.
   - Leveraging string formatting and `slice()` to ensure the information fits the correct citation format.
   - Using `trim()` to remove unwanted whitespaces from the title and publisher.

## Installation
1. Copy the content of `nytimes-citation-extractor.js`.
2. Open your browser's developer console on a NYTimes article page.
3. Paste and run the script in the console.

## Example Citation Format
```plaintext
Author(s): Last Name, First Name
Date: Month Day, Year
Title: Article Title
```
## License
This project is licensed under the MIT License.

## Contact
- Connor Dunn
- connoro.dunn@gmail.com
---
