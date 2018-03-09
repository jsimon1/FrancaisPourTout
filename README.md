Welcome to JouezFrancais! Developed by Jeremy Simon and Ben Gruber

This application is intended to give the user a dynamic approach to learning French. From strictly doing verb conjugations to practicing certain tenses to simply practicing voacbulary, ones daily lessons in French can be totally flexible.

Current notes about the file directory:
topverbs.csv - & is to say that a verb can be either description, will be compiled down into multiple translations in the database, paranthesis for translations () contain notes for the description and are not considered in the application, but will still be shown as a translation. However, (s') in the french verb typically denotes a reflexive verb.

install.js - Uses (sources #2) to grab the data. Reflexive verbs will have both their original and reflexive conjugations saved. They will have references to each other in the database and the reflexive verb will have an explicit flag for being reflexive. Relies on explorer module for crawling the page

explorer.js - Utility functions for webcrawling, separate from install.js which is for interacting with Mongo

src/wireframes - Lo-fi mockup of user interface designs

src - What is to become the JouezFrancais User Interface

server - Contains models and controllers that define the API
       - Authentication with bcrypt



Sources:
1. http://www.dudziak.com/ - Top French Verbs
2. http://conjugator.reverso.net/conjugation-english.html - Conjugation database
