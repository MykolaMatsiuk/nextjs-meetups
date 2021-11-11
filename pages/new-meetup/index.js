import NewMeeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
	function onAddMeetup(enteredMeetupData) {
		console.log(enteredMeetupData);
	}

	return <NewMeeetupForm addMeetupHandler={onAddMeetup} />;
}

export default NewMeetupPage;
