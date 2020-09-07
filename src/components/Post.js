import React from 'react';
import Avatar from '@material-ui/core/Avatar';

function Post({username, userImage, imageLink, caption}) {
    return (
        <div className="post">
            {/* POST HEADER */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    src={userImage}
                    alt={username}
                />
                <h3>{username}</h3>
            </div>

            {/* POST IMAGE */}
            <img className="post__image" src={imageLink} alt="postImage" />

            {/* POST CAPTION */}
            <h4 className="post__text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post
