
document.addEventListener("DOMContentLoaded", function () {
  const img1="https://s3-alpha-sig.figma.com/img/2ad3/d5c1/bc7c8b7d2ade47a27798d58559b94505?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Py7-0zo-2ULgybdmw5eLb2E6hSrSqtpVkRn3zFRwkkPs8NhNCw76fEwTrhLzl50AKhxdKKVGisZRaG~wJJ-LcpKrl2SKImEWxyP8pUU5FBCtXCk5EKKafB8cpOds8tks2f9APh6IjTkjxPOiyjTT~PkDKCFyCI9hqRPuZnWl1T6Amfav9o0zofIMjiCNp6tstxMegHCTuMMjVtZkzT9B04GH9Ux6tt-BXrR5a5oZlTVrBIjcF9rGLDpfJPGMnqAlmS3g3girl2tYsD-kAWg-KHuC23tOkLgPwzNvG3HKneefpOyaH9FMe-XW8m4SMRSkJQv3Zp98cZcKyOa5~CXjfw__";

       const img2="https://s3-alpha-sig.figma.com/img/9b03/5859/b3cd59b6e82967a441a89bdb7f113601?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G4IsGh9QklY8Lb8NKdCWMi2zvGCz8753OJzU6WxAb8uOWqPv5eivhL1FgFNupav~sEaof6S4laUBAd~DtD~nGc4FnWhYNSicPQPJW3SrSYOeEloJomZnSDjyZUgFI1rxeoRyZh8ATgFUn3y6BX0PZKWZ4fa0IV3cJkNz4pfuwCIjW2euSOWGnSQOPzZ1CsDmNKExB~LiXJfdnBrJHraTGHP9n3B5sGIe9cxjO2m-TktigbOVFuRxN~ZoYRGvtLlSbmbTwVpTpLUABSZtkayviOb2S-5oGeU2Zb04WM55Oj3JenP50OslrzOvkrmYRj1Qd~JSz9otUf2vQH1Agab-lw__";
       const img3="https://s3-alpha-sig.figma.com/img/1155/92de/a1e0499b541d8505e2a8b346af7f884f?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gtDtMC~A3zfL37A1ESzLRLv3iMtmHfGmCYf~lIFUUI~djPFI3uxo39UTnp9WvpoQYcqZh0JF4EGmcapT68YAlceulqWubBB9lsyBdS1X0UmCdNhx6v0kXaIMGicZ8gflQPmtdsqpp4XV7WwpG~IkO4Cdc9KCvAW-uEjwKDELbnpwyx3veZ-rbbp~RU8LFWpGwTxAt4NM4MB5ZerL2ya-9we83pUkhmKtwQQRoZ20YJavZWzzW~4-ghjm26dgwUuOkkLxm~BT0~djjrR1D3aa2AMbXP8de~n5PX6XtVgp2WJS4EpgUlTUvze6nlUuWjvNqOZ2D7y5xBfBMQNfz6UENw__";
       const img4="https://s3-alpha-sig.figma.com/img/c62f/050a/5112960cf7b3fd65ba1ed29d826e710a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DZ6wKk0KGbYps-0kGuXg0hpOzr9sECM0k-QqzyQrYgVgR5b0Kp~ZHLx0oGtTVH-aFLPm93HKloN6j9Ke~5-mKYqdYJc3wSlymedqrk3t56Jzw8Jf-pRI-3BheEdl1RjCY0SZ5hAso~ysII9zUNgxTKe8KNz1pVCTwJn57XM-Ba34vHxY0rtd0lMnBdQLFa0n4hFzeT~CRCvjJaguI-0KlMO2zA0oo2rO0PCnbfeQBt8bXtfOm~-08mAPyZAyoUucTpnm8UxbihmZL1WjOrJNlzOII-7RkRd6jJ3IkwwzHkymQefmpOPSPRgDYWO-h44uszVzD5K6uB0sL9jRK1ed1A__";
      
       // JSON Data for Carousel
       const carouselData = [
         {
           preHeading: "Exquisite Watches",
           heading: "Gold Luxury,",
           description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
           price: "$499.00",
           imageUrl: img1,
           bgColor: "#F9CDA6"
         },
         {
         preHeading: "Dainty Timepieces",
           heading: "Silver Luxury, ",
           description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
           price: "$469.00",
           imageUrl: img2,
           bgColor: "#D3D3D3"
         },
         {
           preHeading: "Elegant Timepieces",
           heading: "Choose Luxury, ",
           description: "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
           price: "$479.00",
           imageUrl: img3,
          bgColor: "#A8E1A5"
         },
         {
           preHeading: "Refined Timepieces",
           heading: "Choose Luxury, ",
           description: "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
           price: "$599.00",
           imageUrl: img4,
           bgColor: "#FFA895"
       },
  
      ];
const titleElement = document.getElementById("carousel-title");
  const subtitleElement = document.getElementById("carousel-subtitle");
  const descriptionElement = document.getElementById("carousel-description");
  const priceElement = document.getElementById("carousel-price");
  const carouselSection = document.getElementById("pageWrapper");
  const carouselImages = document.querySelector(".splide__list");

  // Populate Slides
    carouselData.forEach((item) =>{
    const slide = document.createElement("li");
    slide.classList.add("splide__slide");
    slide.innerHTML = `<img  src="${item.imageUrl}" alt="Product Image">`;
    carouselImages.appendChild(slide);
  });

  // Initialize Splide
  const splide = new Splide(".splide", {
    type: "slide",
    interval: 3000,       // Time between slides (in milliseconds)
    speed: 1000,          // Smooth transition duration (in milliseconds)
    easing: 'ease-in-out',// Smooth animation
           perPage: 1,
           arrows: true,
           autoplay: false,
           pagination: true,
           breakpoints: {
             768: {
              arrows: false
             }
           }
  });

 
  const updateContent = (index) => {
    const data = carouselData[index];
    titleElement.textContent = data.preHeading;
    subtitleElement.textContent = data.heading;
    descriptionElement.textContent = data.description;
    priceElement.textContent = data.price;
    carouselSection.style.backgroundColor = data.bgColor;
  };

  // Listen for Slide Change
  splide.on("move", (index) => {
    updateContent(index);
  });

  // Mount Splide and Set Initial Content
  splide.mount();
  updateContent(0);
});