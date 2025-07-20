<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-img
                                src="https://via.placeholder.com/400"
                                height="200px"
                            ></v-img>
                            <v-card-title>
                                Welcome to Your Vue.js App
                            </v-card-title>
                            <v-card-text>
                                <v-form>
                                    <v-text-field label="Name" required></v-text-field>
                                    <v-text-field label="Email" required></v-text-field>
                                    <v-btn type="submit">Submit</v-btn>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>
