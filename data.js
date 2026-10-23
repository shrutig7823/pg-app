// data.js: the PG data, shared by every page in the app.
// All of this is made-up sample data for learning.

// Every amenity a PG can have. Add a word here to get a new tick box.
const AMENITIES = ["Food", "AC", "Wi-Fi", "Housekeeping", "Laundry", "Power backup", "Indoor games"];

const pgs = [
  {
    id: 1,
    name: "Sunrise PG (sample)",
    rent: 9500,
    deposit: 19000,
    area: "HSR Layout",
    roomType: "Double",
    description: "A quiet PG on a residential street, ten minutes from the main road.",
    amenities: ["AC", "Wi-Fi", "Housekeeping"]
  },
  {
    id: 2,
    name: "Ollie PG (sample)",
    rent: 12000,
    deposit: 24000,
    area: "Koramangala",
    roomType: "Single",
    description: "Private rooms with home-style meals and a common room with board games.",
    amenities: ["Food", "AC", "Laundry", "Indoor games"]
  },
  {
    id: 3,
    name: "Feb PG (sample)",
    rent: 8000,
    deposit: 16000,
    area: "BTM Layout",
    roomType: "Triple",
    description: "Budget shared rooms with reliable power backup.",
    amenities: ["Wi-Fi", "Power backup"]
  },
  {
    id: 4,
    name: "March (sample)",
    rent: 6000,
    deposit: 12000,
    area: "Green glenn Layout",
    roomType: "Triple",
    description: "The cheapest option on the list, with a games room.",
    amenities: ["AC", "Indoor games"]
  }
];
