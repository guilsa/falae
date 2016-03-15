# Falae

A Node-based socket.io chat app.

## About

Objective is mainly to design a chat application and grow it's functionalities. By tinkering with node-inspector I discovered that with socket.io I have access to a `this.id` object during runtime which allowed me to piggyback off of some socketio functionalities to match client and server-side user id and provide notifications for entering/leaving room. Entering emits a userParams object to the server with the socketio id and username. Notification for leaving compares `this.id` to a list of users.

## Ideas

React and phonegap support, decouple front/back-end, data persistence, yoda speak.
