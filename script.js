// Прогресс бар
function loader(){
    document.querySelector('.loaderContainer').classList.add('active')
}

function fadeOut(){
    setTimeout(loader, 3000);
}
fadeOut();

// Прокрутка наверх при перезагрузке
window.addEventListener('beforeunload', ()=>{
    window.scrollTo(0, 0);
})

// настройка
let options = {
    root:null,
    rootMargin: '5px',
    threshold: 0.5
}

//функция обратного вызова
let callback = function(entries, observer){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('find', entry);
            entry.target.classList.add('active');
        }
    });
}

//наблюдатель
let observer = new IntersectionObserver(callback, options);
//определяем элементы за которыми наблюдаем
let targets = document.querySelectorAll('.animh');
targets.forEach(target => {
    observer.observe(target);
});

let newtargets = document.querySelectorAll('.animp');
newtargets.forEach(target => {
    observer.observe(target);
});

let VSHPMlog = document.querySelectorAll('.VSHPMlog');
VSHPMlog.forEach(target => {
    observer.observe(target);
});

let studlog = document.querySelectorAll('.studlog');
studlog.forEach(target => {
    observer.observe(target);
});

let Innopolislog = document.querySelectorAll('.Innopolislog');
Innopolislog.forEach(target => {
    observer.observe(target);
});

let skillsTable = document.querySelectorAll('.skillsTable');
skillsTable.forEach(target => {
    observer.observe(target);
});

let expTable = document.querySelectorAll('.expTable');
expTable.forEach(target => {
    observer.observe(target);
});

//Крутилка
const center = document.querySelector('.bottle');
const obj1 = document.querySelector('.firstPost');
const obj2 = document.querySelector('.secondPost');
const obj3 = document.querySelector('.theerdPost');

const orbitRadius = 150;
const obj1Radius = 40;
const obj2Radius = 40;
const obj3Radius = 40;
const obj1Speed = 0.002;
const obj2Speed = 0.002;
const obj3Speed = 0.002;

let obj1Angle = 0;
let obj2Angle = Math.PI*3/4; 
let obj3Angle = Math.PI*5/4; 

function moveObjects() {
  const centerPosition = {
    x: center.offsetLeft + center.offsetWidth / 15,
    y: center.offsetTop + center.offsetHeight / 15
  };

  const obj1X = centerPosition.x + orbitRadius * Math.cos(obj1Angle) - obj1Radius;
  const obj1Y = centerPosition.y + orbitRadius * Math.sin(obj1Angle) - obj1Radius;
  obj1.style.left = obj1X + 'px';
  obj1.style.top = obj1Y + 'px';

  const obj2X = centerPosition.x + orbitRadius * Math.cos(obj2Angle) - obj2Radius;
  const obj2Y = centerPosition.y + orbitRadius * Math.sin(obj2Angle) - obj2Radius;
  obj2.style.left = obj2X + 'px';
  obj2.style.top = obj2Y + 'px';

  const obj3X = centerPosition.x + orbitRadius * Math.cos(obj3Angle) - obj3Radius;
  const obj3Y = centerPosition.y + orbitRadius * Math.sin(obj3Angle) - obj3Radius;
  obj3.style.left = obj3X + 'px';
  obj3.style.top = obj3Y + 'px';

  obj1Angle += obj1Speed;
  obj2Angle += obj2Speed;
  obj3Angle += obj3Speed;

  requestAnimationFrame(moveObjects);
}

moveObjects();
