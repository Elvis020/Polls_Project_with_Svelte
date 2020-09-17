<script>
	import Header from './components/Header.component.svelte';
	import Footer from './components/Footer.component.svelte';
	import Tabs from './shared/Tabs.component.svelte';
	import PollForm from './components/PollForm.component.svelte';
	import PollList from './components/PollList.component.svelte';



	// Dummy Poll
	let polls = [
		{
			id: 1,
			question: 'Python or Javascript?',
			answer_a: 'Python',
			answer_b: 'Javascript',
			votesA: 9,
			votesB: 15
		},
	];


	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}


	

	const addNewPoll = (e) => {
		const newPoll = e.detail;
		// Updating the polls array 
		polls = [newPoll, ...polls]
		activeItem = 'Current Polls';
		console.log(polls);
	}


	// Function from PollDetails component to App component to handle the votes
	const handleVote = (e) =>{
		const {id, option} = e.detail;

		// This copies the polls array
		let copiedPolls = [...polls]
		let upVotedPoll = copiedPolls.find( (poll) => poll.id == id)

		if (option === 'a'){
			upVotedPoll.votesA++
		}
		if (option === 'b'){
			upVotedPoll.votesB++
		}


		polls = copiedPolls
	}
	
</script>


<Header />

<main>
	<Tabs {activeItem} {items} on:changeTab={tabChange}  />
	{#if activeItem === 'Current Polls'}
		<PollList polls={polls} on:pollVote={handleVote} />
	{:else if activeItem !== 'Current Polls'}
		<PollForm on:addPoll={addNewPoll} />
	{/if}
</main>

<Footer />

<style>

	main {
		max-width: 960px;
		margin: 40px auto;
	}
	
</style>