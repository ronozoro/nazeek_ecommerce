import React, {Component} from "react";
// import PropTypes from "prop-types";
import {reduxForm, Field, propTypes} from "redux-form";
import {Link} from "react-router-dom";
import {required} from "redux-form-validators"

import {renderField, renderError} from "../../utils/renderUtils";
import {loginUser} from "../../actions/authActions";

class Login extends Component {

    static propTypes = {
        ...propTypes
    };

    render() {
        const {handleSubmit, error} = this.props;

        return (
            <div class="block-register">
                <div class="row">
                    <div class="col-md-6 col-sm-10 margin-auto">
                        <div class="block-bySocial">
                            <h3>Sign In with social media</h3>
                            <ul class="sign-Social clearfix">
                                <li class="s-facebook">
                                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i>Facebook</a>
                                </li>
                                <li class="s-twitter">
                                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i>Twitter</a>
                                </li>
                                <li class="s-instagram">
                                    <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>Instagram</a>
                                </li>
                            </ul>
                        </div>
                        <div class="signOr"><span>OR</span></div>
                        <div class="block-form">

                            <form
                                className=" form-st1"
                                onSubmit={handleSubmit}
                            >
                                <h4 className="text-md-center">Please Log In</h4>
                                <hr/>

                                <fieldset className="form-group">
                                    <Field name="email" label="Email" component={renderField}
                                           type="text" validate={[required({message: "This field is required."})]}/>
                                </fieldset>


                                <fieldset className="form-group">
                                    <Field name="password" label="Password" component={renderField}
                                           type="password" validate={[required({message: "This field is required."})]}
                                    />
                                </fieldset>

                                <fieldset className="form-group">
                                    {renderError(error)}
                                    <button action="submit" className="btn btn-primary btn-submit">Login</button>
                                    <p class="aready-p">don't have an account? <Link to="/signup">Signup Here!</Link>
                                        <br/>
                                        Forget your password? <Link to="/reset_password">Reset Here</Link>
                                    </p>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default reduxForm({
    form: "login",
    onSubmit: loginUser
})(Login);
