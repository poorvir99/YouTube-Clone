import { YOUTUBE_VIDEOS_API } from "./constant";

export const fetchData = async () => {
    const url = YOUTUBE_VIDEOS_API;
    try {
      const response = await fetch(url);
      const result = await response.json(); // Parse as JSON
      // console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  fetchData();