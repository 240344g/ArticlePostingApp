import React from "react";
import MyArticle from "./MyArticle";
import MyData from "./MyData";
import "./css/MyPageContents.css";

class MyPageContents extends React.Component {
    render() {
        // 記事のjsonデータを取得
        const article_data_element = document.getElementById('articl_data');
        const article_data_json = article_data_element.getAttribute('data-json');

        // 記事のjsonデータをデコード
        const article_data = JSON.parse(article_data_json);

        // ユーザ名所得
        const user_name_element = document.getElementById('user_name');
        const user_name = user_name_element.getAttribute("data-json");

        return (
            <div className="MyPageContents">
                <MyData 
                    user_name = {user_name}
                />
                <div className="MyPageContents_articles">
                    {article_data.map((article_info, index) => {
                        return(
                            <MyArticle 
                                key = {index}
                                article_id = {article_info.id}
                                date = {article_info.date}
                                name = {article_info.user_name}
                                title = {article_info.title}
                                explanation = {article_info.explanation}
                                hearts = {article_info.hearts}
                                body = {article_info.body}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MyPageContents;