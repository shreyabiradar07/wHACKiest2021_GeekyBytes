# wHACKiest2021_GeekyBytes [ALL-GIRLS-TEAM]
A team of three young women present to you a website made to solve a growing concern in the post lockdown world, the mental and physical wellbeing of children affected due to the cons of online learning.

We have tried and included many skills and knowledge other than the school online classes that the children need for their overall development.We say that childhood is golden age and we do not want that to be wasted out when we can make the best utilization of this time.

We have also included activities and information about the climate change and also how the kids can help build a future against the hazardous effects of global warming and other climate issues.

Website link: 
 https://shreyabiradar07.github.io/wHACKiest2021_GeekyBytes/.
 
 Solution for Challenge 1:
 Added app icon from: https://images.app.goo.gl/VtrxmQ9kiQC921sH8
 
 Added Icons under Services Component:
 www.iconfinder.com

Solution for Challenge 2:
On pressing logo in landing page , a confetti burst on the screen is observed.


PPT link:

https://docs.google.com/presentation/d/1ckEmxVbskJ4y2dOyqXcEJZwphHQzZ9X2-9gT2RW0mFo/edit#slide=id.gd91e1f37e_0_0

Video Link:

https://drive.google.com/file/d/1zz6DDNwhGhsagRVZlbgbWh112OjvvqGB/view?usp=sharing

Blogs is a backend application and can be run on local server since github does not support backend.. It wasn't possible to deploy it.

Before starting the actual website please host the backend part locally using your ip address, update it as listed below because it's been hosted locally.


 Commands for blog application(hosted locally):

$ npm init

 dependencies to be installed:

$ npm install express mongoose ejs dompurify slugify marked method-override nodemon jsdom

$ cd blogs

path is set using current ip address(192.168.43.155) and port number(3300) in server.js(line no. 23)

use the below link(with your current IPv4 address) inside the href tag, in index.html(line no.52):

http://192.168.43.155:3300(our local host)

 the format of the above link could be used to locally host the blog application.

 To start the application:

$ nodemon server