// portfolio-mobile menu
const bars = document.getElementById('pop');
const closeMenu = document.querySelector('.close');
const popUp = document.querySelector('.menu-up');

bars.addEventListener('click', () => {
  popUp.classList.add('pop-up');
});

closeMenu.addEventListener('click', () => {
  popUp.classList.remove('pop-up');
});

popUp.addEventListener('click', () => {
  popUp.classList.remove('pop-up');
});

// cards
const cardsUl = document.getElementById('cards');

const projects = [
  {
    id: 1,
    heading1: 'NAC',
    heading2: ['CANOPY', 'Back End Dev', '2022'],
    description: 'New apostolic church pentocst devine service 2022 Capstone project.',
    description2: `To capture the spirit of Pentecost,
     hundreds of thousands of members of the New Apostolic
      Church will be gathering this coming Sunday in one large congregation.
       The international Church leader, Chief Apostle Willhem Leber will be conducting
        the traditional central divine service in German, which will be broadcast throughout the world.`,
    featuredImage: './photos/newp/first-bg.jpg',
    featuredImage2: './photos/newp/embrame.jpg',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'https://kayonga99.github.io/Capstone',
    linkSource: 'https://github.com/Kayonga99/Capstone',
  },
  {
    id: 2,
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/multi-post.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,
    featuredImage2: './photos/Snapshoot+Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },
  {
    id: 3,
    heading1: 'Tonic',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-yonga.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,
    featuredImage2: './photos/Snapshoot-Portfolio.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
  },
  {
    id: 4,
    heading1: 'Multi-Post Stories',
    heading2: ['Canopy', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    featuredImage: './photos/Snapshoot-pro.png',
    description2: `Lorem Ipsum is simply dummy text of the
    printing and typesetting industry.
    Lorem Ipsum has been the industry's 
   standard dummy text ever since the 1500s,
    when an unknown printer took a galley of type
     and scrambled it to make a type specimen book.
     It has survived not only five centuries, 
     but also the leap into electronic typesetting, remaining essent`,
    description3: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    featuredImage2: './photos/multi-post.png',
    languages: ['html', 'css', 'javascript'],
    linkLive: 'location.href=\'https://kayonga99.github.io/My-Portfolio/index.html\'',
    linkSource: 'https://kayonga99.github.io/My-Portfolio',
    left: true,
  },

];

const projectCards = projects.map((card) => `
<li>
<section class="card-list">
  <div class="${card.left ? 'desk-top2' : 'desk-top'}">
    <img class="animated" src="${card.featuredImage2}" alt="work1Snapshot" />
    <img class="card" src="${card.featuredImage}" alt="work1Snapshot" />

    <div class="">
      <h3 class="tonic-class tonic-class-2">${card.heading1}</h3>
      <div class="canopy">
        <ul class="cards-ul">
        ${card.heading2.map((heading, index) => `<li class="info${index}">${heading}</li>`).join('')}
        </ul>
      </div>
      <p class="description">
${card.description}
      </p>
      <ul class="tools">
      ${card.languages.map((lang) => `<li class="tools-li">${lang}</li>`).join('')}
      </ul>
      <div class="view-project">
        <button class="btn" type="button" onclick='showPop(${card.id})'>See Project</button>
      </div>
    </div>
  </div>
</section>
</li>
`).join('');

cardsUl.innerHTML = projectCards;

// POPUP DATA
const openWindow = document.querySelector('.m-popUp');
const box = document.getElementById('project');

function popData(card) {
  const temp = document.createElement('template');
  temp.innerHTML += `<section class="card-list-23">
  <div class="desk-top">
    <div class="">
      <div class="x-class">
        <h3 class="tonic-class-23">${card.heading1}</h3>
        <h4 class="close-x">&times;</h4>
      </div>
        <div class="canopy">
          <ul class="cards-ul">
          ${card.heading2.map((heading, index) => `<li class="info${index}">${heading}</li>`).join('')}

          </ul>
        </div>
        <img class="card" src="${card.featuredImage}" alt="work1Snapshot" />
        <img class="nature-animated" src="${card.featuredImage2}" alt="nature animated picture" />
        <div class="src-div">

      <p class="src-description">
        ${card.description2}
      </p>
      <div class="div-src">
      <ul class="tools-src src-tools">
        <li class="tools-li-src"> html</li>
        <li class="tools-li-src">css</li>
        <li class="tools-li">javaScript</li>
        <li class="extra">github</li>
        <li class="extra">ruby</li>
        <li class="extra">Bootstraps  </li>
      </ul>
      <div class="view-project">
        <a class="src-btn" href="${card.linkLive} ">See live <img src="./photos/icons/btn-icon.png" alt="button-icon"> </a>
        <a class="src-btn" href="${card.linkSource}">See Source <img src="./photos/icons/blue-github.png" alt="github-icon"> </a>
      </div>
    </div>
    </div>
</section>
`;
  const box = document.getElementById('project');
  box.appendChild(temp.content);
}

/* eslint-disable */;
function showPop(id) {
  projects.find((card) => {
    if (Number(id) === Number(card.id)) {
      popData(card);
      openWindow.style.display = 'flex';
    }
  });
  const closeWindow = document.querySelector('.close-x');
const openModal = document.querySelector('.card-list-23')
closeWindow.addEventListener('click', () => {
  box.innerHTML= ''

  openWindow.style.display = 'none'
})

closeWindow.addEventListener('click', () => {
  box.innerHTML= ''

  openModal.style.display = 'none'
})
}

// form validation

function validateEmail(email, event, errorMsg) {
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    const msg = document.getElementById('form-div');
    msg.style.display = 'block';
    msg.innerText = errorMsg;
    msg.style.fontSize = '15px';
  }
}
const form = document.getElementById('form');
const email = document.getElementById('email')

email.addEventListener('click',() => {
  const msg = document.getElementById('form-div');
  msg.style.display = 'none';
})
form.addEventListener('submit', (event) => {
  const errorMessage = 'Please enter an email address without any upper-case letters.';
  validateEmail(form.elements.email.value, event, errorMessage);
});

// local-storage
const inputFields = document.forms['contact-form']
const mail = inputFields.email;
const messageInput = inputFields.comment;
const nameInput = inputFields.fullName;
const formElts = inputFields.querySelectorAll('input, textarea');


const saveToLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));
const getFromLocalStorage = (key) => JSON.parse(localStorage.getItem(key));

const formData = getFromLocalStorage('formData');
if (formData !== null) {
  nameInput.value = formData.name;
  mail.value = formData.email;
  messageInput.value = formData.message;
  
}
formElts.forEach((fe) => {
  fe.addEventListener('input', () => {
    const objectForLocalStorage = {
      name: nameInput.value,
      email: mail.value,
      message: messageInput.value,
    };
    saveToLocalStorage('formData', objectForLocalStorage);
  });
});
