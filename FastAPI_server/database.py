from pymongo import MongoClient
import os
from dotenv import load_dotenv
load_dotenv()
client = MongoClient(os.getenv("MONGO_URL"))
#create a database in mongodb
db=client["vignan"]
#create a collection in vignanpage
student_collection=db["student"]
staff_collection=db["staff"]