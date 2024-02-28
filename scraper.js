// ==UserScript==
// @name        Project #2
// @namespace   Violentmonkey Scripts
// @include     https://www.nytimes.com/*
// @grant       none
// @version     1.0
// @author      Connor Dunn
// @description 4/13/2023, 10:29:03 AM
// ==/UserScript==

// 1) My script is intened to work on NYTimes articles.
//      such as this article: https://www.nytimes.com/2023/04/19/world/europe/ukraine-russia-donbas-propaganda.html
// 2) Without my script, the author(s), date, and title are found scattered around the page.
// 3) With my script, with the click of the button, this info will be displayed as a chicago citation in the console for easier use.
// 4) My code relied on:
//    - using .onclick so that this info can be displayed at the users control.
//    - the Map() function to help with removing the commas from the existing array to put on a new one.
//    - string formatting and slice() to make the info fit the correct format.
//    - i used trim() to trim the unwanted whitespaces from the title and publisher.
//
// Resources used:
  // I used MDN:
  // https://developer.mozilla.org/en-US/
  // to research the syntax and methods of many functions in this project.
  //
  // I also used this website to learn how to get the current URL of a webpage:
  // https://developer.mozilla.org/en-US/


const button = document.createElement('button')

// fix the button to the bottom left of the screen
button.style.position = 'fixed'
button.style.backgroundColor = 'cyan'
button.style.fontWeight = 'bold'
button.style.margin = '1vw'
button.style.padding = '1vw'
button.style.bottom = '10px'
button.style.left = '10px'
button.style.borderRadius = '0.4vw'

button.innerText = 'Citation Info 📚'


// onclick I want the citation info to be spit out into the console.
button.onclick = function () {
  console.log('clicked');

  // get the elements with the info
  const byl = document.getElementsByName('byl')[0].content;
  const pdate = document.getElementsByName('pdate')[0].content;
  const title = document.getElementsByTagName('Title')[0].textContent;
  const url = getCurrentURL();
  //console.log(byl, pdate, title, url);

  // split the names by spaces
  const bylSplit = byl.split(' ');
  //console.log(bylSplit);

  // filter out 'by' and 'and'
  let resultByl = bylSplit.filter((word) => {
    if (word != 'By' && word != 'and'){
      return word;
    }
  })

  // format the title and publisher
  function titlePub(string) {
    let output = ''
    elms = string.split('-');
    const mainTitle = elms[0].trim();
    const pub = elms[1].trim();

    output += `"${mainTitle}." ${pub}.`;
    return output
  }
  //console.log(titlePub(title))


  // get the URL
  function getCurrentURL() {
    return window.location.href;
  }


  // format the authors' names
  function namesFormat(names) {
    let output = '';

    // remove the commas
    const namesFixed = names.map((name) => name.replace(',', ''));

    // put the names in the correct format
    if (namesFixed.length == 2) {
      output += `${namesFixed[1]}, ${namesFixed[0]}.`
    }

    else if (namesFixed.length == 4) {
      output += `${namesFixed[1]}, ${namesFixed[0]}, and ${namesFixed[2]} ${namesFixed[3]}.`
    }

    else if (namesFixed.length == 6) {
      output += `${namesFixed[1]}, ${namesFixed[0]}, ${namesFixed[2]} ${namesFixed[3]}, and ${namesFixed[4]} ${namesFixed[5]}.`
    }

    else if (namesFixed.length >= 8) {
      output += `${namesFixed[0]} ${namesFixed[1]} et al.`
    }
    return output
  }
  //console.log(namesFormat(resultByl));


  function dateFormat(date) {
    let output = '';
    months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
                  "November", "December" ];

    const year = date.slice(0, 4);
    //console.log(year);
    const month = parseInt(date.slice(4, 6));
    //console.log(month);
    const day = date.slice(6);
    //console.log(day);

    output += `${months[month - 1]} ${day}, ${year}.`
    return output;
  }
  //console.log(dateFormat(pdate));


  // get the citation:
  console.log(namesFormat(resultByl), titlePub(title), dateFormat(pdate), url);
  alert(`${namesFormat(resultByl)} ${titlePub(title)} ${dateFormat(pdate)} ${url}`);

}

document.body.append(button)
