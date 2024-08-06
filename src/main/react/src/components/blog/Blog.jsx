import React from "react";

import BlogNav from "./BlogNav";
import Posts from "./Posts";

const Blog = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <BlogNav />
            <Posts />
        </div>
    );
};

export default Blog;
