const noteOutput = document.querySelector('.output');
const addNoteBtn = document.querySelector('#add-btn');
const randomNoteBtn = document.querySelector('#random-btn');
const noteModal = document.querySelector('#note-modal');
const noteModalTitleEl = document.querySelector('.modal-title');
const noteModalTextContentEl = document.querySelector('.modal-text-content');
const noteModalDateEl = document.querySelector('.modal-date');
const notes = [];

// // Inserting a new article element into the output section
// noteOutput.insertAdjacentHTML('beforeend', `
//     <article>
//         <h3>new note text</h3>
//         <p>Added On: 9/20/2024</p>
//     </article>
// `); // Note that tat in order to do a 'Template Literal' (i.e writing the HTML you want to insert in the HTML doc format), you DO NOT USE quotations ('' or ""), you have to use the 'backtick' (`) which is the same key on the keyboard as the tilda (~) or next to the number 1

function outputNotes(arrayOfNotes) { // 'arrayOfNotes' is a new parameter being passed through the outputNotes function, which is defined below

    noteOutput.innerHTML = '';

    for (const noteObj of arrayOfNotes) { // This 'for-of' loop loops over the 'arrayOfNotes'
        
        noteOutput.insertAdjacentHTML('beforeend', `
            <article class="border border-light-subtle p-2 rounded-2 text-black-50 mb-3">
                <h3>${noteObj.title}</h3>
                <p>${noteObj.textContent}</p>
                <p>Added On: ${noteObj.date}</p>
            </article>
        `);
    }
    // Using the title and textContent above, insert a new article into the output section
}

function gatherNotes() {
    let title;
    let textContent;
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + '/' + day + '/' + year;

    let keepAsking = true;

    while (keepAsking) {
        title = prompt('Please provide the title');
        textContent = prompt('Please provide the text content of your note');
        // If the title or textContent are not provided, ask them again for these two values
        if (title && textContent) {
            keepAsking = false;
        }   else {
            alert('You must enter both title and text content');
        }
    }

    const noteObject = {
        title: title,
        textContent: textContent,
        date: dateOutput
    }

    notes.push(noteObject);

    return notes;

}

function outputRandomNote() {
    const ranNum = Math.random();
    const index = Math.floor(ranNum * notes.length);
    const note = notes[index];

    noteModalTitleEl.innerText = note.title;
    noteModalTextContentEl.innerText = note.textContent;
    noteModalDateEl.innerText = note.date;

    $('#note-modal').modal('show');
    // noteModal.classList.add('show');
}

addNoteBtn.addEventListener('click', function() {
    const notesArray = gatherNotes();

    outputNotes(notesArray);
});

randomNoteBtn.addEventListener('click', outputRandomNote);