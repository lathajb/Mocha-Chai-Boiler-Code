

Quiz - Engine :
----------------------

1. Project Structure: Reference
-------------------------------

		|-- app
			|-- controllers
			|-- helpers
			|-- middlewares
			|-- models
			|-- routes
			|-- services
		|-- bin
		|-- logs
		|-- node_modules
		|-- public
			|-- components
			|-- images
			|-- javascripts
			|-- stylesheets
		|-- views
		|-- .env
		|-- .env-example
		|-- app.js
		|-- README.md
		
		
2. Mocha and chai Install and run:  Mocha’s “interface” system allows developers to choose their style of DSL. 
									Mocha has BDD, TDD, Exports, QUnit and Require-style interfaces.
----------------------------------

	1. npm install --save-dev mocha
	2. npm install express body-parser --save
	3. npm install mocha chai chai-http --save-dev   -- chai-http for communicating between client server
	  
ASSERTIONS:
-------------
Mocha allows you to use any assertion
we’re using Node.js’ built-in assert module–but generally, if it throws an Error, it will work! 

This means you can use libraries such as:

	1. should.js - BDD style shown throughout these docs
	2. expect.js - expect() style assertions
	3. chai - expect(), assert() and should-style assertions
	4. better-assert - C-style self-documenting assert()
	5. unexpected - “the extensible BDD assertion toolkit”
	
	
	BDD : Behaviour Driven Development - The BDD interface provides describe(), context(), it(), specify(), before(), after(), beforeEach(), and afterEach().
			
		  Bydefault
	
	TDD : Test Driven Development - The TDD interface provides suite(), test(), suiteSetup(), suiteTeardown(), setup(), and teardown():
	
		  mocha --ui tdd card.test.js
	
 Results of mocha :
 -------------------
 mocha --reporter=doc | cat docs/head.html - docs/tail.html > docs/test.html
 
 
 
 EXPRESS:
 ----------
 
 Express is unopinionated. You can insert almost any compatible middleware you like into the request handling chain, 
 in almost any order you like. You can structure the app in one file or multiple files, and using any directory structure. 
 You may sometimes feel that you have too many choices!
 