<script>
    import Card from '../shared/Card.component.svelte';
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();
    export let poll;
    //reactive values
    $: totalVotes = poll.votesA + poll.votesB;

    // Percentage values for A and B
    $: percentA = Math.floor((poll.votesA / totalVotes)* 100);
    $: percentB = Math.floor((poll.votesB / totalVotes)* 100);


    // A function to handle votes
    const handlePollVote = (option, id) => {
        dispatch('pollVote', {option,id})
    }
</script>

<div class="poll">
    <Card>
        <h3> {poll.question} </h3>
        <p>Total votes: {totalVotes} </p>
        <div class="answer" on:click={ ()=> handlePollVote('a', poll.id)}>
            <div class="percent percent-a" style="width: {percentA}%"></div>
            <span> {poll.answer_a} ({poll.votesA}) </span>
        </div>
        <div class="answer" on:click={ ()=> handlePollVote('b', poll.id)}>
            <div class="percent percent-b" style="width: {percentB}%"></div>
            <span> {poll.answer_b} ({poll.votesB}) </span>
        </div>
    </Card>
</div>



<style>
    h3 {
        margin: 0 auto;
        color:#555;
    }

    p{
        margin-top: 6px;
        font-size: px;
        color: #aaa;
        margin-bottom: 30px;
    }

    .answer {
        background: #fafafa;
        cursor: pointer;
        margin: 10px auto;
        position: relative;
    }

    .answer:hover{
        opacity: 0.6;
    }

    span{
        display: inline-block;
        padding: 10px 20px;
    }

    .percent{
        height: 100%;
        position: absolute;
        box-sizing: border-box;
    }

    .percent-a{
        border-left: 4px solid #d91b42;
        background: rgba(217, 27, 66, 0.2);
    }
    .percent-b{
        border-left: 4px solid #45c496;
        background:rgba(69, 196, 150, 0.2);
    }
</style>