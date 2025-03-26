import './styles/index.css';

import DB1 from './assets/user-icon.png';
import DB2 from './assets/dollar-symbol-icon.png';



const profileDropdown = document.getElementById('profileDropdown') as HTMLButtonElement;
const dropdownContent = document.getElementById('dropdownContent') as HTMLDivElement;

profileDropdown.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownContent.classList.toggle('hidden');
});
document.addEventListener('click', () => {
            dropdownContent.classList.add('hidden');
});

const db1 = document.getElementById('db1') as HTMLImageElement;
const db2 = document.getElementById('db2') as HTMLImageElement;


db1.src = DB1;
db2.src = DB2;



const uploadInfoBtn = document.getElementById('dbUpload') as HTMLButtonElement;

uploadInfoBtn.addEventListener('click',() => {
    window.open("https://forms.fillout.com/t/2KB4XtDJTMus", "_blank");
})