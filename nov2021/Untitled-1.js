

let singleton = {
    publicMethod1() {
        // Do something for everyone
        return "first example";
    },
    publicMethod2() {
        // Do something
    }
}

let privateSingleton = (function() {
    let privateData = "This is a secret message";

    function privateFunction() {
        console.log(privateData);
    }

    return {
        publicAction1() {
            return privateData + " but I can get it here 1"
        },
        publicAction2() {
            return privateData + " but I can get it here 2"
        }
    }
})()

console.log(singleton.publicMethod1(),privateSingleton.publicAction1(),privateSingleton.privateData)