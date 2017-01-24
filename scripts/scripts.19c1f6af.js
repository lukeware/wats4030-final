"use strict";angular.module("workspaceApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/find-open",{templateUrl:"views/find-open.html",controller:"FindCtrl",controllerAs:"find-open"}).when("/create-open",{templateUrl:"views/create-open.html",controller:"CreateCtrl",controllerAs:"create-open"}).otherwise({redirectTo:"/"})}]),angular.module("workspaceApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("workspaceApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/create-open.html",""),a.put("views/find-open.html",'<p>If you&rsquo;re sick of the high cost of textbooks, course packs or other expensive and restrictive copyright protected work then you fortunately have a lot of options. Below you will find a collection of open resources where you have access to useful content for free. </p> <h4>Public Domain</h4> <p>All works published before 1923 are automatically in the public domain, meaning you can use them however you like. That&rsquo;s why works such as <a href="https://en.wikipedia.org/wiki/Pride_and_Prejudice_and_Zombies">Pride, Prejudice and Zombies</a> exists. Since the original was published in 1813 and thus is long in the public domain, Seth Grahame-Smith was able to interject zombies of his own. Works published after 1923 are a little more complicated. Check out the <a href="http://librarycopyright.net/resources/digitalslider/">Digital Copyright Slider</a> to evaluate individual works.</p> <h4>Open Educational Resources (OER)</h4> <p>Open Educational Resources are teaching and learning materials, such as instructional videos, images and even simulations, that you may freely use and reuse at no cost. Unlike heavily restricted copyright protected work ("all rights reserved"), OERs have been created by an individual or organization who choose to retain few, if any, rights.. This done in the spirit of open, accessible education to create a better shared humanity. Below you will find some of the most significant OER distributors. </p> <h4>OER Commons</h4> <p>Created in 2007, <a href="https://www.oercommons.org/">OER Commons</a> provides access to 50,000+ resources from the largest OER collections such Merlot, Saylor, and OpenStax -- all from a single search bar. Using OER Commons you can find and reuse (and in many cases adapt) anything from <a href="https://www.oercommons.org/browse/provider/johns-hopkins-bloomberg-school-of-public-health?batch_size=100&amp;sort_by=date&amp;view_mode=summary&amp;f.material_types=full-course">full university courses</a> to <a href="https://www.oercommons.org/browse/provider-set/1450">interactive mini-lessons and simulations</a>. The areas of business, education, math, science, and statistics are well represented using this search tool.</p> <h4>Saylor Academy</h4> <p><a href="http://www.saylor.org/">Saylor Academy</a> contains almost 300 courses that have been created primarily from open educational resources (OER) around the web. The courses can be taken freely by students, and, perhaps more importantly, course materials are open to faculty for download and reuse. This is a great place for faculty to begin investigation into OER materials in their field. In essence, these courses contain a curated list of OER materials and activities arranged by course subject. Saylor Academy has strong courses in art history, biology, business administration, chemistry, history, and math. This website also contains a list of <a href="http://www.saylor.org/books/">open textbooks</a> that can be reused and remixed for your courses.</p> <h4>Merlot</h4> <p><a href="https://www.merlot.org/merlot/index.htm">Merlot</a> was founded in 1997 at California State University System and has since partnered with 23 systems and institutions of higher education to support a staff of faculty to coordinate activities. Merlot has an open peer review system for vetting resources, and is especially strong in the areas of business, education, music, political science, science and technology, and sociology. As stated on the <a href="http://info.merlot.org/merlothelp/index.htm#merlot_collection.htm">Merlot Collection help page,</a> "<em>all the materials in MERLOT are reviewed for suitability for retention in the collection. Many undergo the more extensive "peer review" for which MERLOT is famous.</em>"</p> <h4>Kahn Academy</h4> <p><a href="https://www.khanacademy.org/about">Salman Khan</a> started out making a few algebra videos for his cousins. He has an amazing gift for breaking down complex problems into easy-to-understand modules. Once he began putting his videos on YouTube they became extremely popular. There are now more than <a href="http://www.khanacademy.org/#browse">2,100 videos</a> and <a href="http://www.khanacademy.org/exercisedashboard">100 self-paced exercises</a> and assessments covering everything from arithmetic to physics, finance to history. Salman Khan&rsquo;s <a href="http://www.ted.com/talks/salman_khan_let_s_use_video_to_reinvent_education.html">TED Talk</a> video is well worth watching.</p> <h4>PBS Learning Media</h4> <p><a href="http://kcts9.pbslearningmedia.org/search/?q=&amp;selected_facets=grades_exact%3A13%2B&amp;selected_facets=&amp;selected_facets=">PBS LearningMedia</a> contains almost 7,000 learning objects for higher education, with the majority of resources in social sciences, fine arts and English language arts and literacy.</p>'),a.put("views/main.html",'<h4>Why does this site exist?</h4> <p>Who Am I? I created this project because I spent seven years navigating the muck of the copyright world on behalf of educators. My job was to learn and navigate the nuances of copyright law so that students and teachers didn\'t have to. A large part of my job was working essentially as an on-campus publishing agency. A faculty member would identify a list of materials they wanted their students to read. From there I would find the correct copyright holder, obtain permission at whatever fee is set by the rightsholder, publish and sell that content to students, and then take that money and send it to the copyright holder as payment. I dealt with a number of different rightsholders including all major publishing companies, music labels, and motion picture agencies. I’ve also spent a lifetime being a content consumer and producer, trying to figure out how to use and expand on others work and also how to let them use my own. </p> <br> <h4>The &copy; Symbol</h4> <p>You see this symbol everywhere today. You&rsquo;ll be hard pressed to find a single website without this symbol at the bottom. The last line of visible text written by the newest and oldest content creators around the web is &ldquo;Copyright &copy; 20XX. All rights reserved.&rdquo; When I created my first website in the early 2000s, I remember typing those words and that symbol at the bottom of my homepage. Still a teenager, I felt like I was adding legitimacy to my words. I had created something and I was leaving my mark to the world that I owned every part of what they had seen. At the time, I knew nothing about what the symbol meant. In fact, I was worried that I was potentially violating some sort of law since I hadn&rsquo;t actually registered my work with anyone. &nbsp;</p> <br> <h4>No Symbol Needed</h4> <p>Contrary to popular belief, you don&rsquo;t need a copyright mark to tell the world that your work is fully protected by copyright law. When something is published in the United States it\'s automatically protected by<a href="http://uscode.house.gov/view.xhtml?path=/prelim@title17&amp;edition=prelim"> United States Code 17 - Copyrights</a>. You are actually able to omit any mention of copyright but still be fully protected. Why? Any work you create is automatically protected from the moment of creation. You actually don&rsquo;t need to get the government involved at all unless you intend to sue someone in court. The registration of copyright essentially brings your work into the jurisdiction of the courts and is essentially like filing for a <a href="https://www.copyright.gov/docs/fees.html">$35 permit</a>. Curious how complicated copyright law is in the U.S.? Well, USC 17 contains approximately 214,589 words. That\'s more words than Melville wrote for Moby Dick.</p> <p>My job was to learn and navigate the nuances of copyright so that teachers didn\'t have to. I would do the work of identifying the correct copyright holder, obtain permission at whatever rate is set by the owner, publish and sell that content to students, and then take that money and send it to the copyright holder.</p> <p>One of the most disturbing things I discovered about copyright in the United States</p> <br> <h4>The Compulsory Licenses</h4> <p>Something copyright law has weighed many times through many revisions is the balance between protecting our rights to our own work and protecting the need for continued creativity. The desire to both protect and grow has resulted in a set of compulsory licenses that cover things like music royalties, <a href="https://www.law.cornell.edu/uscode/text/17/118">public broadcasting</a>, <a href="https://www.copyright.gov/title17/92chap1.html#111">cable retransmissions</a>,</p> <p>If you&rsquo;re a small indie band recording in your garage and performing in the back of local music stores, you may not be aware of an incredibly powerful provision in copyright law that grants you some interesting rights. You may also not be aware that, when you release your own music publicly, you&rsquo;re giving up some of your own rights too. <a href="https://www.copyright.gov/title17/92chap1.html#115">USC 17 Chapter 1, 115</a> states that when any musician releases a song in the U.S. they are required to allow anyone else to record their own cover of that song for a universal set fee.</p> <br> <h4>A Beautiful Shared Music</h4> <p>Do you want to tap into the immensely popular &ldquo;It&rsquo;s a Small World (Afterall)&rdquo; by Disney&rsquo;s The Sherman Brothers? Perhaps you want to cover The Beatles&rdquo; Hey Jude&rdquo; or even a lesser known song like &ldquo;The Old Revolution&rdquo; by Leonard Cohen. Well, you absolutely can. Thanks to the mandatory compulsory license for musicians, you can head over to the Harry Fox Agency&rsquo;s (HSA) <a href="http://www.songfile.com">Songfile</a> and secure the right to release that song on your own album, internet download, or streaming service. You just need to know the final track length and how many albums you&rsquo;re going to release. &ldquo;Hey Jude&rdquo; can be found with code H42000, and Cohen&rsquo;s &lsquo;Revolution&rsquo; can be found with code T54689. Rates differ based on distribution method, but if you&rsquo;re releasing a CD or vinyl for example, the rate is 9.1 cents per song per album. That means if you release 100 copies of an album with a cover of &ldquo;The Old Revolution&rdquo; by Cohen, you&rsquo;re required to send $9.10 to HSA. They are going to send that money to Sony Music, and Sony is going to send a portion to Cohen&rsquo;s estate.</p> <p>The rate is exactly the same for The Beatles or anyone else. 9.1 cents. If you release a song, your work is obligated to the same terms. If someone wants to cover your song, they owe you the same rate. You&rsquo;re allowed to charge them less, or no fee, but you can&rsquo;t charge them more. Why? The rates are set by three Copyright Royalty Judges appointed by the Librarian of Congress with the intention to &ldquo;maximize the availability of creative works to the public."</p> <br> <h4>The Gaping Compulsory Hole</h4> <p>While you may be impressed that the government has intervened to stop big record labels from gouging independent musicians through royalty fees, there is an incredibly large compulsory license hole: education. While U.S. Code has outlined provisions for limited claims of fair use exemptions in education, they have granted no such terms for royalty rates when fair use does not apply. The Beatles owners can&rsquo;t gouge you if you want to cover &ldquo;Hey Jude,&rdquo; but don&rsquo;t expect the same treatment from Houghton Mifflin Harcourt if you want to copy 20 pages from George Orwell&rsquo;s &ldquo;1984&rdquo; and hand it out to your students.</p> <p>According to <a href="http://www.copyright.com/">Copyright Clearance Center</a> (CCC), the Harry Fox Agency like equivalent company that manages the bulk of educational permissions, shows a rate of 60 cents per page, per student copy. That means to sell students a copy of just 20 out of 328 pages of Orwell&rsquo;s 1984 it would cost $12.00 per student copy in permissions fees. That&rsquo;s just 6% of the book yet costs so much. Extrapolating, that would mean that to secure permission to copy the entire book in a non-profit educational setting would be $196.80 per copy sold. Currently the book sells for $9.99 at my favorite local bookstore <a href="http://www.thirdplacebooks.com/book/9780451524935">Third Place Books</a> or even cheaper on Amazon. Hmm.</p> <br> <h4>Copyright Royalty Judges</h4> <p>&nbsp;</p> <p>Rates are set by 3 full-time Copyright Royalty Judges appointed by the Librarian of Congress</p> <p>&nbsp;</p> <div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);