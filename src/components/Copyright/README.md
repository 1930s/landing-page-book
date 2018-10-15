<a style="float:right; margin-top: 30px;" target="_blank" href="https://github.com/front10/landing-page-book/edit/master/src/components/Copyright/README.md"> <img width="15px;" src="https://assets-cdn.github.com/images/icons/emoji/unicode/270f.png"/> Edit on Github
</a>

# Copyright

[![standard-readme compliant](https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## Overview
`@front10/landing-page-book/Copyright` is used to create copyright.

## How to use
1- Importing bootstrap style

```js
import "bootstrap/dist/css/bootstrap.min.css";
```
2- Add following content to import the component:

```js
import Copyright from "@front10/landing-page-book/dist/components/Copyright";
import "@front10/landing-page-book/dist/components/Copyright/style.css";
```

> Note: For including all components styles once you can use [a theme](https://github.com/front10/landing-page-book/wiki/Theming).

3- Put this code into jsx page:
```html
<Copyright text="Fron10, inc"/>
```
<a target="_blank" href="https://codesandbox.io/s/2oqww8r56n">
  <img alt="Edit Copyright" src="https://codesandbox.io/static/img/play-codesandbox.svg">
</a>

## Properties:

| </br>Name   | </br>Type | </br>Summary                                                                                 | 
| ------------| - | ------------------------------------------------------------------------------------------------------ |
| showCopyRightSymbol      | `Boolean` | Show or hide `©` symbol. Default `true` |
| showCopyRightText      | `Boolean` | Show or hide copy right text. Default `true` |
| showYear      | `Boolean` | Show or hide year in copyright. Default `true` |
| showAllRightText      | `Boolean` | Show or hide all right reserved text. Default `true` |
| copyRightText      | `String` | Copy right text. Default `"Copyright"` |
| allRightText      | `String` | All rights reserved text. Default `"All rights reserved"` |
| text      | `String` | Text in copyright, ex: `Front10, Inc`. Default `""` |