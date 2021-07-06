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
    // 1) node looks at pending timers and sees if any functions are ready to be called. set timout, setInterval
    // 2) Node  looks at pending OS tasks and pendingOperations and calls relevant callbacks
    // 3) Pause execution. Continue when... 
    // - new pending OS task is done
    // - new pending operation is done
    // - a timer is about to complete

    //4) look at pending timers. Call any setImmediate
    //5) handle any 'close' events
}


// exit back to terminal