import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
	{
		id: 'm1',
		title: 'A First Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg/1280px-Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg',
		address: 'Some adress 5, str. 23 City',
		description: 'Thi is a first meetup'
	},
	{
		id: 'm2',
		title: 'A Seconf Meetup',
		image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg/1280px-Gauguin%2C_Paul_-_Landscape_near_Arles_-_Google_Art_Project.jpg',
		address: 'Some adress 10, str. 233 City',
		description: 'Thi is a second meetup'
	}
];

function HomePage() {
	return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
