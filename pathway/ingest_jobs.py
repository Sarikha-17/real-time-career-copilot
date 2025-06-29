import pathway as pw
from pymongo import MongoClient
from datetime import datetime

client = MongoClient("mongodb://localhost:27017/")
db = client["careerCopilot"]
collection = db["jobs"]

@pw.io.table
class InputSchema:
    title: str
    company: str
    location: str
    tags: str
    postedAt: str
    source: str

def to_dict(row):
    return {
        "title": row.title,
        "company": row.company,
        "location": row.location,
        "tags": row.tags.split(","),
        "postedAt": datetime.strptime(row.postedAt, "%Y-%m-%d"),
        "source": row.source
    }

def write_to_mongo(row):
    job = to_dict(row)
    if not collection.find_one(job):
        collection.insert_one(job)

data = pw.io.csv.read("mock_jobs.csv", schema=InputSchema, mode="streaming")
pw.io.python.write(data, write_to_mongo)

pw.run()
