const fs = require('fs');
const  chalk = require('chalk');
const getNotes = function () {
    return 'Your notes...'
}
const addNote = (title,body) => {
    const notes = loadNotes();
    const dublicat = notes.find((note) => note.title===title);

    if(!dublicat){
       notes.push({
            title:title,
            body:body
        });
        saveNote(notes);
        console.log(chalk.green.inverse('New note added '));
    }else{
        console.log(chalk.red.inverse('this is dublicated note .'));
    }
}
const removeNote = (title) => {
    const notes = loadNotes();
    const newNotes = notes.filter((note)=> note.title !== title); 

    if(notes.length===newNotes.length){
        return console.log(chalk.red.inverse('No note found!'));
    }else{
        saveNote(newNotes);
        console.log(chalk.green.inverse('Note removed'));
    }
}
const listNote = () => {
    console.log(chalk.inverse('Your Notes '));
    loadNotes().forEach(element => {
        console.log(chalk.bgGreen.bold(element.title));
    });
}
const readNote = (title) =>{
    const note = loadNotes().find((note) => note.title === title);
    if(note){
        console.log(chalk.inverse('Title: ')+chalk.green.inverse(title));
        console.log(chalk.inverse('Body: ')+chalk.green.inverse(note.body));
    }else{
        console.log(chalk.inverse.red('No Note found!'));
    }
}
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); 
    }catch(ex){
        return [];
    }
}
const saveNote = (notes) => {
    const noteJson = JSON.stringify(notes);
    fs.writeFileSync('notes.json',noteJson);
}
module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNote,
    readNote
}