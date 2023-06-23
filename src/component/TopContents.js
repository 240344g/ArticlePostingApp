import React from "react";
import Article from "./Article";
import "./css/TopContents.css";

class TopContents extends React.Component {
    render() {
        // 記事のjsonデータを取得
        const article_data_element = document.getElementById('articl_data');
        const article_data_json = article_data_element.getAttribute('data-json');

        // 記事のjsonデータをデコード
        const article_data = JSON.parse(article_data_json);

        return (
            <div className="TopContents_articles">
                {article_data.map((article_info, index) => {
                    return(
                        <Article 
                            key={index}
                            id = {article_info.id}
                            date = {article_info.date}
                            name = {article_info.user_name}
                            title = {article_info.title}
                            explanation = {article_info.explanation}
                            hearts = {article_info.hearts}
                        />
                    );
                })}
            </div>
        );
    }
}

export default TopContents;