interface IOrganizationDetails {
    id: number;
    login: string;
    name: string;
    description: string;
    avatar_url: string;
    repos_url: string;
    created_at: Date;
    followers: number;
    following: number;
    location: string;
    html_url: string;
    blog: string;
    email: string;
    public_repos: number;
}

export default IOrganizationDetails;