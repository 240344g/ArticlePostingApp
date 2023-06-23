import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCaretUp } from '@fortawesome/free-solid-svg-icons';
import "./css/MyData.css"
import axios from 'axios';

class MyData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_my_data: false,
            input_user_name: "",
            input_password: "",
            input_password_sub: "",
            user_name_error_message: "",
            password_error_message: "",
            password_sub_error_message: "",
            user_name_is_correct: false,
            password_is_correct: false,
            password_sub_is_correct: false
        }
    }

    // stateを変えるメソッド
    change_state = () => {
        if (this.state.show_my_data) {
            this.setState({show_my_data: false});
        } else {
            this.setState({show_my_data: true});
        }
    }

    // バリデーション
    validation = (e) => {
        // 正規表現
        const user_name_regex = /^[ぁ-んァ-ヶ一-龠0-9a-zA-Z-_ー]*$/;
        const password_regex = /^[0-9a-zA-Z]*$/;

        // 判定
        switch (e.target.id) {
            case "user_name":
                // 入力されたユーザネーム
                const user_name = e.target.value;
                this.setState({input_user_name: user_name});

                // 判定
                if (!user_name_regex.test(user_name)) {
                    // 文字制限
                    this.setState({
                        user_name_error_message: "英数字、ひらがな、カタカナ、漢字のみ",
                        user_name_is_correct: false
                    });
                } else if (user_name.length < 4 || user_name.length > 15) {
                    // 文字数制限
                    this.setState({
                        user_name_error_message: "4〜15文字",
                        user_name_is_correct: false
                    });
                } else {
                    this.setState({
                        user_name_error_message: "",
                        user_name_is_correct: true
                    });
                }
                break;
            case "password":
                // 入力されたパスワード
                const password = e.target.value;
                this.setState({input_password: password});

                // 判定
                if (!password_regex.test(password)) {
                    // 文字制限
                    this.setState({
                        password_error_message: "英数字のみ",
                        password_is_correct: false
                    });
                } else if (password.length < 8 || password.length > 15) {
                    // 文字数制限
                    this.setState({
                        password_error_message: "8〜15文字",
                        password_is_correct: false
                    });
                } else {
                    this.setState({
                        password_error_message: "",
                        password_is_correct: true
                    });
                }

                // パスワード（再入力）と一致するか
                if (password !== this.state.input_password_sub) {
                    // 文字制限
                    this.setState({
                        password_sub_error_message: "パスワードが一致しません",
                        password_sub_is_correct: false
                    });
                } else {
                    this.setState({
                        password_sub_error_message: "",
                        password_sub_is_correct: true
                    });
                }
            break;
            default:
                // 入力されたパスワード
                const password_sub = e.target.value;
                this.setState({input_password_sub: password_sub});

                // 判定
                if (this.state.input_password !== password_sub) {
                    // 文字制限
                    this.setState({
                        password_sub_error_message: "パスワードが一致しません",
                        password_sub_is_correct: false
                    });
                } else {
                    this.setState({
                        password_sub_error_message: "",
                        password_sub_is_correct: true
                    });
                }
                break;
        }
    }

    submit = () => {
        const form = {
            user_name: this.state.input_user_name,
            password: this.state.input_password
        }
        const form_json = JSON.stringify(form);

        const params = new URLSearchParams()
        params.append('param', form_json)

        axios.post("afterLogin/updateMyData", params)
            .then((response) => {
                if (response.data) {
                    window.location.href = "login";
                } else {
                    this.setState({
                        password_sub_error_message: "このパスワードは使用済みです",
                        password_sub_is_correct: false
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    delete_account = () => {
        axios.get("afterLogin/deleteAccount")
            .then(() => {
                window.location.href = "login";
            });
    }

    render() {
        return(
            <div className='MyData'>
                <p className='MyData_user_name MyData_margin_0'>{this.props.user_name}</p>
                {
                    this.state.show_my_data
                        ? <div>
                            <div className='MyData_update_my_data'>
                                <form className='MyData_form_area' action="" method="post">
                                    <div className="MyData_form_user_name_area">
                                        <label htmlFor="user_name">新しいユーザネーム</label>
                                        <input id="user_name" name="user_name" type="text" placeholder="4~15文字" value={this.state.input_user_name} onChange={this.validation}></input>
                                        <p className="MyData_error_message">{this.state.user_name_error_message}</p>
                                    </div>
                                    <div>
                                        <label htmlFor="password">新しいパスワード</label>
                                        <input id="password" name="password" type="password" placeholder="8~15文字" value={this.state.input_password} onChange={this.validation}></input>
                                        <p className="MyData_error_message">{this.state.password_error_message}</p>
                                    </div>
                                    <div>
                                        <label htmlFor="password_sub">新しいパスワード（再入力）</label>
                                        <input id="password_sub" type="password" placeholder="8~15文字" value={this.state.input_password_sub} onChange={this.validation}></input>
                                        <p className="MyData_error_message">{this.state.password_sub_error_message}</p>
                                    </div>
                                    <button 
                                        className="MyData_submit_btn MyData_shadow" 
                                        type="button" 
                                        onClick={this.submit}
                                        disabled={this.state.user_name_is_correct
                                            ? (this.state.password_is_correct
                                                ? (this.state.password_sub_is_correct
                                                    ? false
                                                    : true
                                                )
                                                : true
                                            )
                                            : true
                                        }
                                    >
                                        登録
                                    </button>
                                </form>
                            </div>
                            <button className='MyData_delete_account' onClick={this.delete_account}>アカウントを削除する</button>
                            <div className='MyData_accordion'>
                                <p className='MyData_margin_0' onClick={this.change_state}>閉じる<FontAwesomeIcon icon={faCaretUp} /></p>
                            </div>
                        </div>
                        : <div className='MyData_accordion'>
                            <p className='MyData_margin_0' onClick={this.change_state}>ユーザネームとパスワードを変更<FontAwesomeIcon icon={faCaretDown} /></p>
                        </div>
                }
            </div>
        );
    }
}

export default MyData;