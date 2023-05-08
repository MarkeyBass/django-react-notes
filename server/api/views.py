from django.shortcuts import render
# from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Note
from .serializers import NoteSerializer
from .controllers.notes import updateNote, getNoteDetail, deleteNote, getNotesList, createNote



# Create your views here.
@api_view(['GET', 'POST'])
def notesRouter(request):

    if request.method == 'GET':
        return getNotesList(request)

    if request.method == 'POST':
        return createNote(request)


@api_view(['GET', 'PUT', 'DELETE'])
def notesRouterWithId(request, pk):

    if request.method == 'GET':
        return getNoteDetail(request, pk)

    if request.method == 'PUT':
        return updateNote(request, pk)

    if request.method == 'DELETE':
        return deleteNote(request, pk)



# Asside route
# ====================
@api_view(['GET'])
def getRoutes(request):
# safe meanse that we can return more data then python dictionary
    # return JsonResponse('Our API', safe=False)

    # Added different routes for the 
    routes = [
        {
            'Endpoint': '/notes/',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of notes'
        },
        {
            'Endpoint': '/notes/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single note object'
        },
        {
            'Endpoint': '/notes/create/',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Creates new note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/update/',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing note with data sent in post request'
        },
        {
            'Endpoint': '/notes/id/delete/',
            'method': 'DELETE',
            'body': None,
            'description': 'Deletes and exiting note'
        },
    ]

    return Response(routes)


