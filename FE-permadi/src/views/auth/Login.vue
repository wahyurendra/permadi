<template>
    <div class="login-page">
        <Toast />
        <div class="login-container">
            <div class="login-box">
                <div class="logo-container">
                    <img src="/layout/images/permadi-logo-black.png" alt="Permadi Logo" class="permadi-logo"/>
                </div>
                <h2 class="welcome-text">Welcome to Permadi</h2>
                <form @submit.prevent="handleLogin">
                    <div class="field">
                        <label for="email">Email</label>
                        <InputText 
                            id="email" 
                            v-model="email" 
                            class="w-full custom-input" 
                            placeholder="Enter your email"
                            :class="{'p-invalid': (submitted && !email) || (submitted && !isEmailValid)}"
                        />
                        <small class="p-error" v-if="submitted && !email">Email is required</small>
                        <small class="p-error" v-if="submitted && email && !isEmailValid">Please enter a valid email address</small>
                    </div>

                    <div class="field">
                        <label for="password">Password</label>
                        <Password 
                            id="password" 
                            v-model="password" 
                            :feedback="false"
                            toggleMask 
                            placeholder="Enter your password"
                            class="w-full custom-input"
                            :class="{'p-invalid': submitted && !password}"
                        />
                        <small class="p-error" v-if="submitted && !password">Password is required</small>
                    </div>

                    <div class="flex align-items-center justify-content-between mb-4">
                        <div class="remember-me">
                            <Checkbox v-model="rememberMe" id="rememberme" :binary="true" />
                            <label for="rememberme" class="ml-2">Remember me</label>
                        </div>
                    </div>
                    
                    <Button label="Sign In" type="submit" class="w-full login-button" />
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        return { router };
    },
    data() {
        return {
            email: '',
            password: '',
            logindata: {},
            rememberMe: false,
            submitted: false,
            baseUrl: 'http://127.0.0.1:5000/api/v1',
            emailRegex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
        }
    },
    computed: {
        isEmailValid() {
            return this.emailRegex.test(this.email);
        }
    },
    methods: {
        async handleLogin() {
            this.submitted = true;

            if (this.email && this.password && this.isEmailValid) {
                try {
                    this.logindata = {
                        email: this.email,
                        password: this.password
                    }
                    const response = await axios.post(`${this.baseUrl}/login`,this.logindata,{
                        headers: { 
                            'Content-Type': 'application/json'
                        }
                    });

                    const token = response.data.token;

                    if (this.rememberMe) {
                        localStorage.setItem('token', token);
                    } else {
                        sessionStorage.setItem('token', token);
                    }

                    const userResponse = await axios.get(`${this.baseUrl}/account`, {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        }
                    });

                    localStorage.setItem('userData', JSON.stringify(userResponse.data));

                    this.router.push('/dashboard');

                } catch (error) {
                    this.$toast.add({
                        severity: 'error',
                        summary: 'Login Failed',
                        detail: error.response?.data?.message || 'Invalid credentials',
                        life: 3000
                    });
                }
            } else if (!this.isEmailValid) {
                this.$toast.add({
                    severity: 'error',
                    summary: 'Invalid Email',
                    detail: 'Please enter a valid email address',
                    life: 3000
                });
            }
        }    
    }
}
</script>
<style scoped>
.login-page {
    height: 100vh;
    background: var(--surface-ground);
    display: flex;
    align-items: center;
    justify-content: center;
}

.login-container {
    width: 100%;
    max-width: 400px;
    padding: 0 2rem;
}

.login-box {
    background: var(--surface-card);
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0px 3px 5px rgba(0,0,0,.02), 0px 0px 2px rgba(0,0,0,.05), 0px 1px 4px rgba(0,0,0,.08);
}

.logo-container {
    text-align: center;
    margin-bottom: 1.5rem;
}

.permadi-logo {
    height: 60px;
    width: auto;
}

.welcome-text {
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 2rem;
}

.field {
    margin-bottom: 1.5rem;
}

label {
    display: block;
    margin-bottom: 0.5rem;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: var(--text-color);
}

.custom-input {
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
}

.custom-input:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
}

.remember-me {
    display: flex;
    align-items: center;
}

.login-button {
    height: 3rem;
    font-weight: 600;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
}
</style>
