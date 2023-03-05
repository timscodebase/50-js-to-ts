const header = document.getElementById('header') as HTMLDivElement
const title = document.getElementById('title') as HTMLDivElement
const excerpt = document.getElementById('excerpt') as HTMLDivElement
const profile_img = document.getElementById('profile_img') as HTMLDivElement
const username = document.getElementById('username') as HTMLDivElement
const date = document.getElementById('date') as HTMLDivElement

const animated_bgs = document.querySelectorAll('.animated-bg') as NodeListOf<HTMLImageElement>
const animated_bg_texts = document.querySelectorAll('.animated-bg-text') as NodeListOf<HTMLImageElement>

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />'
  title.innerHTML = 'Lorem ipsum dolor sit amet'
  excerpt.innerHTML =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
  username.innerHTML = 'John Doe'
  date.innerHTML = 'Oct 08, 2020'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
