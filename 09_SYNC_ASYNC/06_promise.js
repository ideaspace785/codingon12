console.log("Before")

async function displayCommits(){
    const user=await getUser(1);
    const repos=getRepo(user.gitHubUserName);// (["repo1", "repo2", "repo3"])
    const commit=getCommits(repos[0]);
    console.log(commit)
}
displayCommits();

console.log("After")

function getUser(id){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Reading a user from a DATABASE");
            res({
                id:id,
                gitHubUserName:"hong"
            })
        },1000)
    })
}
function getRepo(username){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("gitHub API...");
            res(["repo1", "repo2", "repo3"])
        },1000)
    })
}
function getCommits(commit){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            console.log("Commit");
            res({
                id:id,
                gitHubUserName:"hong"
            })
        },1000)
    })
}


