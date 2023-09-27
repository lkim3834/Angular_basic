<div class = "typescript" >
   <h1> TYPESCRIPT </h1>
    <h2> why do we need to compile typescript to javascript</h2>
    <p>
    TypeScript, as a superset of JavaScript, introduces types and other features not present in JavaScript. Browsers and Node.js understand JavaScript but do not directly understand TypeScript. 
    </p>
     <h2>Way to Transpile</h2>
<ol>
    <li>Transpile the TypeScript file main.ts into a JavaScript file: <code>tsc main.ts</code></li>
    <li>Run the main.js file using Node.js: <code>tsc main.ts && node main.js</code></li>
</ol>

<h2>Access Modifiers</h2>
<ul>
    <li><strong>public:</strong> Can be modified outside of the class.</li>
    <li><strong>private:</strong> Cannot be accessed outside of the class.</li>
    <li><strong>protected:</strong> Can be accessed within the class and its subclasses.</li>
</ul>

<h2>Rules</h2>
<ol>
    <li>Use camelCase for properties/methods.</li>
    <li>Use PascalCase for interface/Class names.</li>
    <li>Place an underscore in front of the fields.</li>
    <li>Module: Each file is a module if it's exported. Remember to export and import the module in the ts file if you need to use it.</li>
</ol>

</div>
<div class = "Angular">
<h1> ANGULAR</h1>
    <h2> Module</h2>
        <ul> library name as the module name: "from '@Angular/core'</ul>
    <h2>Commands<h2>
        <ul>ng new "filename" : create new Angular project</ul>
        <ul>ng serve : to run the app in a web server </ul>
        <ul>ng g c "component name": generate a component with this ng</ul>
        <ul>ng g s "service name" : generate a service for HTML endpoint </ul>
        <ul>ng --help  : to view all commands</ul>
    <h2>Bundles</h2>
        <p>All style sheets are compiled into a JavaScript Bundle</p>
    <h2>app-root</h2>
        <p>When you add codes on "app.component.html", the code you created would go under the app-root element that you have on "index.html"</p>
    <h2>Dependency Injections</h2>
    <p>Used to pass instances of services (or other classes) that a class depends on</p>
    <span>services: for calling an HTTP service request</span>
</div >