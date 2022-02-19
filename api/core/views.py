from rest_framework import views, response, status


class TestView(views.APIView):

    def get(self, request):
        return response.Response({"data": [
            {"id": 1, "desc": "Sample 1"},
            {"id": 2, "desc": "Sample 2"},
        ]})
