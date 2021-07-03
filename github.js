class Github
{
    constructor(){
    this.client_id='46a95b0cc98abd4fe6b5';
    this.client_secret='1f79753e100826462ed8f09d5ce2c320607bb5cb';
    this.count = 5;
    this.repos_sort = 'created:asc';
    }
    async getUser(user)
    {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reporesponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
       const repos = await reporesponse.json();
            return {profile , repos};
        
            // repos
        
        
    }
}