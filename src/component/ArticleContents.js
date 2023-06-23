import React from "react";
import ArticleBody from "./ArticleBody";
import Heart from "./Heart";
import "./css/ArticleContents.css";

class ArticleContents extends React.Component {
    render() {
        // 記事のjsonデータを取得
        const article_data_element = document.getElementById('articl_data');
        const article_data_json = article_data_element.getAttribute('data-json');

        // 記事のjsonデータをデコード
        const article_data = JSON.parse(article_data_json);

        return (
            <div className="article_contents">
                <ArticleBody
                    id = {article_data.id}
                    date = {article_data.date}
                    name = {article_data.user_name}
                    title = {article_data.title}
                    explanation = {article_data.explanation}
                    body = {article_data.body}
                    hearts = {article_data.hearts}
                />
                <Heart 
                    is_pushed = {article_data.is_pushed}
                    id = {article_data.id}
                />
            </div>
        );
    }
}

export default ArticleContents;