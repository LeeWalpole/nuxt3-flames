<template>

    <header class="feed-item-header">
        <div class="feed-item-left">
            <NuxtLink :to="`/profiles/${profile.slug}`">
                <img class="feed-item-mugshot"
                    src="https://64.media.tumblr.com/830cb58659a9dd02f54cd11fc0f21f28/e70c81ce9f956f50-09/s1280x1920/d3faa4cc2fdf0f0131a1b3f2a7a45c4ba856c589.jpg">
            </NuxtLink>
            <NuxtLink :to="`/profiles/${profile.slug}`">
                <div class="feed-item-name">
                    <p class="feed-item-display_name">{{ profile.display_name }}</p>
                    <p class="feed-item-username">@{{ profile.slug }}</p>
                </div>
            </NuxtLink>
        </div>
        <div class="feed-item-right">
            <FeedButtons />
        </div>
    </header>

    <footer class="feed-item-footer">
        <div class="feed-item-bio">{{ profile.bio_mini }}</div>
    </footer>

</template>

<script setup>

const {
        profile
    } = defineProps(['profile'])


</script>


