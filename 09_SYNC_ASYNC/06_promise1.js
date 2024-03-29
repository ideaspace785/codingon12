console.log("Before")

async function displayCommits(){
    try{
    const commit=getCommits(repos[0]);
    console.log(commit)
}catch(err){
    console.log("error: ", err.message)
}
}
displayCommits();

console.log("After")

function getUser(id){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        console.log("Reading a user from a DATABASE");
        res({id:id, gitHubUsername:'hong'})
      } , 1000)
    })
  }
  function getRepo(username){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        console.log("gitHub API...");
        res(['repo1','repo2','repo3'])
      } , 1000)
    })
  }
  function getCommits(repo){
    return new Promise((res,rej)=>{
      setTimeout(()=>{
        console.log("Commits");
        res(['commit'])
      } , 1000)
    })
  }

