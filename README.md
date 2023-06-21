## How to navigate this project
#### The Code
- You can see all you need in src. 
- There are the basic folders CSS, IMG, and Components, along with files for firebase and the color picker add ons.
- Within the Componets. the first files are for the ones seen on the main page. Nav and Bulletin and PostComplete are seen from beginning. PostForm is seen when selecitng a form to create a post.
-  Post form folder, we have to separate folders. The PostElemets contain all elements used within the Posts folder. 

#### The Site
- Displayed on the navigation on the left you can cleary see options to 'Display All Posts', 'Create A Post', and 'Search For A Post'. 
- When the site is launched it displays all posts. Creating A Post will display a dropdown for a type of post. Then you fill out and it will display to list.
- Search For Post will search for a specific kind of post, and Display All Posts will display all once more.

***
## Why I built this project
- At my last job I was curious if anyone else in the company might play Magic The Gathering as I do. I thought it would be interesting to have a portion of the company site where employees could talk to one another, find those with common interests. That evolved into this site.
- The idea is that a company would pay to use the site. They would have their own url. Such as apartment-complex.bulletin-board.com, or bigbanking.bulletin-board.com, and there would be code for their employees to use in order to log on and start creating posts. 
- My main thought on this, would be the apartment complex route. You move into a new complex, don't know anyone in the city yet, so you get on their bulletin board site and can automatically search, for people with similiar hobbies or people having parties, or perhaps you saw a cat roaming the complex and see a lost pet post on the site. 

***
## How I worked on this project
- I started on this project about a year and a half ago. Then coming back a little over a year, realized that the code was not great and could be done better. 
- I started with reworking the folder structure. After working on getting first post to display, reworked folder structure once more. 
- Added firebase to project to get post information to be saved, then retrieve form database to display. 
- Added color picker to give a little flair for the user. 
- Added file upload for posts such as lost pet. 

***
## Improvements I plan on making to this site
- Adding pagination to the site so that user can filter through all posts.
- Making the navigation on the left fade to display bulletin board 100% for more viewing of the posts.
- Do something with the posts themselves. I want it to feel much like putting posters on a real bulletin board, but also want to display as much as possible for the user. Most likely will have then small and display important info then can pop up as a modal to display all info. 
- Work on making more UX and UI friendly as well as make responsive for all devices.

##### New skills, I would like to gain from this site
- I've touched upon JEST for testing, but it has been very basic. I'd like to start implementing that before the site gets too big.
- I've heard of the new Context API for React state management and would like to jump on that for this project. 
- Database wise I don't think firebase is going to cut it in the long run and will probably be looking into MongoDB
- In addition to Mongo will probably take the whole project further and shift to MERN stack with Express added as well.