# Garden in The Sky
> Empowering individuals to grow their own food, foster sustainability, and cultivate a greener future.

## About Garden in The Sky
### Inspiration
The inspiration for Garden in The Sky comes from the desire to promote sustainable agriculture practices, support food self-sufficiency, and contribute to the goal of eliminating hunger (SDG: Zero Hunger), especially as many suffer from malnutrition, lack nutritious, diverse, and culturally appropriate diets, and local food availability is decreasing due to climate change. The app aims to empower individuals to grow their crops and provide personalized guidance and recommendations using generative AI.

### What it does
The gardening app uses generative AI to provide personalized guidance and recommendations for cultivating healthy crops. The app uses AI to identify plants and crops based on user images, providing real-time insights and recommendations for adjusting growing conditions. The app also detects pests, diseases, and nutrient deficiencies in plants based on user images, providing personalized recommendations for pest management strategies. The app offers gardening tips and tutorials, including articles, tutorials, and instructional videos on seed starting, transplanting, pruning, and harvesting. The app has potential impacts on food self-sufficiency, supporting sustainable agriculture practices, improving food access and nutrition, and fostering community building. By promoting healthy eating habits and a diverse range of fruits, vegetables, and herbs, the app contributes to sustainable agriculture while reducing carbon emissions and creating a better environment. Overall, the gardening app aims to empower individuals and communities to grow their own food, reducing reliance on store-bought produce, while protecting the environment.

### How we built it
We built the frontend aspect of the webapp using React, HTML, CSS, and JavaScript, and utilized SurveyJS for the form portion on the dashboard page, where the user inputs information about their (future) garden. In the backend, we used Google Gemini for generating and displaying a list of plants that aligns with the user's preferences, their descriptions, and their daily requirements. We also utilized CloudFlare's text-to-image model, which required converting the result it gave from binary to base64, which was then sent to the frontend to display an image of the plants listed by Gemini. To add to that, the backend was written using JavaScript and TypeScript, as well as Jest for unit testing, Zod (which is a TypeScript-first schema validation with static type inference), and Fetch. Additionally, we also used Plant.id's API to identify the plant and diseases it contains (if any).

### Challenges we ran into
To display an image of the suggested crops, we decided on using Gemini's text to image; however, it did not work as expected, even after hours of reading through documents and other resources. As a result, we were looking for alternatives that are reliable but not cost-effective, eventually finding CloudFlare's text-to-image API.

### Accomplishments that we're proud of
We are proud of using generative AI to solve a significant issue that is encountered by many, especially as many have limited access to nutrient-rich foods, leading to the rise of chronic diseases, by offering them easy access to a home garden that offers a significant amount of nutrients while being beneficial for the environment and lowering stress and anxiety levels.

### What we learned
During this hackathon, we learned a variety of skills and tools, such as how to utilize Google Gemini, as we all had very limited knowledge and skills working with artificial intelligence, and CloudFlare's text-to-image, which none of us had heard of before. Additionally, for the frontend, we utilized Material Design, which was also new to work with.

### What's next for Garden in The Sky
In the future, we hope to implement more user-interface designs while maintaining a great user experience, such as implementing a local store page that lists stores near the user that offer gardening materials, as well as having a social platform for all users, where they can share their goals and take pride in their gardens, as well as learn and work with others. Additionally, we hope to implement the ability to analyze soil quality, composition, and moisture levels to better recommend plants that should be grown in a user's future garden and identify diseases more effectively.

## Initialization and Set Up
1. Download Node.js and go through the initialization process.
2. Clone the GitHub repository by running `git clone https://github.com/cindy-fang/genesis/`.
3. Create a React app by running `npx create-react-app my-app` in the terminal.
4. Change into the apps directory by running `cd my-app`.
5. Run the React app through `npm start`.