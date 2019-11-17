import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './team.css';
import goldin from './goldin.svg';
import paul from './paul.svg';
import tairu from './tairu.svg';
import dara from './dara.svg';



const TeamPage = () => {
    return ( 
        <div>
            <Navbar/>
            <section className="team  py-3" id="team">
	<div className="container py-lg-5">
		<h3 className="heading mb-5 text-center font-weight animated fadeIn"> Team Members</h3>
		<ul className="nav nav-pills mb-3 animated fadeIn" id="pills-tab1" role="tablist">
			<li className="nav-item">
				<a className="nav-link active" id="pills-team1-tab" data-toggle="pill" href="#pills-team1" role="tab" aria-controls="pills-team1" aria-selected="true"><img src={goldin} className="img-fluid pill-thumb" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team2-tab" data-toggle="pill" href="#pills-team2" role="tab" aria-controls="pills-team2" aria-selected="false"><img src={paul} className="img-fluid pill-thumb" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team3-tab" data-toggle="pill" href="#pills-team3" role="tab" aria-controls="pills-team3" aria-selected="false"><img src={tairu} className="img-fluid pill-thumb" alt="" /></a>
			</li>
			<li className="nav-item">
				<a className="nav-link" id="pills-team4-tab" data-toggle="pill" href="#pills-team4" role="tab" aria-controls="pills-team4" aria-selected="false"><img src={dara} className="img-fluid pill-thumb" alt="" /></a>
			</li>
		</ul>
		<div className="tab-content" id="pills-tabContent1">
			<div className="tab-pane fade show active" id="pills-team1" role="tabpanel" aria-labelledby="pills-team1-tab">
				<div className="team-grids row">
					<div className="col-md-6 margin animated slideInLeft">
						<img src={goldin} className="img-fluid about-img " alt="..." />
					</div>
					<div className="col-md-6 team-margin animated slideInRight">
						<h4>Olamide Samuel</h4>
						<h5>Front-End Engineer</h5>
						<p className="py-4">Our very versitile engineer, a  MERN stack developer with experience in writing fullstack applications. He was 
                            in charge of building the front end of this very application. He is open for contracts and jobs currently.  </p>
						<ul className="social">
							<li className="mr-1"><a href="https://instagram.com/gold_olar" className="insta"><span className="fab fa-instagram"></span></a></li>
							<li className="mx-1"><a href="https://twitter.com/gold_olar" className="twitter"><span className="fab fa-twitter"></span></a></li>
							<li className="mx-1"><a href="https://github.com/gold-olar" className="github"><span className="fab fa-github"></span></a></li>
							<li className="mx-1"><a href="https://www.linkedin.com/in/samuel-olamide-b05b57189/" className="linkedin"><span className="fab fa-linkedin-in"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team2" role="tabpanel" aria-labelledby="pills-team2-tab">
				<div className="team-grids row">
					<div className="col-md-6 margin">
						<img src={paul} className="img-fluid" alt="" />
					</div>
					<div className="col-md-6 team-margin">
						<h4>Amusan paul</h4>
						<h5>UI / UX Designer</h5>
						<p className="py-4">Our very versitile engineer, a  MERN stack developer with experience in writing fullstack applications. He was 
                            in charge of building the front end of this very application. He is open for contracts and jobs currently. 
                         </p>
						<ul className="social">
							<li className="mr-1"><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
							<li className="mx-1"><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
							<li className="mx-1"><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
							<li className="mx-1"><a href="#" className="linkedin"><span className="fab fa-linkedin-in"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team3" role="tabpanel" aria-labelledby="pills-team3-tab">
				<div className="team-grids row">
					<div className="col-md-6 margin">
						<img src= {tairu} className="img-fluid" alt="" />
					</div>
					<div className="col-md-6 team-margin">
						<h4>Tairu Abdulmateen</h4>
						<h5>Back-end Engineer</h5>
						<p className="py-4">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et pellentesque velit convallis. Phasellus rhoncus tempus. </p>
						<ul className="social">
							<li className="mr-1"><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
							<li className="mx-1"><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
							<li className="mx-1"><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
							<li className="mx-1"><a href="#" className="linkedin"><span className="fab fa-linkedin-in"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="tab-pane fade" id="pills-team4" role="tabpanel" aria-labelledby="pills-team4-tab">
				<div className="team-grids row">
					<div className="col-md-6 margin">
						<img src={dara} className="img-fluid about-img" alt="" />
					</div>
					<div className="col-md-6 team-margin">
						<h4>Dara Sola Aremu</h4>
						<h5>Mobile Engineer</h5>
						<p className="py-4">Donec malesuada ex sit amet pretium sid ornare. Nulla congue scelerisque tellus, utpretium. Mauris suscipit
						nisi ut ipsum egestas, et pellentesque velit convallis. Phasellus rhoncus tempus. </p>
						<ul className="social">
							<li className="mr-1"><a href="#" className="facebook"><span className="fab fa-facebook-f"></span></a></li>
							<li className="mx-1"><a href="#" className="twitter"><span className="fab fa-twitter"></span></a></li>
							<li className="mx-1"><a href="#" className="google"><span className="fab fa-google-plus-g"></span></a></li>
							<li className="mx-1"><a href="#" className="linkedin"><span className="fab fa-linkedin-in"></span></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

            <Footer/>
            
        </div>
     );
}
 
export default TeamPage;