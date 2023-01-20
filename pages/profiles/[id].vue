<template>

    <HeaderMain headerTitle="Favorites" />
  
    <div class="profile-section">

      <div class="profile-hero">
        <div class="profile-hero-image-row">
          <div class="profile-hero-icon">
  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
  
  
          </div>
          <div class="profile-hero-image iosRounded">
     
            <img v-if="profile.avatar_url" :src="profile.avatar_url" :placeholder="15" :alt="profile.avatar_alt" />
            <img v-else src="https://www.shimono.co.th/wp-content/uploads/2019/07/woocommerce-placeholder.png" />
  
          </div>
          <div class="profile-hero-icon profile-hero-icon-tip">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke="url(#grad1)"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#9f6cff;stop-opacity:1" />
                  <stop offset="50%" style="stop-color:#ff0aaa;stop-opacity:1" />
                  <stop offset="100%" style="stop-color:#ff6ccc;stop-opacity:1" />
                </linearGradient>
              </defs>
            </svg>
  
  
          </div>
        </div>
  
        <!-- Display Name and Mini Bio -->
        <div class="profile-hero-name-row">
          <h1 v-if="profile.display_name" class="profile-hero-display_name">{{ profile.display_name }}</h1>
          <h1 v-else  class="profile-hero-display_name">Loading</h1>
          <p v-if="profile.bio_mini"  class="profile-hero-bio">{{ profile.bio_mini }}</p>
          <p v-else  class="profile-hero-bio">Loading</p>
        </div>
      </div>
  
  
  
  
  
  
  
      <div class="profile-tabs">
        <Tabs>
          <Tab active="true" :title='`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
  </svg>`'>
            <!-- Grid Images-->
            <div class="grid-3">
              <div v-for="item in profile.gallery" :key="item.url_thumbnail">
                <figure class="grid-item grid-item-4x5">
                  <img :src="item.url_thumbnail" :placeholder="15" :alt="item.alt" />
                </figure>
              </div>
            </div>
          </Tab>
          <Tab :title='`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>
  
  `'>
  
            <section class="profile-tab-section">
  
              <ul class="profile-socials">
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="31.518" height="31.511" viewBox="0 0 31.518 31.511">
                      <path id="Icon_awesome-instagram" data-name="Icon awesome-instagram"
                        d="M15.757,9.914a8.079,8.079,0,1,0,8.079,8.079A8.066,8.066,0,0,0,15.757,9.914Zm0,13.331a5.252,5.252,0,1,1,5.252-5.252,5.262,5.262,0,0,1-5.252,5.252ZM26.051,9.584A1.884,1.884,0,1,1,24.166,7.7,1.88,1.88,0,0,1,26.051,9.584ZM31.4,11.5a9.325,9.325,0,0,0-2.545-6.6,9.387,9.387,0,0,0-6.6-2.545c-2.6-.148-10.4-.148-13,0a9.373,9.373,0,0,0-6.6,2.538,9.356,9.356,0,0,0-2.545,6.6c-.148,2.6-.148,10.4,0,13a9.325,9.325,0,0,0,2.545,6.6,9.4,9.4,0,0,0,6.6,2.545c2.6.148,10.4.148,13,0a9.325,9.325,0,0,0,6.6-2.545,9.387,9.387,0,0,0,2.545-6.6c.148-2.6.148-10.392,0-12.994ZM28.041,27.281a5.318,5.318,0,0,1-3,3c-2.074.823-7,.633-9.288.633s-7.221.183-9.288-.633a5.318,5.318,0,0,1-3-3c-.823-2.074-.633-7-.633-9.288s-.183-7.221.633-9.288a5.318,5.318,0,0,1,3-3c2.074-.823,7-.633,9.288-.633s7.221-.183,9.288.633a5.318,5.318,0,0,1,3,3c.823,2.074.633,7,.633,9.288S28.863,25.214,28.041,27.281Z"
                        transform="translate(0.005 -2.238)" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="27.801" height="32" viewBox="0 0 27.801 32">
                      <path id="Icon_simple-tiktok" data-name="Icon simple-tiktok"
                        d="M16.97.027C18.717,0,20.45.013,22.183,0a8.3,8.3,0,0,0,2.333,5.56A9.4,9.4,0,0,0,30.17,7.947V13.32a14.272,14.272,0,0,1-5.6-1.293,16.474,16.474,0,0,1-2.16-1.24c-.013,3.893.013,7.787-.027,11.667a10.184,10.184,0,0,1-1.8,5.253,9.934,9.934,0,0,1-7.88,4.28,9.722,9.722,0,0,1-5.44-1.373A10.055,10.055,0,0,1,2.4,23c-.027-.667-.04-1.333-.013-1.987a10.038,10.038,0,0,1,11.64-8.907c.027,1.973-.053,3.947-.053,5.92a4.575,4.575,0,0,0-5.84,2.827A5.289,5.289,0,0,0,7.943,23a4.538,4.538,0,0,0,4.667,3.827A4.479,4.479,0,0,0,16.3,24.68a3.076,3.076,0,0,0,.547-1.413c.133-2.387.08-4.76.093-7.147.013-5.373-.013-10.733.027-16.093Z"
                        transform="translate(-2.369)" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36.001" height="29.26" viewBox="0 0 36.001 29.26">
                      <path id="Icon_simple-twitter" data-name="Icon simple-twitter"
                        d="M35.931,6.853a15,15,0,0,1-4.237,1.162,7.437,7.437,0,0,0,3.244-4.084,15.244,15.244,0,0,1-4.691,1.776,7.378,7.378,0,0,0-12.767,5.037,7.552,7.552,0,0,0,.191,1.686A20.9,20.9,0,0,1,2.46,4.741a7.233,7.233,0,0,0-1,3.713A7.381,7.381,0,0,0,4.743,14.6,7.357,7.357,0,0,1,1.4,13.674v.092a7.384,7.384,0,0,0,5.919,7.24A7.448,7.448,0,0,1,4,21.134a7.4,7.4,0,0,0,6.906,5.125,14.8,14.8,0,0,1-9.153,3.157A15.665,15.665,0,0,1,0,29.316,20.993,20.993,0,0,0,11.336,32.63c13.581,0,21-11.244,21-20.979,0-.314,0-.63-.022-.945A14.9,14.9,0,0,0,36,6.884l-.07-.03Z"
                        transform="translate(0 -3.369)" fill="#fff" />
                    </svg>
                  </a>
                </li>
                <li>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30.094" height="31.5" viewBox="0 0 30.094 31.5">
                    <path id="Icon_awesome-twitch" data-name="Icon awesome-twitch"
                      d="M2.82,2.25.7,7.657v22.1H8.227V33.75h4.233l3.994-3.994H22.57L30.8,21.53V2.25ZM27.977,20.116l-4.7,4.7H15.75l-3.994,3.994V24.82H5.407V5.07h22.57V20.116Zm-4.7-9.64V18.7h-2.82v-8.22Zm-7.523,0V18.7H12.93v-8.22Z"
                      transform="translate(-0.703 -2.25)" fill="#fff" />
                  </svg>
                </li>
              </ul>
  
            </section>
  
            <section class="profile-tab-section">
  
              <ul class="profile-links">
                <li>
                  <a href="#">This is a link</a>
                </li>
                <li>
                  <a href="#">This is a link</a>
                </li>
                <li>
                  <a href="#">This is a link</a>
                </li>
                <li>
                  <a href="#">This is a link</a>
                </li>
              </ul>
            </section>
  
  
          </Tab>
          <Tab :title='`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
  </svg>
  `'>
  
  <section class="profile-tab-section">
  <p>         Morbi posuere, mauris eu vehicula tempor, nibh orci consectetur tortor, id eleifend dolor sapien ut augue.</p>
    </section>
   
          </Tab>
        </Tabs>
  
      </div>
  
    </div>
  
  
  </template>
  
  <style>
    /* #grad1 *:nth-child(1) {
    stop-color: #9f6cff!important;
  }
  
  #grad1 *:nth-child(2) {
    stop-color: #ff0aaa!important;
  }
  
  #grad1 *:nth-child(3) {
    stop-color: #ff6ccc!important;
  } */
  
  
  
    #grad1 *:nth-child(1),
    #grad1 *:nth-child(2),
    #grad1 *:nth-child(3) {
      stop-color: #fff !important;
    }
  
  
    .profile-tabs {
      color: white;
      font-size: 0.9rem;
    }
  
    .profile-tab-section {
      padding: 20px
    }
  
    .profile-hero {
      padding: 20px 40px;
    }
  
    .profile-hero-name-row {
      display: flex;
      align-items: center;
      flex-direction: column;
  
    }
  
    .profile-hero-display_name {
      color: white;
      font-size: 1.4rem;
      margin-bottom: 10px;
    }
  
    .profile-hero-bio {
      color: #ccc;
      font-size: 0.9rem;
    }
  
  
  
  
  
  
  
  
    .profile-hero-image-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
  
    .profile-hero-icon svg {
      height: 32px;
      color: white;
  
    }
  
  
    .profile-hero-image {
      display: inline-block;
      position: relative;
      width: 150px;
      height: 150px;
      background: white;
      clip-path: polygon(100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, 0.9% 75.4%, 0.7% 74.6%, 0.6% 73.7%, 0.5% 72.8%, 0.5% 71.8%, 0.4% 70.8%, 0.3% 69.8%, 0.2% 68.7%, 0.2% 67.5%, 0.1% 66.2%, 0.1% 64.8%, 0.1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, 0.1% 36.8%, 0.1% 35.2%, 0.1% 33.8%, 0.2% 32.5%, 0.2% 31.3%, 0.3% 30.2%, 0.4% 29.2%, 0.5% 28.2%, 0.5% 27.2%, 0.6% 26.3%, 0.7% 25.4%, 0.9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% 0.9%, 25.4% 0.7%, 26.3% 0.6%, 27.2% 0.5%, 28.2% 0.5%, 29.2% 0.4%, 30.2% 0.3%, 31.3% 0.2%, 32.5% 0.2%, 33.8% 0.1%, 35.2% 0.1%, 36.8% 0.1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% 0.1%, 64.8% 0.1%, 66.2% 0.1%, 67.5% 0.2%, 68.7% 0.2%, 69.8% 0.3%, 70.8% 0.4%, 71.8% 0.5%, 72.8% 0.5%, 73.7% 0.6%, 74.6% 0.7%, 75.4% 0.9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4%);
    }
  
    .profile-hero-image img {
      position: absolute;
      top: 2px;
      /* equal to border thickness */
      left: 2px;
      /* equal to border thickness */
      width: 146px;
      /* container height - (border thickness * 2) */
      height: 146px;
      /* container height - (border thickness * 2) */
      clip-path: polygon(100% 50%, 100% 56.6%, 100% 59.3%, 100% 61.4%, 99.9% 63.2%, 99.9% 64.8%, 99.9% 66.2%, 99.8% 67.5%, 99.8% 68.7%, 99.7% 69.8%, 99.6% 70.8%, 99.5% 71.8%, 99.5% 72.8%, 99.4% 73.7%, 99.3% 74.6%, 99.1% 75.4%, 99% 76.3%, 98.9% 77%, 98.8% 77.8%, 98.6% 78.5%, 98.5% 79.2%, 98.3% 79.9%, 98.1% 80.6%, 98% 81.3%, 97.8% 81.9%, 97.6% 82.5%, 97.4% 83.1%, 97.2% 83.7%, 97% 84.3%, 96.8% 84.8%, 96.5% 85.4%, 96.3% 85.9%, 96% 86.4%, 95.8% 86.9%, 95.5% 87.4%, 95.3% 87.9%, 95% 88.3%, 94.7% 88.8%, 94.4% 89.2%, 94.1% 89.7%, 93.8% 90.1%, 93.4% 90.5%, 93.1% 90.9%, 92.8% 91.3%, 92.4% 91.7%, 92% 92%, 91.7% 92.4%, 91.3% 92.8%, 90.9% 93.1%, 90.5% 93.4%, 90.1% 93.8%, 89.7% 94.1%, 89.2% 94.4%, 88.8% 94.7%, 88.3% 95%, 87.9% 95.3%, 87.4% 95.5%, 86.9% 95.8%, 86.4% 96%, 85.9% 96.3%, 85.4% 96.5%, 84.8% 96.8%, 84.3% 97%, 83.7% 97.2%, 83.1% 97.4%, 82.5% 97.6%, 81.9% 97.8%, 81.3% 98%, 80.6% 98.1%, 79.9% 98.3%, 79.2% 98.5%, 78.5% 98.6%, 77.8% 98.8%, 77% 98.9%, 76.3% 99%, 75.4% 99.1%, 74.6% 99.3%, 73.7% 99.4%, 72.8% 99.5%, 71.8% 99.5%, 70.8% 99.6%, 69.8% 99.7%, 68.7% 99.8%, 67.5% 99.8%, 66.2% 99.9%, 64.8% 99.9%, 63.2% 99.9%, 61.4% 100%, 59.3% 100%, 56.6% 100%, 50% 100%, 43.4% 100%, 40.7% 100%, 38.6% 100%, 36.8% 99.9%, 35.2% 99.9%, 33.8% 99.9%, 32.5% 99.8%, 31.3% 99.8%, 30.2% 99.7%, 29.2% 99.6%, 28.2% 99.5%, 27.2% 99.5%, 26.3% 99.4%, 25.4% 99.3%, 24.6% 99.1%, 23.7% 99%, 23% 98.9%, 22.2% 98.8%, 21.5% 98.6%, 20.8% 98.5%, 20.1% 98.3%, 19.4% 98.1%, 18.7% 98%, 18.1% 97.8%, 17.5% 97.6%, 16.9% 97.4%, 16.3% 97.2%, 15.7% 97%, 15.2% 96.8%, 14.6% 96.5%, 14.1% 96.3%, 13.6% 96%, 13.1% 95.8%, 12.6% 95.5%, 12.1% 95.3%, 11.7% 95%, 11.2% 94.7%, 10.8% 94.4%, 10.3% 94.1%, 9.9% 93.8%, 9.5% 93.4%, 9.1% 93.1%, 8.7% 92.8%, 8.3% 92.4%, 8% 92%, 7.6% 91.7%, 7.2% 91.3%, 6.9% 90.9%, 6.6% 90.5%, 6.2% 90.1%, 5.9% 89.7%, 5.6% 89.2%, 5.3% 88.8%, 5% 88.3%, 4.7% 87.9%, 4.5% 87.4%, 4.2% 86.9%, 4% 86.4%, 3.7% 85.9%, 3.5% 85.4%, 3.2% 84.8%, 3% 84.3%, 2.8% 83.7%, 2.6% 83.1%, 2.4% 82.5%, 2.2% 81.9%, 2% 81.3%, 1.9% 80.6%, 1.7% 79.9%, 1.5% 79.2%, 1.4% 78.5%, 1.2% 77.8%, 1.1% 77%, 1% 76.3%, 0.9% 75.4%, 0.7% 74.6%, 0.6% 73.7%, 0.5% 72.8%, 0.5% 71.8%, 0.4% 70.8%, 0.3% 69.8%, 0.2% 68.7%, 0.2% 67.5%, 0.1% 66.2%, 0.1% 64.8%, 0.1% 63.2%, 0% 61.4%, 0% 59.3%, 0% 56.6%, 0% 50%, 0% 43.4%, 0% 40.7%, 0% 38.6%, 0.1% 36.8%, 0.1% 35.2%, 0.1% 33.8%, 0.2% 32.5%, 0.2% 31.3%, 0.3% 30.2%, 0.4% 29.2%, 0.5% 28.2%, 0.5% 27.2%, 0.6% 26.3%, 0.7% 25.4%, 0.9% 24.6%, 1% 23.7%, 1.1% 23%, 1.2% 22.2%, 1.4% 21.5%, 1.5% 20.8%, 1.7% 20.1%, 1.9% 19.4%, 2% 18.7%, 2.2% 18.1%, 2.4% 17.5%, 2.6% 16.9%, 2.8% 16.3%, 3% 15.7%, 3.2% 15.2%, 3.5% 14.6%, 3.7% 14.1%, 4% 13.6%, 4.2% 13.1%, 4.5% 12.6%, 4.7% 12.1%, 5% 11.7%, 5.3% 11.2%, 5.6% 10.8%, 5.9% 10.3%, 6.2% 9.9%, 6.6% 9.5%, 6.9% 9.1%, 7.2% 8.7%, 7.6% 8.3%, 8% 8%, 8.3% 7.6%, 8.7% 7.2%, 9.1% 6.9%, 9.5% 6.6%, 9.9% 6.2%, 10.3% 5.9%, 10.8% 5.6%, 11.2% 5.3%, 11.7% 5%, 12.1% 4.7%, 12.6% 4.5%, 13.1% 4.2%, 13.6% 4%, 14.1% 3.7%, 14.6% 3.5%, 15.2% 3.2%, 15.7% 3%, 16.3% 2.8%, 16.9% 2.6%, 17.5% 2.4%, 18.1% 2.2%, 18.7% 2%, 19.4% 1.9%, 20.1% 1.7%, 20.8% 1.5%, 21.5% 1.4%, 22.2% 1.2%, 23% 1.1%, 23.7% 1%, 24.6% 0.9%, 25.4% 0.7%, 26.3% 0.6%, 27.2% 0.5%, 28.2% 0.5%, 29.2% 0.4%, 30.2% 0.3%, 31.3% 0.2%, 32.5% 0.2%, 33.8% 0.1%, 35.2% 0.1%, 36.8% 0.1%, 38.6% 0%, 40.7% 0%, 43.4% 0%, 50% 0%, 56.6% 0%, 59.3% 0%, 61.4% 0%, 63.2% 0.1%, 64.8% 0.1%, 66.2% 0.1%, 67.5% 0.2%, 68.7% 0.2%, 69.8% 0.3%, 70.8% 0.4%, 71.8% 0.5%, 72.8% 0.5%, 73.7% 0.6%, 74.6% 0.7%, 75.4% 0.9%, 76.3% 1%, 77% 1.1%, 77.8% 1.2%, 78.5% 1.4%, 79.2% 1.5%, 79.9% 1.7%, 80.6% 1.9%, 81.3% 2%, 81.9% 2.2%, 82.5% 2.4%, 83.1% 2.6%, 83.7% 2.8%, 84.3% 3%, 84.8% 3.2%, 85.4% 3.5%, 85.9% 3.7%, 86.4% 4%, 86.9% 4.2%, 87.4% 4.5%, 87.9% 4.7%, 88.3% 5%, 88.8% 5.3%, 89.2% 5.6%, 89.7% 5.9%, 90.1% 6.2%, 90.5% 6.6%, 90.9% 6.9%, 91.3% 7.2%, 91.7% 7.6%, 92% 8%, 92.4% 8.3%, 92.8% 8.7%, 93.1% 9.1%, 93.4% 9.5%, 93.8% 9.9%, 94.1% 10.3%, 94.4% 10.8%, 94.7% 11.2%, 95% 11.7%, 95.3% 12.1%, 95.5% 12.6%, 95.8% 13.1%, 96% 13.6%, 96.3% 14.1%, 96.5% 14.6%, 96.8% 15.2%, 97% 15.7%, 97.2% 16.3%, 97.4% 16.9%, 97.6% 17.5%, 97.8% 18.1%, 98% 18.7%, 98.1% 19.4%, 98.3% 20.1%, 98.5% 20.8%, 98.6% 21.5%, 98.8% 22.2%, 98.9% 23%, 99% 23.7%, 99.1% 24.6%, 99.3% 25.4%, 99.4% 26.3%, 99.5% 27.2%, 99.5% 28.2%, 99.6% 29.2%, 99.7% 30.2%, 99.8% 31.3%, 99.8% 32.5%, 99.9% 33.8%, 99.9% 35.2%, 99.9% 36.8%, 100% 38.6%, 100% 40.7%, 100% 43.4%);
    }
  
  
  
    .profile-socials {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }
  
    .profile-links li {
  margin-bottom: 15px;
  color: var(--primary);
    }
  
    .profile-links li a {
  display:block;
  text-align: center;
  text-decoration: none;
  color: var(--primary);
  padding:15px;
  border: 1px solid var(--primary);
  border-radius: 10rem;
    }
  
  </style>



  <script setup>

    import Tabs from '/components/Tabs.vue'
    import Tab from '/components/Tab.vue'
    // import jsonData1 from '~/static/json/profile-1.json'
    // import jsonData2 from '~/static/json/profile-2.json'
    
      // const profile = ref(jsonData1)

    // const { id } = useRoute().params

    const { id } = useRoute().params

    const profile = ref([])
    const error = ref(null)
  
    const load = async () => {
        try {
            // let data = await fetch('https://www.flames.agency/api/' +id+'.json')
            // https://www.flames.agency/api/profile-1.json
            let data = await fetch('https://heroic-conkies-a5985e.netlify.app/public/json/'+id+'.json')
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profile.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }
    load()

/*    
    const load = async () => {
        try {
            // const jsonData = require(`~/static/json/${id}.json`)
            const jsonData = require(`~/static/json/profile-1.json`)
            // let data = await fetch('http://localhost:10009/wp-json/data/v1/profiles/'+id)
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profile.value = jsonData
        } catch (err) {
            error.value = err.message
        }
    }
    load()
*/

      // let data = await fetch('https://www.flames.agency/api/' +id+'.json')
            // https://www.flames.agency/api/profile-1.json
            // let data = await fetch('../../../static/json/'+id+'.json/')
    


/*
    const load = async () => {
    try {
        const profile = jsonData // <-- Replace this line
        if (!data.ok) {
            throw Error('Throw error. No data available.')
        }
        profile.value = await data.json()
    } catch (err) {
        error.value = err.message
    }
}
*/


/*
const profile = ref([])
    const error = ref(null)
  
    const load = async () => {
        try {
            // let data = await fetch('https://www.flames.agency/api/' +id+'.json')
            // https://www.flames.agency/api/profile-1.json
            let data = await fetch('~/static/json/'+id+'.json')
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profile.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }
    load()
*/


/*
    const profile = ref([])
    const error = ref(null)
  
    const load = async () => {
        try {
            // let data = await fetch('https://www.flames.agency/api/' +id+'.json')
            // https://www.flames.agency/api/profile-1.json
            let data = await fetch('http://localhost:10009/wp-json/data/v1/profiles/'+id)
            if (!data.ok) {
                throw Error('Throw error. No data available.')
            }
            profile.value = await data.json()
        } catch (err) {
            error.value = err.message
        }
    }
    load()
  */

    

  /*
    const {
      id
    } = useRoute().params
  
    const uri = 'http://localhost:10009/wp-json/data/v1/profiles/' + id
  
    // Fetch poduct
    const {
      data: profile
    } = await useFetch(uri, {
      key: id
    })
    */
  </script>
  
  <style>
    .grid-3 {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 2px;
      width: 100%;
    }
  
    .grid-3 figure {
      width: 100%;
      aspect-ratio: 4 / 5;
      margin: 0;
      padding: 0;
    }
  
    .grid-3 img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      margin: 0;
      padding: 0;
      display: block;
    }
  </style>