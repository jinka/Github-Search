export class User {

constructor(
    public login:string,
    public id:number, 
    public avatar_url:string,
    public name:string, 
    public company:string,
    public blog:string,
    public location:string,
    public followers:number,
    public following:number,
    public gists_url:number,
    public created_at:string,
    public public_repos:number, 
    public public_gists:number,
    public creationDate:string,
    public updated_at:string){}
}

// Api out fields
// {
//     "login": "jinka",
//     "id": 8039543,
//     "node_id": "MDQ6VXNlcjgwMzk1NDM=",
//     "avatar_url": "https://avatars1.githubusercontent.com/u/8039543?v=4",
//     "gravatar_id": "",
//     "url": "https://api.github.com/users/jinka",
//     "html_url": "https://github.com/jinka",
//     "followers_url": "https://api.github.com/users/jinka/followers",
//     "following_url": "https://api.github.com/users/jinka/following{/other_user}",
//     "gists_url": "https://api.github.com/users/jinka/gists{/gist_id}",
//     "starred_url": "https://api.github.com/users/jinka/starred{/owner}{/repo}",
//     "subscriptions_url": "https://api.github.com/users/jinka/subscriptions",
//     "organizations_url": "https://api.github.com/users/jinka/orgs",
//     "repos_url": "https://api.github.com/users/jinka/repos",
//     "events_url": "https://api.github.com/users/jinka/events{/privacy}",
//     "received_events_url": "https://api.github.com/users/jinka/received_events",
//     "type": "User",
//     "site_admin": false,
//     "name": "Dayud Mohamed Farah",
//     "company": "ONKODTECH",
//     "blog": "www.daudshuuti.com",
//     "location": "Nairobi",
//     "email": null,
//     "hireable": null,
//     "bio": "My name is Dayud, I live in Kenya. I like technology and to be a developer.",
//     "public_repos": 24,
//     "public_gists": 0,
//     "followers": 2,
//     "following": 0,
//     "created_at": "2014-07-01T17:13:16Z",
//     "updated_at": "2019-01-22T12:45:14Z"
//   }
