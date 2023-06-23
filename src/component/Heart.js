import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import "./css/Heart.css";
import axios from 'axios';

class Heart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_pushed: this.props.is_pushed
        }
    }

    // データベースにハートを追加し、色を変えるメソッド
    change_heart_color = () => {
        const article_id = this.props.id

        const params = new URLSearchParams()
        params.append('param', article_id)

        if (this.state.is_pushed) {
            axios.post("afterLogin/subHeart", params)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

            this.setState({is_pushed: false});
        } else {
            axios.post("afterLogin/addHeart", params)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            })

            this.setState({is_pushed: true});
        }
    }

    render() {
        return (
            <div className="article_contents_heart">
                <FontAwesomeIcon icon={faHeart} onClick={this.change_heart_color} className={
                    this.state.is_pushed
                        ? "article_contents_heart_icon color_pink"
                        : "article_contents_heart_icon color_white"
                }/>
            </div>
        );
    }
}

export default Heart;