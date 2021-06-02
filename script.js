/*
https://api.dictionaryapi.dev/api/v2/entries/<language_code>/<word>

As an example, to get definition of English word hello, you can send request to

https://api.dictionaryapi.dev/api/v2/entries/en_US/hello

https://dictionaryapi.dev/
*/
const search = document.getElementById('search');
const submit = document.getElementById('submit');

const meaningContainer = document.querySelector('.meanings');

const renderSynonym = function (data) {
  const html = `
    <ul class="mean">
         <li>${data.meanings[0].definitions[0].synonyms}</li>
     </ul>
    `;
  meaningContainer.insertAdjacentHTML('beforeend', html);
  meaningContainer.style.opacity = 1;
};

const getSynonym = function (synonyms) {
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en_US/${synonyms}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function ([data]) {
      // console.log(data.meanings[0].definitions[0].synonyms);
      renderSynonym(data);
    });
};
getSynonym('yes');
