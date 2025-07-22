<template>
    <v-app>
        <v-main class="flex-grow-1">
            <v-container class="fill-height d-flex justify-center align-center">
                <v-row class="100" justify="center" align="center">
                    <v-col cols="10" sm="10" md="8" lg="6" xl="4">
                        <v-card elevation="4" class="pa-6 gradient-border" style="border-radius: 20px;">
                            <v-card-title class="text-h5" align="center">
                                <v-img
                                        src="/images/user.png"
                                        alt="refund"
                                        max-height="100"
                                        max-width="80"
                                        class="mx-auto"
                                        contain>
                                    </v-img>
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field
                                        variant="solo"
                                        v-model="User"
                                        label="User" required
                                        prepend-inner-icon="mdi-account"
                                        >
                                    </v-text-field>
                                    <v-text-field
                                        variant="solo"
                                        v-model="Phone"
                                        label="Phone" required
                                        prepend-inner-icon="mdi-phone"
                                        >
                                    </v-text-field>
                                    <v-text-field
                                        variant="solo"
                                        v-model="Password"
                                        label="Password" required
                                        prepend-inner-icon="mdi-lock"
                                        >
                                    </v-text-field>
                                    <a href="/">
                                        <v-btn
                                            class="mb-2"
                                            variant="plain"
                                            color="white">
                                            Sign up
                                        </v-btn>
                                    </a>
                                    <a href="/component">
                                        <v-btn
                                            class="mb-2"
                                            variant="plain"
                                            color="white">
                                            Register
                                        </v-btn>
                                    </a>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
        <div class="circle-decorations">
            <div class="circle left"></div>
            <div class="circle center"></div>
            <div class="circle right"></div>
        </div>
    </v-app>
</template>
<script>
    export default {
        name: 'Register',
        data() {
            return {
            };
        },
    };
</script>

<style scoped>
    .gradient-border{
        background: linear-gradient(90deg, #FF006F, #990043);
        padding: 2px;
    }

   .circle-decorations {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 180px;
        pointer-events: none;
        overflow: hidden;
        z-index: 0;
    }

    .circle {
        position: absolute;
        bottom: -80px;
        border-radius: 50%;
        background: linear-gradient(to bottom, #FF006F, #990043);
    }

    /* Círculo izquierdo */
    .circle.left {
        width: 190px;
        height: 190px;
        left: -40px;
    }

    /* Círculo central */
    .circle.center {
        width: 220px;
        height: 220px;
        left: calc(20% - 5px);
        transform: translateX(-50%);
    }

    /* Círculo derecho */
    .circle.right {
        width: 250px;
        height: 250px;
        right: -60px;
    }

    .v-main {
        position: relative;
    }

    @keyframes circleEnter {
        0% {
            opacity: 0;
            transform: scale(0.5) translateY(100px);
        }
        100% {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }

    .circle {
        animation: circleEnter 1s ease-out forwards;
    }

    /* Puedes agregar distintos delays para que aparezcan en cascada */
    .circle.left {
        animation-delay: 0.1s;
    }

    .circle.center {
        animation-delay: 0.3s;
    }

    .circle.right {
        animation-delay: 0.5s;
    }


</style>

