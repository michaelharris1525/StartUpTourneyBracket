In the following code, what does the link element do?

The <link> tag defines the relationship between the current document and an external resource.

The <link> tag is most often used to link to external style sheets or to add a favicon to your website.

The <link> element is an empty element, it contains attributes only.

Example:

<head>
  <link rel="stylesheet" href="styles.css">
</head>




In the following code,  what does a div tag do?
The <div> tag defines a division or a section in an HTML document.

The <div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

The <div> tag is easily styled by using the class or id attribute.

Any sort of content can be put inside the <div> tag! 


In the following code, what is the difference between the #title and .grid selector?
#title Selector:

#title is an ID selector, denoted by the # symbol.
It is used to select an element with a specific id attribute. IDs are unique within an HTML document, meaning there should only be one element with a given id.
For example, if you have an HTML element like this: <div id="title">Hello, World!</div>, the CSS selector #title will target this specific <div> element with the id attribute set to "title."
.grid Selector:

.grid is a class selector, denoted by the . symbol.
It is used to select one or more elements with a specific class attribute. Multiple elements in an HTML document can have the same class attribute, allowing you to apply the same styling to multiple elements.
For example, if you have several elements like this: <div class="grid">Grid Element 1</div> and <div class="grid">Grid Element 2</div>, the CSS selector .grid will target all elements with the class attribute set to "grid."

#title and .grid is that #title is used to select a single element by its unique id, while .grid is used to select multiple elements by their shared class.





In the following code, what is the difference between padding and margin?
CSS Margins
The CSS margin properties are used to create space around elements, outside of any defined borders. With CSS, you have full control over the margins. There are properties for setting the margin for each side of an element (top, right, bottom, and left).
CSS Padding
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.
With CSS, you have full control over the padding. There are properties for setting the padding for each side of an element (top, right, bottom, and left).
Padding represents the amount of inner space an element has, while the margin is whitespace available surrounding an element.



Given this HTML and this CSS how will the images be displayed using flex?

The flex display layout is useful when you want to partition your application into areas that responsively move around as the window resizes or the orientation changes.


What does the following padding CSS do?
padding: 25px 50px 75px 100px;
top padding is 25px
right padding is 50px
bottom padding is 75px
left padding is 100px



What does the following code using arrow syntax function declaration do?
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3


What does the following code using map with an array output?
.map is javascript.
map() creates a new array from calling a function for every array element.

map() does not execute the function for empty elements.

map() does not change the original array.
const numbers = [1, 2, 3, 4, 5] creates an array of numbers.

numbers.map((number) => number * number) uses the map function to iterate through each element of the numbers array and, for each element, it squares the number by multiplying it by itself (number * number). The arrow function (number) => number * number is used to define this transformation for each element.

The result of this mapping is a new array called squaredNumbers containing the square of each number from the original array. After executing the code, squaredNumbers will be [1, 4, 9, 16, 25], as each element in numbers is squared to create the new array.

So, squaredNumbers will contain the square of each number from the numbers array.







What does the following code output using getElementByID and addEventListener?
getElementById:

getElementById is a method that allows you to select and retrieve a specific HTML element from the DOM by its unique id attribute.
It is typically used as follows: document.getElementById("elementId"), where "elementId" is the id attribute of the element you want to select.
This method returns a reference to the selected element, allowing you to access and manipulate its properties and content through JavaScript.
Example:

javascript
Copy code
const element = document.getElementById("myElement");
element.innerHTML = "This is a new content";
addEventListener:

addEventListener is a method used to attach event listeners to DOM elements. Event listeners are functions that respond to specific events, such as user interactions (e.g., clicks, mouseover, keypresses).
You can use addEventListener to specify which event to listen for and what action to take when that event occurs.
It is typically used as follows: element.addEventListener(event, function), where element is the HTML element to which you want to attach the listener, event is the name of the event (e.g., "click," "mouseover"), and function is the JavaScript function that gets executed when the event occurs.

document.addEventListener("DOMContentLoaded", function() {
  const button = document.getElementById("myButton");
  const output = document.getElementById("output");
  
  button.addEventListener("click", function() {
    output.innerHTML = "Button clicked!";
  });
});



What does the following line of Javascript do using a # selector?
document.querySelector("ul#myList") would select and store the first <ul> element with the id "myList."
document.querySelectorAll("ul#myList") would select and store all <ul> elements with the id "myList" as a NodeList, including all matching elements.


Which of the following are true? (mark all that are true about the DOM)
Definition:

