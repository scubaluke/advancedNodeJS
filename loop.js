// node myFile.js 

const pendingTimers = [];
const pendingOSTasks = []
const pendingOperations = []

//  new timers, tasks and operations are recorded from myFile running
myFile.runContents();

function shouldContinue() {
    // Check one: any pending setTimeout, setInterval or set Immediate?
    // Check two: any pending OS task, such as server listing on port?
    // Check three: any pending long running operations? such as FS module.
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length
}

//  entire body  executes in one 'tick'
while (shouldContinue) {
    
}


// exit back to terminal