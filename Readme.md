<div class = "typescript" >
    <h1> why do we need to compile typescript to javascript</h1>
    <div>
    TypeScript, as a superset of JavaScript, introduces types and other features not present in JavaScript. Browsers and Node.js understand JavaScript but do not directly understand TypeScript. 
    </div>

    <h1> way to transpile </h1>
    <div>
    1. transpile the TypeScript file main.ts into a JavaScript file : "tsc main.ts"
    2. run the main.js file using Node.js :                  "tsc main.ts  && node main.js" 
    </div> 

    <h2> Access Modifiers</h2>
    <div> public: can modify outside of class, private: cannot  , protected </div>

    <h2> Rules </h2>
    <ul>1. use camel rule for properties/methods, use Pascal for interface/Class name, _ in front of the fields  </ul>
    <ul>2. Module : each file is module if it's exported! Remember to export and import the module in the ts file if you need to use it.</ul>
    <ul></ul>
</div>
<h1> Angular</h1>
<ul> 1. library name as the module name: "from '@Angular/core'</ul>