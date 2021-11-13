import Head from 'next/head';

import { MongoClient, ObjectId } from 'mongodb';

import MeetupDetail from '../../components/meetups/MeetupDetail';
import { mongoUrl } from '../../env/mongoUrl';

function MeetupDetails({ meetupData }) {
	return (
		<>
			<Head>
				<title>{meetupData.title}</title>
				<meta title="description" content={meetupData.description} />
			</Head>
			<MeetupDetail
				title={meetupData.title}
				image={meetupData.image}
				address={meetupData.address}
				description={meetupData.description}
			/>
		</>
	);
}

export async function getStaticPaths() {
	const client = await MongoClient.connect(mongoUrl);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

	client.close();

	return {
		fallback: 'blocking',
		paths: meetups.map((meetup) => ({
			params: {
				meetupId: meetup._id.toString()
			}
		}))
	};
}

export async function getStaticProps(context) {
	// fetch single meetup by id

	const id = context.params.meetupId;

	const client = await MongoClient.connect(mongoUrl);
	const db = client.db();
	const meetupsCollection = db.collection('meetups');

	const { _id, ...meetup } = await meetupsCollection.findOne({
		_id: ObjectId(id)
	});

	client.close();

	return {
		props: {
			meetupData: { ...meetup, id: _id.toString() }
		}
	};
}

export default MeetupDetails;
