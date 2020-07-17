const chalk = require('chalk')
const yargs = require('yargs');
const notes = require('./notes.js');
yargs.version('1.1.0');
// creat add command 
yargs.command({
    command:"add",
    describe:'add a new note',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'The note title'
        },
        body:{
            type:'string',
            demandOption:true,
            describe:'Body of the note'
        }
    },
    handler(argv){
            notes.addNote(argv.title,argv.body);
    }
});
// creat remove note 
yargs.command({
    command:"remove",
    describe:'Remove a note',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'Removing note'
        }    
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});
//creat list command 
yargs.command({
    command:"list",
    describe:'list the notes',
    handler(argv){
        notes.listNote();
    }
});
//
yargs.command({
    command:"read",
    describe:'read a note',
    builder:{
        title:{
            type:'string',
            demandOption:true,
            describe:'Removing note'
        }    
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});
yargs.parse();