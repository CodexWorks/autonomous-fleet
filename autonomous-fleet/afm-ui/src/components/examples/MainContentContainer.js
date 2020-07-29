// import React from 'react';
// import axios from 'axios';
// import MainContentList from './MainContentList';

// /* This component was used for example and learning purposes, not part of AFM functionality */

// // ############### Constructor ###############
// class MainContentContainer extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       posts: [],
//     };
//   }

//   // ############### Lifecycle ###############
//   componentDidMount() {
//     axios
//       .get('http://127.0.0.1:8000/api/')
//       .then((res) => {
//         this.setState({
//           posts: res.data,
//         });
//         console.log(res.data);
//       })
//       .catch((error) => {
//         console.log('get err ' + error);
//       });
//   }

//   // ############# RENDER ###########
//   render() {
//     const filteredTexts = this.getFilteredTexts();
//     return <MainContentList posts={filteredTexts} />;
//   }

//   // ############### Event Handlers ###############
//   getFilteredTexts() {
//     const { posts } = this.state;
//     return posts.filter((text) => text.headline);
//   }
// }

// export default MainContentContainer;
