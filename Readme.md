<div class = "typescript" >
    <h1> why do we need to compile typescript to javascript</h1>
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
<h1> Angular</h1>
<ul> 1. library name as the module name: "from '@Angular/core'</ul>