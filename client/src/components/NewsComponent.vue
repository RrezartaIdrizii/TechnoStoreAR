<template>
    
    <figure class="masthead with-responsive-image ">
    <picture class="as-background">
    <source srcset="https://d316acfc88wber.cloudfront.net/global/News/news_01.jpg" media="(min-width: 1200px)">
    <source srcset="https://d316acfc88wber.cloudfront.net/global/News/news_02.jpg" media="(min-width: 576px)">
    <img class="obj-cover obj-center" src="https://d316acfc88wber.cloudfront.net/global/News/news_03.jpg" alt="">
    </picture>
    <div class="masthead-head  ite">
    <h1 class="text-uppercase masthead-head-title">News</h1>
    <p class="small masthead-head-description">All TECNO News are here</p>
    </div>
    </figure>

    <div class="news">
      <div class="news-item" v-for="item in newsItems" :key="item.id">
        <img class="news-image" :src="item.image" alt="">
        <h2 class="news-title">{{ item.title }}</h2>
        <p class="news-excerpt">{{ item.excerpt }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import image1 from '@/assets/news/image1.jpeg';
  import image2 from '@/assets/news/image2.png';
  import image3 from '@/assets/news/image3.png';
  import image4 from '@/assets/news/image4.png';
  import image5 from '@/assets/news/image5.png';
  import image6 from '@/assets/news/image6.png';
  export default {
    data() {
      return {
        newsItems: [
          {
            id: 1,
            title: 'Showcasing Two New Smartphones, Upgraded Laptops and Diverse AIoT Offering',
            excerpt: 'TECNO will launch its first foldable smartphone, PHANTOM V Fold, debut its SPARK 10 Pro selfie phone and MEGABOOK S1 2023 laptop with the latest Intel® Core™ processor, and showcase its diverse AIoT digital ecosystem at MWC Barcelona 2023.',
            image: image1
          },
          {
            id: 2,
            title: 'TECNO Confirmed to Join MWC 2023 and Launch A New PHANTOM Flagship Device',
            excerpt: 'TECNO will showcase its all-star product lineup and reveal another all-new PHANTOM flagship product at MWC Barcelona 2023.',
            image: image2
          },
          {
            id: 3,
            title: 'TECNO Goes Premium in Style as it Celebrates its Beyond the Extraordinary Flagship Product Launch',
            excerpt: 'The brand launched its new high-end PHANTOM X2 smartphone series, featuring a pioneering world-first camera lens, and its powerful MEGABOOK S1 laptop at the global launch event in Dubai.',
            image: image3
          },
          {
            id: 4,
            title: 'Counterpoint Research, TECNO, MediaTek’s Experts and Editor-At-Large of Forbes Magazine to Present Perspectives on the Evolution of Premium Smartphones',
            excerpt: 'The upcoming webinar, hosted by Counterpoint Research, will feature keynote speakers from TECNO, MediaTek, and Forbes Magazine to discuss the forces and opportunities influencing current smartphone trends. Simultaneously, the advanced industry white paper, showcasing the forces driving smartphone innovation, including technology migrations, will be published globally.',
            image: image4
          },
          {
            id: 5,
            title: 'Counterpoint Research, MTK, TECNO and Editor at Large from Forbes Magazine Compared Notes on The Changing Forces in Premium Smartphone Domain',
            excerpt: 'Titled "The Push Towards Premium: Changing Smartphone Preferences and the Technology Behind Them”, the webinar addresses the ongoing evolution of global smartphone offerings to a higher end, especially in emerging regions. ',
            image: image5
          },
          {
            id: 6,
            title: 'Stay Tuned. TECNO Flagship Product Launch Event Will Be Held in Dubai!',
            excerpt: 'TECNO will host Annual Flagship Product Launch 2022 themed as ‘Beyond the Extraordinary’ on December 7th from 2:30pm GST, in Dubai UAE. ',
            image: image6
          },
        ],
      };
    },
};
</script>

<style>
.news {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding:20px;
  }
  
  .news-item {
    width: calc(33.33% - 20px);
    margin-bottom: 40px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    overflow: hidden;
  }
  
  .news-image {
    height: 200px;
    object-fit: cover;
  }
  
  .news-title {
    font-size: 1.5rem;
    margin: 20px;
  }
  
  .news-excerpt {
    margin: 0 20px 20px;
    line-height: 1.5;
  }
  .as-background {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.with-responsive-image {
    position: relative;
}
.as-background:last-of-type~* {
    position: relative;
}

.obj-cover {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}
.masthead {
    height: 18.75rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-bottom: 0;
}
figure {
    margin: 0 0 1rem;
}
.masthead .masthead-head {
    padding-top: 4.6875rem;
    padding-left: 15px;
    padding-right: 15px;
    text-align: center;
    width: 100%;
    max-width: 37.5rem;
}
.masthead .masthead-head.ite .masthead-head-title {
    margin-bottom: 0.3125rem;
    color: hsla(0, 0%, 100%, .9);
}
.masthead .masthead-head.ite .masthead-head-description {
    color: hsla(0, 0%, 100%, .6);
}
  </style>