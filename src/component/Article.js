import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import "./css/Article.css";

class Article extends React.Component {
    render() {
        return (
            <form className='Article' action='afterLogin/OpenArticle' method='post'>
                <button className='Article_button' name='article_id' value={this.props.id}>
                    <p className='Article_user_name margin_0'>{this.props.name}</p>
                    <p className='Article_date font_size_20 margin_left_15'>{this.props.date}</p>
                    <p className='Article_title margin_0'>{this.props.title}</p>
                    <p className='Article_explanation font_size_20 margin_left_15'>{this.props.explanation}</p>
                    <div className='Article_heart_data'>
                        <FontAwesomeIcon icon={faHeart} className="Article_heart_icon" />
                        <p className='Article_hearts font_size_20 margin_0'>{this.props.hearts}</p>
                    </div>
                </button>
            </form>
        );
    }
}

export default Article;