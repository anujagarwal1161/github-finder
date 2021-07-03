//init github
const github = new Github;
// init UI
const ui = new UI;
document.getElementById('username').addEventListener('keyup',
function(e)
{
const userText = e.target.value;
if(userText !== '')
{
    // Make http call
    github.getUser(userText).then(data => {
        if(data.profile.message === 'Not Found')
        {
            ui.showAlert('User Not Found' , 'alert alert-danger');
        }
        else
        {
           ui.showProfile(data.profile);
           ui.showRepos(data.repos);
           
        }
    });
}
else
{
    // clear profile
    ui.clearProfile();
}  
});