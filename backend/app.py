from fastapi import FastAPI

app = FastAPI()

@app.get("/hello")
def hello():
    return {"message": "Deploying FastAPI with Docker and Oracle Cloud Infrastructure!"}