```javascript
//Correct Aggregation Pipeline
db.collection('myCollection').aggregate([
  {
    $match: { field: 'value' }
  },
  {
    $group: {
      _id: '$field',
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      count: 1
    }
  }
])
```