<template>
  <div class="about-us">
  <div class="background-about-us" >
 <br>
      <h1 style="text-align: center; color:#ee6e73; font-weight: bold;">ABOUT US</h1>
     
    </div>

    <div style="font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; padding: 10px; margin-left: 20%;margin-right: 20%;margin-top: 2%;">
      <p>Welcome to Tech Store AR your number 1 source of home technology all wrapped in 1.We are passionate about being a brand that not only works for our customers but also with our customers, aiming to provide and source the latest smart home and tech devices.</p>
      <ol>We pride ourselves on providing
      <li>Excellent customer service</li>
      <li>Excellent products</li>
      <li>Excellent prices</li>
      </ol>
      <p>Tech store was founded in 2021 with the sole goal of bringing affordable smart home and tech devices to the masses. We are a team of young hobbyists and entrepreneurs who have decided to combine there passion for tech and business into a web store.
      We hope you will like your shopping experience with us, our goal is to bring to our customers, unique, innovative and exiting products.</p>
   </div>

      <div class="our team">
<h2 style="text-align: center;">OUR TEAM</h2>
      <ul class="members">
        <li v-for="member in team" :key="member.id" class="li-members">
          <img :src="member.photo" :alt="member.name" class="img-members">
          <h3>{{ member.name }}</h3>
          <p>{{ member.jobTitle }}</p>
        </li>
      </ul>
    </div>
    </div>
  </template>
  
  <script>
  
  import RrezartaIdrizi from '@/assets/rrezarta.jpg';
  import ArbidonaHodaj from '@/assets/arbidona.jpg';
  export default {
    data() {
      return {
        team: [
          { id: 1, 
            name: 'Rrezarta Idrizi', 
            jobTitle: 'CEO & Developer', 
            photo: RrezartaIdrizi
          },
          { id: 2, name: 'Arbidona Hodaj', 
          jobTitle: 'CTO & Developer', 
          photo: ArbidonaHodaj 
        },
        ],
      };
    },
  };
  </script>
  
  
  <style>
  .about-us {
    max-width: 100%;
    margin: 0 auto;
  }
    
  .members {
    list-style: none;
    display: flex;
    flex: 1;
    justify-content:center;
    margin: 0;
    padding: 0;
    
  }
  
  .li-members {
    margin: 20px 20px;
    text-align: center;
  
  }
  
  .img-members {
    width: 550px;
    height: 650px;
    box-sizing: border-box;
    margin-bottom: 10px;
    align-items: center;
    padding: 30px;
    animation-name: slide-in;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
  }
  .background-about-us{
    background-image: url("@/assets/image2.jpg");
    height: 300px;
    align-items: center;
  }

  @keyframes slide-in {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
  </style>
  