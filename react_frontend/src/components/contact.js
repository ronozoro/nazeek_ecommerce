
import React, {Component} from "react";
import {connect} from "react-redux";

class contact extends Component {
    render() {
        return (<div class="container">
				<div class="sec-head clearfix">
					<h2 class="sec-title f-left">CONCAT US</h2>
				</div>
				<div class="contact-group-block" id="Customer-Care">
					<h2>Customer Care</h2>
					<div class="contact-list-row">
						<div class="row is-flex">
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-screen-smartphone icons"></i>
									</div>
									<div class="con-txt">
										<p>+965-333-333-333</p>
										<p>(available Sunday to Thusday </p>
										<p>From 9 :00 AM to 5 : 00 PM Kuwait Loacl Time ) (GMT +3)</p>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-envelope-open icons"></i>
									</div>
									<div class="con-txt">
										<h3>Customer Service</h3>
										<p>MAIL@MAIL.COM</p>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-clock icons"></i>
									</div>
									<div class="con-txt">
										<h3>Work Hours</h3>
										<p>From : 8:00 AM<br/>To : 4:00 PM</p>
									</div>
								</div>
							</div>
							<div class="col-sm-offset-4 col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-envelope-open icons"></i>
									</div>
									<div class="con-txt">
										<h3>Feedback and Suggestion</h3>
										<p>MAIL@MAIL.COM</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="contact-form-block">
						<form class="form-st2" action="#">
							<div class="row">
								<div class="col-sm-9">
									<div class="row">
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Name"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="email" class="form-control" placeholder="Email"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Mobile (optional)"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Subject"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<textarea class="form-control" placeholder="Comment"></textarea>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="form-group">
										<label class="upload-label">Upload Files (optional)</label>
										<div class="upload-file">
											<div class="btn-upload">
												<input type="file" class="form-control"/>
												<i class="icon-plus icons"></i> Add File
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-offset-4 col-sm-4">
									<button type="submit" class="btn btn-submit btn-block marg-t20">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="contact-group-block" id="Preducer-Designer">
					<h2>Preducer / Designer </h2>
					<div class="contact-list-row">
						<div class="row is-flex">
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-screen-smartphone icons"></i>
									</div>
									<div class="con-txt">
										<p>+965-333-333-333</p>
										<p>(available Sunday to Thusday </p>
										<p>From 9 :00 AM to 5 : 00 PM Kuwait Loacl Time ) (GMT +3)</p>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-envelope-open icons"></i>
									</div>
									<div class="con-txt">
										<h3>You are a producer , designer an interior designer </h3>
										<p>designer@nazzek.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="contact-form-block">
						<form class="form-st2" action="#">
							<div class="row">
								<div class="col-sm-9">
									<div class="row">
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Name"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="email" class="form-control" placeholder="Email"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Mobile (optional)"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Subject"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<textarea class="form-control" placeholder="Comment"></textarea>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="form-group">
										<label class="upload-label">Upload Files (optional)</label>
										<div class="upload-file">
											<div class="btn-upload">
												<input type="file" class="form-control"/>
												<i class="icon-plus icons"></i> Add File
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-offset-4 col-sm-4">
									<button type="submit" class="btn btn-submit btn-block marg-t20">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div class="contact-group-block" id="Career">
					<h2>Career</h2>
					<div class="contact-list-row">
						<div class="row is-flex">
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-screen-smartphone icons"></i>
									</div>
									<div class="con-txt">
										<p>+965-333-333-333</p>
										<p>(available Sunday to Thusday </p>
										<p>From 9 :00 AM to 5 : 00 PM Kuwait Loacl Time ) (GMT +3)</p>
									</div>
								</div>
							</div>
							<div class="col-sm-4">
								<div class="con-block clearfix">
									<div class="con-icon">
										<i class="icon-envelope-open icons"></i>
									</div>
									<div class="con-txt">
										<p>Career@nazzek.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="contact-form-block">
						<form class="form-st2" action="#">
							<div class="row">
								<div class="col-sm-9">
									<div class="row">
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Name"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="email" class="form-control" placeholder="Email"/>
											</div>
										</div>
										<div class="col-sm-4">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Mobile (optional)"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<input type="text" class="form-control" placeholder="Subject"/>
											</div>
										</div>
										<div class="col-sm-12">
											<div class="form-group">
												<textarea class="form-control" placeholder="Comment"></textarea>
											</div>
										</div>
									</div>
								</div>
								<div class="col-sm-3">
									<div class="form-group">
										<label class="upload-label">Upload Files (optional)</label>
										<div class="upload-file">
											<div class="btn-upload">
												<input type="file" class="form-control"/>
												<i class="icon-plus icons"></i> Add File
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-sm-offset-4 col-sm-4">
									<button type="submit" class="btn btn-submit btn-block marg-t20">Send</button>
								</div>
							</div>
						</form>
					</div>
				</div>
	  </div>)}
}

function mapStateToProps(state) {
    return {}
}

export default connect(mapStateToProps)(contact);