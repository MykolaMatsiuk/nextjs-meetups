import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
	return (
		<MeetupDetail
			title="A first meetup"
			image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg/1280px-Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg"
			address="Some adress"
			description="The meetup description"
		/>
	);
}

export async function getStaticPaths() {
	return {
		fallback: true,
		paths: [
			{
				params: {
					meetupId: 'm1'
				}
			},
			{
				params: {
					meetupId: 'm2'
				}
			}
		]
	};
}

export async function getStaticProps(context) {
	// fetch single meetup by id

	const id = context.params.meetupId;

	console.log(id);

	return {
		props: {
			meetupdata: {
				id,
				image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg/1280px-Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg',
				address: 'Some address',
				description: 'Some meetup description'
			}
		}
	};
}

export default MeetupDetails;
