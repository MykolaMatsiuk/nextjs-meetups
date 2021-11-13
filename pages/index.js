import Head from 'next/head';
import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
	return (
		<>
			<Head>
				<title>Meetups</title>
				<meta title="description" content="Meetups Nextjs" />
			</Head>
			<MeetupList meetups={props.meetups} />
		</>
	);
}

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     // fetch data

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
// }

export async function getStaticProps() {
	// async fetch data
	const client = await MongoClient.connect(
		'mongodb+srv://admin:X4xnMbGvKALnWbQx@cluster0.8udcc.mongodb.net/meetups?retryWrites=true&w=majority'
	);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find().toArray();

	client.close();

	return {
		props: {
			meetups: meetups.map((meetup) => ({
				title: meetup.title,
				image: meetup.image,
				address: meetup.address,
				id: meetup._id.toString()
			}))
		},
		revalidate: 10 // regenerates page with timeout 10s
	};
}

export default HomePage;
