from locust import HttpUser, task, between
from random import randint
import json

# resp = self.client.post(
#     url="http://someserver",
#     data=json.dumps(data),
#     auth=None,
#     headers={"authorization": "Token " + token_string},
#     name="http://someserver",
# )


class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task(1)
    def view_profiles(self):
        print('View profiles')
        self.client.get('/api/profile/', name='/api/profile')

    @task(3)
    def view_profile(self):
        print('View product details')
        profile_id = 1
        self.client.get(f'/api/profile/{profile_id}/', name='/api/profile/:id')

    def on_start(self):
        data = {"email": "mmmohajer70@gmail.com", "password": "mySuperSecurePassword"}
        response = self.client.post('/api/auth/jwt/create/', data=data)
        result = response.json()
        self.client.headers = {'Authorization': f"JWT {result['access']}"}
