<script>
    import PollDetails from './PollDetails.component.svelte';
    import pollStore from '../stores/PollStore.js';
    import { onDestroy, onMount } from 'svelte';
//    export let polls = [];

//    Subscription can cause memory leaks
//    const unsub = pollStore.subscribe( data  => {
//        polls = data;
//    })


//    LifeCycle Hooks for SVELTE 
// Shortway: $pollStore

    // onMount(() => {
    //     // Maybe getting data from a DB
    //     console.log('Component Mounted! \u{1F971}');
    // })

    // onDestroy(() => {
    //     console.log('COmponent Destroyed!');
    //     unsub();
    // })
</script>



<div class="poll-list">
    {#each $pollStore as poll(poll.id)}
        <PollDetails poll={poll} />
    {/each}
</div>


<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>