The DOM is a programming interface for web documents. It represents the structure and content of a web page, allowing programming languages like JavaScript to manipulate and interact with web content dynamically.
Tree Structure:

The DOM represents a web page as a hierarchical tree structure, where each element (e.g., HTML tags, attributes, and text) is a node in the tree. The top node is the document object, which represents the entire web page.
Elements and Nodes:

DOM elements represent HTML tags (e.g., <div>, <p>, <a>), and each has properties and methods you can interact with programmatically.
Nodes can be elements, attributes, text, or other parts of the page content.
Access and Manipulation:

DOM elements can be accessed and manipulated using programming languages, primarily JavaScript.
Common DOM methods include getElementById, querySelector, createElement, appendChild, removeChild, and many others.
You can change content, structure, and styling of web pages dynamically using DOM manipulation.
Events and Event Handling:

The DOM allows you to add event listeners to HTML elements, enabling you to respond to user interactions (e.g., clicks, keypresses) and other events (e.g., loading, resizing).
Event handling in the DOM is a fundamental part of creating interactive web applications.
Cross-Browser Compatibility:

The DOM is supported by all major web browsers. However, there might be small differences in how browsers implement specific features. Libraries like jQuery and modern JavaScript frameworks abstract these differences to provide a consistent experience.
Security and Cross-Site Scripting (XSS):

Security is a concern when working with the DOM. Unsanitized input or incorrect handling of user-generated content can lead to cross-site scripting (XSS) vulnerabilities. Proper input validation and escaping are crucial to prevent such security issues.
Web Development:

In web development, understanding the DOM is crucial for building responsive and interactive web applications.
Technologies like AJAX (Asynchronous JavaScript and XML) rely on the DOM to update parts of a web page without requiring a full page refresh.
Web Scraping and Automation:

In computer programming, the DOM is also used for web scraping, where programs extract data from web pages. Tools like Puppeteer and libraries like Beautiful Soup (for Python) are used in this context.
Web Accessibility:

The DOM plays a vital role in web accessibility by providing a structured and programmatic way to define content, roles, and states of web elements, making web applications more inclusive.
Browser Developer Tools:

Most modern web browsers provide developer tools that allow you to inspect the DOM, modify it in real-time, and debug JavaScript code. These tools are invaluable for web development and debugging.



By default, the HTML span element has a default CSS display property value of: 

Inline

By default, the HTML <span> element has a default CSS display property value of inline. This means that a <span> element is displayed inline within the flow of text, and it does not create a new block-level box like <div> or <p>. You can change the display property value to other values like block, inline-block, or none through CSS to control how it is rendered on the page.

How would you use CSS to change all the div elements to have a background color of red?
Css
div {
  background-color: red;
}
#FF0000 is red


How would you display an image with a hyperlink in HTML?

<a href="URL_of_the_Target_Page">
  <img src="URL_of_the_Image" alt="Image Description">
</a>
Example…..

<a href="https://www.example.com">
  <img src="image.jpg" alt="Example Image">
</a>


In the CSS box model, what is the ordering of the box layers starting at the inside and working out?



Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?
In this example, we use a span element with the class "green" to style the first word, "trouble," and make it green. The rest of the text remains unaffected. 

Use span to separate the word and use css to get the id and change it to green. 



What will the following code output when executed using a for loop and console.log?



How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
Javascript
// Select the element by its ID
const element = document.getElementById("byu");

// Change the text color to green
element.style.color = "green";



  
Paragraph: <p>
Ordered List: <ol>
Unordered List: <ul>
Second Level Heading: <h2>
First Level Heading: <h1>
Third Level Heading: <h3>



How do you declare the document type to be html?
<!DOCTYPE html>


What is valid javascript syntax for if, else, for, while, switch statements?
If and else:
if (condition) {
  // Code to execute if the condition is true
} else {
  // Code to execute if the condition is false
}

For loop: 
for (initialization; condition; iteration) {
  // Code to execute in each iteration
}

while (condition) {
  // Code to execute as long as the condition is true
}
switch (expression) {
  case value1:
    // Code to execute if expression equals value1
    break;
  case value2:
    // Code to execute if expression equals value2
    break;
  // Additional cases as needed
  default:
    // Code to execute if none of the cases match
}


What is the correct syntax for creating a javascript object?
let myObject = {
  key1: value1,
  key2: value2,
  // Add more key-value pairs as needed
};

Example:
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com"
//no comma on the final one
};



Is it possible to add new properties to javascript objects?
Yes, it is possible to add new properties to JavaScript objects even after the object has been created. There are several ways to add properties to an object:

