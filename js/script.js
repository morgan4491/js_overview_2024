const noteOutput = document.querySelector('.output');
const addNoteBtn = document.querySelector('#add-btn');


// // Inserting a new article element into the output section
// noteOutput.insertAdjacentHTML('beforeend', `
//     <article>
//         <h3>new note text</h3>
//         <p>Added On: 9/20/2024</p>
//     </article>
// `); // Note that tat in order to do a 'Template Literal' (i.e writing the HTML you want to insert in the HTML doc format), you DO NOT USE quotations ('' or ""), you have to use the 'backtick' (`) which is the same key on the keyboard as the tilda (~) or next to the number 1

function getInfo() {
    const title = prompt('Please provide the title');
    const textContent = prompt('Please provide the text content of your note');
    const date = new Date();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const dateOutput = month + '/' + day + '/' + year;

    console.log(dateOutput);

    // Using the title and textContent above, insert a new article into the output section
    noteOutput.insertAdjacentHTML('beforeend', `
        <article class="border border-light-subtle p-2 rounded-2 text-black-50 mb-3">
            <h3>${title}</h3>
            <p>${textContent}</p>
            <p>Added On: ${dateOutput}</p>
        </article>
    `);
}

addNoteBtn.addEventListener('click', getInfo);