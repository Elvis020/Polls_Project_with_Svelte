<script>
    import {createEventDispatcher} from 'svelte';
    const dispatch = createEventDispatcher();
    export let items;
    export let activeItem;
</script>



<div class="tabs"></div>
<ul>
    {#each items as item}
    <li on:click={() => dispatch('changeTab', item)} >
        <div class:active={item === activeItem}>{item}</div>
    </li>
    {/each}

</ul>


<style>
    .tabs {
        margin-bottom: 40px;
    }

    ul {
        display: flex;
        list-style: none;
        padding: 0;
        justify-content: center;
    }

    li {
        margin: 0 16px;
        font-size: 18px;
        color: #555;
        cursor: pointer;

    }
    .active {
        color: #d91b42;
        border-bottom: 2px solid  #d91b42;
        padding-bottom: 8px;
    }
</style>