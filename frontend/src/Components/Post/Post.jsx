import React from "react"
import './Post.css';

const Post = (props) => {
  const {posts} = props;
  function timeAgo(date) {
    const currentDate = new Date();
    const timestamp = date.getTime();
    const currentTimestamp = currentDate.getTime();
    const difference = currentTimestamp - timestamp;
    
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
      return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
      return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
      return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else {
      return `${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    }
  }
  
  function formatDate(date) {
    const dateobj = new Date(date);

    return dateobj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  }

  const sortedPosts = posts.sort((a, b) => {
    const dateTimeA = new Date(a.created_at).getTime();
    const dateTimeB = new Date(b.created_at).getTime();
    return dateTimeB - dateTimeA
  }); // Sort by most recent first

  return (
    <div className="post-div">
      <ul>
        {sortedPosts.map((post) => {
          const dateTime = new Date(post.created_at);
          const formattedTimeAgo = timeAgo(dateTime); 
          const formattedDate = formatDate(post.created_at)
          return (
            <li className='post' key={post.id}>
              <a href={`/?id=${post.id}`}>
                <div className="header">
                  <div>{post.title}</div>
                  <div className="author">Author: {post.name}</div>
                </div>
              </a>
              <p className='content'>{post.content.slice(0, 250)}.....
                <a href={`/?id=${post.id}`}>
                  <h2>Read More</h2>
                </a>
              </p>
              <div className="footer">
                <p className="time">{formattedDate}</p>
                <p className='timeago'>{formattedTimeAgo}</p>
              </div>
            </li>
          ); 
        })}    
      </ul>
    </div>
  )
};

export default Post;
