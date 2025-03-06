import { Joke } from '../types/interfaces';

export async function getRandomJoke(){
    try{
        const resopnse = await fetch(
            'https://official-joke-api.appspot.com/random_joke'
        );
        const joke: Joke = await resopnse.json();
        console.log(joke);
        return joke;
    } catch(error){
        console.error(error);
        return null;
    }
}