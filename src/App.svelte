<script>
	import Header from './components/Header.component.svelte';
	import Footer from './components/Footer.component.svelte';
	import Tabs from './shared/Tabs.component.svelte';
	import PollForm from './components/PollForm.component.svelte';
	import PollList from './components/PollList.component.svelte';



	// Dummy Poll
	


	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}


	

	const addNewPoll = (e) => {
		activeItem = 'Current Polls';
	}



</script>


<Header />

<main>
	<Tabs {activeItem} {items} on:changeTab={tabChange}  />
	{#if activeItem === 'Current Polls'}
		<PollList />
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