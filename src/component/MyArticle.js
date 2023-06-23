import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import "./css/MyArticle.css";

class MyArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_edit_delete: false
        }
    }

    change_state = () => {
        this.setState({show_edit_delete: true});
    }

    edit_article = () => {

    }

    render() {
        return (
            <div className="MyArticle_article_btns">
                <div className="MyArticle_article">
                    <form  action='afterLogin/OpenArticle' method='post'>
                        <button className='MyArticle_article_area' name='article_id' value={this.props.article_id}>
                            <p className='MyArticle_user_name margin_0'>{this.props.name}</p>
                            <p className='MyArticle_date font_size_20 margin_left_15'>{this.props.date}</p>
                            <p className='MyArticle_title margin_0'>{this.props.title}</p>
                            <p className='MyArticle_explanation font_size_20 margin_left_15'>{this.props.explanation}</p>
                        </button>
                    </form>
                    <div className='MyArticle_bottom'>
                        {
                            this.state.show_edit_delete
                                ? <form action='afterLogin/EditOrDeleteMyArticle' method='post' className='MyArticle_edit_delete'>
                                    <button className='MyArticle_edit' name='edit_or_delete' value={JSON.stringify({
                                        order: "edit",
                                        article_id: this.props.article_id,
                                        title: this.props.title,
                                        explanation: this.props.explanation,
                                        body: this.props.body
                                    })}>編集する</button>
                                    <button className='MyArticle_delete' name='edit_or_delete' value={JSON.stringify({
                                        order: "delete",
                                        article_id: this.props.article_id
                                    })}>削除する</button>
                                </form>
                                :<div className="MyArticle_ellipsis" onClick={this.change_state}>
                                    <FontAwesomeIcon icon={faEllipsis} className="MyArticle_ellipsis_icon"/>
                                </div>
                        }
                        <div className='MyArticle_heart_data'>
                            <FontAwesomeIcon icon={faHeart} className="MyArticle_heart_icon"/>
                            <p className='MyArticle_hearts font_size_20 margin_0'>{this.props.hearts}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MyArticle;