from rest_framework import pagination


class PaginationType1(pagination.PageNumberPagination):
    page_size = 10
