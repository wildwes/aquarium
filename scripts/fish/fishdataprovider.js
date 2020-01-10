/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const fishCollection = [
    {
        name: "Bart",
        food: ["algae", "crustaceans"],
        location: "Hawaii",
        length: 340,
        image: "images/seahorse.jpg"
    },

    {
        name: "Krusty",
        food: ["algae", "little fish"],
        location: "Hawaii",
        length: 15,
        image: "images/crab.jpg"
    },

    {
        name: "Harry",
        food: ["algae", "small crustaceans"],
        location: "Hawaii",
        length: 25,
        image: "images/hfish.jpg"
    },
    {
        name: "Lisa",
        food: ["algae", "small crustaceans"],
        location: "Hawaii",
        length: 25,
        image: "images/catshark.jpg"
    },
    {
        name: "Billy",
        food: ["algae", "small crustaceans"],
        location: "Hawaii",
        length: 25,
        image: "images/bullshark.jpg"
    },
    {
        name: "Sid",
        food: ["algae", "small crustaceans"],
        location: "Hawaii",
        length: 25,
        image: "images/shark.jpg"
    },
]

export const useFish = () => {
    return fishCollection
}