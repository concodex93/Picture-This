import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 8aa25013ae29684a5b82221f88a399832d033e586f453f93ef94e5e1572f1f4e'
  }
});

 