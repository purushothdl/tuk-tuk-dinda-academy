const getPlayerImageUrl = (playerName) => {
    const formattedPlayerName = playerName.replace(/ /g, '%20'); 
    return `https://ipl-stats-sports-mechanic.s3.ap-south-1.amazonaws.com/ipl/playerimages/${formattedPlayerName}.png`;
  };

export default getPlayerImageUrl;