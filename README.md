Hello,

This is my Lab 2 project. Enclosed you will find my original Lab 1: four HTML files, one CSS. For my Lab 2 work, I have created one JS file with my JavaScript work. 

While I have truly enjoyed this course, this Lab and learning JavaScript has provided an appropriate challenge for me.

As I began by following the Grade 3 criterion which involved editing my contact.html page. As I had previously only set a button that when clicking would use mailto: [my email], and preset text like “I am emailing to…”. However, because this required a real contact form, the first thing I did was create the inputs. HTML and CSS editing was by far the easiest and most manageable in this Lab. It felt more straightforward than learning Javascript syntax. Thanks to W3schools.com and YouTube tutorials, I was able to fill in the gaps.

<img width="1470" height="956" alt="Image" src="https://github.com/user-attachments/assets/efecf143-f804-485e-98ff-0eba6185e33f" />

Additionally, implementing github was no problem thanks to the video provided on Canvas.

I did experience some issues, as usual, with certain formatting of containers. Where the fix involved applying multiple display:flex;, and flex-direction: column;. This was an issue that I encountered in my Lab 1 as well.

<img width="1470" height="956" alt="Image" src="https://github.com/user-attachments/assets/375b4517-d374-4301-a669-ab275e234c94" />
<img width="1470" height="956" alt="Image" src="https://github.com/user-attachments/assets/544e71be-e905-4d96-bb42-78e194160b6b" />

Moreover, another issue I encountered was when adding <small> to add the error texts. Whenever they appeared on form submission, they would overflow and push all inputs outside the container. In this case, I did not find any other solutions, only to make the height of the container larger to accommodate it the size. . Unfortunately I did not take any screenshots.

Another occurrence was that I had not realized some of my initial HTML work would overwrite any JavaScript function. For example, in the inputs I added ‘required’, as well as ‘minlength’ for the textarea. Then I would create the JavaScript functions for validations. For a long time, the validation functions would not work. There would be a browser pop-up below the input requiring a value, but it was not my JS alert. I believed my JS code had to be utterly incorrect, however, this was solved because of some ChatGPT debugging, and adding 'novalidate' to the <input> . Afterwards, I also had to change the input type for the “email” to “text”, because then that way my own validation through JS is the one doing the work, and not the automatic built-in HTML email verifier. I somehow believed that JavaScript would 'overpower' all HTML and CSS because it contains very specific code like Event Listeners when a user types, etc. The idea that HTML and CSS do have their own certain power over JavaScript is quite interesting, and in retrospect, makes sense, but it did not occur to me at the time. In the screenshot below I've provided an example of how it looked before. <img width="438" height="167" alt="Image" src="https://github.com/user-attachments/assets/22abe5fc-a56e-4052-88dd-71a3f2bab599" />

<img width="522" height="653" alt="Image" src="https://github.com/user-attachments/assets/ea09f541-b49b-4ffa-ae4c-4523433c4ab4" />

Moreover, adding the thank you message did not feel terribly difficult, as it reminded me of one of the first JS exercises we had during the lecture (i.e. the pizza price, and toppings): ""Thank you, " + firstname.value + ", for your message!""
<img width="1470" height="956" alt="Image" src="https://github.com/user-attachments/assets/0b557515-d501-42ff-973b-df08b9e50d1a" />


Although that pizza exercise included console.log, it was interesting to learn that console.log would not be useful in cases like these, (also in the validations). Here, 'textContent' was the solution, and I would apply it as well in the errors. And then, when clearing the thank you message and all errors, it becomes apparent that to clear, is to make the 'textContent = ""'. This is something quite straightfoward, so it was easy to remember and to apply in almost all the code.

Additionally, I quite enjoyed the challenge of adding Character Counter to the textarea, as I instantly remembered how we had done it for a lecture. <img width="622" height="228" alt="Image" src="https://github.com/user-attachments/assets/541beae7-d251-4e53-98f7-a45c36c46842" /> 

For all the small text showcasing errors and the Character Count, them being red and green made me change the background color of the entire webpages. Therefore, I changed the style to be black & white. In addition to accessibility, it would also give the webpage a more professional look, so I liked the changes.
<img width="474" height="521" alt="Image" src="https://github.com/user-attachments/assets/d052faa2-5690-43af-980e-53cf705e7339" />






