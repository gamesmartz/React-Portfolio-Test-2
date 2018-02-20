import React from'react';

const articles = {
    1: {
        title: 'Article One',
        content: 'Et reprehenderit anim consectetur sint et ex qui do culpa incididunt duis commodo consequat. Amet sint minim consequat adipisicing culpa qui cillum officia consectetur. Aliquip ipsum tempor ad enim culpa duis. Magna ea amet id ullamco fugiat excepteur culpa anim tempor Lorem.'
    },
    2: {
        title: 'Article One',
        content: 'Et reprehenderit anim consectetur sint et ex qui do culpa incididunt duis commodo consequat. Amet sint minim consequat adipisicing culpa qui cillum officia consectetur. Aliquip ipsum tempor ad enim culpa duis. Magna ea amet id ullamco fugiat excepteur culpa anim tempor Lorem.'
    },
    3: {
        title: 'Article One',
        content: 'Et reprehenderit anim consectetur sint et ex qui do culpa incididunt duis commodo consequat. Amet sint minim consequat adipisicing culpa qui cillum officia consectetur. Aliquip ipsum tempor ad enim culpa duis. Magna ea amet id ullamco fugiat excepteur culpa anim tempor Lorem.'
    },
    4: {
        title: 'Article One',
        content: 'Et reprehenderit anim consectetur sint et ex qui do culpa incididunt duis commodo consequat. Amet sint minim consequat adipisicing culpa qui cillum officia consectetur. Aliquip ipsum tempor ad enim culpa duis. Magna ea amet id ullamco fugiat excepteur culpa anim tempor Lorem.'
    }
}

export default props => {
    const article = articles[props.match.params.articleId] || {title: 'Unavailabe', content:'No Content'}
    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.content}</p>
        </div>
    )
}