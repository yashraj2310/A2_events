const songsData = [
  {
    artist: "Arijit Singh",
    genre: "Bollywood, Romantic",
    songs: [
      {
        title: "Song 1",
       
        image: "https://imgs.search.brave.com/gYk9DHURDfO69Nl2howbBQfbFaAi-AejKMTe-yrJUIU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9lMS5w/eGZ1ZWwuY29tL2Rl/c2t0b3Atd2FsbHBh/cGVyLzk3Ny82Mzcv/ZGVza3RvcC13YWxs/cGFwZXItYXJpaml0/LXNpbmdoLmpwZw",
      },
    ],
    concerts: [
      {
        location: "Mumbai, India",
        date: "2024-12-15",
        time: "7:00 PM",
        price: "₹5000",
        description: "Arijit Singh's soulful performance in Mumbai promises to mesmerize his fans.",
        youtubeURL: "https://www.youtube.com/watch?v=HC1ue-MXou8",
      },
      {
        location: "Delhi, India",
        date: "2024-12-20",
        time: "8:00 PM",
        price: "₹6000",
        description: "Experience Arijit Singh live in Delhi, performing his iconic romantic tracks.",
        youtubeURL: "https://www.youtube.com/watch?v=HC1ue-MXou8",
      },
    ],
  },
  {
    artist: "Travis Scott",
    genre: "Rap, Hip-Hop",
    songs: [
      {
        title: "Song 1",
       
        image: "https://imgs.search.brave.com/KmI8uI0IYvk9Ddq9COO0ffVfrM9pDXcqn-siWGsLlAY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMS50/aWNrZXRtLm5ldC9k/YW0vYS85MDAvZDBl/OTUwNzQtMmE1Ny00/YjBlLThjY2UtNzgx/YjQzYTJhOTAwX1JF/VElOQV9QT1JUUkFJ/VF8zXzIuanBn",
      },
    ],
    concerts: [
      {
        location: "Houston, USA",
        date: "2024-11-25",
        time: "9:00 PM",
        price: "$150",
        description: "Catch Travis Scott's electrifying live performance in Houston.",
        youtubeURL: "https://www.youtube.com/watch?v=UwzQsUVCrBc",
      },
      {
        location: "Los Angeles, USA",
        date: "2024-12-05",
        time: "8:30 PM",
        price: "$200",
        description: "Experience Travis Scott's iconic stage presence live in Los Angeles.",
        youtubeURL: "https://www.youtube.com/watch?v=UwzQsUVCrBc",
      },
    ],
  },
  {
    artist: "Diljit Dosanjh",
    genre: "Punjabi, Pop",
    songs: [
      {
        title: "Song 1",
      
        image: "https://imgs.search.brave.com/r8CqPLFPF86PHtwjBz-1iAhTmJAf5dPTZVqR5RISWxo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMS50/aWNrZXRtLm5ldC9k/YW0vYS9iYmEvN2Ux/M2JhYjAtYzBmZS00/OTc4LTkxMjQtMWRi/NzVkYmUyYmJhX1JF/VElOQV9QT1JUUkFJ/VF8zXzIuanBn",
      },
    ],
    concerts: [
      {
        location: "Chandigarh, India",
        date: "2024-09-10",
        time: "6:00 PM",
        price: "₹4000",
        description: "Enjoy Diljit Dosanjh's vibrant Punjabi beats in Chandigarh.",
        youtubeURL: "https://www.youtube.com/watch?v=JOuYh20WuoM",
      },
      {
        location: "Toronto, Canada",
        date: "2024-10-05",
        time: "9:00 PM",
        price: "CAD 100",
        description: "Diljit Dosanjh brings his Punjabi pop magic to Toronto.",
        youtubeURL: "https://www.youtube.com/watch?v=JOuYh20WuoM",
      },
    ],
  },
  {
    artist: "Karan Aujla",
    genre: "Punjabi, Hip-Hop",
    songs: [
      {
        title: "Song 1",
       
        image: "https://imgs.search.brave.com/w0pdVb3rUJtssPYq5jb-168TxC2TZr_M0o3DWjnfesI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zMS50/aWNrZXRtLm5ldC9k/YW0vYS8zNTcvZjE5/ZTMwMDgtOGRlZi00/ZWRhLWFjZWItYzY1/YzlhYmFhMzU3X1JF/VElOQV9QT1JUUkFJ/VF8zXzIuanBn",
      },
    ],
    concerts: [
      {
        location: "Ludhiana, India",
        date: "2024-08-15",
        time: "8:00 PM",
        price: "₹3500",
        description: "Feel the energy of Karan Aujla's live concert in Ludhiana.",
        youtubeURL: "https://www.youtube.com/watch?v=I_9ZpTdLgQ4",
      },
      {
        location: "Vancouver, Canada",
        date: "2024-09-20",
        time: "9:00 PM",
        price: "CAD 120",
        description: "Catch Karan Aujla's Punjabi hip-hop vibes in Vancouver.",
        youtubeURL: "https://www.youtube.com/watch?v=I_9ZpTdLgQ4",
      },
    ],
  },
  {
    artist: "Taylor Swift",
    genre: "Pop, Country",
    songs: [
      {
        title: "Song 1",
       
        image: "https://imgs.search.brave.com/rVEgiXfO-mJ1lUeuhChE7Ep7mNcSlbCOEq6P7j9Y9IM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjA1/MzA4MjczOS9waG90/by9zaW5nYXBvcmUt/c2luZ2Fwb3JlLXRh/eWxvci1zd2lmdC1w/ZXJmb3Jtcy1kdXJp/bmctdGF5bG9yLXN3/aWZ0LXRoZS1lcmFz/LXRvdXItYXQtdGhl/LW5hdGlvbmFsLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1s/SGtlRU5RM0lSYWhV/dzJDNzFTc19PM3B5/YnpDQWxjZU80SldC/bzlUSExnPQ",
      },
    ],
    concerts: [
      {
        location: "New York, USA",
        date: "2024-10-15",
        time: "7:00 PM",
        price: "$250",
        description: "Taylor Swift's storytelling lyrics come alive in New York.",
        youtubeURL: "https://www.youtube.com/watch?v=O4x34LEk0Bc",
      },
      {
        location: "London, UK",
        date: "2024-11-20",
        time: "8:00 PM",
        price: "£200",
        description: "Join Taylor Swift's unforgettable concert experience in London.",
        youtubeURL: "https://www.youtube.com/watch?v=O4x34LEk0Bc",
      },
    ],
  },
];

export default songsData;