There are 4 ways
Dot Notation
Bracket Notation
Object Literal Syntax
Object Methods
Dot notation:
let person = {
  firstName: "John",
  lastName: "Doe"
};

person.age = 30; // Adding a new property "age"

BracketNotation:
let person = {
  firstName: "John",
  lastName: "Doe"
};

person["age"] = 30; // Adding a new property "age"

Object Literal Syntax:
If you have an empty object, you can use object literal syntax to define properties:

let person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 30;

Object Methods
You can also use object methods like Object.assign() to add properties to an object:

javascript
Copy code
let person = {
  firstName: "John",
  lastName: "Doe"
};

Object.assign(person, { age: 30 }); // Adding a new property "age"





If you want to include JavaScript on an HTML page, which tag do you use?
<script src="your-script.js"></script>



Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?


Which of the following correctly describes JSON?
A lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate.

JSON is often used to transmit data between a server and a web application as an alternative to XML. It's designed to be easy to read for both humans and machines, making it a popular choice for data interchange in web development and other fields.


What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do?
chmod: Changes file permissions in Unix-like operating systems.

pwd: Prints the current working directory (displays the path of the current directory you're in).

cd: Changes the current directory (moves to a different directory).

ls: Lists the files and directories in the current directory.

vim and nano: Text editors in Unix-like systems, used to create and edit text files.

mkdir: Creates a new directory (folder).

mv: Moves or renames files and directories.

rm: Removes (deletes) files and directories.

man: Displays the manual pages for various commands, providing documentation and usage information.

ssh: Secure Shell, used to remotely connect to another computer or server over a secure network.

ps: Shows information about running processes, including process IDs, statuses, and resource usage.

wget: A command-line tool for downloading files from the internet.

sudo: Allows a permitted user to execute a command as the superuser or another user, as specified by security policies.



Which of the following console command creates a remote shell session?
ssh

Which of the following is true when the -la parameter is specified for the ls console command?
-l: It displays the files and directories in a "long" format. This format provides detailed information about each file or directory, including permissions, ownership, file size, modification date, and more.

-a: It includes hidden files and directories in the listing. Hidden files and directories are those whose names start with a dot (e.g., .examplefile or .hiddenfolder).

So, with the -la parameter, ls will display a long-format list of files and directories, including hidden ones. This is often used to get a comprehensive view of all the items in a directory, including those that are normally hidden from view.



Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?



Is a web certificate is necessary to use HTTPS.
Yes, a web certificate, specifically an SSL/TLS certificate, is necessary to use HTTPS (Hypertext Transfer Protocol Secure) on a website. HTTPS is the secure version of HTTP, and it encrypts the data transferred between a user's web browser and the web server to protect it from eavesdropping and tampering.

The SSL/TLS certificate is used to establish a secure connection between the user's browser and the web server. This certificate is issued by a trusted Certificate Authority (CA) and contains the public key and other information required to encrypt and decrypt data. When a user accesses a website over HTTPS, their browser verifies the certificate's authenticity to ensure that the connection is secure.

Without a valid SSL/TLS certificate, a website cannot establish a secure connection, and web browsers will typically display warnings to users, discouraging them from entering sensitive information on the site. Therefore, for security and trust reasons, a web certificate is essential for using HTTPS on a website.


Can a DNS A record can point to an IP address or another A record.

A DNS A (Address) record is used to map a domain or subdomain to an IPv4 address. It cannot directly point to another A record. An A record typically maps a domain or subdomain to an IPv4 address in the form of a numerical IP address, like "192.168.1.1."

However, you can achieve the effect of an A record pointing to another host by creating a CNAME (Canonical Name) record. A CNAME record allows one domain or subdomain to point to another domain or subdomain. This way, you can indirectly map a host to an A record, which in turn points to an IP address. The CNAME record indirectly allows one hostname to resolve to the same IP address as another hostname.

Here's an example:

You have an A record for "example.com" that points to IP address "192.168.1.1."
You create a CNAME record for "sub.example.com" and set it to point to "example.com."
In this scenario, "sub.example.com" effectively resolves to the same IP address as "example.com" because of the CNAME record.


Port 443, 80, 22 is reserved for which protocol?
Port 443 is reserved for HTTPS (Hypertext Transfer Protocol Secure), which is the secure version of HTTP used for encrypted web communication.
Port 80 is reserved for HTTP (Hypertext Transfer Protocol), which is used for unencrypted web communication.
Port 22 is reserved for SSH (Secure Shell), which is used for secure remote shell sessions and file transfers.



What will the following code using Promises output when executed?
