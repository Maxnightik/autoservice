export const fetchData = async () => {
  try {
    const response = await fetch(
      "https://striped-universal-xylocarp.glitch.me/api"
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Помилки при отриманні данних: ${error}`);
  }
};
