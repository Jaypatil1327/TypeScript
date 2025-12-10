function sortSongs(args: object[]) {
  return args.sort();
}

function countNumberOfSongXSinger(singer: string, data: object[] = []): object {
  type returnObj = {
    name: string;
    songs: string[];
  };

  const matchedSongs = data.filter(
    (vals) =>
      typeof vals === "object" &&
      vals &&
      "singer" in vals &&
      (vals as any).singer === singer
  );

  return { singer, matchedSongs };
}

export default countNumberOfSongXSinger;
export { sortSongs };
