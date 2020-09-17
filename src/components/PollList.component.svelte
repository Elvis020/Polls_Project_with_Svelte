<script>
    import {fade, slide, scale} from 'svelte/transition';

    import { flip } from 'svelte/animate';
    import PollDetails from './PollDetails.component.svelte';
    import pollStore from '../stores/PollStore.js';
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
        <div in:fade out:scale|local animate:flip={{duration: 500}}>
            <PollDetails poll={poll} />
        </div>
    {/each}
</div>


<style>
    .poll-list{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>