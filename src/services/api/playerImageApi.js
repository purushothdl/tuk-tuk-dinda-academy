export const fetchPlayerImage = async (playerName) => {
  try {
    const formattedPlayerName = playerName.replace(/ /g, '%20'); // Replace spaces with %20
    const url = `https://corsproxy.io/https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${formattedPlayerName}.png`;
    const response = await fetch(url);
    console.log(`Fetching image for ${playerName}:`, url, response.ok); // Log the URL and response
    if (response.ok) {
      return response.url;
    }
    return null; // Return null if image not found
  } catch (error) {
    console.error('Error fetching player image:', error);
    return null;
  }
};