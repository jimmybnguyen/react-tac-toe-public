# React-Tac-Toe

This module is a Tic-Tac-Toe game played in the browser, completed as part of a [course](http://arch-joelross.rhcloud.com/) at the UW ISchool. 

The below questions should be answered (in detail!) regarding your submission!


##### 1. Does using a Model-View-Controller architecture make it easier to change your game in the future? How many places would you need to make changes to your code to make this a 5x5 game of Tic-Tac-Toe?
> Using a MVC architecture does make it easier to change my game in the future. To have a 5x5 game of Tic-Tac-Toe, I will need to make changes in the model and view. This is because my model's method for checking if the game is won is not flexible enough to check other board sizes. If I were to rewrite this method and make it so that it can check any board size, I only have to make more changes in the view, which involves  creating more squares and giving them ids. 


##### 2. Why did I say that an `Array` is the best data structure to represent the game's grid of cells? Why not a 2D-array (Array of Arrays), or an Object, or a Linked-List, or a Tree? 
> With a linked-list, it would be harder to get the data of the game's grid of cells because I wouldn't be able to simply look at an index, I would need to use references. A tree is like a more complicated linked-list, so it will make even less sense to use that. I think with an object, it would be harder to incorporate  it in the model and would be unnecessarily hard to grab the data from it. I have never used 2D-arrays before, or know much about them, but I think they would be fine to use to represent x,y coordinate for the grid. Perhaps it would be harder to create a method that will check if the game is over or not? 


##### 3. What online resources did you find to help you learn React? How do you search for resources, and how did you determine whether they were helpful or not? Think back to the "learning an API" paper! 
> I used thee online resources: YouTube, React.js homepage, and Stack Overflow. I determined whether or not these resources were helpful by checking how clear the examples were to me, and whether or not the examples given were related to what I was doing. The YouTube videos I watched were a good resource to understand the basics of React.js, the React.js homepage was not as clear as I would like and was kind of hard to find what I wanted to look for, and Stack Overflow was example in debugging my code. None of these resources had examples of using React.js to create the V in an MVC architecture, and that was the biggest thing I was stuck on. 


##### 4. Approximately how many hours did it take you to complete this assignment? #####
> It took me about 30 hours to complete this assignment. 


##### 5. Did you receive help from any other sources (classmates, etc)? If so, please list who (be specific!). #####
> The YouTube videos I watched were [these](https://www.youtube.com/playlist?list=PL6gx4Cwl9DGBhLZx_5C-jqECBE4HIID_k) and [these](https://www.youtube.com/playlist?list=PLLnpHn493BHFfs3Uj5tvx17mXk4B4ws4p), and I got much needed help from Joel. 

##### 6. Did you encounter any problems in this assignment we should warn students about in the future? How can we make the assignment better? #####
> I spent many hours looking for examples of using React.js in an MVC architecture, and could not find anything. Showing a small example in class would had been very helpful, instead of just creating React classes in a file and rendering them. 
