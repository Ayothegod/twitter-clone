export const usersData = [
    {
      "id": "1",
      "username": "user1",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "bio": "Software Developer",
      "location": "Cityville",
      "website": "http://www.johndoe.com"
    },
    {
      "id": "2",
      "username": "user2",
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "bio": "Graphic Designer",
      "location": "Townsville",
      "website": "http://www.janesmithdesigns.com"
    },
    {
      "id": "3",
      "username": "user3",
      "name": "Alice Johnson",
      "email": "alice.johnson@example.com",
      "bio": "Entrepreneur",
      "location": "Villagetown",
      "website": "http://www.aliceventures.com"
    }
  ]

export const posts =  [
    {
      "id": "101",
      "user_id": "1",
      "timestamp": "2023-12-17T12:30:45",
      "content": "Just posted my first tweet!"
    },
    {
      "id": "102",
      "user_id": "2",
      "timestamp": "2023-12-17T13:45:00",
      "content": "Excited to start a new project!"
    },
    {
      "id": "103",
      "user_id": "3",
      "timestamp": "2023-12-17T14:20:30",
      "content": "Hello Twitter! #newbeginnings"
    }
  ]

export  const followData = [
    {
      "user_id": "1",
      "followers": ["2", "3"],
      "followings": ["2"]
    },
    {
      "user_id": "2",
      "followers": ["1"],
      "followings": ["1", "3"]
    },
    {
      "user_id": "3",
      "followers": ["1"],
      "followings": ["2"]
    }
  ]

