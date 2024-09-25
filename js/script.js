const darkModeBtn = document.querySelector('#toggle-btn');
const addBtn = document.querySelector('#add-btn');

function toggleDarkMode() {
    const mode = localStorage.getItem('mode');

    if(mode === 'light') {
        document.body.classList.add('dark');  // This injects the class of 'dark' to any element in the html document that has a class of 'toggle-btn'
        localStorage.setItem('mode', 'dark');
    }   else {
        document.body.classList.remove('dark');
        localStorage.setItem('mode', 'light');
    }
}

function addStudent(){
    const nameInput = document.querySelector('#name-input');
    const studentName = nameInput.value;

    const rawOldStudentArray = localStorage.getItem('students');
    const studentArray = JSON.parse(rawOldStudentArray) || [];

    studentArray.push(studentName);

    localStorage.setItem('students', JSON.stringify(studentArray));

    nameInput.value = '';
    outputStudents();

}

function outputStudents() {
    const rawOldStudentArray = localStorage.getItem('students');
    const studentArray = JSON.parse(rawOldStudentArray) || [];
    const studentOutput = document.querySelector('#student-output');

    studentOutput.innerHTML = '';

    if (!studentArray.length) {
        studentOutput.innerHTML = `<li>No students have been added</li>`;
    }

    for (const student of studentArray) {
        studentOutput.insertAdjacentHTML('beforeend', `
            <li>${student}</li>
            `);
    }
}

function pageLoad() {
    const mode = localStorage.getItem('mode');

    if(mode === 'dark') {
        document.body.classList.add('dark');  // This injects the class of 'dark' to any element in the html document that has a class of 'toggle-btn'
    }


    darkModeBtn.addEventListener('click', toggleDarkMode);
    addBtn.addEventListener('click', addStudent);

    outputStudents();
}

pageLoad();

// darkModeBtn.addEventListener('click', toggleDarkMode); // This is the event listener for using the toggle button

