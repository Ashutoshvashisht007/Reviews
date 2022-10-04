// local reviews data
const reviews = [
  {
    id: 1,
    name: "Nikhil Pathania",
    job: "web developer",
    img:
      "./pass.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis quia maiores aliquam, assumenda, autemeius fugiat quasi error provident eaque nihil id dolorem optio nulla! Saepe aperiam aspernatur numquam. Vero laudantium reiciendis ipsam.",
  },
  {
    id: 2,
    name: "Dhruv Kumar",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis quia maiores aliquam, assumenda, autemeius fugiat quasi error provident eaque nihil id dolorem optio nulla! Saepe aperiam aspernatur numquam. Vero laudantium reiciendis ipsam.",
  },
  {
    id: 3,
    name: "Anurag Pandey",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis quia maiores aliquam, assumenda, autemeius fugiat quasi error provident eaque nihil id dolorem optio nulla! Saepe aperiam aspernatur numquam. Vero laudantium reiciendis ipsam.",
  },
  {
    id: 4,
    name: "Sarthak",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum corporis quia maiores aliquam, assumenda, autemeius fugiat quasi error provident eaque nihil id dolorem optio nulla! Saepe aperiam aspernatur numquam. Vero laudantium reiciendis ipsam.",
  },
];

// select items

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
// 53:53
let currItem = 0;

// load initial item

window.addEventListener('DOMContentLoaded',()=>{
  Person(currItem);
});

// show person based of item

function Person(showPerson)
{
  if(currItem < 0)
  {
    currItem = 0;
  }
  const item = reviews[showPerson];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next

nextBtn.addEventListener("click",()=>{
  currItem++;
  if(currItem >= reviews.length)
  {
    currItem = 0;
  }
  Person(currItem);
});

// show prev

prevBtn.addEventListener("click",()=>{
  currItem--;
  if(currItem < 0)
  {
    currItem = reviews.length - 1;
  }
  Person(currItem);
});

// surprise me

randomBtn.addEventListener("click",()=>{
  const getRandom = Math.floor(Math.random()*reviews.length);
  Person(getRandom);
});
