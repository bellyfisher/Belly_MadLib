/* 
  Mad Lib Starter (Beginner JS)

  GOAL:
  - Ask the user for several words using prompt()
  - Save each answer in a variable (use let or const)
  - Build a story string using a template literal (backticks) with ${variableName}
  - Put the finished story into the page by setting innerHTML on the element with id "madlib-output"

  IMPORTANT:
  - Do NOT use if/else or any other advanced JS yet.
  - Only variables, prompt(), strings, and innerHTML.
  - Write your own prompts and story!
*/

/* 1) CREATE VARIABLES 
   - Make one variable per word you need (e.g., a noun, a verb, an adjective, a place, a number, etc.)
   - Use prompt() to ask the user for each word.
   - EXAMPLE CATEGORIES (choose your own): noun1, adjective1, verbPast, place, animal, food
   - Name variables clearly so you remember what each one is for.
*/

let yourName = prompt("What is your name? ✩");
let theTown = prompt("Give me a town name (can absolutely be made up!) ✩");
let animalType = prompt("Name an animal with wings that can fly! ✩");
let friendName = prompt("Give me another name! ✩");
let otherAnimal = prompt("Give me another animal, except one that doesn't fly! ✩");
// (Add as many as your story needs)

/* 2) BUILD YOUR STORY STRING
   - Use a template literal: it starts and ends with backticks (the ` key).
   - Insert variables with ${variableName} in your sentence.
   - Keep it fun! Make sure your story uses ALL the variables you collected.
*/

 let story = `One sunny afternoon in the small town of ${theTown}, a curious ${animalType} named ${yourName} decided to try something new. Instead of pecking at seeds like usual, ${yourName} wanted to fly. Not just a little hop-flap-fly, but a grand, sweeping flight over the fields and ponds. ${yourName} flapped their wings as hard as they could, but they barely lifted off the ground. Watching from a nearby bush was ${friendName}, a wise-cracking ${otherAnimal} who loved to joke around. “Hey ${yourName},” they called out, “are you trying to fly or just making funny wind noises?” Determined, ${yourName} gathered a bunch of leaves and twigs, constructing a makeshift pair of wings. They tied them to their feathers with dandelion stems, feeling proud but a bit silly. “Today’s the day,” they whispered. With all eyes on them, ${yourName} ran across the field and leapt from a little hill. For a moment, they soared! The leaves fluttered like crazy, and ${friendName} cheered wildly. But then, whoosh—${yourName} tumbled into a soft pile of hay, unharmed but giggling at their clumsy attempt. After catching their breath, ${yourName} laughed and said, “Maybe I’m not meant to fly like that. Maybe I’m just a ${animalType} who dreams big.” ${friendName} nodded. “Big dreams are the best kind, especially when they come with funny stories.” From that day on, ${yourName} continued their adventures, always ready to try new things, no matter how silly. And ${animalType} became the town where even ${animalType} reached for the sky, one flap and one laugh at a time.`;

/* 3) DISPLAY THE STORY ON THE PAGE
   - Select the element with id "madlib-output" using document.getElementById(...)
   - Set its .innerHTML to your story variable from Step 2.
   - Optional: include simple <strong> or <em> tags inside your story string for emphasis.
*/

document.getElementById("madlib-output").innerHTML = story;

/* 4) OPTIONAL POLISH
   - Add a title or intro line at the top of your story (still using the same innerHTML).
   - Use <br> tags inside your story string to control line breaks if you want multiple lines.
   - Keep your variable names, prompts, and story grammar consistent.
*/

/* 5) RUBRIC REMINDER (quick checklist)
   - Prompts: You ask for all required words with clear messages.
   - Variables: You use let/const with meaningful names.
   - Template Literals: You use backticks and ${} correctly.
   - Display: The story shows up clearly in #madlib-output.
   - Bootstrap: Don’t remove the .row/.col structure in index.html.
   - Comments: Explain each step in your code.
   - GitHub: Commit often with clear messages; publish on GitHub Pages.
*/
