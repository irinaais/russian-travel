const select = document.querySelector('select');
const allLang = ["ru", "en"];

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = `${window.location.pathname}#${lang}`;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#ru";
    location.reload();
  }

  select.value = hash;

  document.querySelector("html").lang = hash;
  document.querySelector("title").innerHTML = langArr["lead__title"][hash];
  document.querySelector("meta[name='description']").content = langArr["metaDescription"][hash];
  document.querySelector("meta[name='keywords']").content = langArr["metaKeywords"][hash];
  document.querySelector("meta[name='author']").content = langArr["metaAuthor"][hash];

  for (let key in langArr) {
    let element = document.querySelector(`.${key}`);
    let translate = langArr[key][hash];
    if (element && translate) {
      element.innerHTML = translate;
    }
  }
}

changeLanguage();