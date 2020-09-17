<script>
    import Button from '../shared/Button.component.svelte';
    import {createEventDispatcher} from 'svelte';
    import pollStore from '../stores/PollStore.js';

    const dispatch = createEventDispatcher();

    let fields = {
        question : '',
        answer_a: '',
        answer_b: ''
    }

    let errors = {
        question : '',
        answer_a: '',
        answer_b: ''
    }

    let valid = false;

    const submitPoll = () => {
        valid = true;

        // Validate the question
        if(fields.question.trim().length<5){
            valid = false;
            errors.question = "Question must be at least 5 characters long"
        } else {
            errors.question =''
        }


        // Validate the answer A
        if(fields.answer_a.trim().length<1){
            valid = false;
            errors.answer_a = "Answer A cannot be null or void"
        } else {
            errors.answer_a =''
        }

        // Validate the answer B
        if(fields.answer_b.trim().length<1){
            valid = false;
            errors.answer_b = "Answer B cannot be null or void"
        } else {
            errors.answer_b =''
        }

        // Add a new Poll
        if (valid){
            let poll = {...fields, votesA:0, votesB:0, id: Math.random()}

            // Saving the poll to store.
            pollStore.update((currentPoll) => {
                return [poll, ...currentPoll]
            })
            dispatch('addPoll')
            // console.log(poll);
        }

    }
</script>


<form on:submit|preventDefault = {submitPoll}>
    <div class="form-field">
        <label for="question">Poll Questions:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error"> {errors.question} </div>
    </div>
    <div class="form-field">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answer_a}>
        <div class="error"> {errors.answer_a} </div>
    </div>
    <div class="form-field">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answer_b}>
        <div class="error"> {errors.answer_b} </div>
    </div>
    <Button type='secondary' flat=true >Add Poll</Button>
</form>

<style>
    form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }

    .form-field{
        margin: 18px auto;
    }

    input {
        width: 100%;
        border-radius: 6px;
    }

    label {
        margin: 10px auto;
        text-align: left;
    }

    .error {
        font-weight: bold;
        font-size: 10px;
        color: #d91b42;
    }
</style>