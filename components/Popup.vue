<template>

    <aside class="modal">
        <section class="modal-box popup-1">
            <div class="popup-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="url(#gradient-horizontal)" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <!--Begin Apple Gradient-->
                    <!--End Apple Gradient-->
                    <path stroke="url(#svg-gradient)" stroke-linecap="round" stroke-linejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    <defs>
                        <linearGradient id="svg-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="var(--color-stop-1)" />
                            <stop offset="50%" stop-color="var(--color-stop-2)" />
                            <stop offset="100%" stop-color="var(--color-stop-3)" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <header class="popup-header">
                <h5 class="popup-title">{{popupTitle}}</h5>
                <p class="popup-description">{{popupText}}</p>
            </header>
            <!-- <slot /> -->
        </section>
        <p @click="closeModal" class="popup-close">Go back</p>
        <span class="bg-modal" @click="closeModal"></span>
    </aside>


</template>

<script>
    export default {
        props: ['popupTitle', 'popupText'],

        methods: {
            closeModal() {
                this.$emit('close')
            }

        }
    }
</script>



<style>
    .modal {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 25px;
    }

    .bg-modal {
        background: black;
        opacity: 0.1;
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 2;
    }

    .modal-box {
        background: black;
        opacity: 1;
        position: relative;
        padding: 50px 25px;
        z-index: 3;
        border:1px solid #222;
        border-radius: 2rem;

    }

    .buttons {
        display: grid;
        grid-template-columns: auto auto;
        gap: 10px;
    }

    .popup-close {
font-size:.9rem;
color:var(--grey);
margin-top:10px;
text-transform: uppercase;
    }

.bg-modal:hover .popup-close {
color:red!important;

    }

</style>