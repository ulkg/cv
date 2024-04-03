import React from 'react';

export default function Educations() {
	return (
		<div>
			<div class='card'>
				<div class='card-content'>
					<h6>
						<strong>Aus- und Schulbildung</strong>
					</h6>
					<table class='highlight'>
						<tbody>
							<tr>
								<td>Master-Studiengang Software Engineering <br></br>FH Technikum Wien</td>
								<td>09/2019 - 06/2021</td>
								<td>
									<a href="https://www.technikum-wien.at/studiengaenge/master-software-engineering/"
										class="btn-small waves-effect waves-light brown"
										style={{marginLeft: "5px"}}>
										Details</a>
								</td>
							</tr>
							<tr>
								<td>Bachelor-Studiengang Informatik <br></br>FH Technikum Wien</td>
								<td>2016 – 2019</td>
								<td>
									<a href="https://www.technikum-wien.at/studiengaenge/bachelor-informatik/"
										class="btn-small waves-effect waves-light brown"
										style={{marginLeft: "5px"}}>
										Details</a>
								</td>
							</tr>
							<tr>
								<td>Zivildienst beim Roten Kreuz St. Pölten</td>
								<td>2015 – 2016</td>
								<td>
									<a href="https://www.roteskreuz.at/niederoesterreich/st-poelten/home"
										class="btn-small waves-effect waves-light brown"
										style={{marginLeft: "5px"}}>
										Details</a>
								</td>
							</tr>
							<tr>
								<td>Höhere Abteilung für Elektrotechnik <br></br>HTL St. Pölten</td>
								<td>2010 – 2015</td>
								<td>
									<a href="https://www.htlstp.ac.at/abteilungen/elektrotechnik"
										class="btn-small waves-effect waves-light brown"
										style={{marginLeft: "5px"}}>
										Details</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
