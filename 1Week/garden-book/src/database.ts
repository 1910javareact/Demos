import { Garden } from "./models/garden";
import { Post } from "./models/post";

//this is going to be our "database"
//its entire purpose is to hold the initial state of our data
export let gardens = [
    new Garden("Babylon", 100, 1),
    new Garden("Olbrich", 75, 2),
]

export let posts:Post[] = []