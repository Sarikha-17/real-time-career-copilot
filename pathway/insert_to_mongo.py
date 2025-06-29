import json
from pymongo import MongoClient

client = MongoClient("mongodb+srv://sarikha742:sarik@cluster0.zkaiscp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client["career_copilot"]
collection = db["jobs"]

with open("out.jsonl", "r") as file:
    for line in file:
        job = json.loads(line.strip())
        collection.insert_one(job)

print("✅ Job data successfully inserted into MongoDB!")
