# eider.js
`eider.js` is a simple CLI-progress bar for Node.

 - [Installation](#installation)
	 - [NPM](#with-npm-recommended)
	 - [Git](#with-git)
- [Usage](#usage)
	- [Import](#import)
	- [Example](#example)
	- [Options](#options)
	- [Methods](#methods)

![Demonstration](https://www.vincentriva.fr/media/eider.gif)

Inspired by Symfony Progress Bar (https://symfony.com/doc/current/components/console/helpers/progressbar.html)

# Installation
## With NPM (recommended)
`npm install eider.js --save`

## With Git
`git clone https://github.com/Treast/eider.js.git`
`mv ./eider.js/lib/eider.js ./foo/bar`

# Usage
## Import
`const  Eider  =  require('eider');`

## Example

      const  Eider  =  require('../lib/eider');

      // new Eider(progressBarSteps, progressBarLength, progressBarOptions)
      let  eider  =  new  Eider(50,  40);
      
      setInterval(()  =>  {
        eider.advance();
      },  300);
      
      eider.start();

## Options
|Name|Type|Default|Description|
|--|--|--|--|
|startChar|`char`|`[`|First character of the progress bar
|endChar|`char`|`]`|Last character of the progress bar
|doneChar|`char`|`#`|Character displayed when the step is done
|currentChar|`char`|`>`|Character displayed when the step is currently doing
|undoneChar|`char`|`-`|Character displayed when the step is undone
|count|`boolean`|`true`|Display the step count
|percentage|`boolean`|`true`|Display the percentage

## Methods

|Methods|Description|
|--|--|
|`start()`|Start the progress bar
|`stop()`|Stop the progress bar
|`advance(n)`|Increment the progress bar by `n` steps