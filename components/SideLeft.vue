<template>

  <div class="sidebar side-sticky">
    <section class="side-left sidenav">

      <NuxtLink to="/">
        <img
          src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-agency-icon-large.png?fit=640%2C640&ssl=1"
          class="sidenav-logo">
        <!-- <img src="https://i0.wp.com/www.flames.agency/wp-content/uploads/flames-logo-horizontal-white.png?h=100"
                      class="sidenav-logo"> -->
      </NuxtLink>

      <ul class="sidenav-menu">

        <li class="sidenav-item">
          <router-link to="/">
            <span v-if="$route.path == '/'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path
                  d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </span>
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
            </span>
            Profiles (New)
          </router-link>
        </li>

        <li class="sidenav-item">
          <NuxtLink to="/favorites">
            <span v-if="$route.path == '/favorites'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </span>
            Favorites
          </NuxtLink>
        </li>

        <li class="sidenav-item">
          <NuxtLink to="/profiles">
            <span v-if="$route.path == '/profiles'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </span>
            Profiles (Old)
          </NuxtLink>
        </li>

        <li class="sidenav-item">
          <NuxtLink to="/profiles/profile-1/">
            <span v-if="$route.path == '/profiles/profile-1/'">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                <path
                  d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </span>
            <span v-else>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </span>
            Single Profile
          </NuxtLink>
        </li>


      </ul>

    </section>
  </div>



</template>



<style scoped>
  @media screen and (max-width: 768px) {
    .sidenav {
      display: none !important;
    }
  }

  .sidenav {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 30px;
  }


  .sidenav-logo {
    height: 50px;
    margin-left: 20px;
  }

  .sidenav-menu {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 30px 0;

  }

  .sidenav-item {
    margin-top: 0px;
    display: block;
  }




  .sidenav-item a {
    color: #fff;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    padding: 15px 30px;
    text-decoration: none;
    border-radius: 2rem;
  }


  .sidenav-item:hover a {
    background: #111;
  }


  /* Slightly animate the icon when user hovers */
  .sidenav-item svg {
    transform: scale(1);
    transition: 0.22s ease-out all;
  }

  .sidenav-item:hover svg {
    transform: scale(1.05);
    transition: 0.22s ease-in all;
  }

  .sidenav-item .router-link-active {
    color: #eee;

  }

  .sidenav-item .router-link-active svg {
    animation: beat .22s 1 ease-in-out;
    color: #eee;

  }
  /* Heart beat animation */
  @keyframes beat {
    to {
      transform: scale(1.1);
    }
  }




  /* .router-link-active .sidenav-item.sidenav-item-discover * {
    stroke-width: 0.5px;
    stroke: #ffffff;
  } */


  .sidenav-item svg {
    color: white;
    height: 32px;
    margin-right: 15px;
  }
</style>