[
 
  {
    $unwind: "$initiative_issuer"
  },
  {
    $unwind: "$initiative_topic"
  },
  {
    $match: {
      "initiative_issuer.region": "Europe",
      "initiative_issuer.country_name": {
        $nin: [
          "Norway",
          "Iceland",
          "Liechtenstein",
          "Switzerland",
          "Albania",
          "Bosnia and Herzegovina",
          "North Macedonia",
          "Montenegro",
          "Serbia",
          "Kosovo",
          "Ukraine",
          "Moldova",
          "Belarus",
          "Russia",
          "Turkey",
          "Armenia",
          "Azerbaijan",
          "Georgia",
          "United Kingdom"
        ]
      }
    }
  },

  {
    $group: {
      _id: {
        country: "$initiative_issuer.country_name",
        topic: "$initiative_topic.topic_name",
        creation_date: "$creation_date"
      },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      country: "$_id.country",
      topic: "$_id.topic",
      creation_date: "$_id.creation_date",
      count: 1
    }
  },

  {
    $addFields: {
      coordinates: {
        $switch: {
          branches: [
            {
              case: { $eq: ["$country", "Austria"] },
              then: { lat: 47.516231, long: 14.550072 }
            },
            {
              case: { $eq: ["$country", "Belgium"] },
              then: { lat: 50.850346, long: 4.351721 }
            },
            {
              case: { $eq: ["$country", "Bulgaria"] },
              then: { lat: 42.733883, long: 25.48583 }
            },
            {
              case: { $eq: ["$country", "Croatia"] },
              then: { lat: 45.1, long: 15.2 }
            },
            {
              case: { $eq: ["$country", "Cyprus"] },
              then: { lat: 35.1264, long: 33.4299 }
            },
            {
              case: { $eq: ["$country", "Czech Republic"] },
              then: { lat: 49.8175, long: 15.473 }
            },
            {
              case: { $eq: ["$country", "Denmark"] },
              then: { lat: 56.2639, long: 9.5018 }
            },
            {
              case: { $eq: ["$country", "Estonia"] },
              then: { lat: 58.5953, long: 25.0136 }
            },
            {
              case: { $eq: ["$country", "Finland"] },
              then: { lat: 61.9241, long: 25.7482 }
            },
            {
              case: { $eq: ["$country", "France"] },
              then: { lat: 46.603354, long: 1.888334 }
            },
            {
              case: { $eq: ["$country", "Germany"] },
              then: { lat: 51.165691, long: 10.451526 }
            },
            {
              case: { $eq: ["$country", "Greece"] },
              then: { lat: 39.0742, long: 21.8243 }
            },
            {
              case: { $eq: ["$country", "Hungary"] },
              then: { lat: 47.1625, long: 19.5033 }
            },
            {
              case: { $eq: ["$country", "Ireland"] },
              then: { lat: 53.349805, long: -6.26031 }
            },
            {
              case: { $eq: ["$country", "Italy"] },
              then: { lat: 41.8719, long: 12.5675 }
            },
            {
              case: { $eq: ["$country", "Latvia"] },
              then: { lat: 56.8796, long: 24.6032 }
            },
            {
              case: { $eq: ["$country", "Lithuania"] },
              then: { lat: 55.1694, long: 23.8813 }
            },
            {
              case: { $eq: ["$country", "Luxembourg"] },
              then: { lat: 49.8153, long: 6.1296 }
            },
            {
              case: { $eq: ["$country", "Malta"] },
              then: { lat: 35.9375, long: 14.3754 }
            },
            {
              case: { $eq: ["$country", "Netherlands"] },
              then: { lat: 52.3676, long: 4.9041 }
            },
            {
              case: { $eq: ["$country", "Poland"] },
              then: { lat: 51.9194, long: 19.1451 }
            },
            {
              case: { $eq: ["$country", "Portugal"] },
              then: { lat: 39.3999, long: -8.2245 }
            },
            {
              case: { $eq: ["$country", "Romania"] },
              then: { lat: 45.9432, long: 24.9668 }
            },
            {
              case: { $eq: ["$country", "Slovakia"] },
              then: { lat: 48.669, long: 19.699 }
            },
            {
              case: { $eq: ["$country", "Slovenia"] },
              then: { lat: 46.1512, long: 14.9955 }
            },
            {
              case: { $eq: ["$country", "Spain"] },
              then: { lat: 40.4168, long: -3.7038 }
            },
            {
              case: { $eq: ["$country", "Sweden"] },
              then: { lat: 60.1282, long: 18.6435 }
            }
          ],
          default: null
        }
      }
    }
  }
]
