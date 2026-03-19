try {
    console.log("Trying...");
    throw new Error("An error occurred");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("Cleaning up...");
}

function hlo(){
    try {
        let a=10;
        let b=0;
        console.log(a/b);
    }
    catch(err)
    {
console.log(error);
    }
    finally{
        console.log("rest of code");
    }
}