import Head from 'next/head';
import { useRouter } from 'next/router';

import NewMeeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	const router = useRouter();

	async function onAddMeetup(enteredMeetupData) {
		const response = await fetch('/api/new-meetup', {
			method: 'POST',
			body: JSON.stringify(enteredMeetupData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		router.push('/');
	}

	return (
		<>
			<Head>
				<title>Add New Meetup</title>
				<meta title="description" content="Adding new meetup" />
			</Head>
			<NewMeeetupForm addMeetupHandler={onAddMeetup} />
		</>
	);
}

export default NewMeetupPage;
