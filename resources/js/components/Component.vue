<template>
    <v-app>
        <v-card
            class="mx-auto"
            style="margin-bottom: 64px;"
            width="400"
        >
            <template v-slot:title>
                <v-avatar color="#FF006F">
                    <v-icon icon="mdi-account-circle"></v-icon>
                </v-avatar>
                <span class="text-h5 ml-2">User</span>
                <span class="text-h5 ml-2">$30.00</span>
            </template>

            <v-card-text class="bg-surface-light pt-4" style="background: linear-gradient(90deg, #FF006F, #990043);" :elevation="0">
                <v-btn variant="outlined" color="white" class="mr-4">
                    Deposito
                </v-btn>
                <v-btn variant="outlined" color="white" class="ml-2">
                    Retirar
                </v-btn>
            </v-card-text>
        </v-card>
        <v-layout class="overflow-visible" style="position: fixed; bottom: 0; left: 0; right: 0; height: 56px; z-index: 1000;">
            <v-bottom-navigation
            v-model="value"
            :bg-color="color"
            mode="shift"
            >
                <v-btn>
                    <v-icon>mdi-home</v-icon>
                    <span>Home</span>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-cash</v-icon>
                    <span>Money</span>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-format-list-checkbox</v-icon>
                    <span>Works</span>
                </v-btn>
                <v-btn>
                    <v-icon>mdi-account</v-icon>
                    <span>Account</span>
                </v-btn>
            </v-bottom-navigation>
        </v-layout>
    </v-app>
</template>
<script>
    import { computed, ref } from 'vue'

    const value = ref(1)
    const color = computed(() => {
        switch (value.value) {
        case 0: return '#FF006F'
        case 1: return '#990043'
        case 2: return '#FF006F'
        case 3: return '#990043'
        default: return '#FF006F'
        }
    });
    export default {
        name: 'Component',
        data() {
            return {
                value,
                color
            };
        },
    };
</script>
