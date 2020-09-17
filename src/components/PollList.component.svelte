<script>
    import PollDetails from './PollDetails.component.svelte';
   export let polls = [];
</script>



<div class="poll-list">
    {#each polls as poll(poll.id)}
        <PollDetails poll={poll} on:pollVote />
    {/each}
</div>


<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>