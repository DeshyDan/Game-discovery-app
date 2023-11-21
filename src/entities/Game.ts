import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./publisher";

export interface Game {
    id: number;
    name: string;
    genres: Genre[];
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    slug: string;
    description_raw: string;
    publishers:Publisher[];
}
