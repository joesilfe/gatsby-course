import React from 'react';
import PropTypes from 'prop-types';
import ReactDisqusComments from 'react-disqus-comments';

import * as S from './commentsCss';

const Comments = ({ url, title }) => {
    // Quando tiver um url do seu servido adicione na variável abaixo
    const completeURL = `https://jkgamer10.com.br${url}`

    return (
        <S.CommmentsWrapper>
            <S.CommmentsTitle>Comentários</S.CommmentsTitle>
            <ReactDisqusComments
                shortname="jkgamer10"
                identifier={url}
                title={title}
                url={completeURL}
            />
        </S.CommmentsWrapper>
    );
};

Comments.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default Comments;