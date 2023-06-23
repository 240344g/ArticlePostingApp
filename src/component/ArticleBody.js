import React from 'react';
import "./css/ArticleBody.css";

class ArticleBody extends React.Component {
    render() {
        return (
            <div className="article_contents_article">
                <h1 className="article_contents_article_title">{this.props.title}</h1>
                <p className="article_contents_article_date">{this.props.date}</p>
                <h2 className="article_contents_article_name">{this.props.name}</h2>
                <p className="article_contents_article_explanation">{this.props.explanation}</p>
                <hr className="article_contents_article_line"/>
                <p className="article_contents_article_body">{this.props.body}</p>
            </div>
        );
    }
}

export default ArticleBody;