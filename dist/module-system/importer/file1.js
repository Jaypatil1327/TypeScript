function sortSongs(args) {
    return args.sort();
}
function countNumberOfSongXSinger(singer, data = []) {
    const matchedSongs = data.filter((vals) => typeof vals === "object" &&
        vals &&
        "singer" in vals &&
        vals.singer === singer);
    return { singer, matchedSongs };
}
export default countNumberOfSongXSinger;
export { sortSongs };
