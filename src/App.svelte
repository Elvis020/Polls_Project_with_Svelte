<script>
	import Header from './components/Header.component.svelte';
	import Footer from './components/Footer.component.svelte';
	import Tabs from './shared/Tabs.component.svelte';
	import PollForm from './components/PollForm.component.svelte';


	// Tabs
	let items = ['Current Polls', 'Add New Poll'];
	let activeItem = 'Current Polls';

	const tabChange = (e) => {
		activeItem = e.detail;
	}
	
</script>


<Header />

<main>
	<Tabs {activeItem} {items} on:changeTab={tabChange}  />
	{#if activeItem === 'Current Polls'}
		<p>Poll commponent goes here! &#x1F9B9;&#x200D;&#x2642;&#xFE0F;</p>
	{:else if activeItem !== 'Current Polls'}
		<PollForm />
	{/if}
</main>

<Footer />

<style>

	main {
		max-width: 960px;
		margin: 40px auto;
	}
	
</style>