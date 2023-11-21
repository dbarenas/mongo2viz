[
  {
    $unwind: "$ini_s"
  },
  {
    $unwind: "$ini_t"
  },
  {
    $match: { "ini_s.country_name": "United States" }
  },
  {
    $group: {
      _id: {
        state: "$ini_s.state_name",
        topic: "$ini_t.topic_name",
        creation_date: "$creation_date"
      },
      count: { $sum: 1 }
    }
  },
   {$project:{state:"$_id.state", topic:"$_id.topic", count:1, "creation_date":"$_id.creation_date"}},
 {
    $addFields: {
        coordinates: {
            $switch: {
                branches: [
                    {
                        case: { $eq: ["$state", "Alabama"] },
                        then: { lat: 32.806671, long: -86.791130 }
                    },
                    {
                        case: { $eq: ["$state", "Alaska"] },
                        then: { lat: 61.370716, long: -152.404419 }
                    },
                    {
                        case: { $eq: ["$state", "Arizona"] },
                        then: { lat: 33.729759, long: -111.431221 }
                    },
                    {
                        case: { $eq: ["$state", "Arkansas"] },
                        then: { lat: 34.969704, long: -92.373123 }
                    },
                    {
                        case: { $eq: ["$state", "California"] },
                        then: { lat: 36.116203, long: -119.681564 }
                    },
                    {
                        case: { $eq: ["$state", "Colorado"] },
                        then: { lat: 39.059811, long: -105.311104 }
                    },
                    {
                        case: { $eq: ["$state", "Connecticut"] },
                        then: { lat: 41.597782, long: -72.755371 }
                    },
                    {
                        case: { $eq: ["$state", "Delaware"] },
                        then: { lat: 39.318523, long: -75.507141 }
                    },
                    {
                        case: { $eq: ["$state", "Florida"] },
                        then: { lat: 27.766279, long: -81.686783 }
                    },
                    {
                        case: { $eq: ["$state", "Georgia"] },
                        then: { lat: 33.040619, long: -83.643074 }
                    },
                    {
                        case: { $eq: ["$state", "Hawaii"] },
                        then: { lat: 21.094318, long: -157.498337 }
                    },
                    {
                        case: { $eq: ["$state", "Idaho"] },
                        then: { lat: 44.240459, long: -114.478828 }
                    },
                    {
                        case: { $eq: ["$state", "Illinois"] },
                        then: { lat: 40.349457, long: -88.986137 }
                    },
                    {
                        case: { $eq: ["$state", "Indiana"] },
                        then: { lat: 39.849426, long: -86.258278 }
                    },
                    {
                        case: { $eq: ["$state", "Iowa"] },
                        then: { lat: 42.011539, long: -93.210526 }
                    },
                    {
                        case: { $eq: ["$state", "Kansas"] },
                        then: { lat: 38.526600, long: -96.726486 }
                    },
                    {
                        case: { $eq: ["$state", "Kentucky"] },
                        then: { lat: 37.668140, long: -84.670067 }
                    },
                    {
                        case: { $eq: ["$state", "Louisiana"] },
                        then: { lat: 31.169546, long: -91.867805 }
                    },
                    {
                        case: { $eq: ["$state", "Maine"] },
                        then: { lat: 44.693947, long: -69.381927 }
                    },
                    {
                        case: { $eq: ["$state", "Maryland"] },
                        then: { lat: 39.063946, long: -76.802101 }
                    },
                    {
                        case: { $eq: ["$state", "Massachusetts"] },
                        then: { lat: 42.230171, long: -71.530106 }
                    },
                    {
                        case: { $eq: ["$state", "Michigan"] },
                        then: { lat: 43.326618, long: -84.536095 }
                    },
                    {
                        case: { $eq: ["$state", "Minnesota"] },
                        then: { lat: 45.694454, long: -93.900192 }
                    },
                    {
                        case: { $eq: ["$state", "Mississippi"] },
                        then: { lat: 32.741646, long: -89.678696 }
                    },
                    {
                        case: { $eq: ["$state", "Missouri"] },
                        then: { lat: 38.456085, long: -92.288368 }
                    },
                    {
                        case: { $eq: ["$state", "Montana"] },
                        then: { lat: 46.921925, long: -110.454353 }
                    },
                    {
                        case: { $eq: ["$state", "Nebraska"] },
                        then: { lat: 41.125370, long: -98.268082 }
                    },
                    {
                        case: { $eq: ["$state", "Nevada"] },
                        then: { lat: 38.313515, long: -117.055374 }
                    },
                    {
                        case: { $eq: ["$state", "New Hampshire"] },
                        then: { lat: 43.452492, long: -71.563896 }
                    },
                    {
                        case: { $eq: ["$state", "New Jersey"] },
                        then: { lat: 40.298904, long: -74.521011 }
                    },
                    {
                        case: { $eq: ["$state", "New Mexico"] },
                        then: { lat: 34.840515, long: -106.248482 }
                    },
                    {
                        case: { $eq: ["$state", "New York"] },
                        then: { lat: 42.165726, long: -74.948051 }
                    },
                    {
                        case: { $eq: ["$state", "North Carolina"] },
                        then: { lat: 35.630066, long: -79.806419 }
                    },
                    {
                        case: { $eq: ["$state", "North Dakota"] },
                        then: { lat: 47.528912, long: -99.784012 }
                    },
                    {
                        case: { $eq: ["$state", "Ohio"] },
                        then: { lat: 40.388783, long: -82.764915 }
                    },
                    {
                        case: { $eq: ["$state", "Oklahoma"] },
                        then: { lat: 35.565342, long: -96.928917 }
                    },
                    {
                        case: { $eq: ["$state", "Oregon"] },
                        then: { lat: 44.572021, long: -122.070938 }
                    },
                    {
                        case: { $eq: ["$state", "Pennsylvania"] },
                        then: { lat: 40.590752, long: -77.209755 }
                    },
                    {
                        case: { $eq: ["$state", "Rhode Island"] },
                        then: { lat: 41.680893, long: -71.511780 }
                    },
                    {
                        case: { $eq: ["$state", "South Carolina"] },
                        then: { lat: 33.856892, long: -80.945007 }
                    },
                    {
                        case: { $eq: ["$state", "South Dakota"] },
                        then: { lat: 44.299782, long: -99.438828 }
                    },
                    {
                        case: { $eq: ["$state", "Tennessee"] },
                        then: { lat: 35.747845, long: -86.692345 }
                    },
                    {
                        case: { $eq: ["$state", "Texas"] },
                        then: { lat: 31.054487, long: -97.563461 }
                    },
                    {
                        case: { $eq: ["$state", "Utah"] },
                        then: { lat: 40.150032, long: -111.862434 }
                    },
                    {
                        case: { $eq: ["$state", "Vermont"] },
                        then: { lat: 44.045876, long: -72.710686 }
                    },
                    {
                        case: { $eq: ["$state", "Virginia"] },
                        then: { lat: 37.769337, long: -78.169968 }
                    },
                    {
                        case: { $eq: ["$state", "Washington"] },
                        then: { lat: 47.400902, long: -121.490494 }
                    },
                    {
                        case: { $eq: ["$state", "West Virginia"] },
                        then: { lat: 38.491226, long: -80.954800 }
                    },
                    {
                        case: { $eq: ["$state", "Wisconsin"] },
                        then: { lat: 44.268543, long: -89.616508 }
                    },
                    {
                        case: { $eq: ["$state", "Wyoming"] },
                        then: { lat: 42.755966, long: -107.302490 }
                    }
                ],
                default: null
            }
        }
    }
} 
 

]
