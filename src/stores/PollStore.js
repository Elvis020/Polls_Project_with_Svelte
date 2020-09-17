import { writable } from 'svelte/store';


const pollStore = writable([
    {
        id: 1,
        question: 'Python or Javascript?',
        answer_a: 'Python',
        answer_b: 'Javascript',
        votesA: 9,
        votesB: 15
    }
]);



export default pollStore;