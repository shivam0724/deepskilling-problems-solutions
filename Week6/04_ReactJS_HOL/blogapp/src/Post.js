import React from "react";

export default class Post {
    constructor(id, title, body) {
        this.id = id;
        this.title = title;
        this.body = body;
    }
}

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    async loadPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
        this.setState({ posts: data });
    }

    componentDidMount() {
        this.loadPosts();
    }

    render() {
        return (
            this.state.posts.map(post => (
                <div key={post.id}>
                    <h3>Title: {post.title}</h3>
                    <p>Body: {post.body}</p>
                </div>
            ))
        )
    }

    componentDidCatch(err, info) {
        console.log(err)
        alert(info);
    }
}

export { Posts };