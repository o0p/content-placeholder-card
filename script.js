const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const nameU = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

function getData() {
    header.innerHTML = '<img src="https://images.unsplash.com/photo-1611086336607-ea5bae9c3625?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" alt="" />';
    title.innerHTML = 'Lorem ipsum dolor sit amet.'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, ab.';
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/women/43.jpg" alt="">';
    nameU.innerHTML = 'Jane Doe';
    date.innerHTML = '22 Jan 2021';
}