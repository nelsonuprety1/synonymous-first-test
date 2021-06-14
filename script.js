'use strict';
/*
https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

As an example, to get definition of English word hello, you can send request to

https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

https://dictionaryapi.dev/
*/

const submit = document.querySelector('#submit');

const meaningContainer = document.querySelector('.meanings');

const renderSynonym = function (data) {
  const html = `
    <ul class="mean">
         <li>${data.meanings[0].definitions[0].synonyms}</li>
     </ul>
    `;
  // meaningContainer.insertAdjacentHTML('beforeend', html);
  meaningContainer.innerHTML = html;
  meaningContainer.style.opacity = 1;
};

function getSynonym() {
  const searches = document.querySelector('#search');
  const search = searches.value.trim();
  // searches.value = '';

  if (search === '') return;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function ([data]) {
      renderSynonym(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  // searches.value = '';
}

submit.addEventListener('click', getSynonym);

// submit.addEventListener('click', function () {
//   const searches = document.querySelector('#search');
//   const search = searches.value.trim();
//   searches.value = '';

//   const getSynonym = function () {
//     if (search === '') return;
//     fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${search}`)
//       .then(function (response) {
//         console.log(response);
//         return response.json();
//       })
//       .then(function ([data]) {
//         renderSynonym(data);
//       });
//   };
//   getSynonym();
//   getSynonym();
// });
