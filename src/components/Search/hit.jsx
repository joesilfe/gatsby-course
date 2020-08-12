import React from 'react';
import PostItem from '../PostItem/postItem';


const Hit = ({ hit }) => {
    return (
        <PostItem
            key={hit.index}
            slug={hit.fields.slug}
            background={hit.background}
            category={hit.category}
            date={hit.date}
            timeToRead={hit.timeToRead}
            title={hit.title}
            description={hit.description}
        />
    );
};

export default Hit;